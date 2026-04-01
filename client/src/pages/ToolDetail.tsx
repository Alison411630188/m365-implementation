import { Card } from "@/components/ui/card";
import { useRoute } from "wouter";
import { M365_TOOLS } from "@/../../shared/const";

/**
 * 工具詳細說明頁面
 * 設計理念：企業級知識庫風格
 * - 工具概述和功能介紹
 * - 主要特性列表
 * - 使用場景和最佳實踐
 * - 快速開始指南
 */

const toolDetails: Record<
  string,
  {
    overview: string;
    features: string[];
    useCases: string[];
    quickStart: string[];
    tips: string[];
  }
> = {
  list: {
    overview:
      "Microsoft Lists 是一個智能信息管理應用程式，幫助團隊跟蹤信息和組織工作。您可以從空白清單開始，或從預製模板創建。",
    features: [
      "創建自定義清單和視圖",
      "與 Power Automate 集成自動化工作流",
      "使用公式進行計算",
      "設置提醒和通知",
      "支持多種數據類型（文本、日期、選擇等）",
      "與 Excel 同步",
    ],
    useCases: [
      "項目任務跟蹤",
      "資產管理",
      "事件規劃",
      "員工入職清單",
      "客戶反饋收集",
    ],
    quickStart: [
      "訪問 Microsoft 365 應用程式啟動器",
      "選擇 Lists 應用程式",
      "點擊「創建新清單」",
      "選擇空白清單或使用模板",
      "添加列和數據",
      "與團隊共享清單",
    ],
    tips: [
      "使用視圖來組織和篩選數據",
      "利用公式進行自動計算",
      "設置權限以控制訪問",
      "使用模板節省時間",
    ],
  },
  loop: {
    overview:
      "Microsoft Loop 是一個新的協作應用程式，提供實時協作和共享工作區。它允許團隊成員在同一空間中進行實時編輯和討論。",
    features: [
      "實時協作編輯",
      "Loop 組件可嵌入到 Teams 和 Outlook",
      "版本歷史記錄",
      "評論和提及功能",
      "與 Teams 無縫集成",
      "支持豐富的內容類型",
    ],
    useCases: [
      "頭腦風暴會議",
      "項目計劃",
      "會議記錄",
      "內容協作",
      "知識共享",
    ],
    quickStart: [
      "打開 Microsoft Teams 或 Outlook",
      "創建新的 Loop 工作區",
      "邀請團隊成員",
      "開始添加內容和協作",
      "使用評論進行討論",
    ],
    tips: [
      "使用 Loop 組件在 Teams 中快速協作",
      "定期保存重要內容",
      "利用版本歷史記錄追蹤更改",
    ],
  },
  planner: {
    overview:
      "Microsoft Planner 是一個任務管理應用程式，幫助團隊計劃、組織和跟蹤工作。它提供直觀的任務板和進度跟蹤。",
    features: [
      "創建計劃和任務",
      "任務板視圖（看板）",
      "進度跟蹤和報告",
      "與 Teams 集成",
      "設置優先級和截止日期",
      "分配任務給團隊成員",
    ],
    useCases: [
      "項目管理",
      "團隊任務協調",
      "衝刺規劃",
      "事件組織",
      "產品發佈計劃",
    ],
    quickStart: [
      "訪問 Microsoft 365 應用程式啟動器",
      "選擇 Planner 應用程式",
      "點擊「新建計劃」",
      "輸入計劃名稱",
      "添加任務和分配",
      "跟蹤進度",
    ],
    tips: [
      "使用優先級標籤組織任務",
      "定期檢查進度報告",
      "在 Teams 中添加 Planner 標籤以便快速訪問",
      "使用自定義字段添加額外信息",
    ],
  },
  "power-automate": {
    overview:
      "Microsoft Power Automate 是一個自動化工具，允許您創建自動化工作流程而無需編寫代碼。它可以連接數百個應用程式。",
    features: [
      "創建自動化工作流程",
      "連接多個應用程式",
      "條件邏輯和分支",
      "預製模板",
      "監控和分析",
      "支持雲端和本地應用程式",
    ],
    useCases: [
      "自動化批准流程",
      "數據同步",
      "通知和提醒",
      "文件管理自動化",
      "社交媒體集成",
    ],
    quickStart: [
      "訪問 Power Automate 網站",
      "點擊「創建」",
      "選擇流類型（雲端流、桌面流等）",
      "配置觸發器和操作",
      "測試流程",
      "發佈流程",
    ],
    tips: [
      "從模板開始以加快開發",
      "使用表達式進行高級邏輯",
      "定期監控流程執行",
      "使用錯誤處理確保可靠性",
    ],
  },
  "power-bi": {
    overview:
      "Microsoft Power BI 是一個商業智能工具，幫助您可視化和分析數據。它可以連接多個數據源並創建交互式報告。",
    features: [
      "連接多個數據源",
      "創建交互式儀表板",
      "實時數據刷新",
      "高級分析和預測",
      "共享報告和儀表板",
      "移動應用程式支持",
    ],
    useCases: [
      "銷售分析",
      "財務報告",
      "客戶分析",
      "運營監控",
      "市場趨勢分析",
    ],
    quickStart: [
      "訪問 Power BI 網站",
      "點擊「開始」",
      "連接數據源",
      "創建報告",
      "添加可視化",
      "發佈儀表板",
    ],
    tips: [
      "使用主題保持視覺一致性",
      "優化報告性能",
      "使用書籤進行導航",
      "定期更新數據源",
    ],
  },
  sharepoint: {
    overview:
      "Microsoft SharePoint 是一個企業內容管理和協作平台。它允許團隊共享文件、信息和應用程式。",
    features: [
      "文件存儲和共享",
      "文件版本控制",
      "權限管理",
      "搜尋功能",
      "工作流程自動化",
      "與 Teams 集成",
    ],
    useCases: [
      "文檔管理",
      "團隊協作",
      "知識管理",
      "內容發佈",
      "項目文檔存儲",
    ],
    quickStart: [
      "訪問 SharePoint 網站",
      "創建新網站或文件庫",
      "上傳文件",
      "設置權限",
      "與團隊共享",
      "組織內容",
    ],
    tips: [
      "使用文件夾結構組織文件",
      "利用元數據進行搜尋",
      "定期清理舊文件",
      "使用版本控制追蹤更改",
    ],
  },
  teams: {
    overview:
      "Microsoft Teams 是一個統一的溝通和協作平台。它集成了聊天、視頻會議、文件共享和應用程式。",
    features: [
      "即時消息和聊天",
      "視頻和音頻會議",
      "文件共享和協作",
      "應用程式集成",
      "頻道組織",
      "搜尋功能",
    ],
    useCases: [
      "團隊溝通",
      "項目協作",
      "客戶支持",
      "培訓和教育",
      "事件協調",
    ],
    quickStart: [
      "訪問 Microsoft Teams",
      "創建或加入團隊",
      "創建頻道",
      "邀請成員",
      "開始聊天和協作",
      "共享文件",
    ],
    tips: [
      "使用頻道組織不同的主題",
      "利用線程回覆保持對話有序",
      "使用 @提及吸引注意",
      "定期檢查已釘選的消息",
    ],
  },
  todo: {
    overview:
      "Microsoft To Do 是一個個人和團隊任務管理應用程式。它幫助您組織和優先化您的任務。",
    features: [
      "創建任務列表",
      "設置優先級和截止日期",
      "與 Outlook 集成",
      "共享列表",
      "提醒和通知",
      "移動應用程式支持",
    ],
    useCases: [
      "個人任務管理",
      "團隊任務分配",
      "日常計劃",
      "項目檢查清單",
      "習慣跟蹤",
    ],
    quickStart: [
      "訪問 Microsoft To Do",
      "創建新列表",
      "添加任務",
      "設置優先級和截止日期",
      "與他人共享列表",
      "跟蹤進度",
    ],
    tips: [
      "使用優先級標籤組織任務",
      "設置定期提醒",
      "與 Outlook 任務同步",
      "使用子任務分解大任務",
    ],
  },
};

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
            <div className="text-6xl">{tool.icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {tool.name}
              </h1>
              <p className="text-lg text-foreground/70">{tool.description}</p>
            </div>
          </div>
        </div>

        {/* 概述 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">概述</h2>
          <Card className="p-8">
            <p className="text-foreground/70 text-lg leading-relaxed">
              {details.overview}
            </p>
          </Card>
        </section>

        {/* 主要特性 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">主要特性</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {details.features.map((feature, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <p className="text-foreground/70">{feature}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 使用場景 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">使用場景</h2>
          <Card className="p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground/70">{useCase}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* 快速開始 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">快速開始</h2>
          <Card className="p-8">
            <ol className="space-y-4">
              {details.quickStart.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-foreground/70">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </section>

        {/* 技巧和訣竅 */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            技巧和訣竅
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.tips.map((tip, index) => (
              <Card key={index} className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <p className="text-foreground/70">{tip}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
