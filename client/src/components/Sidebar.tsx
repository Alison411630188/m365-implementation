import { NAVIGATION_ITEMS } from "@/../../shared/const";
import { ChevronDown, Menu, X, Moon, Sun, Search } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { SearchDialog } from "@/components/SearchDialog";

/**
 * 側邊欄導航元件 - 第三次調整了 Logo 下方標籤的垂直間距
 */

interface NavItem {
  id: string;
  label: string;
  path?: string;
  children?: NavItem[];
}

export default function Sidebar() {
  const [location, setLocation] = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(["tools"]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = (path: string) => {
    setLocation(path);
    window.scrollTo(0, 0);
    setIsMobileOpen(false); // 在點擊手機版連結後關閉選單
  };

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return path === "/" ? location === "/" : location.startsWith(path);
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const active = isActive(item.path);
    const isExpanded = expandedItems.includes(item.id);

    return (
      <div key={item.id} className="w-full">
        {hasChildren ? (
          <button
            onClick={() => toggleExpand(item.id)}
            className={`w-[calc(100%-24px)] flex items-center justify-between px-4 py-2.5 mx-3 my-1 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap ${
              isExpanded 
                ? "text-primary bg-primary/5 border border-primary/10 shadow-[0_0_10px_rgba(var(--primary),0.05)]" 
                : "text-black/80 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 border border-transparent"
            }`}
          >
            <span>{item.label}</span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${isExpanded ? "rotate-180 text-primary" : "text-black/40 dark:text-white"}`}
            />
          </button>
        ) : (
          <a
            href={item.path || "/"}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(item.path || "/");
            }}
            className={`
              block whitespace-nowrap px-4 py-2.5 mx-3 my-1 text-sm rounded-xl transition-all duration-300
              ${active 
                ? "bg-primary/10 dark:bg-primary/15 text-primary font-bold border border-primary/30 shadow-[0_0_15px_-3px_rgba(var(--primary),0.3)] translate-x-1" 
                : "text-black/70 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary hover:translate-x-1 border border-transparent"
              }
            `}
          >
            <span className={level > 0 ? "ml-1" : ""}>{item.label}</span>
          </a>
        )}

        {hasChildren && isExpanded && item.children && (
          <div className="ml-7 pl-2 mt-1 mb-2 border-l-2 border-black/5 dark:border-primary/20 space-y-0.5 animate-in slide-in-from-top-2 fade-in duration-200">
            {item.children.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />

      {/* Global background elements */}
      <div className="fixed inset-0 z-[-100] bg-slate-50 dark:bg-[#050507]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] opacity-40 dark:opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#00000015_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"></div>
      </div>

      {/* Mobile hamburger menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-xl bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)] hover:scale-105 transition-transform"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-30 lg:hidden" onClick={() => setIsMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-white/80 dark:bg-black backdrop-blur-2xl dark:backdrop-blur-none 
          border-r-4 border-gray-300 dark:border-gray-700 
          shadow-[8px_0_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-[8px_0_30px_-10px_rgba(var(--primary),0.15)] 
          transition-all duration-500 ease-out z-40 flex flex-col ${
          isMobileOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0 lg:w-64"
        }`}
      >
        {/* Logo Area */}
        <div className="flex flex-col items-center pt-10 pb-6 border-b border-black/5 dark:border-white/5 relative">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663446578135/99zHGgEmYidDpe6x6PArSa/cvilux-logo-transparent_3d6879c6.png"
            alt="CviLux Logo"
            className="h-10 w-auto mb-3 relative z-10 hover:scale-105 transition-transform duration-300 drop-shadow-md"
          />
          <div className="text-center relative z-10">
            <span className="block font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 text-xl tracking-tight leading-none drop-shadow-sm">
              瀚荃集團
            </span>
            <span className="block font-bold text-black/50 dark:text-white text-[10px] uppercase tracking-[0.25em] mt-3 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 px-2 py-0.5 rounded-full inline-block shadow-sm">
              M365 導入專案
            </span>
          </div>
        </div>

        {/* Search trigger button */}
        <div className="px-4 py-5">
          <button onClick={() => setIsSearchOpen(true)} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white dark:bg-[#121214] border border-black/10 dark:border-white/10 shadow-sm text-black/50 dark:text-white hover:text-primary hover:border-primary/40 hover:shadow-[0_0_15px_rgba(var(--primary),0.15)] transition-all cursor-pointer group">
            <Search size={16} className="group-hover:scale-110 transition-transform text-primary/70" />
            <span className="text-xs font-bold tracking-wide">
              搜尋手冊、案例...
            </span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto pt-1 pb-4 scrollbar-hide">
          <div className="px-6 mb-3 text-[10px] font-extrabold text-black/40 dark:text-white uppercase tracking-[0.2em] flex items-center gap-2">
            知識庫分類
            <div className="h-px bg-gradient-to-r from-black/10 to-transparent dark:from-primary/20 dark:to-transparent flex-1 mt-0.5"></div>
          </div>
          {NAVIGATION_ITEMS.map((item) => renderNavItem(item))}
        </nav>

        {/* Footer status bar */}
        <div className="p-4 bg-black/[0.02] dark:bg-black/20 border-t border-black/5 dark:border-white/5">
          <div className="flex items-center justify-between px-2">
            <div>
              <p className="text-[10px] font-bold text-black/70 dark:text-white">
                系統版本 v1.0.0
              </p>
              <p className="text-[9px] text-black/40 dark:text-white mt-0.5">CviLux IT Team © 2026</p>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-white dark:bg-[#121214] shadow-sm border border-black/10 dark:border-white/10 text-black/70 dark:text-white hover:text-primary hover:border-primary/40 hover:shadow-[0_0_10px_rgba(var(--primary),0.2)] hover:scale-105 transition-all"
                title="切換深淺色 / Toggle Theme"
              >
                {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
