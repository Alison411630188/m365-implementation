import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * 應用案例頁面
 * 設計理念：企業級知識庫風格
 * - 展示七個真實業務場景
 * - 每個案例包含詳細的操作步驟
 * - 可展開/收起的詳細說明
 */

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  steps: string[];
  tools: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    title: "部門主管／小組長",
    subtitle: "指派工作給同仁並追蹤完成進度",
    icon: "👔",
    description:
      "部門主管需要有效地分配工作任務給團隊成員，並實時監控每個任務的進度，確保工作按時完成。",
    steps: [
      "在 Planner 中創建新計劃，命名為「部門工作計劃」或「[部門名稱]-[月份]工作」",
      "根據工作類型或優先級創建不同的任務板，如「進行中」、「待審核」、「已完成」",
      "點擊「新增任務」，輸入任務名稱、詳細說明、截止日期和優先級",
      "在任務詳情中點擊「指派給」，選擇要分配給的同仁",
      "添加相關附件（如工作指南、參考文件）和評論說明任務要求",
      "同仁收到 Planner 通知後，可在 Teams 或 To Do 中查看被指派的任務",
      "同仁更新任務進度時，在 Planner 中拖動任務卡片到相應的進度欄位",
      "主管可在 Planner 儀表板中查看所有任務的進度，識別延遲的項目",
      "定期檢視進度報告，對延遲任務進行跟進和調整",
      "任務完成後，在 Planner 中標記為完成，系統自動生成完成報告",
    ],
    tools: ["Planner", "Teams", "To Do"],
  },
  {
    id: "case-2",
    title: "專案負責人／部門主管",
    subtitle: "追蹤跨部門專案進度與協作狀態",
    icon: "📊",
    description:
      "跨部門專案需要多個團隊的協作，專案負責人需要統一管理進度、協調各部門工作，並確保項目按時交付。",
    steps: [
      "在 SharePoint 上創建專案工作區，設置文件夾結構（如計劃、進度報告、文件、會議記錄）",
      "在 Planner 中創建專案計劃，設置各階段的里程碑（如需求分析、設計、開發、測試、上線）",
      "為每個部門創建專案小組，在 Teams 中建立專案頻道，邀請相關人員加入",
      "在 Teams 頻道中釘選重要文件、進度表和溝通指南，方便所有成員快速查閱",
      "在 Planner 中為各部門分配任務，設置明確的截止日期和責任人",
      "利用 Loop 在 Teams 中進行實時協作，記錄會議決議和待辦事項",
      "定期在 Teams 中舉行進度會議，使用 Loop 共同編寫會議筆記",
      "在 Planner 儀表板中監控整體進度，識別風險和瓶頸",
      "使用 Power BI 創建專案進度儀表板，可視化各部門的完成率和工作量",
      "每週生成進度報告，分享給所有相關方，確保信息透明",
    ],
    tools: ["Planner", "Teams", "SharePoint", "Loop", "Power BI"],
  },
  {
    id: "case-3",
    title: "會議召集人／會議記錄者",
    subtitle: "會後整理決議並追蹤行動項目",
    icon: "📝",
    description:
      "會議後需要整理決議、分配行動項目並追蹤完成情況，確保會議成果得到有效執行。",
    steps: [
      "會議進行期間，由會議主持人、會議記錄者或與會成員在 Loop 中共同編寫會議筆記，記錄討論重點與決議內容",
      "在會議筆記中明確區分「決議事項」、「待辦事項」、「責任人」與「完成期限」，確保資訊完整且可追蹤",
      "會議結束後，由會議主持人或記錄者將已確認的待辦事項手動整理至 Planner，建立為正式任務",
      "建立任務時，應填寫任務名稱、負責人、截止日、說明內容與必要附件，讓後續執行依據清楚明確",
      "各責任人可透過 Planner 或 To Do 查看被指派的工作，並依實際執行情況更新進度",
      "會議主持人、部門主管或專案經理可於會後定期檢視 Planner 中的任務狀態，追蹤完成情形、確認逾期項目與後續待辦",
      "下次會議召開前，可先檢視前次會議所產生的任務與完成結果，避免相同事項重複討論，提高會議延續性與執行效率",
      "將會議記錄存檔至 SharePoint，方便後續查閱和知識管理",
      "對於重複出現的議題，可建立知識庫文章，供團隊參考",
    ],
    tools: ["Loop", "Planner", "To Do", "SharePoint"],
  },
  {
    id: "case-4",
    title: "新進員工",
    subtitle: "新進員工入職與資訊導引 / 訓練與學習內容管理",
    icon: "🎓",
    description:
      "新進員工需要系統的入職流程和學習資源，幫助他們快速融入團隊並掌握工作技能。",
    steps: [
      "HR 在 SharePoint 上建立新進員工入職資源庫，包含公司政策、組織架構、流程指南等",
      "創建新進員工清單，在 Lists 中記錄入職進度（如簽署文件、系統帳號、培訓課程等）",
      "為新進員工創建 Teams 私人頻道，邀請直屬主管和導師加入",
      "在 Teams 頻道中分享入職指南、組織架構圖、聯絡清單和常見問題解答",
      "使用 Loop 創建新進員工訓練計劃，列出每週的學習目標和任務",
      "在 Planner 中為新進員工分配培訓任務，包括系統培訓、部門介紹、業務流程學習等",
      "利用 SharePoint 建立訓練資源庫，包含視頻教程、文檔、案例研究等學習材料",
      "導師可在 Teams 中定期檢查新進員工的進度，提供反饋和指導",
      "新進員工可在 To Do 中查看個人的訓練任務和學習進度",
      "完成培訓後，在 Lists 中更新新進員工狀態，生成入職完成報告",
    ],
    tools: ["SharePoint", "Lists", "Teams", "Loop", "Planner", "To Do"],
  },
  {
    id: "case-5",
    title: "一般員工",
    subtitle: "提出申請、送出簽核並查詢核准進度",
    icon: "📋",
    description:
      "員工需要便捷的申請流程，可以提交各類申請（如休假、報銷、採購等），並實時查詢審核進度。",
    steps: [
      "HR 或行政部門在 Lists 中創建申請表單（如休假申請、報銷申請、採購申請等）",
      "員工訪問 SharePoint 或 Teams 中的申請入口，點擊相應的申請類型",
      "填寫申請表單，包括申請原因、金額、日期等必要信息，並上傳相關證明文件",
      "提交申請後，系統自動發送通知給直屬主管進行初審",
      "主管在 Teams 中收到申請通知，點擊連結查看詳情並進行審核",
      "主管可在 Lists 中更新申請狀態（如「待審核」、「已批准」、「已駁回」），並添加審核意見",
      "如需進一步審批，系統自動轉發給相應的審批人（如部門主管、財務部等）",
      "員工可在 Lists 中查詢自己的申請進度，實時了解審核狀態",
      "申請批准後，系統自動發送確認通知給員工和相關部門",
      "對於駁回的申請，員工可查看駁回原因，修改後重新提交",
    ],
    tools: ["Lists", "SharePoint", "Teams", "Power Automate"],
  },
  {
    id: "case-6",
    title: "現場人員／值班主管",
    subtitle: "即時通報現場事件並追蹤處理結果",
    icon: "🚨",
    description:
      "現場人員需要快速報告事件和問題，值班主管需要實時監控和協調處理，確保問題得到及時解決。",
    steps: [
      "在 Lists 中創建事件報告表單，包括事件類型、發生時間、地點、嚴重程度等字段",
      "現場人員通過手機或平板電腦訪問 Lists，填寫事件報告表單",
      "提交報告時，可上傳現場照片或視頻作為證據",
      "系統自動發送通知給值班主管和相關部門負責人",
      "值班主管在 Teams 中收到事件通知，快速評估事件嚴重程度",
      "根據事件類型，在 Planner 中創建應急任務，分配給相應的處理人員",
      "現場人員和處理人員可在 Teams 頻道中實時溝通，共享現場信息和處理進展",
      "使用 Loop 記錄事件處理過程，包括採取的措施、結果和經驗教訓",
      "處理完成後，在 Lists 中更新事件狀態和解決方案",
      "定期分析事件數據，識別常見問題並制定預防措施",
    ],
    tools: ["Lists", "Teams", "Planner", "Loop", "Power Automate"],
  },
  {
    id: "case-7",
    title: "HR／部門主管",
    subtitle: "主管或 HR 蒐集員工回饋與滿意度",
    icon: "💬",
    description:
      "HR 和主管需要定期收集員工反饋，了解員工滿意度和工作環境，以改進管理和工作條件。",
    steps: [
      "HR 使用 Forms 創建員工滿意度調查問卷，包括工作環境、管理風格、職業發展等主題",
      "通過 Teams 或電子郵件分享問卷連結，邀請員工參與調查",
      "設置問卷截止日期和匿名選項，鼓勵員工坦誠反饋",
      "在 Lists 中創建員工反饋記錄表，記錄一對一面談中收集的反饋",
      "部門主管定期與員工進行一對一面談，討論工作進展和職業發展計劃",
      "在面談中記錄員工的建議、關切和改進需求",
      "使用 Power BI 分析調查數據，生成可視化報告，識別主要問題和趨勢",
      "在 SharePoint 上創建反饋分析報告，分享主要發現和改進計劃",
      "根據反饋結果，制定改進措施，如改善工作環境、提供培訓機會等",
      "定期跟進改進措施的實施情況，並在下一輪調查中評估效果",
    ],
    tools: ["Forms", "Teams", "Lists", "Power BI", "SharePoint"],
  },
];

