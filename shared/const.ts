export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;
export const AXIOS_TIMEOUT_MS = 30_000;
export const UNAUTHED_ERR_MSG = 'Please login (10001)';
export const NOT_ADMIN_ERR_MSG = 'You do not have required permission (10002)';

export const M365_TOOLS = [
  {
    id: "planner",
    name: "Planner",
    icon: "📋",
    description: "計劃和追蹤專案進度",
    color: "#FFB900",
  },
  {
    id: "power-automate",
    name: "Power Automate",
    icon: "⚡",
    description: "自動化工作流程和業務流程",
    color: "#0063B1",
  },
  {
    id: "power-bi",
    name: "Power BI",
    icon: "📊",
    description: "資料視覺化和商業智能分析",
    color: "#F2CC1C",
  },
  {
    id: "sharepoint",
    name: "SharePoint",
    icon: "🌐",
    description: "企業內容管理和協作平台",
    color: "#0078D4",
  },
  {
    id: "teams",
    name: "Teams",
    icon: "👥",
    description: "團隊溝通和協作中心",
    color: "#6264A7",
  },
];

export const NAVIGATION_ITEMS = [
  {
    id: "home",
    label: "首頁",
    path: "/",
  },
  {
    id: "handbook",
    label: "M365 使用手冊",
    path: "/handbook",
  },
  {
    id: "cases",
    label: "M365 應用情境案例",
    path: "/cases",
  },
  {
    id: "tools",
    label: "工具說明",
    children: [
      { id: "planner", label: "Planner 說明", path: "/tools/planner" },
      { id: "power-automate", label: "Power Automate 說明", path: "/tools/power-automate" },
      { id: "power-bi", label: "Power BI 說明", path: "/tools/power-bi" },
      { id: "sharepoint", label: "SharePoint 說明", path: "/tools/sharepoint" },
      { id: "teams", label: "Teams 說明", path: "/tools/teams" },
    ],
  },
];
