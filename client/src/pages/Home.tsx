import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  ArrowRight, 
  BookOpen,
  Lightbulb,
  Rocket
} from "lucide-react";
import {
  PlannerIcon,
  PowerAutomateIcon,
  PowerBIIcon,
  SharePointIcon,
  TeamsIcon,
} from "@/components/M365Icons";
import { TOOLS_DATA } from "@/data/tools";

/**
 * M365 實戰學院 - 精緻版首頁 (Landing Page)
 */

const ICONS: { [key: string]: JSX.Element } = {
  teams: <div className="w-8 h-8 flex items-center justify-center scale-[1.35]"><TeamsIcon /></div>,
  sharepoint: <div className="w-8 h-8 flex items-center justify-center"><SharePointIcon /></div>,
  planner: <div className="w-8 h-8 flex items-center justify-center"><PlannerIcon /></div>,
  'power-automate': <div className="w-8 h-8 flex items-center justify-center scale-[1.35]"><PowerAutomateIcon /></div>,
  'power-bi': <div className="w-8 h-8 flex items-center justify-center scale-[1.35]"><PowerBIIcon /></div>,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-primary/20">
      
      {/* --- 主視覺區塊 (Hero Section) --- */}
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

      {/* --- 五大核心工具區塊 --- */}
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
                  
                  {/* 隱藏的箭頭，hover時出現 */}
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

      {/* --- 學習資源分流區塊 --- */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Link href="/handbook">
              <Card className="group p-8 border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen size={32} />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">M365 使用手冊</h2>
                <p className="text-foreground/60 dark:text-white leading-relaxed mb-6 h-12">
                  不知道什麼時候該用什麼工具？這裡有「快速對照表」與「檔案儲存觀念釐清」，幫你打好基本功。
                </p>
                <div className="font-bold text-primary flex items-center gap-2">
                  開始閱讀 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link href="/cases">
              <Card className="group p-8 border border-border/50 bg-card hover:border-orange-500/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb size={32} />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">15 大應用情境案例</h2>
                <p className="text-foreground/60 dark:text-white leading-relaxed mb-6 h-12">
                  整理了企業最常見的痛點（如：簽核自動化、結案報告自動產出），提供超詳細 Step-by-Step 教學。
                </p>
                <div className="font-bold text-orange-500 flex items-center gap-2">
                  探索案例 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

          </div>
        </div>
      </section>

      {/* --- Footer 簡約結尾 --- */}
      <footer className="border-t border-border/50 py-10 text-center">
        <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest">
          Empowering the Modern Workplace
        </p>
      </footer>

    </div>
  );
}
