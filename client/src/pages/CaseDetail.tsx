
import { SCENARIOS } from "@/data/cases";
import { Link } from "wouter";
import NotFound from "./NotFound";
import {
  PlannerIcon,
  PowerAutomateIcon,
  PowerBIIcon,
  SharePointIcon,
  TeamsIcon,
} from "@/components/M365Icons";
import { ArrowLeft, CheckCircle } from "lucide-react";

// Since some icons are not in the shared component, we define them here.
const OutlookIcon = () => <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663446578135/bce5925a-356c-4861-9C33-7D36F6D69542/outlook-logo.svg" alt="Outlook" className="w-full h-full" />;
const WhiteboardIcon = () => <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663446578135/2ac36b94-0610-4433-8984-b0a32e18FE52/whiteboard-logo.svg" alt="Whiteboard" className="w-full h-full" />;
const PowerAppsIcon = () => <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663446578135/40e4cf81-6a2c-4573-bd17-9133a4635674/powerapps-logo.svg" alt="Power Apps" className="w-full h-full" />;
const FormsIcon = () => <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663446578135/e822049e-e39e-4e67-a2f0-15f7b4ea398f/forms-logo.svg" alt="Forms" className="w-full h-full" />;
const OneDriveIcon = () => <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663446578135/334a1793-1579-444a-b152-730ab62b8823/onedrive-logo.svg" alt="OneDrive" className="w-full h-full" />;


const TOOL_ICONS: { [key: string]: JSX.Element } = {
  Teams: <TeamsIcon />,
  SharePoint: <SharePointIcon />,
  Planner: <PlannerIcon />,
  "Power Automate": <PowerAutomateIcon />,
  "Power BI": <PowerBIIcon />,
  Outlook: <OutlookIcon />,
  "Microsoft Whiteboard": <WhiteboardIcon />,
  "Power Apps": <PowerAppsIcon />,
  "Microsoft Forms": <FormsIcon />,
  OneDrive: <OneDriveIcon />,
};

interface CaseDetailProps {
  params: {
    id: string;
  };
}

export default function CaseDetail({ params }: CaseDetailProps) {
  const scenario = SCENARIOS.find((s) => s.id === params.id);

  if (!scenario) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10 pb-20">
      <div className="mx-auto px-6 md:px-10 py-12 max-w-[1024px] w-full animate-in fade-in duration-500">
        
        <div className="mb-10 pb-8 border-b border-border">
          <Link href="/cases">
            <a className="inline-flex items-center gap-2 text-sm font-bold text-foreground/60 dark:text-white hover:text-primary transition-colors mb-6">
              <ArrowLeft size={16} />
              返回所有情境案例
            </a>
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
            {scenario.title}
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-foreground/50 dark:text-white">使用工具：</span>
            <div className="flex items-center gap-3">
              {scenario.tools.map((tool) => (
                <div key={tool} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/60 border border-border/60">
                  <div className="w-5 h-5 flex items-center justify-center scale-110">
                    {TOOL_ICONS[tool]}
                  </div>
                  <span className="text-xs font-bold text-foreground/80 dark:text-white">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-8">
            <div className="p-6 bg-card border border-border rounded-2xl shadow-sm">
              <h2 className="text-lg font-bold text-foreground mb-3">情境說明</h2>
              <p className="text-foreground/70 dark:text-white leading-relaxed">{scenario.context}</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-2xl shadow-sm">
              <h2 className="text-lg font-bold text-foreground mb-3">達成目標</h2>
              <p className="text-foreground/70 dark:text-white leading-relaxed">{scenario.goal}</p>
            </div>
             <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h2 className="text-lg font-bold text-primary mb-3">最終解決方案</h2>
              <p className="text-primary/90 leading-relaxed font-semibold">{scenario.solution}</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full" />
              解決方案步驟
            </h2>
            <div className="space-y-6">
              {scenario.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 flex-shrink-0 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mt-1">
                    {index + 1}
                  </div>
                  <div 
                    className="flex-1 text-foreground/80 dark:text-white leading-loose prose prose-sm prose-strong:text-foreground/90 dark:prose-strong:text-white"
                    dangerouslySetInnerHTML={{ __html: step }} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center p-8 bg-green-500/10 border-2 border-dashed border-green-500/30 rounded-2xl">
           <CheckCircle className="mx-auto text-green-500 mb-4" size={32} />
           <h3 className="text-xl font-bold text-foreground">恭喜你！又學會了一項新技能</h3>
           <p className="text-foreground/60 dark:text-white mt-2 mb-6">現在就試著將這個技巧應用到你的日常工作中吧！</p>
           <Link href="/cases">
              <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border font-bold text-sm hover:bg-muted transition-colors">
                 探索其他應用情境
              </a>
            </Link>
        </div>

      </div>
    </div>
  );
}
