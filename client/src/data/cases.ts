import { Scenario } from "@/shared/types/scenario";

export const SCENARIOS: Scenario[] = [
  {
    id: "teams-message-to-task",
    tools: ["Teams", "Planner"],
    title: "【交辦事項不漏接】如何把一句聊天訊息，變成你的待辦清單？",
    context: "你是否也遇過：主管在 Teams 裡一句『這個麻煩處理一下』，結果訊息一多就被洗掉，回頭想找卻找不到了？",
    userStory: "身為專案執行者，我希望能有個簡單的方法，把我收到的臨時任務，直接加入到我的工作清單中，避免遺忘。",
    goal: "確保所有臨時交辦事項都被妥善追蹤，不會因訊息洗版而遺漏。",
    targetAudience: "所有會透過 Teams 接收臨時性任務的員工。",
    solution: "其實，你只需要 3 個點擊，就能把那則訊息「釘」在你的 Planner 任務看板上，確保所有交辦事項都被妥善追蹤。",
    steps: [
      "<strong>1. 定位訊息：</strong> 在 Teams 的聊天視窗中，找到主管交辦事項的那則訊息。",
      "<strong>2. 呼叫選單：</strong> 將滑鼠輕輕移到該訊息的右上方，會自動浮現一排小圖示。請點擊最右邊的 <strong>「...」(更多選項)</strong> 按鈕。",
      "<strong>3. 找到建立工作選項：</strong> 在跳出的下拉選單中，將滑鼠移至 <strong>「更多動作」</strong>。此時會展開第二層選單，請從中選擇 <strong>「建立工作」</strong>。",
      "<strong>4. 填寫工作細節：</strong> 畫面會跳出一個「建立工作」的對話框。在這裡，你可以：\n- <strong>修改標題：</strong> 系統會自動將訊息內容帶入標題，你可以修改成更精確的任務名稱。\n- <strong>選擇位置：</strong> 決定要將這個任務放在個人的「工作(Tasks)」清單，還是某個團隊的 Planner「計畫」看板中。\n- <strong>設定期限：</strong> 設定任務的「到期日」與「優先順序」。",
      "<strong>5. 新增工作：</strong> 確認所有資訊無誤後，點擊右下角的 <strong>「新增工作」</strong> 按鈕。",
      "<strong>6. 確認結果：</strong> 你的 Teams 右下角會跳出一個確認通知。現在，你可以前往 Planner 或 Teams 內的「工作」應用程式，就會看到這項新任務已經被成功加進去了！"
    ],
    tags: ["任務管理", "團隊協作", "Planner"]
  },
  {
    id: "sharepoint-faq-knowledge-base",
    tools: ["SharePoint"],
    title: "【告別重複回答】三步驟打造團隊專屬的自動問答庫",
    context: "你也是那個每天都在回答新人「請問OOO怎麼申請？」的資深同事嗎？這些重複的問題，正在吞噬你寶貴的工作時間。",
    userStory: "身為部門的資深同仁，我希望能建立一個地方，讓新人可以自己找到答案，而不是所有問題都來找我。",
    goal: "建立一個可供團隊成員自助查詢的中央知識庫，減少重複性問題的解答時間。",
    targetAudience: "部門主管、資深員工、或需要負責新人訓練的人員。",
    solution: "利用 SharePoint 清單，我們可以建立一個「活的」知識庫。它不僅能讓新人自助查詢，未來維護更新也比 Excel 或 Word 文件方便一百倍。",
    steps: [
      "<strong>1. 建立清單：</strong> 前往你的部門 SharePoint 網站，點擊左上角的 <strong>「+ 新增」</strong> 按鈕，然後選擇 <strong>「清單 (List)」</strong>。選擇 <strong>「空白清單」</strong> 並命名為「部門 FAQ 知識庫」。",
      "<strong>2. 設計欄位結構：</strong> 清單建立後，你需要設計知識庫的欄位。點擊 <strong>「+ 新增欄」</strong>：\n- 新增一個 <strong>「選項」</strong> 類型欄位，命名為「問題分類」，並加入「人事」、「IT」、「行政」等選項。\n- 新增一個 <strong>「多行文字」</strong> 類型欄位，命名為「解決方案」，並開啟「使用增強式 RTF 文字」選項，這樣答案才能包含圖片或連結。",
      "<strong>3. 設定智慧檢視：</strong> 這是最關鍵的一步！點擊清單右上角的 <strong>「切換檢視選項」</strong> (看起來像一個篩子)，選擇 <strong>「將檢視另存為」</strong>，命名為「分類檢視」。",
      "<strong>4. 開啟群組功能：</strong> 再次點擊 <strong>「切換檢視選項」</strong>，選擇 <strong>「編輯目前檢視」</strong>。在設定頁面中，找到 <strong>「群組依據」</strong> 的區塊。將第一個群組欄位設定為 <strong>「問題分類」</strong>。",
      "<strong>5. 大功告成：</strong> 儲存檢視後，回到你的清單頁面。現在，每當你新增一個問題並選擇分類，它就會自動被收納到對應的分類群組下，形成一個可折疊、可搜尋的專業知識庫！"
    ],
    tags: ["知識管理", "SharePoint List", "新人訓練"]
  },
    {
    id: "powerbi-row-level-security",
    tools: ["Power BI"],
    title: "【報表也能保護機密】如何讓主管只看得到自己部門的數據？",
    context: "你做的銷售總表，需要給北、中、南區的主管看，但你又不希望北區主管看到南區的業績。難道要做三份不同的報表嗎？",
    userStory: "身為一位 BI 分析師，我希望能用「一份」報表，智慧地呈現給「不同的人」看，同時確保敏感數據不會外洩。",
    goal: "在同一份儀表板中，根據檢視者的身份，動態篩選並只顯示其權限範圍內的數據。",
    targetAudience: "需要製作包含敏感或分級資訊的 Power BI 報表製作者。",
    solution: "不需要！Power BI 的「角色層級安全性 (RLS)」功能，讓你可以發布同一份儀表板，但不同主管登入後，只會看到與他權限相符的資料。",
    steps: [
      "<strong>1. 建立角色：</strong> 在 Power BI Desktop 中，切換到上方 <strong>「模型化」</strong> 頁籤，點擊 <strong>「管理角色」</strong>。在跳出視窗中，點擊 <strong>「建立」</strong> 來新增一個角色，並命名為「區域主管」。",
      "<strong>2. 設定篩選規則：</strong> 選擇剛剛建立的「區域主管」角色。在右側的「資料表」中，找到包含地區資訊的資料表 (例如：`Sales`)，點擊旁邊的 <strong>「...」</strong>，選擇 <strong>「新增篩選」</strong>，然後選擇地區欄位 (例如：`[Region]`)。",
      "<strong>3. 撰寫 DAX 運算式：</strong> 在上方的 DAX 運算式編輯列中，輸入規則：`[Region] = USERPRINCIPALNAME()`。\n💡 <strong>原理說明：</strong> 這行程式碼的意思是「讓地區欄位的值，等於目前登入使用者的 Email」。你需要確保你的資料表中有一個欄位可以對應到使用者的 Email 或可識別的名稱。",
      "<strong>4. 驗證角色：</strong> 點擊 <strong>「另存」</strong> 後，回到「模型化」頁籤，點擊 <strong>「以角色檢視」</strong>。勾選剛剛建立的「區域主管」角色，並在下方輸入框模擬輸入某個主管的 Email，你就可以預覽他登入後會看到的報表畫面。",
      "<strong>5. 發佈與指派：</strong> 將報表發佈到 Power BI 服務 (雲端)。前往該報表的 <strong>「資料集」</strong> > <strong>「安全性」</strong> 設定。你會看到「區域主管」這個角色，將對應主管的 Email 帳號加入到這個角色群組中。",
      "<strong>6. 完成！</strong> 現在，當不同主管登入查看這份報表時，Power BI 就會自動根據他的 Email，篩選出他所屬區域的數據，完美實現一份報表、千人千面的權限控管！"
    ],
    tags: ["資料安全", "Power BI", "權限管理", "RLS"]
  },
  {
    id: "powerautomate-approval-flow",
    tools: ["Power Automate", "SharePoint"],
    title: "【擺脫紙本簽核】如何讓你的請假單、採購單自動化？",
    context: "你的請假單還在用 Email 或紙本傳遞嗎？常常不知道現在簽到哪個主管那，也不知道何時才會核准。",
    userStory: "身為行政人員，我希望能建立一個自動化的簽核流程，讓同仁線上填單後，系統就自動依序通知主管，並在核准後通知申請人。",
    goal: "將手動、紙本的簽核流程，轉變為全自動、可追蹤、流程透明的線上系統。",
    targetAudience: "公司內的行政人員、IT 人員、以及任何需要處理簽核流程的部門。",
    solution: "使用 Power Automate 的「核准」流程，你可以輕鬆打造一個全自動、流程透明、可追蹤的線上簽核系統。",
    steps: [
      "<strong>1. 從範本快速開始：</strong> 登入 Power Automate，點擊左側 <strong>「建立」</strong>，然後選擇 <strong>「從範本開始」</strong>。在搜尋框輸入「核准」，你會找到官方提供的範本，例如 <strong>「當 SharePoint 中新增項目時啟動核准」</strong>，直接點擊使用它。",
      "<strong>2. 設定流程觸發點：</strong> 流程的第一個區塊是「觸發程序」。\n- <strong>網站位址：</strong> 選擇你的 SharePoint 網站。\n- <strong>清單名稱：</strong> 選擇你用來收集請假/採購申請的那個清單。",
      "<strong>3. 抓取主管資訊 (重要！)：</strong> 在觸發程序下方，點擊 <strong>「+ 新增步驟」</strong>。搜尋並加入 <strong>「取得管理員 (V2)」</strong> 這個動作。在「使用者 (UPN)」欄位中，從右側的「動態內容」選擇 <strong>「建立者 電子郵件」</strong>。\n💡 <strong>原理說明：</strong> 這一步會自動根據送出申請的人，往上找到他組織圖中的直屬主管。",
      "<strong>4. 設計核准卡片：</strong> 新增 <strong>「啟動並等候核准」</strong> 這個動作。\n- <strong>核准類型：</strong> 選擇「核准/拒絕 - 第一個回應」即可。\n- <strong>標題：</strong> 輸入「[動態內容：申請項目標題] - 簽核申請」。\n- <strong>指派對象：</strong> 從動態內容中，選擇剛剛「取得管理員」動作回傳的 <strong>「郵件」</strong>。",
      "<strong>5. 設定條件分支：</strong> 在核准動作下方，新增一個 <strong>「條件」</strong> 控制。\n- 在條件中，設定如果「核准」動作的 <strong>「結果 (Outcome)」</strong> 等于 <strong>「Approve」</strong>。\n- <strong>如果是：</strong> 在「是」的分支中，新增「傳送電子郵件」動作，通知原申請人「您的申請已核准」。\n- <strong>如果否：</strong> 在「否」的分支中，也新增「傳送電子郵件」動作，通知申請人被拒絕，並可以附上主管的「註解」。",
      "<strong>6. 啟用流程：</strong> 儲存並測試你的流程。現在，只要有人在 SharePoint 清單中新增一筆申請，這個自動化的簽核旅程就會開始！"
    ],
    tags: ["流程自動化", "Power Automate", "線上簽核"]
  },
  {
    id: "outlook-meeting-poll",
    tools: ["Outlook"],
    title: "【開會喬時間神器】不用再猜大家何時有空",
    context: "為了安排一場跨部門會議，你來來回回寄了十幾封 Email，才終於找到大家都有空的時間。",
    userStory: "身為專案經理，我希望有一種有效率的方式，可以快速統計出最適合多數人開會的時段。",
    goal: "快速、有效地找出多數與會者都有空的會議時間，減少來回溝通的成本。",
    targetAudience: "任何需要安排多人會議的專案經理、部門秘書或團隊領導。",
    solution: "Outlook 內建的「排程投票 (Scheduling Poll)」功能 (前身為 FindTime)，讓你可以發起一個投票，系統會自動比對所有人的行事曆，並推薦出最佳時段。",
    steps: [
        "<strong>1. 撰寫新郵件：</strong> 在 Outlook 中，點擊 <strong>「新郵件」</strong>，就像你平常寄信一樣。",
        "<strong>2. 加入與會者：</strong> 將所有需要參加會議的人，都加到 <strong>「收件者」</strong> 或 <strong>「副本」</strong> 欄位。",
        "<strong>3. 啟動排程投票：</strong> 在郵件撰寫視窗上方的功能列中，找到並點擊 <strong>「排程投票 (Scheduling Poll)」</strong> 的圖示。如果沒看到，它可能收在 <strong>「...」</strong> (更多選項) 裡面。",
        "<strong>4. 選擇建議時段：</strong> Outlook 會在右側開啟一個窗格，自動讀取所有收件者的行事曆，並用顏色標示出大家都有空的時段。綠色代表多數人有空，是最佳建議。請挑選數個你希望提供的選項。",
        "<strong>5. 建立並分享投票：</strong> 選好時段後，點擊 <strong>「下一步」</strong>，確認設定後點擊 <strong>「新增至電子郵件」</strong>。一個精美的投票表格會自動插入到你的郵件內容中。",
        "<strong>6. 發送並等待結果：</strong> 發送郵件後，收件者可以直接在信中進行投票。你則可以在排程投票的儀表板上，即時看到哪個時段獲得最多票數，然後一鍵安排會議！"
    ],
    tags: ["會議效率", "Outlook", "FindTime"]
},
{
    id: "powerautomate-task-reminder",
    tools: ["Power Automate", "Planner", "Teams"],
    title: "【任務到期自動提醒】讓機器人當你的貼身秘書",
    context: "專案一多，團隊成員就容易忘記 Planner 上的任務截止日期，導致進度延遲。",
    userStory: "作為專案經理，我希望系統能自動在任務到期的那一天，發送提醒給負責人，確保任務被及時處理。",
    goal: "實現任務到期日的自動化提醒，降低人為遺忘的風險，提高專案的準時交付率。",
    targetAudience: "需要管理多項任務與截止日期的專案團隊。",
    solution: "設定一個每日運行的 Power Automate 流程，自動檢查 Planner 中今天到期的任務，並在 Teams 中發送私人訊息提醒負責人。",
    steps: [
        "<strong>1. 建立排程流程：</strong> 在 Power Automate，點擊 <strong>「建立」</strong> > <strong>「已排程的雲端流程」</strong>。將流程命名為「每日 Planner 任務提醒」，設定為每天上午 9:00 執行一次。",
        "<strong>2. 列出所有任務：</strong> 新增一個 <strong>「列出工作」</strong> (Planner) 動作。選擇你想要檢查的「群組/團隊」與「計畫識別碼」。",
        "<strong>3. 遍歷每個任務：</strong> 在「列出工作」下方，新增一個 <strong>「套用至各項」</strong> 的控制。將上一步的「值 (value)」放入此欄位。這樣流程就會逐一檢查每一張任務卡片。",
        "<strong>4. 加入條件判斷：</strong> 在「套用至各項」的迴圈內，新增一個 <strong>「條件」</strong> 控制。我們的目標是找出「今天到期」且「尚未完成」的任務。所以條件是：\n- `任務的 [進度] 不等於 \'completed\'`  <strong>以及</strong>\n- `任務的 [到期日] 等於 utcNow(\'yyyy-MM-dd\')` (這是一個運算式，代表今天的日期)",
        "<strong>5. 發送 Teams 提醒：</strong> 在條件的「是」分支中，新增 <strong>「在聊天或頻道中張貼訊息」</strong> (Teams) 動作。\n- <strong>張貼為：</strong> 選擇「流程機器人 (Flow bot)」。\n- <strong>張貼在：</strong> 選擇「與流程機器人聊天」。\n- <strong>收件者：</strong> 從動態內容中，找到並選擇 <strong>「指派對象 使用者識別碼」</strong>。\n- <strong>訊息：</strong> 設計你的提醒訊息，例如：『哈囉！提醒您，Planner 任務「[任務標題]」今天到期囉！』",
        "<strong>6. 儲存並執行：</strong> 儲存流程後，這個自動小秘書就會每天準時幫你檢查任務，並溫柔地提醒你的團隊成員！"
    ],
    tags: ["自動化", "任務管理", "Power Automate", "Planner"]
  },
  {
    id: "sharepoint-leave-request-system",
    tools: ["SharePoint", "Power Automate", "Teams"],
    title: "【線上請假系統DIY】告別混亂的 Email 請假單",
    context: "同仁請假都是用 Email 或口頭告知，不只追蹤困難，也缺乏正式紀錄，月底計算考勤時非常痛苦。",
    userStory: "身為人資或行政人員，我希望能建立一個集中的線上請假系統，讓員工可以線上填單，主管線上簽核，並自動留下紀錄。",
    goal: "將請假流程標準化、透明化，並自動歸檔所有假單紀錄以供備查。",
    targetAudience: "全公司所有員工與各級主管。",
    solution: "用 SharePoint 清單當作假單資料庫，搭配 Power Automate 跑簽核流程，並透過 Teams 通知相關人員，打造一個簡易但功能完整的請假系統。",
    steps: [
      "<strong>1. 建立假單資料庫：</strong> 在 SharePoint 網站建立一個新清單，命名為「請假申請單」。新增欄位：<strong>「假別」</strong>(選項)、<strong>「開始時間」</strong>(日期與時間)、<strong>「結束時間」</strong>(日期與時間)、<strong>「代理人」</strong>(人員)、<strong>「簽核狀態」</strong>(文字)。",
      "<strong>2. 設定流程觸發：</strong> 建立一個 Power Automate 自動化流程，觸發點設為 <strong>「當項目在 SharePoint 中被建立時」</strong>，並指向剛剛建立的「請假申請單」清單。",
      "<strong>3. 自動抓取直屬主管：</strong> 新增 <strong>「取得管理員 (V2)」</strong> 動作，並將申請人的 Email (建立者 電子郵件) 放入。",
      "<strong>4. 發送簽核通知：</strong> 新增 <strong>「啟動並等候核准」</strong> 動作，將上一步取得的「主管郵件」填入「指派對象」欄位。在「詳細資料」中放入假單的各種動態內容，讓主管一目了然。",
      "<strong>5. 更新假單狀態：</strong> 在核准動作下方，新增 <strong>「更新 SharePoint 項目」</strong> 動作。不論成功或失敗，都將簽核的「結果」與主管「註解」寫回 SharePoint 清單的「簽核狀態」與其他對應欄位。",
      "<strong>6. 結果通知申請人：</strong> 最後，新增 <strong>「在聊天或頻道中張貼訊息」</strong>(Teams) 動作，將簽核結果以私訊方式通知原申請人。"
    ],
    tags: ["表單簽核", "SharePoint List", "Power Automate", "HR"]
  },
  {
    id: "sharepoint-onboarding-portal",
    tools: ["SharePoint", "Microsoft Forms", "Planner"],
    title: "【新人報到不迷路】建立一站式的新人引導入口網站",
    context: "新人第一天報到，不知道要找誰、要填哪些表單、要看哪些文件，感到徬徨無助。",
    userStory: "身為人資或部門主管，我希望能提供一個清楚的入口網站，引導新人完成所有報到手續與訓練課程。",
    goal: "提供新人一致且友善的報到體驗，加速其融入團隊並快速上手工作。",
    targetAudience: "新進員工、人資部門、用人單位主管。",
    solution: "建立一個 SharePoint 通訊網站，作為新人的「Onboarding Portal」，整合所有必要資訊、待辦清單與聯絡窗口。",
    steps: [
      "<strong>1. 選擇網站範本：</strong> 建立一個 SharePoint <strong>「通訊網站」</strong>。你可以從內建的 <strong>「新增員工上線」</strong> 範本開始，它已經包含了大部分你會需要的功能區塊。",
      "<strong>2. 建立新人待辦清單：</strong> 將網站上的 Planner 元件連結到一個新的 Planner 計畫，命名為「新人報到任務」。在裡面建立「領取筆電與識別證」、「完成 HR 資料填寫」等任務卡片，並預先指派給新人的帳號。",
      "<strong>3. 嵌入必要表單：</strong> 使用 Microsoft Forms 建立「新人基本資料表」與「IT 設備申請單」。然後回到 SharePoint 頁面，使用 <strong>「Microsoft Forms」</strong> 網頁組件將它們直接嵌入頁面中，新人不需跳轉就能填寫。",
      "<strong>4. 新增重要聯絡人：</strong> 使用 <strong>「人員」</strong> 網頁組件，將 HR、IT 服務台、以及部門導師的聯絡卡片放在顯眼的位置，新人點擊頭像就能直接寫信或發起 Teams 通話。",
      "<strong>5. 彙整關鍵文件：</strong> 使用 <strong>「檔案檢視器」</strong> 或 <strong>「文件庫」</strong> 組件，將公司規章、福利介紹、IT 指南等文件整理在同一個區塊，方便新人隨時查閱。",
      "<strong>6. 設為團隊首頁：</strong> 最後，將這個 SharePoint 網站的連結，設為新人所屬 Teams 團隊的置頂索引標籤，讓他們每天都能輕易存取。"
    ],
    tags: ["新人訓練", "知識管理", "SharePoint", "Planner"]
  },
  {
    id: "powerbi-project-status-dashboard",
    tools: ["Power BI", "SharePoint", "Planner"],
    title: "【專案儀表板】一眼看穿專案進度、風險與瓶頸",
    context: "每週的專案會議，光是整理各方進度報告就要花掉大半天時間，資訊還可能不同步。",
    userStory: "身為專案最高主管，我希望能有一個即時的儀表板，讓我隨時都能掌握所有專案的整體健康狀況，而不需要等待人工彙報。",
    goal: "打造一個自動更新的專案儀表板，作為決策的單一事實來源 (Single Source of Truth)。",
    targetAudience: "專案經理、PMO、高階主管。",
    solution: "將所有專案的任務進度放在 Planner，風險與議題記錄在 SharePoint 清單，最後用 Power BI 將這些分散的資料源整合成一個互動儀表板。",
    steps: [
      "<strong>1. 連接資料來源：</strong> 在 Power BI Desktop，點擊 <strong>「取得資料」</strong>。搜尋並選擇 <strong>「Planner」</strong> 與 <strong>「SharePoint Online 清單」</strong> 連接器，分別登入並選取你的專案計畫和風險記錄清單。",
      "<strong>2. 整理與關聯資料：</strong> 進入 <strong>「轉換資料」</strong>(Power Query 編輯器)。你可能會需要清理資料、篩選掉不需要的欄位。接著到「模型檢視」，將 Planner 的任務資料表與 SharePoint 的風險清單，透過「專案名稱」或「專案 ID」欄位建立關聯。",
      "<strong>3. 建立關鍵指標 (KPI)：</strong> 使用 <strong>「新增量值」</strong> 功能，撰寫 DAX 運算式來計算核心指標，例如：`總任務數 = COUNTROWS(Tasks)`、`延遲任務數 = CALCULATE(COUNT(Tasks[Id]), Tasks[PercentComplete] < 100 && Tasks[DueDate] < TODAY())`。",
      "<strong>4. 設計儀表板視覺化：</strong> \n- 使用 <strong>「卡片」</strong> 圖視覺化延遲任務數。\n- 使用 <strong>「環圈圖」</strong> 呈現所有任務的進度分佈 (未開始、進行中、已完成)。\n- 使用 <strong>「矩陣」</strong> 表格，列出每個專案的風險數量與等級。\n- 使用第三方的 <strong>「甘特圖」</strong> 視覺效果，呈現專案的整體時程。",
      "<strong>5. 發佈與設定自動更新：</strong> 將完成的報表發佈到 Power BI 服務。在資料集的「設定」中，找到「排程重新整理」，設定為每天或每小時自動更新一次資料。",
      "<strong>6. 嵌入 Teams 頻道：</strong> 將發佈後的 Power BI 報表，作為一個索引標籤釘選在你的專案 Teams 頻道中，讓所有成員都能隨時掌握最新動態。"
    ],
    tags: ["專案管理", "資料視覺化", "Power BI", "Dashboard"]
  },
  {
    id: "sharepoint-document-approval-workflow",
    tools: ["SharePoint", "Power Automate"],
    title: "【文件審批流程】讓合約、報告的審批不再卡關",
    context: "一份重要的合約或報告，需要經過法務、財務、主管三關審批，用 Email 傳來傳去，不知道現在在哪一關，也不知道誰還沒看。",
    userStory: "身為文件管理者，我希望能有一個自動化的審批流程，讓文件依序送給正確的人，並清楚記錄每個人的審批意見與時間。",
    goal: "建立一個可追蹤、有紀錄、且自動化的文件審批流程，加速文件定案速度。",
    targetAudience: "法務、財務、品保，以及任何需要正式文件審批的部門。",
    solution: "直接使用 SharePoint 文件庫內建的 Power Automate 簽核範本，或客製化一個多層級的序列簽核流程。",
    steps: [
      "<strong>1. 開啟內容核准功能：</strong> 前往需要控管的 SharePoint 文件庫，點擊 <strong>「設定」</strong> > <strong>「文件庫設定」</strong> > <strong>「版本設定」</strong>。將 <strong>「需要內容核准才能提交的項目?」</strong> 設定為「是」。\n💡 <strong>原理說明：</strong> 這會讓文件庫多出一個「核准狀態」欄位，預設為草稿，沒有核准前其他使用者看不到。",
      "<strong>2. 設定流程觸發：</strong> 在 Power Automate 建立一個自動化流程，觸發點設為 <strong>「為選取的檔案」</strong> (SharePoint)。這讓使用者可以手動對任何一份文件發起簽核。",
      "<strong>3. 設計多層級簽核：</strong> 不要使用單一的核准動作。請依序加入多個 <strong>「啟動並等候核准」</strong> 動作。例如，第一個動作的「指派對象」是直屬主管，第二個動作的「指派對象」是法務部門。",
      "<strong>4. 串接簽核意見：</strong> 在第二個之後的核准動作中，於「詳細資料」欄位裡，附上上一個簽核者的「結果」與「註解」動態內容，讓後面的簽核者能了解前一關的意見。",
      "<strong>5. 更新文件狀態：</strong> 在所有簽核都完成後，使用 <strong>「設定內容核准狀態」</strong> 這個動作。如果最終結果是核准，就將狀態設為 <strong>「核准」</strong>，並在「ETag」欄位輸入 `1`。這樣文件才會正式發佈給所有有權限的成員看見。",
      "<strong>6. 歸檔與通知：</strong> 流程最後，可以新增 <strong>「移動檔案」</strong> 動作，將已核准的合約自動移至「已歸檔」資料夾，並發送 Email 通知相關單位。"
    ],
    tags: ["流程自動化", "文件管理", "SharePoint", "簽核"]
  },
  {
    id: "teams-whiteboard-brainstorming",
    tools: ["Microsoft Whiteboard", "Teams"],
    title: "【遠端腦力激盪】像在同一個房間一樣，隨手畫出好點子",
    context: "團隊成員分散各地，需要一起發想新點子或規劃架構時，光靠說話很難對齊想法。",
    userStory: "身為產品經理或設計師，我希望在開線上會議時，有一個共享的畫布，讓大家可以隨意貼便條、畫流程圖，進行視覺化的溝通。",
    goal: "打破遠端協作的隔閡，提供一個直覺、互動的共同創作空間。",
    targetAudience: "任何需要進行創意發想、流程討論、設計規劃的團隊。",
    solution: "在 Teams 會議中，直接分享或新增一個 Microsoft Whiteboard，它就是你的無限數位白板。",
    steps: [
      "<strong>1. 發起 Teams 會議：</strong> 先邀請所有需要參與討論的成員，進入一場 Teams 線上會議。",
      "<strong>2. 分享白板：</strong> 在會議上方的功能列中，點擊 <strong>「共用」</strong> 按鈕。在跳出的共用內容選項中，選擇右下角的 <strong>「Microsoft Whiteboard」</strong>。",
      "<strong>3. 開始協作：</strong> 白板載入後，所有與會者都會看到同一個畫布，並且可以同時在上面進行編輯。\n💡 <strong>協作提示：</strong> 你可以請大家先各自在角落發想，再一起討論，避免互相干擾。",
      "<strong>4. 善用內建工具：</strong> \n- <strong>「便箋」：</strong> 用來收集點子，一人一種顏色，一目了然。\n- <strong>「範本」：</strong> Whiteboard 內建了「腦力激盪」、「SWOT分析」等實用範本，可以直接套用。\n- <strong>「反應」：</strong> 使用「讚」或「打勾」等圖示，快速對別人的點子進行投票或表達看法。",
      "<strong>5. 會後存取：</strong> 會議結束後，這個白板會自動儲存。你可以從該場會議的聊天視窗頂部找到它，或者在 Microsoft Whiteboard 的應用程式中，隨時都能找回來繼續完成。"
    ],
    tags: ["團隊協作", "遠端工作", "Teams", "Whiteboard", "腦力激盪"]
  },
  {
    id: "powerapps-equipment-booking",
    tools: ["Power Apps", "SharePoint", "Outlook"],
    title: "【公用設備預約系統】誰訂了會議室？App 讓你看得見",
    context: "想預約公司的會議室或投影機，只能在 Excel 表格上登記，常常發生時間衝突，或設備臨時被借走的情況。",
    userStory: "身為員工，我希望能有一個簡單的 App，讓我快速查看哪個時段有空會議室，並直接線上預約。",
    goal: "提供一個透明、即時、且能避免衝突的公用資源預約平台。",
    targetAudience: "全體員工、行政管理部門。",
    solution: "用 Power Apps 打造一個預約 App，資料存在 SharePoint 清單，並與 Outlook 的資源行事曆同步。",
    steps: [
      "<strong>1. 建立資源行事曆：</strong> 請 IT 管理員在 Exchange 管理中心為每個會議室建立「資源信箱」。這會讓每個會議室擁有自己的行事曆。",
      "<strong>2. 從資料建立 App：</strong> 在 Power Apps 首頁，選擇 <strong>「從...開始」</strong> > <strong>「SharePoint」</strong>。連線到你的網站並選擇一個你預先建立好的「設備預約記錄」清單。Power Apps 會自動幫你生成一個包含瀏覽、檢視、編輯畫面的三畫面 App。",
      "<strong>3. 打造預約畫面：</strong> 在 App 中新增一個空白畫面。插入一個 <strong>「資源庫 (Gallery)」</strong> 來顯示所有可預約的設備清單，再插入一個 <strong>「日期選擇器」</strong> 與 <strong>「下拉式方塊」</strong> (用來選擇時間)。",
      "<strong>4. 查詢可用時段 (核心)：</strong> 當使用者選擇日期時，使用 Office 365 Outlook 連接器的 `FindMeetingTimes` 函式。這個函式會回傳指定資源在特定時間內的有空時段，你可以將結果顯示在一個資源庫中讓使用者選擇。",
      "<strong>5. 送出預約請求：</strong> 在預約按鈕的 `OnSelect` 屬性中，呼叫 `Office365.CreateEventV4` 函式。將會議室的 Email、開始/結束時間、主旨等資訊傳入。這會在會議室的行事曆上建立一個事件，等同於預約成功。",
      "<strong>6. 記錄預約資訊：</strong> 在同一按鈕的 `OnSelect` 屬性中，使用 `Patch()` 函式將這次的預約人、時間、預約的設備等資訊，寫回你一開始建立的 SharePoint「設備預約記錄」清單中，方便後台管理。"
    ],
    tags: ["應用程式開發", "Power Apps", "資源管理", "Outlook"]
  },
  {
    id: "forms-customer-feedback",
    tools: ["Microsoft Forms", "Power Automate", "Power BI"],
    title: "【客戶回饋分析】用數據洞察客戶真正的聲音",
    context: "客戶回饋散落在業務的 Email、客服電話紀錄裡，難以統計分析，也無法快速發現產品或服務的主要問題點。",
    userStory: "身為產品或客服主管，我希望能有一個系統化的方式來收集客戶回饋，並自動將其轉化為可供分析的數據洞察。",
    goal: "建立一個從回饋收集到數據分析的自動化閉環，以數據驅動產品與服務的改善。",
    targetAudience: "產品經理、客服部門、行銷團隊。",
    solution: "使用 Microsoft Forms 製作公開的問卷，透過 Power Automate 將回覆即時存入資料庫，再用 Power BI 進行深度分析。",
    steps: [
      "<strong>1. 設計回饋問卷：</strong> 在 Microsoft Forms 建立一個新的問卷，命名為「客戶滿意度調查」。加入「評等」問題（1-5顆星）、“NPS” (淨推薦值) 問題、以及「文字」問題讓客戶提供開放式建議。",
      "<strong>2. 公開發布問卷：</strong> 點擊右上角的 <strong>「收集回應」</strong>，將連結設定為 <strong>「任何人都可以回應」</strong>。你可以取得短網址或 QR code，放在你的產品網頁、Email 簽名檔或服務據點。",
      "<strong>3. 建立自動化流程：</strong> 在 Power Automate 建立一個自動化流程，觸發點選擇 <strong>「當有新的回應提交時」</strong> (Microsoft Forms)，並選取你剛剛建立的問卷。",
      "<strong>4. 取得回應並存檔：</strong> 在流程中，第一個動作必須是 <strong>「取得回應詳細資料」</strong>。接著，新增 <strong>「在資料表中新增一列」</strong>(Excel Online) 或 <strong>「建立項目」</strong>(SharePoint) 動作，將問卷的每一個答案，存到對應的欄位中。",
      "<strong>5. 連接 Power BI：</strong> 在 Power BI Desktop 中，透過 <strong>「取得資料」</strong> 連接到你存放回饋的 Excel 或 SharePoint 清單。",
      "<strong>6. 建立分析儀表板：</strong> \n- 使用 <strong>「量測計」</strong> 視覺效果來顯示平均滿意度分數。\n- 使用 <strong>「堆疊橫條圖」</strong> 來分析不同客戶群體的 NPS 分數分佈。\n- 安裝「文字篩選器」或「Word Cloud」等第三方視覺效果，來分析開放式建議中的熱門關鍵字。\n- 最後，發佈報表並設定排程重新整理，讓你的儀表板永遠呈現最新的客戶聲音。"
    ],
    tags: ["客戶回饋", "數據分析", "Microsoft Forms", "Power BI", "自動化"]
  },
  {
    id: "onedrive-secure-sharing",
    tools: ["OneDrive"],
    title: "【安全檔案分享】如何傳送大型或機密檔案給外部夥伴？",
    context: "想把幾百 MB 的設計稿或包含個資的合約草案寄給外部廠商，但 Email 附件有大小限制，直接傳送也不安全。",
    userStory: "身為業務或專案人員，我希望能有一個安全又簡單的方式，可以跟公司外部的人分享大型檔案，同時能控制對方的存取權限。",
    goal: "在確保安全性的前提下，輕鬆分享超越 Email 附件大小限制的檔案。",
    targetAudience: "任何需要與外部單位交換檔案的員工。",
    solution: "使用 OneDrive for Business 的「共用」功能，它提供了比個人版更強大的安全控管選項。",
    steps: [
      "<strong>1. 找到檔案並共用：</strong> 在 OneDrive 網站或你電腦的檔案總管中，對著你想分享的檔案或資料夾點擊右鍵，選擇 <strong>「共用」</strong> (有藍色雲朵圖示的那個)。",
      "<strong>2. 設定權限層級：</strong> 在跳出的共用視窗中，點擊預設的權限設定 (通常是「擁有連結的任何人皆可編輯」)，這會進入更詳細的設定畫面。",
      "<strong>3. 指定特定人員 (最安全)：</strong> 選擇 <strong>「特定人員」</strong>，並在下方的輸入框中，輸入對方(外部人員)的完整 Email 地址。",
      "<strong>4. 移除編輯權限：</strong> 確認 <strong>「允許編輯」</strong> 的核取方塊是 <strong>取消勾選</strong> 的狀態，除非你真的希望對方修改你的原始檔案。",
      "<strong>5. 加上雙重保險 (選用但建議)：</strong> \n- <strong>設定到期日：</strong> 點擊 <strong>「設定到期日」</strong>，讓這個分享連結在幾天後自動失效。\n- <strong>設定密碼：</strong> 點擊 <strong>「設定密碼」</strong>，並將密碼透過電話或另一個管道告知對方。\n- <strong>封鎖下載：</strong> 如果是極機密的預覽檔案，可以開啟 <strong>「封鎖下載」</strong>，對方就只能在瀏覽器中觀看。",
      "<strong>6. 套用並傳送：</strong> 點擊 <strong>「套用」</strong> 後，你可以直接點擊 <strong>「傳送」</strong> 由系統發信，或者點擊 <strong>「複製連結」</strong>，手動將這個專屬的安全連結貼給對方。對方開啟時，需要輸入一次性的驗證碼來證明自己的身份。"
    ],
    tags: ["檔案分享", "資訊安全", "OneDrive", "外部協作"]
  },
  {
    id: "teams-shifts-scheduling",
    tools: ["Teams"],
    title: "【第一線人員排班】告別 Excel 排班表，手機就能換班",
    context: "門市或廠區的排班工作還在使用 Excel，班表調整時溝通很混亂，員工也無法即時得知最新的班表。",
    userStory: "身為店長或領班，我希望能有一個數位工具來安排班表，讓員工可以在手機上看到自己的班，並方便地提出換班或請假申請。",
    goal: "將排班管理數位化、行動化，簡化排班流程並減少溝通錯誤。",
    targetAudience: "零售、餐飲、製造業等擁有第一線工作人員的企業。",
    solution: "直接使用 Microsoft Teams 內建的「班次 (Shifts)」應用程式，它是一個專為第一線人員設計的排班工具。",
    steps: [
      "<strong>1. 新增班次應用程式：</strong> 在你的門市或部門 Teams 團隊中，點擊頻道上方的 <strong>「+」</strong> 新增索引標籤。在應用程式清單中，搜尋並選擇 <strong>「班次 (Shifts)」</strong>。",
      "<strong>2. 建立班表與群組：</strong> 首次使用時，系統會引導你建立一個班表。你可以為班表建立「群組」(例如：內場、外場、收銀)，並將對應的員工加入到群組中。",
      "<strong>3. 新增班次：</strong> 在班表的行事曆檢視中，找到員工對應的日期，點擊 <strong>「...」</strong> > <strong>「+ 新增班次」</strong>。\n- <strong>設定時間：</strong> 輸入開始與結束時間。\n- <strong>自訂標籤與顏色：</strong> 你可以為「早班」、「晚班」等不同班別設定不同的名稱與顏色，讓班表更視覺化。\n- <strong>複製貼上：</strong> 如果班次很固定，你可以使用 <strong>「複製」</strong> 功能，快速將班次貼到其他日期或其他員工身上。",
      "<strong>4. 發布班表：</strong> 當你把整週或整個月的班表都安排好後，點擊右上角的 <strong>「與團隊共用」</strong> 按鈕。確認發布的起迄時間範圍後，再次點擊「共用」。此時，所有團隊成員的手機 Teams App 都會收到班表已更新的通知。",
      "<strong>5. 處理員工請求 (手機端)：</strong> 員工可以在手機上查看自己的班表，並發起 <strong>「換班」</strong> 或 <strong>「提供班次」</strong> 的請求。當有請求時，你 (主管) 會在「請求」頁籤看到通知，並可以直接在線上「核准」或「拒絕」，系統會自動更新班表。"
    ],
    tags: ["第一線員工", "排班管理", "Teams", "Shifts", "行動辦公"]
  }
]

export type ToolType = "Planner" | "Power Automate" | "Power BI" | "Teams" | "SharePoint" | "Outlook" | "All" | "Microsoft Whiteboard" | "Power Apps" | "Microsoft Forms" | "OneDrive";
