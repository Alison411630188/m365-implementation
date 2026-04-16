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
 * M365 工具手冊詳情頁面 - 最終版 (含最新 Vercel 連結)
 */

interface ViewItem {
  name: string;
  description: string;
}

interface ToolDetailInfo {
  overview: string;
  whatYouCanDo: string[];
  basicStructure: string[];
  usageSuggestions: string[];
  commonViews: ViewItem[];
  suitableScenarios: string[];
}

const toolDetails: Record<string, ToolDetailInfo> = {
  planner: {
    overview: "Planner 是 Microsoft 365 專為團隊設計的任務管理工具，你可以把它想像成一個「數位化的便利貼白板」。對於第一次使用的團隊來說，它能快速把複雜的專案拆解成清晰的步驟，讓每個人都清楚「誰、在什麼時候、該完成什麼事」。",
    whatYouCanDo: [
      "建立計畫 (Plan)：為你的新專案或活動建立一個專屬的工作白板。",
      "建立貯體 (Bucket)：用「待辦、進行中、完成」建立分類直欄。",
      "新增工作 (Task)：把大項目拆解，像寫便利貼一樣建立一張張具體的工作卡片。",
      "指派 (Assign) 與 到期日 (Due date)：把卡片交給對的負責人並設定期限，系統會自動發信提醒。",
      "建立檢查清單 (Checklist)：在工作卡片內列出更細節的子步驟，打勾就代表完成。",
      "新增標籤 (Labels)：利用右側的彩色標籤為任務標註急迫性或跨部門屬性。",
      "更新進度 (Progress)：隨時將狀態切換為「尚未開始 (Not started)」、「進行中 (In progress)」或「已完成 (Completed)」。"
    ],
    basicStructure: [
      "計畫 (Plan)：你的專案大白板（例如：「2026 年度發表會」）。",
      "貯體 (Bucket)：白板上的分類直欄（例如：「前期準備」、「行銷宣傳」、「活動當天」）。",
      "工作 (Task)：貼在欄位上的具體便利貼（例如：「確認場地設備」），裡面可包含清單與留言。"
    ],
    usageSuggestions: [
      "【新手第一步】先開一個測試用的 計畫 (Plan)，隨意新增幾個 貯體 (Bucket) 試試手感。",
      "【工作命名訣竅】開頭加上動詞或中括號，例如「[設計] 宣傳海報初稿」，讓大家一看就懂。",
      "【大任務要拆小】如果一個任務需要超過 3 天才能完成，建議將它拆成多個 工作 (Task) 或使用卡片內的「檢查清單 (Checklist)」。",
      "【隨時更新狀態】每天下班前，順手把卡片拖曳到「進行中」或「已完成」，保持團隊進度最新。",
      "【釘選到 Teams】把建好的 Planner 直接加入 Teams 頻道上方的頁籤，大家每天一開群組就能看到，大幅提升使用率。"
    ],
    commonViews: [
      { name: "看板 (Board)", description: "【新手最常用】像拖曳便利貼一樣，把任務輕鬆從一個貯體拉到另一個貯體。" },
      { name: "格線 (Grid)", description: "【適合快速編輯】像 Excel 表格一樣的清單，方便一次修改多個任務的日期或負責人。" },
      { name: "圖表 (Charts)", description: "【適合主管/PM】自動生成狀態圖與人力負載圖，一眼看出誰的工作量大爆炸。" },
      { name: "排程 (Schedule)", description: "【適合抓時間】以月曆形式呈現，幫助團隊確認到期日是否過度集中在同一天。" }
    ],
    suitableScenarios: [
      "辦理公司大型活動（清楚列出幾百項細節與負責人）",
      "新產品或系統導入專案（追蹤每個階段的開發與測試進度）",
      "部門例行性工作分工（例如：新人報到流程、每月結帳流程）",
      "跨部門的長期合作專案（大家都在同一個看板上更新，減少開會同步時間）"
    ]
  },
  "power-automate": {
    overview: "Power Automate 是微軟的流程自動化工具。它可以幫你把分散在不同系統（如 Email、Teams、SharePoint）的例行性動作串接起來，讓機器人代替你完成「複製、貼上、寄信、通知」等繁瑣工作。",
    whatYouCanDo: [
      "建立 雲端流程 (Cloud flow)：讓流程在事件發生、手動點擊或時間到時自動執行。",
      "設定 觸發程序 (Trigger)：決定流程什麼時候開始（例如：「收到包含特定主旨的電子郵件時」）。",
      "新增 動作 (Action)：決定觸發後要做什麼事（例如：「在 Teams 中張貼訊息」）。",
      "建立 核准 (Approvals)：讓流程加入人工簽核關卡，主管可在 Teams 或 Email 中直接點選「核准」或「拒絕」。",
      "使用 連接器 (Connectors)：串接 M365 以外的第三方服務（如 Google Drive, Slack 等）。",
      "套用 範本 (Templates)：直接套用微軟官方寫好的常用流程，稍微修改參數就能上線使用。"
    ],
    basicStructure: [
      "流程 (Flow)：一個完整自動化的劇本。",
      "觸發程序 (Trigger)：啟動這個劇本的第一個條件（例如：當 SharePoint 建立新項目時）。",
      "動作 (Action)：觸發後續執行的一連串步驟（例如：取得使用者設定檔、寄送 Email）。"
    ],
    usageSuggestions: [
      "【先從範本開始】第一次使用強烈建議去「範本 (Templates)」區搜尋關鍵字，通常你要的功能別人早就寫好了。",
      "【先畫流程圖】在動手拉區塊前，先在紙上畫清楚「如果發生 A，就執行 B；如果沒有，就執行 C」的邏輯。",
      "【善用測試功能】每次新增一個動作後，務必點擊右上角的「測試 (Test)」，確保資料有正確傳遞。",
      "【注意無限迴圈】設定觸發條件時要小心，避免「更新檔案」觸發了「修改檔案」，導致流程不斷自己觸發自己。"
    ],
    commonViews: [
      { name: "首頁 (Home)", description: "查看 Power Automate 總覽與推薦的自動化範本。" },
      { name: "建立 (Create)", description: "從空白、範本或是透過描述 (AI) 來建立新的流程。" },
      { name: "我的流程 (My flows)", description: "管理你建立的雲端流程、與他人共用的流程以及桌面流程。" },
      { name: "核准 (Approvals)", description: "集中查看與管理所有需要你簽核的請求與歷史紀錄。" }
    ],
    suitableScenarios: [
      "收到特定客戶的 VIP 郵件後，自動發送 Teams 通知給業務群組。",
      "每週五下午 5 點，自動寄送提醒填寫週報的 Email 給全體部門。",
      "員工在 SharePoint 填寫請購單後，自動發送核准卡片給直屬主管。",
      "當 OneDrive 特定資料夾有新檔案時，自動備份一份到 SharePoint。"
    ]
  },
  "power-bi": {
    overview: "Power BI 是微軟的商業智慧 (BI) 與資料視覺化工具。它能將 Excel、資料庫或雲端系統中的枯燥數字，轉換成極具互動性的動態圖表，幫助管理層快速看懂數據並做出決策。",
    whatYouCanDo: [
      "取得資料 (Get Data)：連接各種資料來源，如 Excel 活頁簿、SQL Server 或 SharePoint 資料夾。",
      "轉換資料 (Transform Data)：進入 Power Query 編輯器清理亂碼、合併資料表、變更資料類型。",
      "建立 報表 (Report)：將欄位拖曳到畫布上，建立長條圖、圓餅圖、地圖等視覺效果。",
      "發佈 (Publish)：將做好的報表從本機端的 Power BI Desktop 上傳到雲端 Power BI 服務 (Service)。",
      "建立 儀表板 (Dashboard)：在雲端將不同報表中最關鍵的圖表釘選 (Pin) 到同一個總覽畫面上。",
      "共用 (Share)：設定權限，將報表或工作區 (Workspace) 分享給組織內的特定同仁查看。"
    ],
    basicStructure: [
      "資料集/語意模型 (Semantic model)：報表背後的數據庫與關聯邏輯。",
      "報表 (Report)：包含多個頁面與互動式圖表的詳細分析文件。",
      "儀表板 (Dashboard)：只能在雲端建立，將多個報表精華集中於一頁的即時監控面板。"
    ],
    usageSuggestions: [
      "【資料清理是關鍵】80% 的時間會花在 Power Query 整理資料，資料乾淨，圖表才拉得出來。",
      "【一頁一重點】報表每一頁應該只回答一個核心商業問題，不要把所有圖表塞在同一頁。",
      "【善用交叉篩選】Power BI 的圖表是連動的，點擊 A 圖表的某個柱子，B 圖表會自動過濾出該類別的數據。",
      "【設定權限 (RLS)】如果報表包含全公司薪資，務必設定「資料列層級安全性」，讓每個主管登入只能看到自己部門的數字。"
    ],
    commonViews: [
      { name: "報表檢視 (Report view)", description: "Power BI Desktop 中最常用來排版圖表與設計視覺效果的畫布。" },
      { name: "資料表檢視 (Table view)", description: "直接查看載入模型的原始資料，類似 Excel 表格介面。" },
      { name: "模型檢視 (Model view)", description: "用來建立不同資料表之間的關聯線（例如將銷售表連到產品表）。" },
      { name: "工作區 (Workspaces)", description: "雲端服務上的協作空間，用來存放與團隊共用的報表與資料集。" }
    ],
    suitableScenarios: [
      "總經理每日查看的全國銷售業績動態儀表板。",
      "產線即時良率監控與歷史瑕疵原因分析。",
      "HR 部門的人力流動率與各部門年資分佈圖。",
      "財務部整合多套系統數據產出的月度財務報表。"
    ]
  },
  teams: {
    overview: "Teams 是 Microsoft 365 的企業協作中樞。它不僅僅是個聊天軟體，更是一個整合了會議、檔案共用、專案管理與第三方應用的虛擬數位辦公室。",
    whatYouCanDo: [
      "發起 聊天 (Chat)：與單一同事或多人群組進行快速的私訊對話。",
      "建立 團隊 (Teams) 與 頻道 (Channels)：為部門或專案建立專屬空間，針對不同主題分門別類討論。",
      "排定 行事曆 (Calendar) 會議：發起線上視訊會議，支援螢幕分享、會議錄影與即時字幕。",
      "共用 檔案 (Files)：在對話或頻道中上傳檔案，大家可以直接在 Teams 內同時開啟並共同編輯 Word/Excel/PPT。",
      "新增 索引標籤 (Tabs)：將重要的 Planner 看板、Power BI 報表或 SharePoint 網頁釘選在頻道最上方。",
      "回覆 (Reply) 貼文：在頻道中使用「回覆」功能，將同一主題的討論串接在一起，避免洗版。"
    ],
    basicStructure: [
      "聊天 (Chat)：個人私有空間，適合臨時性、非正式的溝通，上傳的檔案存在個人的 OneDrive。",
      "團隊 (Team)：組織或專案的最高層級容器（例如：IT 部門）。",
      "頻道 (Channel)：團隊底下依主題劃分的討論區（例如：IT 部門底下的「軟體開發」頻道），檔案存在 SharePoint。"
    ],
    usageSuggestions: [
      "【重要結論留頻道】私訊容易遺忘且新人看不到。跟團隊工作有關的正式決策，請優先發在「頻道 (Channel)」。",
      "【使用 @提及】如果要確保特定同事看到訊息，請務必在輸入框打 `@` 加上對方名字，他的 Teams 才會跳出紅點通知。",
      "【善用搜尋指令】在上方搜尋框輸入 `/` 可以快速執行指令，例如 `/dnd` 設為請勿打擾。",
      "【會議要寫議程】發出會議邀請時，請務必在內容區塊寫上明確的「會議目的」與「議程」，尊重參與者的時間。"
    ],
    commonViews: [
      { name: "聊天 (Chat)", description: "一對一或少數人的對話清單，包含文字、通話記錄與共用檔案。" },
      { name: "團隊 (Teams)", description: "列出你所加入的所有團隊與頻道，是專案協作的核心區域。" },
      { name: "行事曆 (Calendar)", description: "與 Outlook 完全同步的月曆，可一鍵加入即將開始的線上會議。" },
      { name: "通話 (Calls)", description: "查看語音通話記錄、語音信箱與聯絡人快速撥號。" }
    ],
    suitableScenarios: [
      "跨越不同廠區或國家的同仁進行每日晨會 (Daily Standup)。",
      "專案團隊在同一個頻道內討論規格，並直接點開上方的檔案共編。",
      "全體員工大會 (Town Hall) 的線上直播與問答。",
      "利用手機 App 在外地出差時隨時回覆緊急公務訊息。"
    ]
  },
  sharepoint: {
    overview: "SharePoint 是企業級內容管理和知識庫平台。你可以把它當成「企業內部的專屬網站產生器」兼「超級雲端硬碟」，它是 Teams 團隊背後用來存放所有檔案的隱形底層基礎。",
    whatYouCanDo: [
      "建立 小組網站 (Team site)：為特定專案團隊建立協作空間（與 Teams 連動）。",
      "建立 通訊網站 (Communication site)：建立類似公司首頁、部門入口網等單向發布資訊的精美網頁。",
      "管理 文件庫 (Document library)：取代傳統的檔案伺服器 (File Server)，支援版本歷程記錄與嚴格權限控管。",
      "建立 清單 (List)：用來建立結構化的資料表，例如「設備借用登記表」、「常見問題 FAQ」。",
      "發佈 新聞貼文 (News post)：利用內建的精美版塊，撰寫並發佈圖文並茂的企業公告。",
      "設定 版本歷程記錄 (Version history)：開啟後，檔案被覆蓋或誤刪都可以輕鬆還原到舊版本。"
    ],
    basicStructure: [
      "網站 (Site)：最高層級的容器，可以設定獨立的外觀與首頁。",
      "文件庫 (Document library)：專門用來存放與分類 Word、PDF 等實體檔案的地方。",
      "清單 (List)：類似沒有格線的 Excel，用來儲存一筆一筆的資料（如表單紀錄）。"
    ],
    usageSuggestions: [
      "【個人草稿請放 OneDrive】只有正式、需長期保存、或是需要與團隊共享的權限文件，才放上 SharePoint。",
      "【用欄位取代資料夾】不要再建立「2026>Q1>北區」這種深到找不到的資料夾！善用「新增欄 (Add column)」幫檔案打上標籤，用篩選器找檔案最快。",
      "【開啟簽出/簽入機制】如果是一份絕對不能被兩個人同時修改蓋掉的法律合約，請到文件庫設定開啟「需要簽出」，強制鎖定編輯權。",
      "【與 Teams 同步】把重要的 SharePoint 文件庫或網站首頁，直接「釘選」到 Teams 的頻道上方，同仁就不需要記網址。"
    ],
    commonViews: [
      { name: "網站首頁 (Home)", description: "進入網站第一眼看到的儀表板，可自由放置新聞、快速連結或近期檔案模組。" },
      { name: "文件 (Documents)", description: "預設的文件庫，所有從 Teams 頻道上傳的檔案都實際存放在這裡。" },
      { name: "網站內容 (Site contents)", description: "管理員視角，一眼看出這個網站底下到底建了幾個清單、幾個文件庫與子網站。" },
      { name: "資源回收筒 (Recycle bin)", description: "不小心刪除的重要檔案，可以在 93 天內從這裡救回來。" }
    ],
    suitableScenarios: [
      "建立全公司員工每日登入查看公告與福利的「企業入口網站 (Intranet)」。",
      "ISO 品保文管中心，集中控管所有標準作業程序 (SOP) 文件的版本與簽核狀態。",
      "建立部門專屬的知識庫 (Wiki)，把老員工的經驗結構化留存。",
      "建立請購、報修等線上表單清單，並串接 Power Automate 自動跑流程。"
    ]
  }
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

// 這裡就是替換成你最新 Vercel 網址的地方 👇
function getM365AppUrl(toolId: string): string {
  const urlMap: Record<string, string> = {
    'planner': 'https://planner-edu-web.vercel.app',
    'power-automate': 'https://power-automate-new.vercel.app?_vercel_share=Q40rvu7fMvpHclnz4E1Ots7RO5VlSBQl',
    'power-bi': 'https://app.powerbi.com',
    'sharepoint': 'https://sharepoint-alison411630188s-projects.vercel.app?_vercel_share=TeIhrXvLJZJw7WeZN7lw5fEYQqI2qIB5',
    'teams': 'https://teams.microsoft.com',
  };
  return urlMap[toolId] || 'https://www.microsoft.com';
}

export default function ToolDetail() {
  const [, params] = useRoute("/tools/:toolId");
  const toolId = params?.toolId as string;

  const tool = M365_TOOLS.find((t) => t.id === toolId);
  const details = toolDetails[toolId];

  if (!tool || !details) return <div className="p-20 text-center font-bold">手冊內容整備中...</div>;

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10">
      <div className="mx-auto px-6 md:px-10 py-12 max-w-[1440px] w-full">
        {/* 頂部標題與按鈕 */}
        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex items-start gap-8">
            <div className={`flex items-center justify-center shrink-0 transition-transform hover:scale-110 duration-300 w-16 h-16 sm:w-20 sm:h-20 ${toolId === 'teams' || toolId === 'power-automate' || toolId === 'power-bi' ? 'scale-[1.35]' : ''}`}>
              {getToolIcon(toolId)}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-extrabold text-foreground tracking-tight">{tool.name}</h1>
                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-widest border border-primary/20 shadow-sm">Manual</span>
              </div>
              <p className="text-lg text-foreground/60 mb-6 leading-relaxed font-medium">{tool.description}</p>
              
              <a
                href={getM365AppUrl(toolId)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 hover:scale-105 transition-all font-bold shadow-[0_0_20px_rgba(var(--primary),0.3)]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                打開 實戰學院
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
              <span className="w-1.5 h-7 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]" /> 工具概述
            </h2>
            <Card className="p-8 text-foreground/80 leading-relaxed text-lg border-black/5 dark:border-white/5 bg-muted/30 shadow-sm">
              {details.overview}
            </Card>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section>
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full" /> 你可以用它做什麼？
              </h3>
              <Card className="p-6 h-full border-black/5 dark:border-white/5 shadow-sm bg-card hover:shadow-md transition-shadow">
                <ul className="space-y-4">
                  {details.whatYouCanDo.map((item, idx) => {
                    const formattedItem = item.replace(/\((.*?)\)/g, '<strong class="font-mono text-[13px]">($1)</strong>');
                    return (
                      <li key={idx} className="flex gap-3 text-[15px] text-foreground/80 leading-relaxed font-medium">
                        <span className="text-primary font-bold shrink-0">{idx < 9 ? `0${idx + 1}` : idx + 1}.</span> 
                        <span dangerouslySetInnerHTML={{ __html: formattedItem }} />
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-teal-500 rounded-full" /> 基本結構名詞 (UI 對照)
              </h3>
              <Card className="p-6 h-full border-black/5 dark:border-white/5 shadow-sm bg-card hover:shadow-md transition-shadow">
                <ul className="space-y-4">
                  {details.basicStructure.map((item, idx) => {
                    const formattedItem = item.replace(/\((.*?)\)/g, '<strong class="font-mono text-[13px]">($1)</strong>');
                    return (
                      <li key={idx} className="flex items-start gap-3 text-[15px] text-foreground/80 leading-relaxed font-medium">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: formattedItem }} />
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </section>
          </div>

          <section className="mt-16">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-orange-500 rounded-full" /> 常用功能視圖
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {details.commonViews.map((view, idx) => {
                const formattedName = view.name.replace(/\((.*?)\)/g, '<strong class="font-mono text-[13px] ml-1">($1)</strong>');
                return (
                  <Card key={idx} className="p-5 border border-border/50 shadow-sm hover:border-orange-500/30 hover:shadow-md transition-all bg-card">
                    <p className="font-bold text-foreground mb-3 flex items-center gap-2" dangerouslySetInnerHTML={{ __html: `<span class="w-1 h-4 bg-orange-500 rounded-full"></span>` + formattedName }} />
                    <p className="text-sm text-foreground/60 leading-relaxed font-medium">
                      {view.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="mt-20">
            <h3 className="text-xl font-bold mb-6 mt-10 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-indigo-500 rounded-full" /> 實戰使用建議
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.usageSuggestions.map((item, idx) => {
                const formattedItem = item.replace(/\((.*?)\)/g, '<strong class="font-mono text-[13px]">($1)</strong>');
                return (
                  <Card 
                    key={idx} 
                    className="flex items-start gap-4 p-5 border border-border/50 shadow-sm hover:border-indigo-500/30 hover:shadow-md transition-all bg-card"
                  >
                    <span className="shrink-0 bg-indigo-500/10 text-indigo-500 w-8 h-8 flex items-center justify-center rounded-lg text-xs font-black mt-0.5 border border-indigo-500/20">
                      TIP
                    </span>
                    <span className="pt-1 leading-relaxed text-[15px] font-medium text-foreground/80" dangerouslySetInnerHTML={{ __html: formattedItem }} />
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="mt-16 pb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-green-500 rounded-full" /> 適合使用情境
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.suitableScenarios.map((item, idx) => (
                <Card key={idx} className="p-4 border border-green-500/20 shadow-sm flex items-center gap-3 bg-green-500/5 hover:bg-green-500/10 transition-colors">
                  <span className="text-xl shrink-0 drop-shadow-sm">✅</span> 
                  <span className="text-[15px] font-bold text-foreground/80 leading-relaxed">{item}</span>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
