
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "@/components/Sidebar";
import Cases from "@/pages/Cases";
import FAQ from "@/pages/FAQ";
import Handbook from "@/pages/Handbook";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ToolDetail from "@/pages/ToolDetail";
import CaseDetail from "@/pages/CaseDetail";
import Search from "@/pages/Search";
import { SearchDialog } from "@/components/SearchDialog";
import BackToTop from "@/components/BackToTop";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useState, useCallback } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <AnimatePresence mode="wait">
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

        <Route path="/cases/:id">
          {params => (
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <CaseDetail params={params} />
            </motion.div>
          )}
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
          {params => (
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
              <ToolDetail params={params} />
            </motion.div>
          )}
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
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  // Ctrl+K / Cmd+K global shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Sidebar onOpenSearch={openSearch} />
          <main className="lg:ml-64 min-h-screen relative overflow-hidden">
            <Router />
          </main>
          <SearchDialog open={searchOpen} onClose={closeSearch} />
          <BackToTop />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
