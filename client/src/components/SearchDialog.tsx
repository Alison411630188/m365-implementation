import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "wouter";
import { Search, X, ArrowRight, BookOpen, HelpCircle, Wrench, Command } from "lucide-react";
import { searchKnowledgeBase, SearchResult } from "@/lib/search";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

const TYPE_CONFIG = {
  case:     { label: "應用案例", icon: <BookOpen size={14} />,  color: "text-indigo-500",  bg: "bg-indigo-50 dark:bg-indigo-900/30" },
  faq:      { label: "常見問答", icon: <HelpCircle size={14} />, color: "text-green-500",   bg: "bg-green-50 dark:bg-green-900/30"  },
  handbook: { label: "工具說明", icon: <Wrench size={14} />,    color: "text-primary",      bg: "bg-primary/10"                     },
};

export const SearchDialog: FC<SearchDialogProps> = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length >= 2) {
      setResults(searchKnowledgeBase(trimmed));
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSelect = useCallback((result: SearchResult) => {
    onClose();
    const [path, hash] = result.path.split("#");
    navigate(path);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [navigate, onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIndex(i => Math.min(i + 1, results.length - 1)); }
      if (e.key === "ArrowUp")   { e.preventDefault(); setSelectedIndex(i => Math.max(i - 1, 0)); }
      if (e.key === "Enter" && results[selectedIndex]) { handleSelect(results[selectedIndex]); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, results, selectedIndex, handleSelect, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Dialog */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-border overflow-hidden animate-in slide-in-from-top-4 fade-in duration-200">

        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
          <Search size={20} className="text-foreground/40 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="搜尋工具教學、案例、問答..."
            className="flex-1 bg-transparent text-foreground text-base outline-none placeholder:text-foreground/30 font-medium"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-foreground/40 hover:text-foreground transition-colors">
              <X size={18} />
            </button>
          )}
          <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md bg-muted border border-border text-xs text-foreground/40 font-mono shrink-0">
            Esc
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.length >= 2 && results.length === 0 && (
            <div className="py-16 text-center">
              <Search size={32} className="mx-auto text-foreground/20 mb-3" />
              <p className="text-foreground/40 font-medium">找不到「{query}」的相關結果</p>
              <p className="text-sm text-foreground/30 mt-1">試試其他關鍵字，例如：Teams、SharePoint、自動化</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="p-2">
              {results.map((result, idx) => {
                const cfg = TYPE_CONFIG[result.type];
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={`${result.path}-${idx}`}
                    onClick={() => handleSelect(result)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-start gap-4 px-4 py-3.5 rounded-xl text-left transition-all ${
                      isSelected ? "bg-primary/8 dark:bg-primary/15" : "hover:bg-muted/60"
                    }`}
                  >
                    <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5 ${cfg.bg} ${cfg.color}`}>
                      {cfg.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-foreground text-sm truncate leading-snug">{result.title}</p>
                      <p className="text-xs text-foreground/50 mt-0.5">{result.category}</p>
                    </div>
                    <ArrowRight size={16} className={`shrink-0 mt-1 transition-opacity ${isSelected ? "opacity-100 text-primary" : "opacity-0"}`} />
                  </button>
                );
              })}
            </div>
          )}

          {query.length < 2 && (
            <div className="py-10 px-6 text-center">
              <p className="text-sm text-foreground/40 mb-6">搜尋整個知識庫</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Teams 會議", "SharePoint 文件庫", "Power Automate", "任務指派", "資料儀表板"].map(hint => (
                  <button
                    key={hint}
                    onClick={() => setQuery(hint)}
                    className="px-3 py-1.5 rounded-full bg-muted text-foreground/60 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors border border-border"
                  >
                    {hint}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {results.length > 0 && (
          <div className="px-5 py-3 border-t border-border flex items-center justify-between bg-muted/30">
            <span className="text-xs text-foreground/40">找到 {results.length} 個結果</span>
            <div className="flex items-center gap-3 text-xs text-foreground/40">
              <span><kbd className="font-mono">↑↓</kbd> 選擇</span>
              <span><kbd className="font-mono">Enter</kbd> 前往</span>
              <span><kbd className="font-mono">Esc</kbd> 關閉</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ── 必要的 FC 型別補回來 ──
import type { FC } from "react";
