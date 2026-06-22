import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Search as SearchIcon, BookOpen, HelpCircle, Wrench, ArrowLeft } from "lucide-react";
import { searchKnowledgeBase, SearchResult } from "@/lib/search";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

const TYPE_CONFIG = {
  case:     { label: "應用案例", icon: <BookOpen size={16} />,   color: "text-indigo-600 dark:text-indigo-400",  bg: "bg-indigo-50 dark:bg-indigo-900/30" },
  faq:      { label: "常見問答", icon: <HelpCircle size={16} />, color: "text-green-600 dark:text-green-400",    bg: "bg-green-50 dark:bg-green-900/30"   },
  handbook: { label: "工具說明", icon: <Wrench size={16} />,     color: "text-primary",                          bg: "bg-primary/10"                      },
};

export default function Search() {
  usePageTitle("搜尋");
  const [location] = useLocation();
  const params = new URLSearchParams(location.split("?")[1] || "");
  const initialQuery = params.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [, navigate] = useLocation();

  useEffect(() => {
    const trimmed = query.trim();
    setResults(trimmed.length >= 2 ? searchKnowledgeBase(trimmed) : []);
  }, [query]);

  const handleSelect = (result: SearchResult) => {
    const [path, hash] = result.path.split("#");
    navigate(path);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  };

  const grouped = results.reduce((acc, r) => {
    if (!acc[r.type]) acc[r.type] = [];
    acc[r.type].push(r);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[800px] mx-auto px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-sm font-bold text-foreground/50 hover:text-primary transition-colors mb-6">
              <ArrowLeft size={16} /> 返回首頁
            </a>
          </Link>
          <h1 className="text-3xl font-extrabold text-foreground mb-6">搜尋知識庫</h1>

          {/* Search Input */}
          <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border-2 border-border bg-card focus-within:border-primary/50 transition-colors shadow-sm">
            <SearchIcon size={20} className="text-foreground/40 shrink-0" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="輸入關鍵字，例如：Teams 會議、自動化流程..."
              className="flex-1 bg-transparent text-foreground text-base outline-none placeholder:text-foreground/30 font-medium"
              autoFocus
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-foreground/40 hover:text-foreground transition-colors text-sm font-medium">
                清除
              </button>
            )}
          </div>
        </div>

        {/* Hint chips */}
        {query.length < 2 && (
          <div className="mb-10">
            <p className="text-sm text-foreground/40 mb-4 font-medium">熱門搜尋</p>
            <div className="flex flex-wrap gap-2">
              {["Teams 會議", "SharePoint 文件庫", "Power Automate 自動化", "任務指派", "資料儀表板", "忘記密碼"].map(hint => (
                <button
                  key={hint}
                  onClick={() => setQuery(hint)}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground/60 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
                >
                  {hint}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* No results */}
        {query.length >= 2 && results.length === 0 && (
          <div className="text-center py-20">
            <SearchIcon size={40} className="mx-auto text-foreground/20 mb-4" />
            <p className="text-xl font-bold text-foreground/50">找不到「{query}」的結果</p>
            <p className="text-foreground/30 mt-2">試試其他關鍵字，或瀏覽下方分類</p>
          </div>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div>
            <p className="text-sm text-foreground/50 mb-6 font-medium">
              找到 <span className="text-primary font-bold">{results.length}</span> 個「{query}」相關結果
            </p>

            {(["case", "handbook", "faq"] as const).map(type => {
              const group = grouped[type];
              if (!group?.length) return null;
              const cfg = TYPE_CONFIG[type];
              return (
                <div key={type} className="mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${cfg.bg} ${cfg.color}`}>
                      {cfg.icon}
                    </div>
                    <h2 className="font-bold text-foreground">{cfg.label}</h2>
                    <span className="text-xs text-foreground/40 font-medium ml-1">({group.length})</span>
                  </div>
                  <div className="space-y-3">
                    {group.map((result, idx) => (
                      <Card
                        key={idx}
                        onClick={() => handleSelect(result)}
                        className="p-5 border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-foreground group-hover:text-primary transition-colors leading-snug">{result.title}</p>
                            <p className="text-xs text-foreground/40 mt-1 font-medium">{result.category}</p>
                          </div>
                          <ArrowRight size={18} className="text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

import { ArrowRight } from "lucide-react";
