import { Card } from "@/components/ui/card";
import { useRoute } from "wouter";
import { M365_TOOLS } from "@/../../shared/const";
import {
  PlannerIcon,
  PowerAutomateIcon,
  PowerBIIcon,
  SharePointIcon,
  TeamsIcon,
} from "@/components/M365Icons";

interface ToolDetailInfo {
  overview: string;
  whatYouCanDo: string[];
  basicStructure: string[];
}

const toolDetails: Record<string, ToolDetailInfo> = {
  planner: {
    overview: "Planner 是 Microsoft 365 的任務管理工具，適合用來建立計畫、分配工作與追蹤團隊協作進度。",
    whatYouCanDo: ["建立 Plan 計畫", "分配任務給成員", "設定到期日與優先級", "使用看板視圖管理工作流"],
    basicStructure: ["Plan (計畫)", "Bucket (分類貯體)", "Task (任務卡片)"],
  },
  sharepoint: {
    overview: "SharePoint 是企業級內容管理和協作平台，用於存儲、共享和管理組織內的文件與資訊。",
    whatYouCanDo: ["建立小組站台", "管理文件版本", "設置權限控制", "與其他 M365 工具無縫整合"],
    basicStructure: ["Site (網站)", "Document Library (文件庫)", "List (列表)"],
  },
  // 其他工具資料 (Teams, Power Automate 等)...
};

function getToolIcon(toolId: string) {
  switch (toolId) {
    case 'planner': return <PlannerIcon />;
    case 'power-automate': return <PowerAutomateIcon />;
    case 'power-bi': return <PowerBIIcon />;
    case 'sharepoint': return <SharePointIcon />;
    case 'teams': return <TeamsIcon />;
    default: return null;
  }
}

function getM365AppUrl(toolId: string): string {
  const urlMap: Record<string, string> = {
    'planner': 'https://cautious-winner-jjxpw6v7gwj5fpgr4-3000.app.github.dev/',
    'power-automate': 'https://flow.microsoft.com',
    'power-bi': 'https://app.powerbi.com',
    'sharepoint': 'https://www.microsoft.com',
    'teams': 'https://teams.microsoft.com',
  };
  return urlMap[toolId] || 'https://www.microsoft.com';
}

export default function ToolDetail() {
  const [, params] = useRoute("/tools/:toolId");
  const toolId = params?.toolId as string;

  const tool = M365_TOOLS.find((t) => t.id === toolId);
  const details = toolDetails[toolId] || { overview: "", whatYouCanDo: [], basicStructure: [] };

  if (!tool) return <div className="p-12 text-center">工具未找到</div>;

  // 獨立判斷 Planner 與 SharePoint
  const isPlanner = toolId === 'planner';
  const isSharePoint = toolId === 'sharepoint';

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        {/* 工具標題區域 */}
        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex items-start gap-6 mb-6">
            {/* 圖標尺寸微調：Planner (w-14 + 下移), SharePoint (w-16), 其他 (w-20) */}
            <div className={`flex items-center justify-center shrink-0 
              ${isPlanner ? 'w-14 h-14 mt-2' : isSharePoint ? 'w-16 h-16' : 'w-20 h-20'}`}>
              {getToolIcon(toolId)}
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-2">{tool.name}</h1>
              <p className="text-lg text-foreground/70 mb-4">{tool.description}</p>
              
              <a
                href={getM365AppUrl(toolId)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {/* 針對 Planner 修改文字 */}
                {toolId === 'planner' ? '打開 實戰學院' : `打開 ${tool.name}`}
              </a>
            </div>
          </div>
        </div>

        {/* 下方詳細詳細介紹 */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">{tool.name} 概述</h2>
            <Card className="p-8 text-foreground/70 leading-relaxed text-lg">{details.overview}</Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">【核心結構】</h2>
            <Card className="p-8">
              <ul className="space-y-3">
                {details.basicStructure.map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-foreground/70 items-center">
                    <span className="w-2 h-2 bg-primary rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}