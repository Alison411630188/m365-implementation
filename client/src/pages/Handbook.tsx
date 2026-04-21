import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { 
  HelpCircle,
  Lock,
  ArrowRight,
  Lightbulb,
  ShieldCheck,
  Zap,
  AlertCircle
} from "lucide-react";
import {
  PlannerIcon,
  PowerAutomateIcon,
  PowerBIIcon,
  SharePointIcon,
  TeamsIcon,
} from "@/components/M365Icons";

/**
 * M365 使用手冊頁面 - 五大工具全新網格排版版
 */

// 快速對照表資料
const QUICK_REFERENCE = [
  {
    category: "溝通與會議",
    items: [
      { question: "我想跟同事一對一或建立群組快速討論事情", tool: "Teams (聊天)", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400", icon: <div className="w-4 h-4 flex items-center justify-center scale-[1.35]"><TeamsIcon /></div> },
      { question: "我想發起跨部門的線上視訊會議或分享螢幕", tool: "Teams (會議)", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400", icon: <div className="w-4 h-4 flex items-center justify-center scale-[1.35]"><TeamsIcon /></div> },
    ]
  },
  {
    category: "檔案與知識管理",
    items: [
      { question: "我想存放部門的正式合約、規範或建立內部網頁", tool: "SharePoint", color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400", icon: <div className="w-4 h-4 flex items-center justify-center"><SharePointIcon /></div> },
      { question: "我想尋找團隊過去討論時上傳的參考檔案", tool: "Teams (檔案)", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400", icon: <div className="w-4 h-4 flex items-center justify-center scale-[1.35]"><TeamsIcon /></div> },
    ]
  },
  {
    category: "專案與任務追蹤",
    items: [
      { question: "我想拆解大型活動，並指派負責人與追蹤到期日", tool: "Planner", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400", icon: <div className="w-4 h-4 flex items-center justify-center"><PlannerIcon /></div> },
    ]
  },
  {
    category: "數據與自動化",
    items: [
      { question: "我想把每天都要手動複製貼上的工作自動化", tool: "Power Automate", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400", icon: <div className="w-4 h-4 flex items-center justify-center scale-[1.35]"><PowerAutomateIcon /></div> },
      { question: "我想製作能自動更新的銷售或營運數據圖表", tool: "Power BI", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400", icon: <div className="w-4 h-4 flex items-center justify-center scale-[1.35]"><PowerBIIcon /></div> },
    ]
  }
];

// 核心工具導航卡片
const TOOL_CARDS = [
  { id: "teams", name: "Teams", desc: "企業溝通與協作中樞", link: "/tools/teams", icon: <div className="scale-[1.5]"><TeamsIcon /></div>, color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-900/20", shadowColor: "shadow-indigo-500/20", border: "border-indigo-100 hover:border-indigo-300 dark:border-indigo-900 dark:hover:border-indigo-700" },
  { id: "sharepoint", name: "SharePoint", desc: "企業文檔與知識庫管理", link: "/tools/sharepoint", icon: <div className="scale-[1.2]"><SharePointIcon /></div>, color: "text-teal-600 dark:text-teal-400", bg: "bg-teal-50 dark:bg-teal-900/20", shadowColor: "shadow-teal-500/20", border: "border-teal-100 hover:border-teal-300 dark:border-teal-900 dark:hover:border-teal-700" },
  { id: "planner", name: "Planner", desc: "視覺化專案與任務管理", link: "/tools/planner", icon: <div className="scale-[1.2]"><PlannerIcon /></div>, color: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/20", shadowColor: "shadow-green-500/20", border: "border-green-100 hover:border-green-300 dark:border-green-900 dark:hover:border-green-700" },
  { id: "power-automate", name: "Power Automate", desc: "跨系統流程自動化引擎", link: "/tools/power-automate", icon: <div className="scale-[1.5]"><PowerAutomateIcon /></div>, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20", shadowColor: "shadow-blue-500/20", border: "border-blue-100 hover:border-blue-300 dark:border-blue-900 dark:hover:border-blue-700" },
  { id: "power-bi", name: "Power BI", desc: "商業智慧與數據視覺化", link: "/tools/power-bi", icon: <div className="scale-[1.5]"><PowerBIIcon /></div>, color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-50 dark:bg-yellow-900/20", shadowColor: "shadow-yellow-500/20", border: "border-yellow-100 hover:border-yellow-300 dark:border-yellow-900 dark:hover:border-yellow-700" },
];

export default function Handbook() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/10 pb-20">
      <div className="mx-auto px-6 md:px-10 py-12 max-w-[1440px] w-full">
        
        {/* 頁面標題 */}
        <div className="mb-10 pb-8 border-b border-border">
          <h1 className="text-4xl font-extrabold text-foreground tracking-tight mb-4 flex items-center gap-3">
            <div className="w-2 h-10 bg-primary rounded-full" />
            M365 使用手冊
          </h1>
          <p className="text-lg text-foreground/60 dark:text-white max-w-4xl leading-relaxed ml-5">
            完整的逐步指南和最佳實踐，幫助您快速上手 Microsoft 365。<br/>
            不知道該用哪個工具？請直接查看「快速對照表」為您指引方向。
          </p>
        </div>

        {/* 標籤頁內容 */}
        <Tabs defaultValue="quick-ref" className="w-full">
          <div className="overflow-x-auto pb-2 mb-8 scrollbar-hide">
            <TabsList className="inline-flex w-auto min-w-full sm:grid sm:w-full grid-cols-4 lg:grid-cols-4 h-12 items-center justify-start rounded-xl bg-muted/50 p-1 text-muted-foreground">
              <TabsTrigger value="quick-ref" className="rounded-lg px-3 py-2 text-sm font-bold transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                <HelpCircle size={16} className="mr-2 inline-block" /> 快速對照表
              </TabsTrigger>
              <TabsTrigger value="getting-started" className="rounded-lg px-3 py-2 text-sm font-bold transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                <Zap size={16} className="mr-2 inline-block" /> 新手入門
              </TabsTrigger>
              <TabsTrigger value="security" className="rounded-lg px-3 py-2 text-sm font-bold transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                <ShieldCheck size={16} className="mr-2 inline-block" /> 資訊安全
              </TabsTrigger>
              <TabsTrigger value="tips" className="rounded-lg px-3 py-2 text-sm font-bold transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                <Lightbulb size={16} className="mr-2 inline-block" /> 實戰技巧
              </TabsTrigger>
            </TabsList>
          </div>

          {/* 1. 快速對照表 & 核心工具 */}
          <TabsContent value="quick-ref" className="space-y-10 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
              
              {/* 左側：情境對照與檔案邏輯 (佔 2 欄) */}
              <div className="xl:col-span-2 space-y-10">
                
                {/* 情境快速對照表 */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary rounded-full" /> 我想做什麼...？
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {QUICK_REFERENCE.map((section, idx) => (
                      <Card key={idx} className="p-6 border border-border shadow-sm bg-card hover:shadow-md transition-shadow">
                        <h3 className="text-sm font-bold text-foreground/40 dark:text-white uppercase tracking-widest mb-5 border-b border-border/50 pb-3">
                          {section.category}
                        </h3>
                        <div className="space-y-5">
                          {section.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex flex-col gap-2">
                              <div className="flex items-start gap-2 text-sm font-medium text-foreground/80 dark:text-white leading-relaxed">
                                <span className="shrink-0 mt-0.5 text-foreground/40 dark:text-white">{item.icon}</span>
                                <span>{item.question}</span>
                              </div>
                              <div className="pl-6">
                                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider ${item.color}`}>
                                  👉 建議使用：{item.tool}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* 檔案儲存邏輯表 */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary rounded-full" /> 黃金觀念：我的檔案到底存在哪？
                  </h2>
                  <Card className="overflow-hidden border border-border shadow-sm bg-card">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-muted/50 border-b border-border">
                          <tr>
                            <th className="p-4 font-bold text-foreground w-1/3">如果你把檔案傳到...</th>
                            <th className="p-4 font-bold text-foreground w-1/3">檔案實際上會存在...</th>
                            <th className="p-4 font-bold text-foreground w-1/3">誰可以看到？</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr className="hover:bg-muted/30 transition-colors">
                            <td className="p-4 font-bold flex items-center gap-2">
                              <div className="w-5 h-5 flex items-center justify-center scale-[1.35]"><TeamsIcon /></div> Teams (一對一/群組私聊)
                            </td>
                            <td className="p-4 text-foreground/80 dark:text-white">
                              上傳者的 <strong className="text-blue-500 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">OneDrive</strong> 中
                            </td>
                            <td className="p-4 text-foreground/70 dark:text-white">只有該聊天室內的人可以存取</td>
                          </tr>
                          <tr className="hover:bg-muted/30 transition-colors">
                            <td className="p-4 font-bold flex items-center gap-2">
                              <div className="w-5 h-5 flex items-center justify-center scale-[1.35]"><TeamsIcon /></div> Teams (專案/部門頻道)
                            </td>
                            <td className="p-4 text-foreground/80 dark:text-white">
                              該團隊背後的 <strong className="text-teal-500 bg-teal-50 dark:bg-teal-900/30 px-1.5 py-0.5 rounded">SharePoint</strong> 網站
                            </td>
                            <td className="p-4 text-foreground/70 dark:text-white">整個團隊的所有成員都可存取</td>
                          </tr>
                          <tr className="hover:bg-muted/30 transition-colors">
                            <td className="p-4 font-bold flex items-center gap-2">
                              <Lock size={16} className="text-foreground/40 dark:text-white ml-0.5" /> 電腦上的本機資料夾
                            </td>
                            <td className="p-4 text-foreground/80 dark:text-white">你的電腦實體硬碟</td>
                            <td className="p-4 text-red-500 font-bold">只有你自己 (硬碟損壞即遺失)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-primary/5 p-4 text-sm text-foreground/80 dark:text-white border-t border-border flex gap-3 items-start">
                      <Lightbulb className="text-primary shrink-0 mt-0.5" size={18} />
                      <p className="leading-relaxed">
                        <strong className="text-primary">實戰鐵則：</strong> 個人草稿放 OneDrive，正式的專案與部門文件請務必上傳到 Teams 頻道或 SharePoint，以確保知識傳承！
                      </p>
                    </div>
                  </Card>
                </section>
              </div>

              {/* 右側：全新網格排版 - 核心工具導航卡片 (佔 1 欄) */}
              <div className="xl:col-span-1 space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full" /> 五大工具深度手冊
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  {TOOL_CARDS.map((tool, index) => (
                    <Link key={tool.id} href={tool.link} className={index === 0 ? "col-span-2" : "col-span-1"}>
                      <Card className={`group relative overflow-hidden flex flex-col items-center justify-center p-6 h-full cursor-pointer shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${tool.border} bg-card`}>
                        
                        {/* 炫光背景效果 */}
                        <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${tool.bg}`} />

                        <div className={`w-16 h-16 mb-4 rounded-2xl flex items-center justify-center ${tool.bg} ${tool.color} shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110`}>
                          <div className="w-8 h-8 flex items-center justify-center">
                            {tool.icon}
                          </div>
                        </div>
                        
                        <h3 className={`text-[15px] font-bold text-foreground group-hover:${tool.color} transition-colors text-center`}>
                          {tool.name}
                        </h3>
                        
                        {/* 只有第一個佔據整行的項目(Teams)顯示完整敘述 */}
                        <p className={`text-xs text-foreground/50 dark:text-white mt-2 font-medium text-center ${index === 0 ? "block" : "hidden sm:block"}`}>
                          {tool.desc}
                        </p>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 2. 新手入門 */}
          <TabsContent value="getting-started" className="space-y-6 animate-in fade-in duration-500">
            {/* ...(新手入門的內容維持不變)... */}
            <Card className="p-8 border border-border shadow-sm bg-card">
              <h2 className="text-2xl font-bold text-foreground mb-8">新手快速啟動指南</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 步驟 1 */}
                <div className="relative">
                  <div className="absolute top-0 left-6 w-0.5 h-full bg-border -z-10 hidden md:block"></div>
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-primary/30">1</div>
                  <h3 className="text-lg font-bold text-foreground mb-3">登入 M365 帳戶</h3>
                  <p className="text-sm text-foreground/70 dark:text-white mb-4 leading-relaxed">
                    使用您的公司帳戶登入 Microsoft 365。訪問 office.com 或使用您的組織提供的登入連結。
                  </p>
                  <ul className="text-sm text-foreground/60 dark:text-white space-y-2 font-medium">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 輸入公司電子郵件</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 輸入您的密碼</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 完成多因素驗證 (MFA)</li>
                  </ul>
                </div>
                {/* 步驟 2 */}
                <div className="relative">
                  <div className="absolute top-0 left-6 w-0.5 h-full bg-border -z-10 hidden md:block"></div>
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-primary/30">2</div>
                  <h3 className="text-lg font-bold text-foreground mb-3">探索應用程式啟動器</h3>
                  <p className="text-sm text-foreground/70 dark:text-white mb-4 leading-relaxed">
                    點擊左上角的應用程式啟動器（九宮格圖示）以訪問所有 M365 應用程式。
                  </p>
                  <ul className="text-sm text-foreground/60 dark:text-white space-y-2 font-medium">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 查看所有可用 App</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 釘選常用工具</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 搜尋特定應用程式</li>
                  </ul>
                </div>
                {/* 步驟 3 */}
                <div>
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-primary/30">3</div>
                  <h3 className="text-lg font-bold text-foreground mb-3">設置您的個人資料</h3>
                  <p className="text-sm text-foreground/70 dark:text-white mb-4 leading-relaxed">
                    完善您的個人資料，讓跨部門的同事更容易找到您，改善企業內部協作體驗。
                  </p>
                  <ul className="text-sm text-foreground/60 dark:text-white space-y-2 font-medium">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 上傳專業的大頭照</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 確認職位和部門資訊</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 設置 Teams 狀態訊息</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* 3. 資訊安全 */}
          <TabsContent value="security" className="space-y-6 animate-in fade-in duration-500">
            {/* ...(資訊安全的內容維持不變)... */}
            <Card className="p-8 border border-border shadow-sm bg-card">
              <h2 className="text-2xl font-bold text-foreground mb-8">企業安全與隱私規範</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="p-6 bg-muted/30 rounded-2xl border border-border/50">
                  <ShieldCheck className="text-indigo-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-foreground mb-3">保護您的帳戶</h3>
                  <ul className="text-sm text-foreground/70 dark:text-white space-y-2.5 font-medium">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" /> 使用強密碼並定期更改</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" /> 務必開啟多因素驗證 (MFA)</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" /> 不要在公共電腦上記住密碼</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" /> 離開座位時隨手鎖定螢幕 (Win+L)</li>
                  </ul>
                </div>

                <div className="p-6 bg-muted/30 rounded-2xl border border-border/50">
                  <AlertCircle className="text-red-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-foreground mb-3">防範社交工程與釣魚</h3>
                  <ul className="text-sm text-foreground/70 dark:text-white space-y-2.5 font-medium">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" /> 仔細檢查寄件人的真實 Email 地址</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" /> 絕不在來路不明的網頁輸入 M365 密碼</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" /> 不隨意下載外部郵件的壓縮檔附件</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" /> 遇到要求緊急匯款的信件，務必電話確認</li>
                  </ul>
                </div>

                <div className="p-6 bg-muted/30 rounded-2xl border border-border/50">
                  <Lock className="text-teal-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-foreground mb-3">檔案權限與資料分類</h3>
                  <ul className="text-sm text-foreground/70 dark:text-white space-y-2.5 font-medium">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" /> 分享連結時，優先選「特定人員」而非「任何人」</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" /> 機密財報請加上敏感度標籤 (Sensitivity labels)</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" /> 定期檢查 OneDrive 中對外分享的過期連結</li>
                  </ul>
                </div>

              </div>
            </Card>
          </TabsContent>

          {/* 4. 實戰技巧 */}
          <TabsContent value="tips" className="space-y-6 animate-in fade-in duration-500">
            {/* ...(實戰技巧的內容維持不變)... */}
            <Card className="p-8 border border-border shadow-sm bg-card">
              <h2 className="text-2xl font-bold text-foreground mb-8">提升生產力的隱藏技巧</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="border border-border/60 rounded-xl p-5 hover:border-primary/50 transition-colors bg-background">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-xl">⌨️</span> 鍵盤快捷鍵
                  </h3>
                  <ul className="text-sm text-foreground/70 dark:text-white space-y-2 font-medium">
                    <li className="flex justify-between border-b border-border/40 pb-1"><span>搜尋</span> <kbd className="bg-muted px-1.5 rounded text-xs font-mono">Ctrl+F</kbd></li>
                    <li className="flex justify-between border-b border-border/40 pb-1"><span>Teams 靜音</span> <kbd className="bg-muted px-1.5 rounded text-xs font-mono">Ctrl+Shift+M</kbd></li>
                    <li className="flex justify-between border-b border-border/40 pb-1"><span>強制重新整理</span> <kbd className="bg-muted px-1.5 rounded text-xs font-mono">Ctrl+F5</kbd></li>
                    <li className="flex justify-between pb-1"><span>鎖定電腦</span> <kbd className="bg-muted px-1.5 rounded text-xs font-mono">Win+L</kbd></li>
                  </ul>
                </div>

                <div className="border border-border/60 rounded-xl p-5 hover:border-primary/50 transition-colors bg-background">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-xl">🔍</span> 搜尋高階語法
                  </h3>
                  <ul className="text-sm text-foreground/70 dark:text-white space-y-2.5 font-medium">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 使用引號 <code>"財報"</code> 搜尋精確短語</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 使用 <code>-</code> 排除特定單詞</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 在 Teams 搜尋框輸入 <code>/</code> 呼叫快捷指令</li>
                  </ul>
                </div>

                <div className="border border-border/60 rounded-xl p-5 hover:border-primary/50 transition-colors bg-background">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-xl">👥</span> 協同編輯禮儀
                  </h3>
                  <ul className="text-sm text-foreground/70 dark:text-white space-y-2.5 font-medium">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 善用「註解」功能 Tag 同事，不要直接改原文顏色</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 檔案預設會自動儲存，請勿任意按復原</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 點擊上方頭像可看到同事目前游標位置</li>
                  </ul>
                </div>

                <div className="border border-border/60 rounded-xl p-5 hover:border-primary/50 transition-colors bg-background">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-xl">📌</span> 快速訪問設定
                  </h3>
                  <ul className="text-sm text-foreground/70 dark:text-white space-y-2.5 font-medium">
                    <n                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 將正在執行的專案釘選在 Teams 頻道最上方</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 在 Edge 瀏覽器將 M365 首頁設為我的最愛</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 將常用的 SharePoint 網站按星號追蹤</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

          </Tabs>
        </div>
      </div>
  );
}
