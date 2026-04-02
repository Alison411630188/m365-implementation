import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// 搜索內容表 - 存儲所有可搜索的內容
export const searchableContent = mysqlTable("searchable_content", {
  id: int("id").autoincrement().primaryKey(),
  type: mysqlEnum("type", ["tool", "faq", "case"]).notNull(), // 內容類型
  title: text("title").notNull(), // 標題
  description: text("description"), // 簡短描述
  content: text("content"), // 完整內容
  keywords: text("keywords"), // 搜索關鍵詞（逗號分隔）
  relatedId: varchar("relatedId", { length: 64 }), // 關聯的工具/FAQ/案例 ID
  url: varchar("url", { length: 512 }), // 內容鏈接
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SearchableContent = typeof searchableContent.$inferSelect;
export type InsertSearchableContent = typeof searchableContent.$inferInsert;

// TODO: Add your tables here