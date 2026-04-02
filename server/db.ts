import { eq, like, or } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, searchableContent, SearchableContent } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// 搜索功能
export async function searchContent(query: string, type?: string): Promise<SearchableContent[]> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot search: database not available");
    return [];
  }

  try {
    const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
    const conditions = searchTerms.map(term => 
      or(
        like(searchableContent.title, `%${term}%`),
        like(searchableContent.description, `%${term}%`),
        like(searchableContent.keywords, `%${term}%`),
        like(searchableContent.content, `%${term}%`)
      )
    );

    let queryBuilder: any = db.select().from(searchableContent);
    
    if (type) {
      queryBuilder = queryBuilder.where(eq(searchableContent.type, type as any));
    }

    if (conditions.length > 0) {
      queryBuilder = queryBuilder.where(or(...conditions));
    }

    const results = await queryBuilder.limit(20);
    return results;
  } catch (error) {
    console.error("[Database] Search failed:", error);
    return [];
  }
}

// 初始化搜索內容
export async function initializeSearchContent(): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot initialize search content: database not available");
    return;
  }

  try {
    // 檢查是否已有內容
    const existing = await db.select().from(searchableContent).limit(1);
    if (existing.length > 0) {
      return; // 已初始化
    }

    // 初始化工具說明內容
    const toolsData = [
      {
        type: "tool" as const,
        title: "Microsoft Planner",
        description: "計劃和追蹤專案進度",
        content: "Microsoft Planner 是一個協作任務管理工具，幫助團隊計劃、組織和追蹤工作進度。",
        keywords: "Planner,計劃,任務,專案管理,追蹤",
        relatedId: "planner",
        url: "/tools/planner",
      },
      {
        type: "tool" as const,
        title: "Power Automate",
        description: "自動化工作流程和業務流程",
        content: "Power Automate 是一個流程自動化工具，可以連接應用程式和服務，自動化重複性工作。",
        keywords: "Power Automate,自動化,工作流,流程,RPA",
        relatedId: "power-automate",
        url: "/tools/power-automate",
      },
      {
        type: "tool" as const,
        title: "Power BI",
        description: "資料視覺化和商業智能分析",
        content: "Power BI 是一個商業智能工具，用於資料視覺化、分析和報告。",
        keywords: "Power BI,資料分析,報表,視覺化,BI,商業智能",
        relatedId: "power-bi",
        url: "/tools/power-bi",
      },
      {
        type: "tool" as const,
        title: "SharePoint",
        description: "企業內容管理和協作平台",
        content: "SharePoint 是一個企業內容管理平台，用於文件共享、協作和內容管理。",
        keywords: "SharePoint,文件管理,協作,內容管理,文件共享",
        relatedId: "sharepoint",
        url: "/tools/sharepoint",
      },
      {
        type: "tool" as const,
        title: "Microsoft Teams",
        description: "團隊溝通和協作中心",
        content: "Microsoft Teams 是一個統一的溝通和協作平台，支持聊天、視頻會議和檔案共享。",
        keywords: "Teams,溝通,協作,聊天,視頻會議,會議",
        relatedId: "teams",
        url: "/tools/teams",
      },
    ];

    await db.insert(searchableContent).values(toolsData);
    console.log("[Database] Search content initialized successfully");
  } catch (error) {
    console.error("[Database] Failed to initialize search content:", error);
  }
}

// TODO: add feature queries here as your schema grows.
