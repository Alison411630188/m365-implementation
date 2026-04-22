
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

export default function Handbook() {

  // 快速對照表資料
  const QUICK_REFERENCE = [
    {
      category: '溝通協調',
      items: [
        { question: '我需要跟同事一對一或群組聊天', tool: 'Teams 私人聊天', color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400", icon: <div className="w-4 h-4 flex items-center justify-center scale-[1.35]"><TeamsIcon /></div> },
        { question: '我需要召開一場正式的線上會議', tool: 'Teams 會議', color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400", icon: <div className="w-4 h-4 flex items-center justify-center scale-[1.35]"><TeamsIcon /></div> },
      ]
    },
    {
      category: '檔案管理',
      items: [
        { question: '我想要儲存、共享和同步部門的檔案', tool: 'SharePoint 文件庫', color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400", icon: <div className="w-4 h-4 flex items-center justify-center"><SharePointIcon /></div> },
        { question: '我需要在專案頻道中快速找到檔案', tool: 'Teams 檔案頁籤', color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400", icon: <div className="w-4 h-4 flex items-center justify-center scale-[1.35]"><TeamsIcon /></div> },
      ]
    },
    {
      category: '專案追蹤',
      items: [
        { question: '我需要指派和追蹤團隊成員的任務', tool: 'Planner', color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400", icon: <div className="w-4 h-4 flex items-center justify-center"><PlannerIcon /></div> },
      ]
    },
    {
      category: '數據與自動化',
      items: [
        { question: '我想要自動化重複性的手動工作', tool: 'Power Automate', color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400", icon: <div className="w-4 h-4 flex items-center justify-center scale-[1.35]"><PowerAutomateIcon /></div> },
        { question: '我需要建立互動式的數據儀表板', tool: 'Power BI', color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400", icon: <div className="w-4 h-4 flex items-center justify-center scale-[1.35]"><PowerBIIcon /></div> },
      ]
    }
  ];

  // 核心工具導航卡片
  const TOOL_CARDS = [
    { id: "teams", name: "Teams", desc: '團隊溝通與協作的中心，整合聊天、會議、檔案和應用程式。', link: "/tools/teams", icon: <div className="scale-[1.5]"><TeamsIcon /></div>, color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-900/20", shadowColor: "shadow-indigo-500/20", border: "border-2 border-indigo-200 hover:border-indigo-400 dark:border-indigo-800 dark:hover:border-indigo-600" },
    { id: "sharepoint", name: "SharePoint", desc: '建立內部網站、文件庫和清單，實現企業內容管理。', link: "/tools/sharepoint", icon: <div className="scale-[1.2]"><SharePointIcon /></div>, color: "text-teal-600 dark:text-teal-400", bg: "bg-teal-50 dark:bg-teal-900/20", shadowColor: "shadow-teal-500/20", border: "border-2 border-teal-200 hover:border-teal-400 dark:border-teal-800 dark:hover:border-teal-600" },
    { id: "planner", name: "Planner", desc: '視覺化的任務管理工具，輕鬆規劃、指派和追蹤進度。', link: "/tools/planner", icon: <div className="scale-[1.2]"><PlannerIcon /></div>, color: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/20", shadowColor: "shadow-green-500/20", border: "border-2 border-green-200 hover:border-green-400 dark:border-green-800 dark:hover:border-green-600" },
    { id: "power-automate", name: "Power Automate", desc: '連接不同的應用程式和服務，自動化您的工作流程。', link: "/tools/power-automate", icon: <div className="scale-[1.5]"><PowerAutomateIcon /></div>, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20", shadowColor: "shadow-blue-500/20", border: "border-2 border-blue-200 hover:border-blue-400 dark:border-blue-800 dark:hover:border-blue-600" },
    { id: "power-bi", name: "Power BI", desc: '將複雜的數據轉化為清晰、可互動的視覺化報告。', link: "/tools/power-bi", icon: <div className="scale-[1.5]"><PowerBIIcon /></div>, color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-50 dark:bg-yellow-900/20", shadowColor: "shadow-yellow-500/20", border: "border-2 border-yellow-200 hover:border-yellow-400 dark:border-yellow-800 dark:hover:border-yellow-600" },
  ];

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
                    <span className="w-1.5 h-6 bg-primary rounded-full" /> 任務情境快速對照
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
                                  建議工具：{item.tool}
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
                    <span className="w-1.5 h-6 bg-primary rounded-full" /> 檔案應該放哪裡？
                  </h2>
                  <Card className="overflow-hidden border border-border shadow-sm bg-card">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-muted/50 border-b border-border">
                          <tr>
                            <th className="p-4 font-bold text-foreground w-1/3">情境</th>
                            <th className="p-4 font-bold text-foreground w-1/3">實際儲存位置</th>
                            <th className="p-4 font-bold text-foreground w-1/3">誰能看到？</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr className="hover:bg-muted/30 transition-colors">
                            <td className="p-4 font-bold flex items-center gap-2">
                              <div className="w-5 h-5 flex items-center justify-center scale-[1.35]"><TeamsIcon /></div> Teams 私人聊天
                            </td>
                            <td className="p-4 text-foreground/80 dark:text-white">
                              上傳者的 <strong className="text-blue-500 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">OneDrive</strong> 中
                            </td>
                            <td className="p-4 text-foreground/70 dark:text-white">只有該聊天的參與者</td>
                          </tr>
                          <tr className="hover:bg-muted/30 transition-colors">
                            <td className="p-4 font-bold flex items-center gap-2">
                              <div className="w-5 h-5 flex items-center justify-center scale-[1.35]"><TeamsIcon /></div> Teams 頻道
                            </td>
                            <td className="p-4 text-foreground/80 dark:text-white">
                              該團隊背後的 <strong className="text-teal-500 bg-teal-50 dark:bg-teal-900/30 px-1.5 py-0.5 rounded">SharePoint</strong> 網站
                            </td>
                            <td className="p-4 text-foreground/70 dark:text-white">該 Teams 團隊的所有成員</td>
                          </tr>
                          <tr className="hover:bg-muted/30 transition-colors">
                            <td className="p-4 font-bold flex items-center gap-2">
                              <Lock size={16} className="text-foreground/40 dark:text-white ml-0.5" /> 個人電腦本機
                            </td>
                            <td className="p-4 text-foreground/80 dark:text-white">你的電腦硬碟</td>
                            <td className="p-4 text-red-500 font-bold">只有你自己 (資料遺失風險高)</td>
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
                  <span className="w-1.5 h-6 bg-primary rounded-full" /> 核心工具深度解析
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
            <Card className="p-8 border border-border shadow-sm bg-card">
              <h2 className="text-2xl font-bold text-foreground mb-8">新手上路三部曲</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 步驟 1 */}
                <div className="relative">
                  <div className="absolute top-0 left-6 w-0.5 h-full bg-border -z-10 hidden md:block"></div>
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-primary/30">1</div>
                  <h3 className="text-lg font-bold text-foreground mb-3">盤點現況，找出痛點</h3>
                  <p className="text-sm text-foreground/70 dark:text-white mb-4 leading-relaxed">
                    從你日常工作中，找出那些讓你覺得「很卡」、很花時間、或很常出錯的地方。
                  </p>
                  <ul className="text-sm text-foreground/60 dark:text-white space-y-2 font-medium">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 檔案版本混亂？</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 簽核等到天荒地老？</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 重複性的手動報表？</li>
                  </ul>
                </div>
                {/* 步驟 2 */}
                <div className="relative">
                  <div className="absolute top-0 left-6 w-0.5 h-full bg-border -z-10 hidden md:block"></div>
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-primary/30">2</div>
                  <h3 className="text-lg font-bold text-foreground mb-3">對照情境，找到解法</h3>
                  <p className="text-sm text-foreground/70 dark:text-white mb-4 leading-relaxed">
                    利用本站的「應用情境案例」，找到與你痛點最相近的案例，看看 M365 如何解決它。
                  </p>
                  <ul className="text-sm text-foreground/60 dark:text-white space-y-2 font-medium">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 了解主要使用哪個工具</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 掌握核心的「使用者故事」</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 參考詳細的實作步驟</li>
                  </ul>
                </div>
                {/* 步驟 3 */}
                <div>
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-primary/30">3</div>
                  <h3 className="text-lg font-bold text-foreground mb-3">動手實作，小步快跑</h3>
                  <p className="text-sm text-foreground/70 dark:text-white mb-4 leading-relaxed">
                    不要想著一次就做到完美。從一個最小、最簡單的流程開始，動手做做看。
                  </p>
                  <ul className="text-sm text-foreground/60 dark:text-white space-y-2 font-medium">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 先從自己的小任務開始</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 邀請一兩位同事試用</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 根據回饋快速修正</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* 3. 資訊安全 */}
          <TabsContent value="security" className="space-y-6 animate-in fade-in duration-500">
            <Card className="p-8 border border-border shadow-sm bg-card">
              <h2 className="text-2xl font-bold text-foreground mb-8">資訊安全必修課</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="p-6 bg-muted/30 rounded-2xl border border-border/50">
                  <ShieldCheck className="text-indigo-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-foreground mb-3">帳號安全</h3>
                  <ul className="text-sm text-foreground/70 dark:text-white space-y-2.5 font-medium">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" /> 啟用多因素認證 (MFA)</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" /> 使用高強度的密碼</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" /> 不在公共電腦上儲存密碼</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" /> 定期檢查登入活動</li>
                  </ul>
                </div>

                <div className="p-6 bg-muted/30 rounded-2xl border border-border/50">
                  <AlertCircle className="text-red-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-foreground mb-3">防範釣魚郵件</h3>
                  <ul className="text-sm text-foreground/70 dark:text-white space-y-2.5 font-medium">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" /> 檢查寄件者 Email 地址</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" /> 不輕易點擊可疑連結或附件</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" /> 注意信件中的緊急或威脅性用語</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" /> 有疑問時，向 IT 部門回報</li>
                  </ul>
                </div>

                <div className="p-6 bg-muted/30 rounded-2xl border border-border/50">
                  <Lock className="text-teal-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-foreground mb-3">權限管理</h3>
                  <ul className="text-sm text-foreground/70 dark:text-white space-y-2.5 font-medium">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" /> 分享檔案時，使用「特定人員」選項</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" /> 定期審核 Teams 和 SharePoint 網站的成員</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" /> 遵循最小權限原則，只授予必要的權限</li>
                  </ul>
                </div>

              </div>
            </Card>
          </TabsContent>

          {/* 4. 實戰技巧 */}
          <TabsContent value="tips" className="space-y-6 animate-in fade-in duration-500">
            <Card className="p-8 border border-border shadow-sm bg-card">
              <h2 className="text-2xl font-bold text-foreground mb-8">專家私藏的實戰技巧</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="border border-border/60 rounded-xl p-5 hover:border-primary/50 transition-colors bg-background">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-xl">⌨️</span> 常用快捷鍵
                  </h3>
                  <ul className="text-sm text-foreground/70 dark:text-white space-y-2 font-medium">
                    <li className="flex justify-between border-b border-border/40 pb-1"><span>全域搜尋</span> <kbd className="bg-muted px-1.5 rounded text-xs font-mono">Ctrl+F</kbd></li>
                    <li className="flex justify-between border-b border-border/40 pb-1"><span>會議靜音</span> <kbd className="bg-muted px-1.5 rounded text-xs font-mono">Ctrl+Shift+M</kbd></li>
                    <li className="flex justify-between border-b border-border/40 pb-1"><span>強制重新整理</span> <kbd className="bg-muted px-1.5 rounded text-xs font-mono">Ctrl+F5</kbd></li>
                    <li className="flex justify-between pb-1"><span>鎖定電腦</span> <kbd className="bg-muted px-1.5 rounded text-xs font-mono">Win+L</kbd></li>
                  </ul>
                </div>

                <div className="border border-border/60 rounded-xl p-5 hover:border-primary/50 transition-colors bg-background">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-xl">🔍</span> 搜尋語法
                  </h3>
                  <ul className="text-sm text-foreground/70 dark:text-white space-y-2.5 font-medium">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> <span>使用 <kbd className="bg-muted px-1 rounded text-xs font-mono">""</kbd> 進行精確搜尋</span></li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> <span>使用 <kbd className="bg-muted px-1 rounded text-xs font-mono">OR</kbd> 搜尋多個關鍵字</span></li>
                    <li className="flex items-start gap-2
                    "><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> <span>使用 <kbd className="bg-muted px-1 rounded text-xs font-mono">filetype:pdf</kbd> 指定檔案類型</span></li>
                  </ul>
                </div>

                <div className="border border-border/60 rounded-xl p-5 hover:border-primary/50 transition-colors bg-background">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-xl">👥</span> 協作禮儀
                  </h3>
                  <ul className="text-sm text-foreground/70 dark:text-white space-y-2.5 font-medium">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 在頻道中討論，而非私人聊天</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 使用 @提及 功能確保對方收到通知</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 設定你的狀態 (有空/忙碌/離開)</li>
                  </ul>
                </div>

                <div className="border border-border/60 rounded-xl p-5 hover:border-primary/50 transition-colors bg-background">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-xl">📌</span> 快速存取
                  </h3>
                  <ul className="text-sm text-foreground/70 dark:text-white space-y-2.5 font-medium">
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 將常用的頻道和聊天釘選到頂部</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 將重要的 SharePoint 文件庫同步到電腦</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" /> 儲存重要的訊息以供日後參考</li>
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
