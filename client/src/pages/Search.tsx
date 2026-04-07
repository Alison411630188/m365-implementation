import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
// 導入你的資料來源
import { M365_TOOLS } from "@/../../shared/const"; 

/**
 * 搜索頁面 - 修改為前端本地搜尋，確保一定能找到資料
 */
export default function Search() {
  const [location] = useLocation();
  // 取得網址上的搜尋參數 (例如 /search?q=planner)
  const queryParams = new URLSearchParams(window.location.search);
  const initialQuery = queryParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedType, setSelectedType] = useState<"tool" | "faq" | "case" | undefined>();

  // 【核心修改】直接在前端進行搜尋過濾
  const filteredResults = useMemo(() => {
    if (searchQuery.trim().length === 0) return [];

    const lowerQuery = searchQuery.toLowerCase();

    // 搜尋 M365_TOOLS 裡的資料
    return M365_TOOLS.filter((tool) => {
      const matchText = (tool.name + tool.description).toLowerCase();
      const matchSearch = matchText.includes(lowerQuery);
      
      // 如果有選擇類型，則還要符合類型 (目前 M365_TOOLS 預設皆為 tool)
      if (selectedType && selectedType !== 'tool') return false;
      
      return matchSearch;
    }).map(tool => ({
      id: tool.id,
      title: tool.name,
      description: tool.description,
      type: "tool",
      url: `/tools/${tool.id}`,
      keywords: tool.id
    }));
  }, [searchQuery, selectedType]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // 可選：同步更新網址，讓重新整理後搜尋還在
    const newUrl = e.target.value 
      ? `/search?q=${encodeURIComponent(e.target.value)}` 
      : '/search';
    window.history.replaceState({}, '', newUrl);
  };

  const getTypeLabel = (type: string) => {
    const typeMap: Record<string, string> = {
      tool: "工具說明",
      faq: "常見問題",
      case: "應用案例",
    };
    return typeMap[type] || type;
  };

  const getTypeColor = (type: string) => {
    const colorMap: Record<string, string> = {
      tool: "bg-blue-100 text-blue-800",
      faq: "bg-green-100 text-green-800",
      case: "bg-purple-100 text-purple-800",
    };
    return colorMap[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 搜索頭部 */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background border-b border-border">
        <div className="container py-12 md:py-16">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              搜索 M365 資源
            </h1>
            <p className="text-foreground/70 mb-8">
              快速查找工具說明、常見問題和應用案例
            </p>

            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/50" size={20} />
              <Input
                type="text"
                placeholder="搜索工具 (例如: Planner, Teams)..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-12 h-12 text-base"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <Button
                variant={selectedType === undefined ? "default" : "outline"}
                onClick={() => setSelectedType(undefined)}
                size="sm"
              >
                全部
              </Button>
              <Button
                variant={selectedType === "tool" ? "default" : "outline"}
                onClick={() => setSelectedType("tool")}
                size="sm"
              >
                工具說明
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 搜索結果 */}
      <section className="container py-12">
        {searchQuery.length === 0 ? (
          <div className="text-center py-12">
            <SearchIcon size={48} className="mx-auto text-foreground/30 mb-4" />
            <p className="text-foreground/70">
              開始輸入搜索詞以查找相關內容
            </p>
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-foreground/70">
              未找到關於 "{searchQuery}" 的結果。請嘗試搜尋 "Planner" 或 "Teams"。
            </p>
          </div>
        ) : (
          <div>
            <p className="text-foreground/70 mb-6">
              找到 <span className="font-semibold text-foreground">{filteredResults.length}</span> 個結果
            </p>

            <div className="space-y-4">
              {filteredResults.map((result) => (
                <Link key={result.id} href={result.url || "#"}>
                  <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-primary">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${getTypeColor(result.type)}`}>
                            {getTypeLabel(result.type)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {result.title}
                        </h3>
                        <p className="text-foreground/70 mb-3">
                          {result.description}
                        </p>
                      </div>
                      <ArrowRight className="text-primary flex-shrink-0 mt-1" size={20} />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}