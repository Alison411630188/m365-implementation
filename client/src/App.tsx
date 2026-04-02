import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "@/components/Sidebar";
import Cases from "@/pages/Cases";
import FAQ from "@/pages/FAQ";
import Handbook from "@/pages/Handbook";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ToolDetail from "@/pages/ToolDetail";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    // 當路由改變時，滾動到頁面頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/handbook" component={Handbook} />
      <Route path="/cases" component={Cases} />
      <Route path="/faq" component={FAQ} />
      <Route path="/tools/:toolId" component={ToolDetail} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Sidebar />
          <main className="lg:ml-64">
            <Router />
          </main>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
