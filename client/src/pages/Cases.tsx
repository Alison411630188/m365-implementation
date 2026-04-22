import { useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Workflow, 
  BarChart3, 
  MessageSquare, 
  Share2,
  Users,
  Target,
  AlertCircle,
  BookOpen
} from "lucide-react";
import { SCENARIOS, ToolType } from "@/data/cases";

/**
 * M365 應用情境案例 - 修復 HTML 渲染問題
 */

function getToolBadge(tool: ToolType) {
  switch (tool) {
    case "Planner":
      return { icon: <CheckCircle2 size={12} className="mr-1" />, bg: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" };
    case "Power Automate":
      return { icon: <Workflow size={12} className="mr-1" />, bg: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" };
    case "Power BI":
      return { icon: <BarChart3 size={12} className="mr-1" />, bg: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" };
    case "Teams":
      return { icon: <MessageSquare size={12} className="mr-1" />, bg: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" };
    case "SharePoint":
      return { icon: <Share2 size={12} className="mr-1" />, bg: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" };
    default:
      return { icon: <BookOpen size={12} className="mr-1" />, bg: "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400" };
  }
}

export default function Cases() {
  const [activeFilter, setActiveFilter] = useState<ToolType | "All">("All");

  const filteredScenarios = activeFilter === "All" 
    ? SCENARIOS 
    : SCENARIOS.filter(s => s.tools.includes(activeFilter));

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10">
      <div className="mx-auto px-6 md:px-10 py-12 max-w-[1440px] w-full">
        
        <div className="mb-12 pb-8 border-b border-border">
          <h1 className="text-4xl font-extrabold text-foreground tracking-tight mb-4 flex items-center gap-3">
            <div className="w-2 h-10 bg-primary rounded-full" />
            M365 應用情境案例
          </h1>
          <p className="text-lg text-foreground/60 max-w-4xl leading-relaxed ml-5">
            不知道從何開始導入？這裡為您準備了 15 種企業真實情境。我們以標準的 Agile (敏捷) 格式列出使用者故事、痛點與目標，並提供極度詳細的「滑鼠點擊級別」實作步驟，協助您一次上手。
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
              activeFilter === "All" 
                ? "bg-primary text-primary-foreground scale-105" 
                : "bg-white dark:bg-gray-800 text-foreground/60 hover:bg-gray-50 dark:hover:bg-gray-700 border border-border"
            }`}
          >
            全部情境 ({SCENARIOS.length})
          </button>
          {(["Planner", "Power Automate", "Power BI", "Teams", "SharePoint"] as ToolType[]).map(tool => (
            <button
              key={tool}
              onClick={() => setActiveFilter(tool)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold flex items-center transition-all shadow-sm ${
                activeFilter === tool 
                  ? "bg-primary text-primary-foreground scale-105" 
                  : "bg-white dark:bg-gray-800 text-foreground/60 hover:bg-gray-50 dark:hover:bg-gray-700 border border-border"
              }`}
            >
              {getToolBadge(tool).icon}
              {tool}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          {filteredScenarios.map((scenario) => (
            <Card key={scenario.id} className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 dark:border-primary/30 dark:hover:border-primary/50 shadow-md hover:shadow-xl transition-shadow bg-card">
              
              <div className="p-6 pb-4 border-b border-border/50 bg-muted/30">
                <div className="flex flex-wrap gap-2 mb-4">
                  {scenario.tools.map(tool => {
                    const badge = getToolBadge(tool);
                    return (
                      <span key={tool} className={`flex items-center px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider ${badge.bg}`}>
                        {badge.icon}
                        {tool}
                      </span>
                    );
                  })}
                </div>
                <h3 className="text-2xl font-bold text-foreground leading-tight">
                  {scenario.title}
                </h3>
              </div>

              <div className="p-6 bg-background space-y-4 border-b border-border/50">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-foreground/40 uppercase tracking-widest mb-0.5">目標對象</p>
                    <p className="text-sm font-medium text-foreground">{scenario.targetAudience}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
                    <Target size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-foreground/40 uppercase tracking-widest mb-0.5">達成目標</p>
                    <p className="text-sm font-medium text-foreground">{scenario.goal}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg">
                    <AlertCircle size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-foreground/40 uppercase tracking-widest mb-0.5">解決痛點</p>
                    <p className="text-sm font-medium text-foreground">{scenario.context}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary/5 border-b border-border/50">
                <div className="flex gap-2">
                  <BookOpen size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-1.5">User Story 使用者故事</p>
                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                      "{scenario.userStory}"
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-5">實作步驟指南</h4>
                <div className="space-y-6">
                  {scenario.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-black border border-primary/20">
                        {idx + 1}
                      </div>
                      {/* 使用 dangerouslySetInnerHTML 來渲染 HTML */}
                      <div 
                        className="pt-0.5 text-sm text-foreground/80 leading-relaxed font-medium"
                        dangerouslySetInnerHTML={{ __html: step }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
            </Card>
          ))}
          
          {filteredScenarios.length === 0 && (
            <div className="col-span-full py-20 text-center text-foreground/50 font-bold">
              此工具目前沒有相關情境。
            </div>
          )}
        </div>

      </div>
    </div>
  );
}