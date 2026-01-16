import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Avenix from "./pages/projects/Avenix";
import UnHinged from "./pages/projects/UnHinged";
import MemeChecker from "./pages/projects/MemeChecker";
import RaahERaast from "./pages/projects/RaahERaast";
import PortfolioProjects from "./pages/projects/PortfolioProjects";
import TALabPortal from "./pages/projects/TALabPortal";
import SkillSwap from "./pages/projects/SkillSwap";
import ApexAnalytics from "./pages/projects/ApexAnalytics";
import EvaluaSysAI from "./pages/projects/EvaluaSysAI";
import AdSyncPro from "./pages/projects/AdSyncPro";
import SnapReceiptAI from "./pages/projects/SnapReceiptAI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/avenix" element={<Avenix />} />
              <Route path="/work/unhinged" element={<UnHinged />} />
              <Route path="/work/apex-analytics" element={<ApexAnalytics />} />
              <Route path="/work/evaluasysai" element={<EvaluaSysAI />} />
              <Route path="/work/adsyncpro" element={<AdSyncPro/>} />
              <Route path="/work/snapreceiptai" element={<SnapReceiptAI/>} />
              <Route path="/work/meme-checker" element={<MemeChecker />} />
              <Route path="/work/raah-e-raast" element={<RaahERaast />} />
              <Route path="/work/portfolio-projects" element={<PortfolioProjects />} />
              <Route path="/work/ta-ld-project" element={<TALabPortal />} />
              <Route path="/work/skill-swap" element={<SkillSwap />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
