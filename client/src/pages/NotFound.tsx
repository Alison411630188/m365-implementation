import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-6xl font-bold text-primary mb-6">404</div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          頁面未找到
        </h1>
        <p className="text-lg text-foreground/70 mb-8 max-w-md mx-auto">
          抱歉，您要查找的頁面不存在或已被移除。
        </p>
        <Link href="/">
          <Button size="lg">
            返回首頁
          </Button>
        </Link>
      </div>
    </div>
  );
}
