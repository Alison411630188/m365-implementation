import { useState, useMemo } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import { Link } from "wouter";

/**
 * 搜索頁面
 * 提供全站搜索功能，支持按類型篩選
 */
export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<"tool" | "faq" | "case" | undefined>();

  // 執行搜索查詢
  const { data: searchResults, isLoading } = trpc.search.query.useQuery(
    { q: searchQuery, type: selectedType },
    { enabled: searchQuery.length > 0 }
  );

  // 篩選結果
  const filteredResults = useMemo(() => {
    if (!searchResults?.results) return [];
    return searchResults.results;
  }, [searchResults?.results]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
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

            {/* 搜索輸入框 */}
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/50" size={20} />
              <Input
                type="text"
                placeholder="搜索工具、問題或案例..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-12 h-12 text-base"
              />
            </div>

            {/* 類型篩選 */}
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
              <Button
                variant={selectedType === "faq" ? "default" : "outline"}
                onClick={() => setSelectedType("faq")}
                size="sm"
              >
                常見問題
              </Button>
              <Button
                variant={selectedType === "case" ? "default" : "outline"}
                onClick={() => setSelectedType("case")}
                size="sm"
              >
                應用案例
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
        ) : isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="text-foreground/70 mt-4">搜索中...</p>
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-foreground/70">
              未找到相關結果。請嘗試其他搜索詞。
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
                  <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
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
                        {result.keywords && (
                          <div className="flex flex-wrap gap-2">
                            {result.keywords.split(",").slice(0, 3).map((keyword, idx) => (
                              <span key={idx} className="text-xs bg-secondary/50 text-foreground/70 px-2 py-1 rounded">
                                {keyword.trim()}
                              </span>
                            ))}
                          </div>
                        )}
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
