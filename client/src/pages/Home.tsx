import { M365_TOOLS } from "@/../../shared/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import {
  PlannerIcon,
  PowerAutomateIcon,
  PowerBIIcon,
  SharePointIcon,
  TeamsIcon,
} from "@/components/M365Icons";

/**
 * 首頁元件
 * 設計理念：企業級知識庫風格
 * - 英雄區域介紹 M365 導入專案
 * - 工具卡片網格展示
 * - 快速導航到各個主要功能
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* 英雄區域 */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background border-b border-border">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Microsoft 365 導入專案
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              完整的 M365 導入指南、應用案例和工具說明。幫助您的團隊快速掌握 Microsoft 365 的核心功能和最佳實踐。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/handbook">
                <Button size="lg" className="gap-2">
                  查看使用手冊 <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/cases">
                <Button size="lg" variant="outline">
                  應用情境案例
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* M365 工具介紹 */}
      <section className="container py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            M365 核心工具
          </h2>
          <p className="text-foreground/70">
            了解每個工具的功能和使用場景
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {M365_TOOLS.map((tool) => {
            const handleToolClick = () => {
              // 延遲滾動，確保頁面已加載
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            };
            
            const getIconComponent = () => {
              switch (tool.id) {
                case 'planner':
                  return <PlannerIcon />;
                case 'power-automate':
                  return <PowerAutomateIcon />;
                case 'power-bi':
                  return <PowerBIIcon />;
                case 'sharepoint':
                  return <SharePointIcon />;
                case 'teams':
                  return <TeamsIcon />;
                default:
                  return null;
              }
            };
            
            return (
            <Link key={tool.id} href={`/tools/${tool.id}`} onClick={handleToolClick} className="group block">
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-border group-hover:border-l-primary group-hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {getIconComponent()}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-foreground/70">
                  {tool.description}
                </p>
              </Card>
            </Link>
            );
          })}
        </div>
      </section>

      {/* 快速導航 */}
      <section className="bg-secondary/50 border-t border-border">
        <div className="container py-16">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            快速導航
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 使用手冊 */}
            <Link href="/handbook">
            <div className="bg-background rounded-lg p-8 border border-border hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                M365 使用手冊
              </h3>
              <p className="text-foreground/70 mb-6">
                逐步指南和最佳實踐，幫助您快速上手 M365
              </p>
              <Button variant="outline" className="w-full">
                進入手冊 <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </Link>

          {/* 應用案例 */}
          <Link href="/cases">
            <div className="bg-background rounded-lg p-8 border border-border hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                應用情境案例
              </h3>
              <p className="text-foreground/70 mb-6">
                真實業務場景中的 M365 應用案例和解決方案
              </p>
              <Button variant="outline" className="w-full">
                查看案例 <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </Link>

          </div>
        </div>
      </section>

      {/* 問答區 - 獨立部分 */}
      <section className="container py-16">
        <Link href="/faq">
          <div className="bg-background rounded-lg p-8 border border-border hover:shadow-lg transition-shadow cursor-pointer max-w-2xl mx-auto">
            <div className="text-4xl mb-4">❓</div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              M365 問答區
            </h3>
            <p className="text-foreground/70 mb-6">
              常見問題解答和故障排除指南。在這裡提出您的問題，我們的專家團隊會為您解答。
            </p>
            <Button className="w-full" size="lg">
              進入問答區 <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </Link>
      </section>

      {/* 底部 CTA */}
      <section className="bg-primary text-primary-foreground mt-8">
        <div className="container py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">
            準備好開始使用 M365 了嗎？
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            探索我們的完整資源庫，找到適合您團隊的解決方案
          </p>
          <Link href="/handbook">
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              開始探索 <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
