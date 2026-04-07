import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "@/components/Sidebar";
import Cases from "@/pages/Cases";
import FAQ from "@/pages/FAQ";
import Handbook from "@/pages/Handbook";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ToolDetail from "@/pages/ToolDetail";
import Search from "@/pages/Search";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// 1. 導入動畫庫
import { motion, AnimatePresence } from "framer-motion";

// 2. 定義轉場動畫參數（淡入 + 輕微位移）
const pageVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const pageTransition = {
  duration: 0.3,
  ease: "easeInOut",
};

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    // 當路由改變時，滾動到頁面頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    /* 3. 使用 AnimatePresence 監控路由切換 */
    <AnimatePresence mode="wait">
      {/* 4. 給 Switch 一個 location 參數與 key，讓它知道什麼時候該跑出場動畫 */}
      <Switch location={location} key={location}>
        <Route path="/">
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
            <Home />
          </motion.div>
        </Route>

        <Route path="/handbook">
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
            <Handbook />
          </motion.div>
        </Route>

        <Route path="/cases">
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
            <Cases />
          </motion.div>
        </Route>

        <Route path="/faq">
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
            <FAQ />
          </motion.div>
        </Route>

        <Route path="/search">
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
            <Search />
          </motion.div>
        </Route>

        <Route path="/tools/:toolId">
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
            <ToolDetail />
          </motion.div>
        </Route>

        <Route path="/404">
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
            <NotFound />
          </motion.div>
        </Route>

        <Route>
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
            <NotFound />
          </motion.div>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          {/* Sidebar 放在這裡：它是靜止的，不受動畫影響 */}
          <Sidebar />
          
          {/* 這裡是內容區：Router 裡面的頁面會有轉場動畫 */}
          <main className="lg:ml-64 min-h-screen relative overflow-hidden">
            <Router />
          </main>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;