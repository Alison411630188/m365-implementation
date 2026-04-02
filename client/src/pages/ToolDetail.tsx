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

/**
 * 工具詳細說明頁面
 * 設計理念：企業級知識庫風格
 * - 工具概述和功能介紹
 * - 你可以用它做什麼
 * - 基本結構
 * - 使用建議
 * - 常用視圖
 * - 適合使用情境
 */

interface ToolDetailInfo {
  overview: string;
  whatYouCanDo: string[];
  basicStructure: string[];
  usageSuggestions: string[];
  commonViews: string[];
  suitableScenarios: string[];
}

const toolDetails: Record<string, ToolDetailInfo> = {
  list: {
    overview:
      "Microsoft Lists 是一個智能信息管理應用程式，幫助團隊跟蹤信息和組織工作。您可以從空白清單開始，或從預製模板創建。",
    whatYouCanDo: [
      "創建自定義清單和視圖",
      "添加多種數據類型（文本、日期、選擇等）",
      "與 Power Automate 集成自動化工作流",
      "使用公式進行計算",
      "設置提醒和通知",
      "與 Excel 同步",
    ],
    basicStructure: [
      "清單：一個信息集合",
      "列：數據字段",
      "行：數據記錄",
      "視圖：不同的數據展示方式",
    ],
    usageSuggestions: [
      "使用視圖來組織和篩選數據",
      "利用公式進行自動計算",
      "設置權限以控制訪問",
      "使用模板節省時間",
      "定期備份重要數據",
    ],
    commonViews: [
      "標準視圖：表格形式查看所有數據",
      "卡片視圖：卡片形式展示詳細信息",
      "日曆視圖：按日期組織信息",
      "甘特圖視圖：查看項目時間線",
    ],
    suitableScenarios: [
      "項目任務跟蹤",
      "資產管理",
      "事件規劃",
      "員工入職清單",
      "客戶反饋收集",
    ],
  },
  loop: {
    overview:
      "Microsoft Loop 是一個新的協作應用程式，提供實時協作和共享工作區。它允許團隊成員在同一空間中進行實時編輯和討論。",
    whatYouCanDo: [
      "實時協作編輯文檔",
      "創建 Loop 工作區進行團隊協作",
      "在 Teams 和 Outlook 中嵌入 Loop 組件",
      "添加評論和提及功能",
      "查看版本歷史記錄",
      "共享工作區給團隊成員",
    ],
    basicStructure: [
      "工作區：協作空間",
      "頁面：工作區內的文檔",
      "Loop 組件：可嵌入的協作元素",
      "評論：討論和反饋",
    ],
    usageSuggestions: [
      "使用 Loop 組件在 Teams 中快速協作",
      "定期保存重要內容",
      "利用版本歷史記錄追蹤更改",
      "使用評論進行結構化討論",
      "與相關人員共享工作區",
    ],
    commonViews: [
      "編輯視圖：實時編輯內容",
      "評論視圖：查看所有反饋",
      "版本歷史：追蹤更改記錄",
      "共享視圖：管理訪問權限",
    ],
    suitableScenarios: [
      "頭腦風暴會議",
      "項目計劃",
      "會議記錄",
      "內容協作",
      "知識共享",
    ],
  },
  planner: {
    overview:
      "Planner 是 Microsoft 365 的任務管理工具，適合用來建立計畫、分配工作、追蹤進度與團隊協作。",
    whatYouCanDo: [
      "建立 Plan（計畫）",
      "建立 Task（任務）",
      "用 Bucket 分類任務",
      "指派任務給成員",
      "設定日期、優先順序與進度",
      "用 Board、Grid、Charts、Calendar / Schedule 查看工作狀態",
      "在 Teams 中直接管理任務",
    ],
    basicStructure: [
      "Plan：一個專案或一組工作",
      "Bucket：任務分類",
      "Task：實際要做的工作項目",
    ],
    usageSuggestions: [
      "任務名稱要具體清楚",
      "每個任務都要有負責人",
      "每個任務都應設定到期日",
      "任務太大就拆小",
      "每週至少更新一次狀態",
      "團隊協作建議搭配 Teams 使用",
    ],
    commonViews: [
      "Grid：看清單、快速編修",
      "Board：看板式追蹤進度",
      "Charts：看整體進度與工作分布",
      "Calendar / Schedule：看日期與排程",
    ],
    suitableScenarios: [
      "專案進度管理",
      "活動籌備分工",
      "部門例行工作追蹤",
      "跨部門任務協作",
    ],
  },
  "power-automate": {
    overview:
      "Microsoft Power Automate 是一個自動化工具，允許您創建自動化工作流程而無需編寫代碼。它可以連接數百個應用程式。",
    whatYouCanDo: [
      "創建自動化工作流程",
      "連接多個應用程式",
      "設置條件邏輯和分支",
      "使用預製模板",
      "監控和分析流程",
      "支持雲端和本地應用程式",
    ],
    basicStructure: [
      "觸發器：啟動流程的事件",
      "操作：流程執行的步驟",
      "條件：邏輯判斷",
      "流程：完整的自動化工作流",
    ],
    usageSuggestions: [
      "從模板開始以加快開發",
      "使用表達式進行高級邏輯",
      "定期監控流程執行",
      "使用錯誤處理確保可靠性",
      "文檔化流程邏輯",
    ],
    commonViews: [
      "流程設計器：構建流程",
      "執行歷史：查看運行記錄",
      "分析視圖：監控性能",
      "模板庫：查找預製流程",
    ],
    suitableScenarios: [
      "自動化批准流程",
      "數據同步",
      "通知和提醒",
      "文件管理自動化",
      "社交媒體集成",
    ],
  },
  "power-bi": {
    overview:
      "Microsoft Power BI 是一個商業智能工具，幫助您可視化和分析數據。它可以連接多個數據源並創建交互式報告。",
    whatYouCanDo: [
      "連接多個數據源",
      "創建交互式儀表板",
      "實時數據刷新",
      "進行高級分析和預測",
      "共享報告和儀表板",
      "使用移動應用程式",
    ],
    basicStructure: [
      "數據源：連接的數據",
      "模型：數據關係和計算",
      "報告：可視化和分析",
      "儀表板：關鍵指標展示",
    ],
    usageSuggestions: [
      "使用主題保持視覺一致性",
      "優化報告性能",
      "使用書籤進行導航",
      "定期更新數據源",
      "創建清晰的視覺層級",
    ],
    commonViews: [
      "報告視圖：查看可視化",
      "編輯視圖：修改報告",
      "儀表板視圖：監控關鍵指標",
      "數據視圖：查看原始數據",
    ],
    suitableScenarios: [
      "銷售分析",
      "財務報告",
      "客戶分析",
      "運營監控",
      "市場趨勢分析",
    ],
  },
  sharepoint: {
    overview:
      "Microsoft SharePoint 是一個企業內容管理和協作平台。它允許團隊共享文件、信息和應用程式。",
    whatYouCanDo: [
      "存儲和共享文件",
      "管理文件版本",
      "設置權限和訪問控制",
      "搜尋和發現內容",
      "自動化工作流程",
      "與 Teams 無縫集成",
    ],
    basicStructure: [
      "網站：協作空間",
      "文件庫：文件存儲位置",
      "列表：信息管理",
      "頁面：內容發佈",
    ],
    usageSuggestions: [
      "使用文件夾結構組織文件",
      "利用元數據進行搜尋",
      "定期清理舊文件",
      "使用版本控制追蹤更改",
      "設置明確的命名規範",
    ],
    commonViews: [
      "文件庫視圖：瀏覽文件",
      "列表視圖：查看信息",
      "頁面視圖：查看內容",
      "搜尋視圖：查找文件",
    ],
    suitableScenarios: [
      "文檔管理",
      "團隊協作",
      "知識管理",
      "內容發佈",
      "項目文檔存儲",
    ],
  },
  teams: {
    overview:
      "Microsoft Teams 是一個統一的溝通和協作平台。它集成了聊天、視頻會議、文件共享和應用程式。",
    whatYouCanDo: [
      "進行即時消息和聊天",
      "舉行視頻和音頻會議",
      "共享和協作文件",
      "集成第三方應用程式",
      "組織頻道和對話",
      "搜尋消息和文件",
    ],
    basicStructure: [
      "團隊：組織單位",
      "頻道：特定主題的討論空間",
      "對話：一對一或群組聊天",
      "應用程式：集成的工具",
    ],
    usageSuggestions: [
      "使用頻道組織不同的主題",
      "利用線程回覆保持對話有序",
      "使用 @提及吸引注意",
      "定期檢查已釘選的消息",
      "設置清晰的頻道描述",
    ],
    commonViews: [
      "聊天視圖：消息列表",
      "會議視圖：視頻會議",
      "文件視圖：共享文件",
      "應用程式視圖：集成工具",
    ],
    suitableScenarios: [
      "團隊溝通",
      "項目協作",
      "客戶支持",
      "培訓和教育",
      "事件協調",
    ],
  },
  todo: {
    overview:
      "Microsoft To Do 是一個個人和團隊任務管理應用程式。它幫助您組織和優先化您的任務。",
    whatYouCanDo: [
      "創建任務列表",
      "設置優先級和截止日期",
      "與 Outlook 集成",
      "共享列表給團隊",
      "設置提醒和通知",
      "使用移動應用程式",
    ],
    basicStructure: [
      "列表：任務集合",
      "任務：要完成的工作項",
      "子任務：分解大任務",
      "優先級：任務重要性",
    ],
    usageSuggestions: [
      "使用優先級標籤組織任務",
      "設置定期提醒",
      "與 Outlook 任務同步",
      "使用子任務分解大任務",
      "定期檢查完成進度",
    ],
    commonViews: [
      "我的一天：今日任務",
      "重要：優先級任務",
      "計劃：所有任務",
      "已指派給我：團隊任務",
    ],
    suitableScenarios: [
      "個人任務管理",
      "團隊任務分配",
      "日常計劃",
      "項目檢查清單",
      "習慣跟蹤",
    ],
  },
};