export default function Cases() {
  const [expandedCases, setExpandedCases] = useState<string[]>([]);

  const toggleExpand = (caseId: string) => {
    setExpandedCases((prev) =>
      prev.includes(caseId)
        ? prev.filter((id) => id !== caseId)
        : [...prev, caseId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        {/* 頁面頭部 */}
        <div className="mb-12 pb-8 border-b border-border">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            M365 應用情境案例
          </h1>
          <p className="text-lg text-foreground/70">
            探索 M365 在不同業務場景中的實際應用，了解如何通過 M365
            工具提高工作效率和團隊協作。
          </p>
        </div>

        {/* 案例列表 */}
        <div className="space-y-6">
          {CASE_STUDIES.map((caseStudy) => (
            <Card
              key={caseStudy.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* 案例頭部 */}
              <button
                onClick={() => toggleExpand(caseStudy.id)}
                className="w-full p-6 flex items-start justify-between hover:bg-muted/50 transition-colors text-left"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl">{caseStudy.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {caseStudy.title}
                      </h2>
                      <p className="text-foreground/70">{caseStudy.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-foreground/60 mt-3">{caseStudy.description}</p>
                </div>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 ml-4 text-primary transition-transform ${
                    expandedCases.includes(caseStudy.id) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* 案例詳情 */}
              {expandedCases.includes(caseStudy.id) && (
                <div className="border-t border-border px-6 py-6 bg-muted/30">
                  {/* 操作步驟 */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      📋 詳細操作步驟
                    </h3>
                    <ol className="space-y-3">
                      {caseStudy.steps.map((step, index) => (
                        <li
                          key={index}
                          className="flex gap-4 text-foreground/70 leading-relaxed"
                        >
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </span>
                          <span className="pt-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* 相關工具 */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      🛠️ 相關工具
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tools.map((tool) => (
                        <span
                          key={tool}
                          className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* 底部提示 */}
        <div className="mt-12 p-8 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-foreground/70">
            💡
            <strong className="text-foreground">提示：</strong>
            以上案例展示了 M365 工具的常見應用場景。根據您的具體業務需求，可以靈活組合不同的工具，創建符合組織流程的解決方案。如需更多幫助，請查閱
            <a href="/handbook" className="text-primary hover:underline ml-1">
              使用手冊
            </a>
            或
            <a href="/faq" className="text-primary hover:underline ml-1">
              問答區
            </a>
            。
          </p>
        </div>
      </div>
    </div>
  );
}
