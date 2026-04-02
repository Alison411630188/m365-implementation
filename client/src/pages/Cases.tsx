import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

/**
 * 應用案例頁面
 * 設計理念：企業級知識庫風格
 * - 七個真實業務情境案例
 * - 詳細的情境說明、痛點、目標、工具、流程等
 * - 可展開/收起的案例詳情
 */

interface CaseDetail {
  eventName: string;
  triggerRoles: string[];
  painPoints: string[];
  objectives: string[];
  recommendedTools: string[];
  operationFlow: string[];
  supplementaryNotes: string[];
  userStory: string;
  useCase: string;
  expectedBenefits: string[];
}

const cases: Record<string, CaseDetail> = {
  case1: {
    eventName: "部門主管指派工作並追蹤完成進度",
    triggerRoles: ["部門主管", "小組長", "團隊成員"],
    painPoints: [
      "工作指派後難以追蹤成員完成進度",
      "成員不清楚優先級和截止日期",
      "進度更新依賴人工詢問和郵件往來",
      "無法快速掌握哪些任務已完成、哪些延誤",
    ],
    objectives: [
      "建立清晰的工作分派和追蹤機制",
      "讓成員清楚了解任務優先級和截止日期",
      "實時掌握任務進度和完成狀態",
      "減少溝通成本和進度追蹤時間",
    ],
    recommendedTools: [
      "Planner：工作任務與進度追蹤",
      "Teams：工作通知與溝通",
    ],
    operationFlow: [
      "主管於 Planner 中建立計畫，代表部門或小組的工作項目集合",
      "主管依工作性質建立貯體（分類），例如『待開始』、『進行中』、『待確認』、『已完成』",
      "主管建立具體任務，填寫任務名稱、說明、優先級、截止日期與附件",
      "主管將任務指派給具體成員，成員會收到 Teams 通知與郵件提醒",
      "成員於 Planner 中查看被指派的任務，並更新進度（如『未開始』、『進行中』、『已完成』）",
      "主管定期檢視 Planner 的 Board 或 Grid 視圖，掌握整體進度與延誤項目",
      "主管可於 Teams 頻道中釘選 Planner 分頁，方便團隊成員隨時查看最新任務狀態",
      "任務完成後，成員標記為『已完成』，主管可查看完成時間與相關附件",
    ],
    supplementaryNotes: [
      "Planner 的優先級標籤（高、中、低）有助於成員快速識別重要任務",
      "設定截止日期後，系統會自動提醒成員，減少遺漏",
      "與 Teams 整合後，成員可在 Teams 中直接查看和更新任務，無需切換應用",
    ],
    userStory:
      "作為一名部門主管，我需要清楚地分派工作給團隊成員，並能即時掌握每項工作的進度。但如果成員不知道優先級、截止日期不清楚、進度更新又需要人工詢問，我就很難有效管理團隊工作。因此，我希望有一個統一的工作追蹤平台，讓我能清楚看到誰在做什麼、進度如何、是否有延誤，同時成員也能清楚知道自己的任務與期限。",
    useCase:
      "行銷部門主管需要協調內容製作、社群發布、廣告投放等多項工作。主管於 Planner 建立『Q1 行銷活動』計畫，依工作類型建立『內容製作』、『社群發布』、『廣告投放』三個 Bucket。主管為每個 Bucket 建立具體任務，指派給對應成員，設定優先級與截止日期。成員透過 Planner 查看被指派的任務，並在完成時更新進度。主管每週檢視 Planner 的進度報告，了解整體完成度與延誤項目，作為週會的討論依據。",
    expectedBenefits: [
      "工作分派清晰，成員無須詢問就能了解任務內容與期限",
      "進度透明化，主管可即時掌握完成狀態，及早發現延誤",
      "減少郵件往來和重複詢問，提升溝通效率",
      "成員優先級清晰，能更有效地安排工作順序",
      "完成記錄完整，便於後續績效評估與工作分析",
    ],
  },
  case2: {
    eventName: "專案負責人追蹤跨部門專案進度與協作狀態",
    triggerRoles: [
      "專案負責人",
      "部門主管",
      "專案經理",
      "PMO",
      "營運主管",
      "跨部門協作窗口",
    ],
    painPoints: [
      "跨部門專案涉及多項工作、議題、風險與文件，資訊分散在聊天、郵件、Excel、簡報中",
      "版本不一致，各部門掌握的資訊可能不同步",
      "專案負責人難以即時掌握各部門交付狀態與待處理事項",
      "協作部門因資訊不同步而延誤時程、重工或遺漏重要議題",
      "溝通成本高，追蹤困難",
    ],
    objectives: [
      "建立整合型專案協作工作區",
      "讓任務、議題、風險、需求變更與專案文件能在同一套 M365 框架下被集中管理",
      "協助專案負責人即時掌握進度",
      "提升跨部門溝通效率與專案透明度",
    ],
    recommendedTools: [
      "Teams：跨部門溝通與工作入口",
      "Planner：工作任務與里程碑追蹤",
      "SharePoint：專案文件、知識與站台整合",
    ],
    operationFlow: [
      "專案負責人或專案經理於 Teams 中建立跨部門專案團隊，並依專案主題、工作流或部門協作需求建立對應頻道",
      "在 Teams 頻道中新增 Planner 分頁，建立專案共享計畫，用來管理工作項目、負責人、截止日與執行狀態",
      "依專案性質建立不同任務分類或貯體，例如『待開始』、『進行中』、『待確認』、『已完成』或依里程碑階段區分",
      "將專案相關文件、作業規範、會議記錄、簡報、表單與範本統一儲存於 SharePoint 專案站台，確保版本一致與資料集中",
      "專案負責人可定期於 Teams 中檢視 Planner 任務進度，作為跨部門會議追蹤與溝通依據",
      "各部門成員可於 Teams 中直接進入對應任務或文件，更新執行情況、補充說明與回報進度，降低資訊來回確認成本",
      "專案推進過程中，可透過 Teams 會議、訊息與檔案共同編輯功能，持續同步專案狀況，並確保所有關鍵資訊都保留在同一工作區中",
    ],
    supplementaryNotes: [
      "Planner 適合管理專案任務、分工與里程碑，可清楚追蹤每項工作的負責人、截止日與完成狀態",
      "SharePoint 適合作為專案文件與知識資產的集中站台，便於跨部門成員查找最新版本文件與相關紀錄",
      "Teams、Planner 與 SharePoint 搭配使用，可形成完整的跨部門專案協作管理機制",
    ],
    userStory:
      "作為一名專案負責人或專案經理，我需要同時與多個部門協作推動專案，並持續追蹤各部門的任務進度、待解決議題、風險狀況與相關文件。但如果這些資訊分散在不同工具、不同檔案或不同對話紀錄中，我就很難快速掌握整體專案現況，也不容易在會議中清楚說明目前卡在哪裡、哪個部門還有哪些待辦。因此，我希望能有一個整合的專案工作區，讓所有任務、議題、風險與文件都能集中管理，協助我更有效地進行跨部門協調與進度追蹤。",
    useCase:
      "資訊部門導入新系統時，需同時與採購、人資、財務及使用單位協同作業。專案負責人先於 Teams 建立跨部門專案團隊，作為專案討論與協作入口；再透過 Planner 管理各部門的任務與里程碑，並將會議記錄、規格文件、教育訓練資料及相關範本集中存放在 SharePoint。透過這樣的方式，專案負責人可在同一工作區中統整專案執行情況，持續追蹤各部門任務、即時掌握風險與待解問題，並作為例會、專案檢討與後續決策的依據。",
    expectedBenefits: [
      "專案資訊集中管理，降低任務、議題、風險與文件分散的風險",
      "可利用 Planner 即時掌握任務進度、負責人與里程碑狀態，提升專案透明度",
      "各部門可於同一平台查看最新資訊，降低版本不一致、重工與溝通落差",
      "提升跨部門專案的追蹤效率、協作品質與整體管理效能",
    ],
  },
  case3: {
    eventName: "會議召集人整理決議並追蹤行動項目",
    triggerRoles: ["會議召集人", "會議記錄者", "與會成員"],
    painPoints: [
      "會議記錄分散，難以統一管理與追蹤",
      "決議事項與待辦事項不清楚，容易遺漏或重複",
      "責任人與完成期限不明確",
      "會後無法有效追蹤行動項目的完成狀態",
      "下次會議前無法快速回顧上次決議的執行情況",
    ],
    objectives: [
      "建立會議記錄與決議追蹤機制",
      "清晰區分決議事項、待辦事項、責任人與完成期限",
      "會後自動轉化為正式任務進行追蹤",
      "提升會議延續性與執行效率",
    ],
    recommendedTools: [
      "Planner：將待辦事項轉化為正式任務",
      "Teams：會議討論與決議通知",
    ],
    operationFlow: [
      "會議進行期間，由會議主持人、會議記錄者或與會成員記錄討論重點與決議內容",
      "在會議筆記中明確區分『決議事項』、『待辦事項』、『責任人』與『完成期限』，確保資訊完整且可追蹤",
      "會議結束後，由會議主持人或記錄者將已確認的待辦事項手動整理至 Planner，建立為正式任務",
      "建立任務時，應填寫任務名稱、負責人、截止日、說明內容與必要附件，讓後續執行依據清楚明確",
      "各責任人可透過 Planner 查看被指派的工作，並依實際執行情況更新進度",
      "會議主持人、部門主管或專案經理可於會後定期檢視 Planner 中的任務狀態，追蹤完成情形、確認逾期項目與後續待辦",
      "下次會議召開前，可先檢視前次會議所產生的任務與完成結果，避免相同事項重複討論，提高會議延續性與執行效率",
    ],
    supplementaryNotes: [
      "在會議記錄中使用清晰的格式與標籤，便於後續快速查找與轉化為任務",
      "Planner 的優先級與截止日期設定有助於責任人快速了解工作緊急度",
      "定期檢視 Planner 的進度報告，可作為下次會議的重要參考資料",
    ],
    userStory:
      "作為會議召集人或記錄者，我需要在會議中清楚記錄決議事項與待辦事項，並確保會後能有效追蹤這些行動項目的完成狀態。但如果會議記錄只是存在一份文件中，責任人不清楚、期限模糊，會後也沒有系統的追蹤機制，那麼很多決議就會被遺忘或延誤。因此，我希望能有一個整合的方案，讓會議筆記、決議與任務能無縫銜接，確保每項決議都能被追蹤到完成。",
    useCase:
      "部門主管每週召開例會，討論工作進度、解決問題與規劃下週工作。主管於會議期間記錄討論重點，與會成員即時補充說明。會議結束時，主管在筆記中明確列出『決議事項』、『待辦事項』、『責任人』與『完成期限』。會後，主管將待辦事項轉化為 Planner 中的正式任務，指派給對應成員。各成員透過 Planner 查看被指派的工作，並在完成時更新進度。下週例會前，主管檢視上週任務的完成狀況，作為例會討論與績效評估的依據。",
    expectedBenefits: [
      "會議決議清晰記錄，避免事後爭議或遺漏",
      "待辦事項與責任人明確，成員無須詢問就能了解工作內容與期限",
      "會後自動轉化為任務，確保決議不會被遺忘",
      "可系統地追蹤行動項目的完成狀態，提升執行效率",
      "下次會議可快速回顧上次決議的執行情況，提升會議延續性",
    ],
  },
  case4: {
    eventName: "新進員工入職與資訊導引",
    triggerRoles: ["HR", "部門主管", "新進員工", "導師"],
    painPoints: [
      "新進員工入職流程複雜，需要完成多項行政手續與系統設定",
      "入職資訊分散在不同部門、不同系統或不同文件中",
      "新進員工容易遺漏重要步驟或資訊",
      "導師與部門主管無法有效追蹤新進員工的入職進度",
      "重複的入職流程導致效率低下",
    ],
    objectives: [
      "建立標準化的新進員工入職流程",
      "集中管理入職資訊與檢查清單",
      "讓新進員工清楚了解入職步驟與時程",
      "協助導師與部門主管追蹤入職進度",
      "提升新進員工的入職體驗與融入速度",
    ],
    recommendedTools: [
      "Planner：入職任務與里程碑管理",
      "SharePoint：入職資訊、政策、表單與培訓資料集中存放",
      "Teams：新進員工導引與溝通",
    ],
    operationFlow: [
      "HR 建立『新進員工入職檢查清單』，列出所有必要的入職步驟（如系統帳號開通、設備領取、部門導引、政策簽署等）",
      "HR 為每位新進員工建立一筆記錄，填寫入職日期、部門、職位、導師與完成期限",
      "HR 或導師於 Planner 中為新進員工建立『入職計畫』，依時間軸安排各項入職任務與培訓課程",
      "新進員工於 Planner 中查看入職任務，逐項完成並更新進度",
      "導師與部門主管可於 Planner 中檢視新進員工的入職進度，及時提供協助與指導",
      "HR 可定期檢視入職進度，確保所有新進員工都按時完成入職流程",
      "將新進員工所需的政策、表單、培訓資料與常見問題集中存放於 SharePoint，新進員工可隨時查閱",
      "入職完成後，HR 可根據 Planner 的記錄進行總結，持續改進入職流程",
    ],
    supplementaryNotes: [
      "Planner 的時間軸視圖可清楚展示入職計畫的各個階段與里程碑",
      "在 SharePoint 上建立『新進員工資訊中心』，集中存放所有入職相關資訊，便於新進員工自助查閱",
      "利用 Teams 頻道與新進員工進行即時溝通與問題解答",
    ],
    userStory:
      "作為 HR 或部門主管，我需要確保新進員工能順利完成入職流程，並快速融入團隊。但如果入職資訊分散、流程不清楚、進度無法追蹤，新進員工就容易感到迷茫，而我們也無法有效管理入職過程。因此，我希望有一個統一的入職管理平台，讓新進員工清楚知道要做什麼、何時完成，同時我也能隨時掌握入職進度。",
    useCase:
      "公司每月平均招聘 5-10 名新進員工。HR 建立『新進員工入職檢查清單』，列出 20 項標準入職步驟。新進員工入職時，HR 為其建立一筆記錄，並在 Planner 中建立『入職計畫』，安排為期 4 週的入職課程與任務。新進員工可在 Planner 中查看自己的入職進度，並在完成各項步驟時更新狀態。導師與部門主管可隨時檢視新進員工的入職進度，及時提供協助。HR 每月檢視 Planner 的數據，評估入職流程的效率與效果，並持續優化。",
    expectedBenefits: [
      "新進員工入職流程標準化，減少遺漏與重複",
      "新進員工清楚了解入職步驟與時程，提升入職體驗",
      "HR、導師與部門主管可有效追蹤入職進度，及時提供協助",
      "集中管理入職資訊，新進員工可自助查閱，減少重複詢問",
      "提升新進員工的融入速度與工作效率",
    ],
  },
  case5: {
    eventName: "一般員工提出申請、送出簽核並查詢核准進度",
    triggerRoles: ["一般員工", "部門主管", "簽核人員", "HR"],
    painPoints: [
      "申請流程不清楚，員工不知道要向誰申請、如何提交",
      "申請單據分散在不同系統或紙本中，難以追蹤",
      "簽核人員無法有效管理待簽核的申請單",
      "員工無法即時了解申請的簽核進度",
      "申請記錄不完整，難以查詢歷史申請與核准狀況",
    ],
    objectives: [
      "建立標準化的申請與簽核流程",
      "集中管理各類申請單據",
      "讓員工清楚了解申請進度",
      "提升簽核效率與透明度",
      "完整保存申請記錄，便於查詢與分析",
    ],
    recommendedTools: [
      "Power Automate：自動化簽核流程與通知",
      "Teams：申請通知與進度查詢",
    ],
    operationFlow: [
      "HR 建立『申請單據』管理系統，設定欄位包括『申請類型』（假單、加班、採購等）、『申請人』、『申請日期』、『申請內容』、『簽核人』、『簽核狀態』與『備註』",
      "員工提交申請單，填寫申請類型、內容與相關附件",
      "利用 Power Automate 建立簽核流程，當員工提交申請時，自動通知相應的簽核人員進行審核",
      "簽核人員於 Teams 中查看待簽核的申請單，並進行核准或駁回",
      "申請單的簽核狀態自動更新，員工可於 Teams 中查詢申請進度",
      "申請核准後，Power Automate 可自動執行後續流程（如發送確認郵件、更新人資系統等）",
      "員工可於任何時間查詢自己的申請歷史與核准狀況，便於後續參考",
      "HR 可定期檢視申請數據，進行統計分析與流程優化",
    ],
    supplementaryNotes: [
      "申請系統的欄位設計應清楚區分不同類型的申請，便於篩選與管理",
      "Power Automate 可根據申請類型自動路由至不同的簽核人員，提升效率",
      "在 Teams 中設定通知，讓簽核人員能及時收到待簽核的申請提醒",
      "保留完整的申請記錄，便於後續查詢、審計與流程改進",
    ],
    userStory:
      "作為一般員工，我需要提出各類申請（如假單、加班、採購等），並能清楚了解申請的簽核進度。但如果申請流程不清楚、簽核進度無法追蹤、申請單據分散在不同地方，我就會感到困擾，甚至可能遺漏重要的申請期限。因此，我希望有一個簡單清晰的申請平台，讓我能輕鬆提交申請、隨時查詢進度，並收到簽核結果的通知。",
    useCase:
      "員工需要申請年假。員工提交假單申請，填寫假期類型、起訖日期與原因。系統自動通知部門主管進行審核。主管查看申請單，並進行核准或駁回。申請狀態自動更新，員工於 Teams 中收到通知。員工可隨時查詢申請進度。核准後，系統自動發送確認郵件，並更新人資系統的假期記錄。",
    expectedBenefits: [
      "申請流程標準化，員工清楚知道如何提交申請",
      "申請進度透明，員工可隨時查詢簽核狀況",
      "簽核流程自動化，提升簽核效率與準確性",
      "申請記錄完整，便於查詢歷史申請與統計分析",
      "減少郵件往來與人工追蹤，提升整體工作效率",
    ],
  },
  case6: {
    eventName: "現場人員即時通報事件並追蹤處理結果",
    triggerRoles: ["現場人員", "值班主管", "事件處理人員", "管理層"],
    painPoints: [
      "現場事件通報流程不清楚，事件可能被遺漏或延誤",
      "事件資訊分散，難以統一管理與追蹤",
      "值班主管無法即時掌握所有待處理事件",
      "事件處理進度無法實時更新，上層無法及時了解狀況",
      "事件記錄不完整，難以進行事後分析與改進",
    ],
    objectives: [
      "建立即時的事件通報與追蹤機制",
      "集中管理所有現場事件",
      "讓值班主管能即時掌握待處理事件",
      "實時更新事件處理進度",
      "完整保存事件記錄，便於事後分析與改進",
    ],
    recommendedTools: [
      "Power Automate：事件自動通知與流程",
      "Teams：即時事件通知與溝通",
      "Power BI：事件統計與分析",
    ],
    operationFlow: [
      "HR 或管理層建立『現場事件通報』管理系統，設定欄位包括『事件類型』、『通報人』、『通報時間』、『事件位置』、『事件描述』、『優先級』、『處理人』、『處理狀態』與『處理結果』",
      "現場人員發現事件時，立即提交事件通報，填寫事件類型、位置、描述與優先級，並上傳相關照片或文件",
      "利用 Power Automate 設定自動通知，當事件被提交時，自動通知值班主管與相應的處理人員進行處理",
      "值班主管於 Teams 中查看待處理的事件，並指派給對應的處理人員",
      "處理人員於系統中更新事件處理進度（如『已接收』、『處理中』、『已解決』等），並上傳處理結果與照片",
      "現場人員與值班主管可實時查看事件的處理進度，及時了解狀況",
      "事件解決後，處理人員填寫『處理結果』與『完成時間』，事件記錄自動歸檔",
      "管理層可定期檢視事件數據，利用 Power BI 進行統計分析，識別常見事件類型與改進機會",
    ],
    supplementaryNotes: [
      "事件系統的優先級欄位應清楚區分事件緊急度，便於快速處理",
      "Power Automate 可根據事件類型自動路由至不同的處理人員，提升效率",
      "在 Teams 中設定通知，讓值班主管能及時收到新事件的提醒",
      "利用 Power BI 分析事件數據，識別常見問題與改進方向",
    ],
    userStory:
      "作為現場人員或值班主管，我需要能快速通報現場事件，並實時追蹤事件的處理進度。但如果事件通報流程不清楚、處理進度無法追蹤、上層無法及時了解狀況，就可能導致事件處理延誤或遺漏，影響安全與運營。因此，我希望有一個即時的事件通報與追蹤系統，讓現場人員能快速提交事件、值班主管能實時掌握狀況、上層能及時了解進展。",
    useCase:
      "工廠現場發生安全事件。現場人員立即提交事件通報，填寫事件類型（安全事件）、位置、描述與優先級（高），並上傳現場照片。系統自動通知值班主管與安全人員。值班主管於 Teams 中收到通知，立即查看事件詳情，並指派給安全人員進行處理。安全人員到達現場後，於系統中更新處理進度，上傳處理措施與照片。現場人員與值班主管可實時查看處理進度。事件解決後，安全人員填寫『處理結果』，事件記錄自動歸檔。管理層定期檢視事件數據，識別常見問題並進行改進。",
    expectedBenefits: [
      "事件通報即時，減少處理延誤",
      "事件追蹤透明，值班主管與上層能實時掌握狀況",
      "事件記錄完整，便於事後分析與改進",
      "自動通知機制，確保事件不被遺漏",
      "提升現場安全管理與應急響應能力",
    ],
  },
  case7: {
    eventName: "HR 與部門主管蒐集員工回饋與滿意度",
    triggerRoles: ["HR", "部門主管", "員工"],
    painPoints: [
      "回饋蒐集方式不統一，難以系統地收集員工意見",
      "回饋數據分散，難以進行有效的分析與追蹤",
      "改進措施的成效無法量化評估",
      "員工回饋無法及時反映到組織決策中",
      "缺乏完整的回饋與改進機制",
    ],
    objectives: [
      "建立系統化的員工回饋蒐集機制",
      "集中管理回饋數據，便於分析與追蹤",
      "快速識別員工關鍵問題與改進機會",
      "追蹤改進措施的執行與成效",
      "提升組織透明度與員工參與度",
    ],
    recommendedTools: [
      "Power Automate：自動化回饋收集與提醒",
      "Teams：回饋結果分享與討論",
      "Power BI：回饋數據分析與可視化",
    ],
    operationFlow: [
      "HR 建立『員工滿意度調查』問卷，包括涵蓋工作環境、薪酬、發展機會等維度的問題",
      "HR 透過 Power Automate 定期向員工發送問卷邀請，並設定回收期限",
      "員工填寫問卷，提供對工作環境、管理、發展機會等方面的反饋",
      "系統自動收集問卷回應，並將數據集中存儲",
      "HR 利用 Power BI 生成分析報告，識別員工最關注的問題與改進機會",
      "HR 與各部門主管於 Teams 中討論調查結果，共同制定改進計畫",
      "各部門主管執行改進措施，並於 Teams 中定期分享進展",
      "定期進行後續調查，評估改進措施的成效，形成持續改進循環",
    ],
    supplementaryNotes: [
      "問卷設計應清晰易懂，避免過長或複雜的問題",
      "Power Automate 可根據不同部門或職位自動發送不同的問卷版本",
      "在 Teams 中定期分享回饋結果與改進進展，提升組織透明度與員工參與度",
      "利用 Power BI 的可視化功能，讓數據更容易被理解與討論",
    ],
    userStory:
      "作為 HR 或部門主管，我需要了解員工的滿意度與關鍵問題，以便制定改進措施。但如果回饋蒐集方式不統一、數據難以分析、改進成效無法追蹤，我就很難有效改善員工體驗與組織文化。因此，我希望有一個完整的回饋蒐集與分析系統，讓我能系統地蒐集員工意見、快速分析問題、追蹤改進成效。",
    useCase:
      "HR 建立『員工滿意度調查』問卷，包括 20 個問題涵蓋工作環境、薪酬、發展機會等維度。HR 邀請全體員工填寫問卷，回收率達 80%。系統自動收集數據，HR 將結果匯入進行分類。HR 利用 Power BI 生成分析報告，發現『職涯發展機會』與『工作與生活平衡』是員工最關注的兩個問題。HR 與各部門主管於 Teams 中討論結果，制定改進計畫（如提供更多培訓機會、調整工作時程等）。三個月後進行下一次調查，評估改進措施的成效。",
    expectedBenefits: [
      "回饋蒐集標準化，確保覆蓋所有重要維度",
      "回饋數據集中管理，便於分析與追蹤",
      "快速識別員工關鍵問題與改進機會",
      "改進措施執行透明，提升員工參與度與信任感",
      "形成持續改進循環，提升組織整體績效與員工滿意度",
    ],
  },
};

