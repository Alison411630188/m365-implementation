
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import {
  ArrowRight,
  BookOpen,
  Bell,
  ChevronRight,
  HelpCircle,
  Lightbulb,
  Rocket,
  BookMarked,
  Layers,
  GraduationCap,
} from "lucide-react";
import {
  PlannerIcon,
  PowerAutomateIcon,
  PowerBIIcon,
  SharePointIcon,
  TeamsIcon,
} from "@/components/M365Icons";
import { TOOLS_DATA } from "@/data/tools";
import { SCENARIOS } from "@/data/cases"; // Import scenarios

const ICONS: { [key: string]: JSX.Element } = {
  teams: <div className="w-8 h-8 flex items-center justify-center scale-[1.35]"><TeamsIcon /></div>,
  sharepoint: <div className="w-8 h-8 flex items-center justify-center"><SharePointIcon /></div>,
  planner: <div className="w-8 h-8 flex items-center justify-center"><PlannerIcon /></div>,
  'power-automate': <div className="w-8 h-8 flex items-center justify-center scale-[1.35]"><PowerAutomateIcon /></div>,
  'power-bi': <div className="w-8 h-8 flex items-center justify-center scale-[1.35]"><PowerBIIcon /></div>,
};

const TOOL_ICONS_MINI: { [key: string]: JSX.Element } = {
  Teams: <TeamsIcon />, 
  SharePoint: <SharePointIcon />,
  Planner: <PlannerIcon />,
  'Power Automate': <PowerAutomateIcon />,
  'Power BI': <PowerBIIcon />,
};

const STATS = [
  { icon: <Layers size={22} />, value: "5", label: "大核心工具" },
  { icon: <BookMarked size={22} />, value: "15", label: "個應用情境" },
  { icon: <GraduationCap size={22} />, value: "30+", label: "份教學步驟" },
];

const ANNOUNCEMENTS = [
  {
    date: "2026-06-01",
    tag: "新功能",
    tagColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    title: "Power BI 儀表板教學上線",
    desc: "新增完整的 Power BI 報表設計流程，包含 5 個實戰範本。",
  },
  {
    date: "2026-05-15",
    tag: "系統更新",
    tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    title: "Teams 會議錄製功能說明更新",
    desc: "針對新版 Teams 的錄製與逐字稿功能，已更新操作步驟。",
  },
  {
    date: "2026-04-20",
    tag: "重要公告",
    tagColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    title: "SharePoint 權限申請流程調整",
    desc: "請使用新的申請表單，舊流程將於本月底停用。",
  },
];

