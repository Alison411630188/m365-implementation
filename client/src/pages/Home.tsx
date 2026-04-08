import { M365_TOOLS } from "@/../../shared/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import {
  PlannerIcon,
  PowerAutomateIcon,
  PowerBIIcon,
  SharePointIcon,
  TeamsIcon,
} from "@/components/M365Icons";

/**
 * 首頁元件 - 整合按鈕顏色統一、圖標縮小與完美對齊
 */

export default function Home() {
  const { t } = useTranslation();
  let { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {/* 英雄區域 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background border-b border-border">
        {/* 頂部與底部間距優化 */}
        <div className="container pt-10 pb-10 md:pt-16 md:pb-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
              {t('home.title')} <span className="text-primary">{t('home.subtitle')}</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-10 leading-relaxed">
              {t('home.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/handbook">
                <Button size="lg" className="h-14 px-8 gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95">
                  {t('home.viewHandbook')}
                </Button>
              </Link>
              
              <Link href="/cases">
                <Button size="lg" className="h-14 px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95">
                  {t('home.viewCases')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </section>

      {/* M365 工具介紹 */}
      <section className="container pt-10 pb-24">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">
            {t('home.coreTools')}
          </h2>
          <p className="text-lg text-foreground/60">{t('home.coreToolsDesc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {M365_TOOLS.map((tool) => {
            const handleToolClick = () => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            };
            
            const getIconComponent = () => {
              switch (tool.id) {
                case 'planner': return <PlannerIcon />;
                case 'power-automate': return <PowerAutomateIcon />;
                case 'power-bi': return <PowerBIIcon />;
                case 'sharepoint': return <SharePointIcon />;
                case 'teams': return <TeamsIcon />;
                default: return null;
              }
            };
            
            const isPlanner = tool.id === 'planner';
            const isSharePoint = tool.id === 'sharepoint';
            
            return (
              <Link key={tool.id} href={`/tools/${tool.id}`} onClick={handleToolClick} className="group block">
                <Card className="h-full p-8 relative overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-primary/40 border-l-4 border-l-border group-hover:border-l-primary cursor-pointer bg-card flex flex-col">
                  
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors" />
                  
                  {/* 圖標對齊容器 */}
                  <div className="h-16 flex items-center mb-4">
                    <div className={`transform transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110 flex items-center justify-center 
                      ${isPlanner ? 'w-9 h-9 translate-y-1' : isSharePoint ? 'w-10 h-10' : 'w-14 h-14'}`}>
                      {getIconComponent()}
                    </div>
                  </div>
                  
                  {/* 標題對齊容器 (固定高度確保對齊) */}
                  <div className="min-h-[4rem] flex items-center mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {t(`tools.${tool.id}.name`)}
                    </h3>
                  </div>
                  
                  {/* 描述對齊容器 */}
                  <div className="min-h-[3.5rem]">
                    <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2">
                      {t(`tools.${tool.id}.description`)}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 duration-500">
                    <span className="text-primary font-bold text-xs flex items-center gap-1">
                      {t('home.enterDetail')} <ArrowRight size={14} />
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 快速導航與底部 */}
      <section className="bg-secondary/30 border-y border-border">
        <div className="container py-24 text-center">
          <h2 className="text-3xl font-bold mb-16">{t('home.quickNav')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Link href="/handbook">
              <div className="group bg-card p-10 rounded-2xl border border-border hover:shadow-2xl transition-all cursor-pointer h-full flex flex-col items-center">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform">📖</div>
                <h3 className="text-2xl font-bold mb-4">{t('home.handbook')}</h3>
                <p className="text-foreground/60 mb-8 min-h-[3rem]">{t('home.handbookDesc')}</p>
                <Button variant="outline" className="w-full mt-auto">{t('home.enterHandbook')}</Button>
              </div>
            </Link>
            <Link href="/cases">
              <div className="group bg-card p-10 rounded-2xl border border-border hover:shadow-2xl transition-all cursor-pointer h-full flex flex-col items-center">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform">💼</div>
                <h3 className="text-2xl font-bold mb-4">{t('home.cases')}</h3>
                <p className="text-foreground/60 mb-8 min-h-[3rem]">{t('home.casesDesc')}</p>
                <Button variant="outline" className="w-full mt-auto">{t('home.viewAllCases')}</Button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}