export default function Cases() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            M365 應用情境案例
          </h1>
          <p className="text-foreground/70 text-lg">
            瞭解 Microsoft 365 在不同業務場景中的實際應用，透過真實案例學習如何提升工作效率與協作品質。
          </p>
        </div>

        <div className="space-y-4">
          {Object.entries(cases).map(([key, caseData]) => (
            <Card key={key} className="border border-border/50 overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={key} className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center gap-3 text-left">
                      <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-foreground text-lg">
                          {caseData.eventName}
                        </h3>
                        <p className="text-sm text-foreground/60 mt-1">
                          涉及角色：{caseData.triggerRoles.join("、")}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 py-4 bg-background/50 border-t border-border/30">
                    <div className="space-y-6">
                      {/* 痛點 */}
                      <div>
                        <h4 className="font-bold text-foreground mb-3">
                          痛點
                        </h4>
                        <ul className="space-y-2">
                          {caseData.painPoints.map((point, idx) => (
                            <li
                              key={idx}
                              className="flex gap-3 text-foreground/70 text-sm"
                            >
                              <span className="flex-shrink-0">❌</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 目標 */}
                      <div>
                        <h4 className="font-bold text-foreground mb-3">
                          目標
                        </h4>
                        <ul className="space-y-2">
                          {caseData.objectives.map((obj, idx) => (
                            <li
                              key={idx}
                              className="flex gap-3 text-foreground/70 text-sm"
                            >
                              <span className="flex-shrink-0">🎯</span>
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 建議工具 */}
                      <div>
                        <h4 className="font-bold text-foreground mb-3">
                          建議 M365 工具
                        </h4>
                        <ul className="space-y-2">
                          {caseData.recommendedTools.map((tool, idx) => (
                            <li
                              key={idx}
                              className="flex gap-3 text-foreground/70 text-sm"
                            >
                              <span className="flex-shrink-0">🔧</span>
                              <span>{tool}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 操作流程 */}
                      <div>
                        <h4 className="font-bold text-foreground mb-3">
                          操作流程
                        </h4>
                        <ol className="space-y-2">
                          {caseData.operationFlow.map((step, idx) => (
                            <li
                              key={idx}
                              className="flex gap-3 text-foreground/70 text-sm"
                            >
                              <span className="flex-shrink-0 font-semibold text-primary">
                                {idx + 1}.
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* 補充說明 */}
                      <div>
                        <h4 className="font-bold text-foreground mb-3">
                          補充說明
                        </h4>
                        <ul className="space-y-2">
                          {caseData.supplementaryNotes.map((note, idx) => (
                            <li
                              key={idx}
                              className="flex gap-3 text-foreground/70 text-sm"
                            >
                              <span className="flex-shrink-0">💡</span>
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* User Story */}
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <h4 className="font-bold text-foreground mb-2">
                          User Story
                        </h4>
                        <p className="text-foreground/70 text-sm">
                          {caseData.userStory}
                        </p>
                      </div>

                      {/* Use Case */}
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <h4 className="font-bold text-foreground mb-2">
                          Use Case
                        </h4>
                        <p className="text-foreground/70 text-sm">
                          {caseData.useCase}
                        </p>
                      </div>

                      {/* 預期效益 */}
                      <div>
                        <h4 className="font-bold text-foreground mb-3">
                          預期效益
                        </h4>
                        <ul className="space-y-2">
                          {caseData.expectedBenefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex gap-3 text-foreground/70 text-sm"
                            >
                              <span className="flex-shrink-0 text-primary">
                                ⭐
                              </span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
