import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * 應用案例頁面
 * 設計理念：企業級知識庫風格
 * - 案例卡片展示
 * - 按行業或功能分類
 * - 清晰的問題、解決方案、結果結構
 */

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  tools: string[];
  challenge: string;
  solution: string;
  results: string[];
  icon: string;
}

const cases: CaseStudy[] = [
  {
    id: "1",
    title: "銷售團隊協作效率提升",
    industry: "銷售",
    tools: ["Teams", "SharePoint", "Power BI"],
    challenge:
      "銷售團隊分散在不同地點，無法有效共享銷售資料和實時協作，導致信息不同步和決策延遲。",
    solution:
      "部署 Microsoft Teams 作為中央協作平台，使用 SharePoint 集中管理銷售資料和案例研究，利用 Power BI 創建實時銷售儀表板。",
    results: [
      "團隊協作效率提升 40%",
      "銷售週期縮短 25%",
      "數據訪問時間減少 60%",
    ],
    icon: "📈",
  },
  {
    id: "2",
    title: "項目管理流程優化",
    industry: "項目管理",
    tools: ["Planner", "Teams", "Loop"],
    challenge:
      "多個項目同時進行，任務分配混亂，進度跟蹤困難，團隊成員不清楚優先級。",
    solution:
      "使用 Microsoft Planner 創建項目計劃和任務板，在 Teams 中集成 Planner，使用 Loop 進行實時協作和更新。",
    results: [
      "項目按時完成率提升 35%",
      "任務分配清晰度提升 50%",
      "團隊溝通成本降低 30%",
    ],
    icon: "🎯",
  },
  {
    id: "3",
    title: "文件管理和合規性改進",
    industry: "法律合規",
    tools: ["SharePoint", "Teams", "Power Automate"],
    challenge:
      "文件分散在多個位置，版本控制混亂，難以追蹤文件訪問和修改，合規性風險高。",
    solution:
      "建立集中式 SharePoint 文件庫，配置版本控制和權限管理，使用 Power Automate 自動化文件審批流程。",
    results: [
      "文件查找時間減少 70%",
      "版本控制錯誤降低 90%",
      "審批流程時間縮短 50%",
    ],
    icon: "📋",
  },
  {
    id: "4",
    title: "數據分析和決策支持",
    industry: "財務",
    tools: ["Power BI", "Excel", "Power Automate"],
    challenge:
      "財務數據分散在多個系統中，報告生成耗時，高管無法快速獲得關鍵指標。",
    solution:
      "使用 Power BI 連接多個數據源，創建交互式儀表板和報告，使用 Power Automate 自動化數據刷新和報告分發。",
    results: [
      "報告生成時間從 2 天減少到 2 小時",
      "決策支持數據可用性提升 95%",
      "數據準確性提升 99%",
    ],
    icon: "💰",
  },
  {
    id: "5",
    title: "遠程工作生產力提升",
    industry: "遠程工作",
    tools: ["Teams", "OneDrive", "Loop"],
    challenge:
      "員工在家工作時，協作工具分散，文件同步困難，團隊凝聚力下降。",
    solution:
      "統一使用 Teams 進行所有溝通和協作，使用 OneDrive 進行文件同步，使用 Loop 進行實時協作編輯。",
    results: [
      "遠程工作生產力與辦公室相當",
      "員工滿意度提升 45%",
      "協作工具數量從 8 個減少到 1 個",
    ],
    icon: "🏠",
  },
  {
    id: "6",
    title: "自動化業務流程",
    industry: "運營",
    tools: ["Power Automate", "SharePoint", "Teams"],
    challenge:
      "許多重複性任務需要手動操作，浪費時間，容易出錯，員工工作效率低。",
    solution:
      "使用 Power Automate 自動化請假申請、費用報銷、文件審批等流程，集成 Teams 進行通知。",
    results: [
      "手動操作時間減少 80%",
      "流程錯誤率降低 95%",
      "員工可投入時間增加 20 小時/月",
    ],
    icon: "⚡",
  },
];

export default function Cases() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        {/* 頁面標題 */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            M365 應用情境案例
          </h1>
          <p className="text-lg text-foreground/70">
            探索真實業務場景中的 M365 應用案例和成功故事
          </p>
        </div>

        {/* 案例卡片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseStudy) => (
            <Card
              key={caseStudy.id}
              className="p-8 hover:shadow-lg transition-shadow"
            >
              {/* 案例頭部 */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="text-4xl mb-3">{caseStudy.icon}</div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {caseStudy.title}
                  </h2>
                  <Badge variant="outline">{caseStudy.industry}</Badge>
                </div>
              </div>

              {/* 使用的工具 */}
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-sm font-semibold text-foreground/70 mb-3">
                  使用的工具
                </p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tools.map((tool) => (
                    <Badge key={tool} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* 挑戰 */}
              <div className="mb-6">
                <h3 className="font-bold text-foreground mb-2">
                  🎯 業務挑戰
                </h3>
                <p className="text-foreground/70 text-sm">{caseStudy.challenge}</p>
              </div>

              {/* 解決方案 */}
              <div className="mb-6">
                <h3 className="font-bold text-foreground mb-2">
                  ✅ 解決方案
                </h3>
                <p className="text-foreground/70 text-sm">{caseStudy.solution}</p>
              </div>

              {/* 結果 */}
              <div>
                <h3 className="font-bold text-foreground mb-3">📊 成果</h3>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-foreground/70"
                    >
                      <span className="text-primary font-bold">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* 底部提示 */}
        <div className="mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-lg font-bold text-foreground mb-2">
            💡 您的案例
          </h3>
          <p className="text-foreground/70">
            這些案例只是 M365 應用的冰山一角。根據您的具體業務需求，M365
            可以幫助您實現更多的創新和效率提升。如果您有自己的成功案例或需要定制化解決方案，請聯繫我們的團隊。
          </p>
        </div>
      </div>
    </div>
  );
}
