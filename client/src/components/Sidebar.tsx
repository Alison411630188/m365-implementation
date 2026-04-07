import { NAVIGATION_ITEMS } from "@/../../shared/const";
import { ChevronDown, Menu, X, Moon, Sun, Search } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * 側邊欄導航元件 - 淺色模式黑色字體 (深色模式維持原樣)
 */

interface NavItem {
  id: string;
  label: string;
  path?: string;
  children?: NavItem[];
}

export default function Sidebar() {
  const [location] = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(["tools"]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
            // 淺色模式：text-black | 深色模式：維持原本 text-sidebar-foreground/70 或 dark:text-gray-300
            className={`w-full flex items-center justify-between px-6 py-3 text-sm font-bold transition-colors ${
              isExpanded 
                ? "text-primary" 
                : "text-black dark:text-sidebar-foreground/70 hover:bg-muted/50"
            }`}
          >
            <span>{item.label}</span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        ) : (
          <Link
            href={item.path || "/"}
            // 淺色模式：text-black | 深色模式：維持原本 text-sidebar-foreground/80
            className={`
              block px-6 py-3 text-sm transition-all duration-200 border-l-4
              ${active 
                ? "bg-primary/5 text-primary border-primary font-bold" 
                : "border-transparent text-black dark:text-sidebar-foreground/80 hover:bg-muted hover:text-primary"
              }
            `}
          >
            <span className={level > 0 ? "ml-2" : ""}>{item.label}</span>
          </Link>
        )}

        {hasChildren && isExpanded && item.children && (
          <div className="bg-muted/10 dark:bg-gray-800/20 border-b border-sidebar-border/50 dark:border-gray-700/50">
            {item.children.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-xl bg-primary text-primary-foreground shadow-lg"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden" onClick={() => setIsMobileOpen(false)} />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen bg-white dark:bg-gray-900 border-r border-sidebar-border dark:border-gray-700 transition-all duration-300 z-40 flex flex-col ${
          isMobileOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0 lg:w-64"
        }`}
      >
        {/* Logo 區域 */}
        <div className="flex flex-col items-center p-8 border-b border-sidebar-border dark:border-gray-800">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663446578135/99zHGgEmYidDpe6x6PArSa/cvilux-logo-transparent_3d6879c6.png"
            alt="CviLux Logo"
            className="h-10 w-auto mb-3"
          />
          <div className="text-center">
            <span className="block font-black text-red-600 text-lg tracking-tight leading-none">瀚荃集團</span>
            {/* 淺色改深：text-black/60 | 深色維持：dark:text-gray-400 */}
            <span className="block font-bold text-black/60 dark:text-gray-400 text-[10px] uppercase tracking-[0.2em] mt-1">M365 導入專案</span>
          </div>
        </div>

        {/* 搜尋框 */}
        <div className="px-4 py-4">
          <Link href="/search">
            {/* 淺色改深：text-black/70 | 深色維持：dark:text-sidebar-foreground/70 */}
            <div className="w-full flex items-center gap-3 px-4 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-black/70 dark:text-sidebar-foreground/70 hover:text-primary hover:ring-2 hover:ring-primary/20 transition-all cursor-pointer group">
              <Search size={16} className="group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">搜尋手冊、案例...</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto pt-2 scrollbar-hide">
          {/* 淺色改深：text-black/40 | 深色維持：dark:text-sidebar-foreground/60 */}
          <div className="px-6 mb-2 text-[10px] font-bold text-black/40 dark:text-sidebar-foreground/60 uppercase tracking-[0.15em]">
            知識庫分類
          </div>
          {NAVIGATION_ITEMS.map((item) => renderNavItem(item))}
        </nav>

        {/* 底部狀態列 */}
        <div className="p-4 bg-gray-50 dark:bg-gray-950 border-t border-sidebar-border dark:border-gray-800 flex flex-col gap-3">
          <div className="flex items-center justify-between px-2">
            <div>
              <p className="text-[10px] font-bold text-black/60 dark:text-gray-400">系統版本 v1.0.4</p>
              <p className="text-[10px] text-black/30 dark:text-gray-500">CviLux IT Team © 2026</p>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-sidebar-border dark:border-gray-700 text-black dark:text-white"
            >
              {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}