import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  usePageTitle("找不到頁面");

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663446578135/99zHGgEmYidDpe6x6PArSa/cvilux-logo-transparent_3d6879c6.png"
          alt="CviLux"
          className="h-8 w-auto mx-auto mb-10 opacity-40"
        />

        <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8">
          <FileQuestion size={36} className="text-primary/60" />
        </div>

        <div className="text-7xl font-black text-primary/20 mb-4 tracking-tight">404</div>

        <h1 className="text-2xl font-bold text-foreground mb-3">找不到這個頁面</h1>
        <p className="text-foreground/50 mb-10 leading-relaxed">
          您要查找的頁面不存在或已被移除。<br />
          請回到首頁繼續瀏覽 M365 學習資源。
        </p>

        <Link href="/">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <ArrowLeft size={18} />
            返回首頁
          </button>
        </Link>

        <p className="mt-12 text-xs text-foreground/30 uppercase tracking-widest font-medium">
          瀚荃集團 M365 實戰學院
        </p>
      </div>
    </div>
  );
}
