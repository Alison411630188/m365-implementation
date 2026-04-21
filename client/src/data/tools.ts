export interface Tool {
  id: string;
  name: string;
  desc: string;
  color: string;
  bg: string;
  border: string;
  href?: string;
}

export const TOOLS_DATA: Tool[] = [
  { id: "teams", name: "Teams", desc: "溝通協作與會議", color: "text-indigo-500", bg: "bg-indigo-500/10", border: "hover:border-indigo-500/50 hover:shadow-indigo-500/20" },
  { id: "sharepoint", name: "SharePoint", desc: "企業文件與知識庫", color: "text-teal-500", bg: "bg-teal-500/10", border: "hover:border-teal-500/50 hover:shadow-teal-500/20" },
  { id: "planner", name: "Planner", desc: "專案與任務追蹤", color: "text-green-500", bg: "bg-green-500/10", border: "hover:border-green-500/50 hover:shadow-green-500/20" },
  { id: "power-automate", name: "Power Automate", desc: "日常流程自動化", color: "text-blue-500", bg: "bg-blue-500/10", border: "hover:border-blue-500/50 hover:shadow-blue-500/20" },
  { id: "power-bi", name: "Power BI", desc: "互動式數據儀表板", color: "text-yellow-500", bg: "bg-yellow-500/10", border: "hover:border-yellow-500/50 hover:shadow-yellow-500/20" }
];
