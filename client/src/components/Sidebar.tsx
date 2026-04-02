import { NAVIGATION_ITEMS } from "@/../../shared/const";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

/**
 * 側邊欄導航元件
 * 設計理念：企業級知識庫風格
 * - 持久化導航，左側邊欄
 * - 藍色強調線表示當前頁面
 * - 可展開/收起的工具說明子菜單
 * - 響應式設計：平板上可收起，手機上轉為頂部導航
 */

interface NavItem {
  id: string;
  label: string;
  path?: string;
  children?: NavItem[];
}

export default function Sidebar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>(["tools"]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return location === path || location.startsWith(path + "/");
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const active = isActive(item.path);
    const isExpanded = expandedItems.includes(item.id);

    return (
      <div key={item.id}>
        {hasChildren ? (
          <button
            onClick={() => toggleExpand(item.id)}
            className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors ${
              level === 0
                ? "text-sidebar-foreground hover:bg-muted"
                : "text-sidebar-foreground/80 hover:bg-muted/50"
            }`}
          >
            <span>{item.label}</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        ) : (
          <Link
            href={item.path || "/"}
            className={`block px-4 py-3 text-sm font-medium transition-all border-l-4 ${
              active
                ? "border-l-primary bg-primary/5 text-primary"
                : "border-l-transparent text-sidebar-foreground hover:bg-muted"
            }`}
          >
            {item.label}
          </Link>
        )}

        {hasChildren && isExpanded && item.children && (
          <div className="bg-muted/30">
            {item.children.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* 移動設備菜單按鈕 */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 側邊欄背景遮罩（移動設備） */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* 側邊欄 */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 z-40 overflow-y-auto ${
          isOpen ? "w-64" : "w-0 overflow-hidden"
        } lg:fixed lg:w-64 lg:z-40 lg:flex-shrink-0 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* 側邊欄頭部 */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              M
            </div>
            <span className="font-bold text-sidebar-foreground hidden sm:inline">
              M365
            </span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden lg:block p-1 hover:bg-muted rounded"
          >
            {isOpen ? "←" : "→"}
          </button>
        </div>

        {/* 導航項目 */}
        <nav className="flex-1 overflow-y-auto">
          {NAVIGATION_ITEMS.map((item) => renderNavItem(item))}
        </nav>

        {/* 側邊欄底部 */}
        <div className="border-t border-sidebar-border p-4 text-xs text-sidebar-foreground/60 bg-muted/30">
          <p className="font-semibold text-sidebar-foreground/80">M365 導入專案</p>
          <p>知識庫 v1.0</p>
        </div>
      </aside>


    </>
  );
}