export default function Home() {
  usePageTitle();

  const QUICK_REFERENCE = [
    {
      category: '溝通協調',
      items: [
        { question: '我需要跟同事一對一或群組聊天', tool: 'Teams 私人聊天'},
        { question: '我需要召開一場正式的線上會議', tool: 'Teams 會議' },
      ]
    },
    {
      category: '檔案管理',
      items: [
        { question: '我想要儲存、共享和同步部門的檔案', tool: 'SharePoint 文件庫' },
        { question: '我需要在專案頻道中快速找到檔案', tool: 'Teams 檔案頁籤' },
      ]
    },
    {
      category: '專案追蹤',
      items: [
        { question: '我需要指派和追蹤團隊成員的任務', tool: 'Planner' },
      ]
    },
    {
      category: '數據與自動化',
      items: [
        { question: '我想要自動化重複性的手動工作', tool: 'Power Automate' },
        { question: '我需要建立互動式的數據儀表板', tool: 'Power BI' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-primary/20">
      
      <section className="relative pt-24 pb-32 px-6 md:px-10 lg:pt-36 lg:pb-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse duration-1000"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="max-w-[1200px] mx-auto text-center animate-in slide-in-from-bottom-8 fade-in duration-1000 fill-mode-both">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-8 border border-primary/20 shadow-sm">
            <Rocket size={16} />
            <span>Empower Your Workflow</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-8 leading-[1.1]">
            擁抱高效率，<br className="md:hidden" />探索 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-teal-400">M365 實戰學院</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/60 dark:text-white max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            告別瑣碎的手動輸入與混亂的檔案版本。在這裡，我們用最白話的圖文與真實企業情境，帶你輕鬆駕馭微軟五大神器。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/handbook">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
                開始閱讀手冊 <ArrowRight size={20} />
              </button>
            </Link>
            <Link href="/cases">
              <button className="w-full sm:w-auto px-8 py-4 bg-card text-foreground border border-border rounded-full font-bold text-lg hover:bg-muted transition-all flex items-center justify-center gap-2">
                瀏覽實戰案例
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 md:px-10 py-10 border-b border-border/50">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 p-5 rounded-2xl bg-muted/40 border border-border/60 hover:border-primary/30 transition-colors">
                <div className="text-primary/70 mb-1">{stat.icon}</div>
                <span className="text-3xl font-black text-foreground tracking-tight">{stat.value}</span>
                <span className="text-sm text-foreground/50 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 bg-muted/30 border-y border-border/50">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-700 delay-200 fill-mode-both">
            <h2 className="text-3xl font-bold text-foreground mb-4">五大核心工具，解決 90% 日常痛點</h2>
            <p className="text-foreground/60 dark:text-white">點擊下方卡片，查看各工具的「圖文教學」與「操作秘笈」</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {TOOLS_DATA.map((tool, index) => {
              const card = (
                <Card 
                  className={`group relative overflow-hidden h-full p-6 border border-border shadow-sm bg-card cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${tool.border} animate-in slide-in-from-bottom-10 fade-in fill-mode-both`}
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-white/0 dark:from-white/5 rounded-bl-full -z-10"></div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${tool.bg} ${tool.color}`}>
                    {ICONS[tool.id]}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-foreground/60 dark:text-white font-medium">
                    {tool.desc}
                  </p>
                  
                  <div className="absolute bottom-6 right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-foreground/40 group-hover:text-primary">
                    <ArrowRight size={20} />
                  </div>
                </Card>
              );

              if (tool.href) {
                return (
                  <a key={tool.name} href={tool.href} target="_blank" rel="noopener noreferrer">
                    {card}
                  </a>
                )
              }
              return (
                <Link key={tool.id} href={`/tools/${tool.id}`}>
                  {card}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">我只想知道... 我該用哪個工具？</h2>
            <p className="text-foreground/60 dark:text-white">根據你的任務情境，我們直接推薦最適合的工具與教學。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {QUICK_REFERENCE.map((section) => (
              <Card key={section.category} className="p-6 border border-border shadow-sm bg-card hover:shadow-md transition-shadow">
                <h3 className="text-sm font-bold text-foreground/40 dark:text-white uppercase tracking-widest mb-4 border-b border-border/50 pb-3">
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.question} className="flex items-center gap-3 group">
                      <HelpCircle size={18} className="text-primary/60 shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground/80 dark:text-white">{item.question}</p>
                        <p className="text-sm text-primary font-bold">→ {item.tool}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/handbook">
              <button className="px-6 py-3 bg-muted text-foreground rounded-full font-bold text-base hover:bg-muted/80 transition-all flex items-center justify-center gap-2 mx-auto">
                查看完整使用手冊 <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 bg-muted/30 border-y border-border/50">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">從真實案例啟發靈感</h2>
            <p className="text-foreground/60 dark:text-white">看看其他部門如何運用 M365 解決了哪些令人頭痛的問題。</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SCENARIOS.slice(0, 3).map((scenario) => (
              <Link key={scenario.id} href={`/cases/${scenario.id}`}>
                <Card className="group h-full flex flex-col p-8 border-2 border-border/50 bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      {scenario.tools.map(tool => (
                        <div key={tool} className="w-7 h-7 flex items-center justify-center scale-110">
                           {TOOL_ICONS_MINI[tool] || ''}
                        </div>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                      {scenario.title}
                    </h3>
                    <p className="text-foreground/60 dark:text-white leading-relaxed">
                      {scenario.context}
                    </p>
                  </div>
                  <div className="mt-8 font-bold text-primary flex items-center gap-2 text-sm">
                    查看解決方案 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/cases">
              <button className="px-8 py-4 bg-card text-foreground border border-border rounded-full font-bold text-base hover:bg-muted transition-all flex items-center justify-center gap-2 mx-auto">
                探索所有 15 大應用情境
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 重要公告 */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Bell size={20} className="text-primary" />
                <h2 className="text-3xl font-bold text-foreground">重要公告</h2>
              </div>
              <p className="text-foreground/50 dark:text-white/60 ml-8">來自 IT 團隊的最新通知與更新</p>
            </div>
          </div>
          <div className="space-y-4">
            {ANNOUNCEMENTS.map((item) => (
              <Card key={item.title} className="p-6 border border-border bg-card hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="shrink-0 text-xs text-foreground/40 font-mono w-24">{item.date}</div>
                <span className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-bold ${item.tagColor}`}>{item.tag}</span>
                <div className="flex-1">
                  <p className="font-bold text-foreground">{item.title}</p>
                  <p className="text-sm text-foreground/60 dark:text-white/60 mt-0.5">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 text-center border-t border-border/50 bg-muted/20">
        <div className="max-w-xl mx-auto">
          <Lightbulb className="mx-auto text-yellow-500 mb-6" size={40} />
          <h2 className="text-3xl font-bold text-foreground mb-4">還有其他問題嗎？</h2>
          <p className="text-foreground/60 dark:text-white mb-8 leading-relaxed">
            我們整理了一份常見問題 (FAQ) 列表，涵蓋了帳號、權限、以及工具使用的各種疑難雜症。如果還是找不到答案，裡面也提供了 IT 團隊的聯絡方式。
          </p>
          <Link href="/faq">
            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              前往 FAQ <ChevronRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      <footer className="border-t border-border/50 py-10 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663446578135/99zHGgEmYidDpe6x6PArSa/cvilux-logo-transparent_3d6879c6.png"
              alt="CviLux"
              className="h-6 w-auto opacity-50 dark:opacity-30"
            />
            <span className="text-sm text-foreground/40 font-medium">瀚荃集團 © 2026 版權所有</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-foreground/40">
            <Link href="/handbook"><span className="hover:text-primary transition-colors cursor-pointer">使用手冊</span></Link>
            <Link href="/cases"><span className="hover:text-primary transition-colors cursor-pointer">實戰案例</span></Link>
            <Link href="/faq"><span className="hover:text-primary transition-colors cursor-pointer">常見問答</span></Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
