export interface Announcement {
  date: string;
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
}

/**
 * 重要公告資料 — IT 團隊可直接在此編輯，最新的放最上面。
 */
export const ANNOUNCEMENTS: Announcement[] = [
  {
    date: "2026-06-01",
    tag: "新功能",
    tagColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    title: "Power BI 儀表板教學上線",
    desc: "新增完整的 Power BI 報表設計流程，包含 5 個實戰範本。",
  },
  {
    date: "2026-05-15",
    tag: "系統更新",
    tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    title: "Teams 會議錄製功能說明更新",
    desc: "針對新版 Teams 的錄製與逐字稿功能，已更新操作步驟。",
  },
  {
    date: "2026-04-20",
    tag: "重要公告",
    tagColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    title: "SharePoint 權限申請流程調整",
    desc: "請使用新的申請表單，舊流程將於本月底停用。",
  },
];

export interface DeptProgress {
  dept: string;
  tools: string[];
  percent: number;
  status: "completed" | "in-progress" | "pending";
}

/**
 * 各部門導入進度 — 依實際狀況更新。
 */
export const DEPT_PROGRESS: DeptProgress[] = [
  { dept: "永續辦公室",   tools: ["Teams", "SharePoint", "Planner"],            percent: 100, status: "completed"   },
  { dept: "業務部",       tools: ["Teams", "Power BI"],                          percent: 75,  status: "in-progress" },
  { dept: "資訊部",       tools: ["Teams", "SharePoint", "Power Automate"],      percent: 90,  status: "in-progress" },
  { dept: "人資部",       tools: ["Teams", "Forms", "Planner"],                  percent: 60,  status: "in-progress" },
  { dept: "財務部",       tools: ["Teams", "Power BI", "SharePoint"],            percent: 40,  status: "in-progress" },
  { dept: "行政部",       tools: ["Teams"],                                       percent: 30,  status: "pending"     },
];