function getToolIcon(toolId: string) {
  switch (toolId) {
    case 'planner':
      return <PlannerIcon />;
    case 'power-automate':
      return <PowerAutomateIcon />;
    case 'power-bi':
      return <PowerBIIcon />;
    case 'sharepoint':
      return <SharePointIcon />;
    case 'teams':
      return <TeamsIcon />;
    default:
      return null;
  }
}

// M365 應用程式快速跳轉連結
function getM365AppUrl(toolId: string): string {
  const urlMap: Record<string, string> = {
    'planner': 'https://tasks.office.com',
    'power-automate': 'https://flow.microsoft.com',
    'power-bi': 'https://app.powerbi.com',
    'sharepoint': 'https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration',
    'teams': 'https://teams.microsoft.com',
    'list': 'https://www.microsoft.com/en-us/microsoft-365/business/microsoft-lists',
    'loop': 'https://loop.microsoft.com',
    'todo': 'https://todo.microsoft.com',
  };
  return urlMap[toolId] || 'https://www.microsoft.com/en-us/microsoft-365';
}

export default function ToolDetail() {
  const [, params] = useRoute("/tools/:toolId");
  const toolId = params?.toolId as string;

  const tool = M365_TOOLS.find((t) => t.id === toolId);
  const details = toolDetails[toolId];

  if (!tool || !details) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            工具未找到
          </h1>
          <p className="text-foreground/70">抱歉，我們找不到您要查找的工具。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        {/* 工具頭部 */}
        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-20 h-20">
              {getToolIcon(toolId)}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {tool.name}
              </h1>
              <p className="text-lg text-foreground/70 mb-4">{tool.description}</p>
              {/* 快速跳轉按鈕 */}
              <a
                href={getM365AppUrl(toolId)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                打開 {tool.name}
              </a>
            </div>
          </div>
        </div>

        {/* 概述 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {tool.name} 使用說明
          </h2>
          <Card className="p-8">
            <p className="text-foreground/70 text-lg leading-relaxed">
              {details.overview}
            </p>
          </Card>
        </section>

        {/* 你可以用它做什麼 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            【你可以用 {tool.name} 做什麼？】
          </h2>
          <Card className="p-8">
            <ol className="space-y-3">
              {details.whatYouCanDo.map((item, index) => (
                <li key={index} className="flex gap-4 text-foreground/70">
                  <span className="flex-shrink-0 font-bold text-primary">
                    {index + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </Card>
        </section>

        {/* 基本結構 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            【基本結構】
          </h2>
          <Card className="p-8">
            <ol className="space-y-3">
              {details.basicStructure.map((item, index) => (
                <li key={index} className="flex gap-4 text-foreground/70">
                  <span className="flex-shrink-0 font-bold text-primary">
                    {index + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </Card>
        </section>

        {/* 使用建議 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            【使用建議】
          </h2>
          <Card className="p-8">
            <ol className="space-y-3">
              {details.usageSuggestions.map((item, index) => (
                <li key={index} className="flex gap-4 text-foreground/70">
                  <span className="flex-shrink-0 font-bold text-primary">
                    {index + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </Card>
        </section>

        {/* 常用視圖 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            【常用視圖】
          </h2>
          <Card className="p-8">
            <ol className="space-y-3">
              {details.commonViews.map((item, index) => (
                <li key={index} className="flex gap-4 text-foreground/70">
                  <span className="flex-shrink-0 font-bold text-primary">
                    {index + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </Card>
        </section>

        {/* 適合使用情境 */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            【適合使用情境】
          </h2>
          <Card className="p-8">
            <ol className="space-y-3">
              {details.suitableScenarios.map((item, index) => (
                <li key={index} className="flex gap-4 text-foreground/70">
                  <span className="flex-shrink-0 font-bold text-primary">
                    {index + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </Card>
        </section>
      </div>
    </div>
  );
}
