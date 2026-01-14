import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Ecosystem from "./pages/Ecosystem";
import Benefits from "./pages/Benefits";
import Sustainability from "./pages/Sustainability";
import Partner from "./pages/Partner";
import Login from "./pages/Login";
import PortalOverview from "./pages/portal/PortalOverview";
import PortalOnboarding from "./pages/portal/PortalOnboarding";
import PortalPerformance from "./pages/portal/PortalPerformance";
import PortalAnalytics from "./pages/portal/PortalAnalytics";
import PortalReports from "./pages/portal/PortalReports";
import PortalSupport from "./pages/portal/PortalSupport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portal" element={<PortalOverview />} />
          <Route path="/portal/onboarding" element={<PortalOnboarding />} />
          <Route path="/portal/performance" element={<PortalPerformance />} />
          <Route path="/portal/analytics" element={<PortalAnalytics />} />
          <Route path="/portal/reports" element={<PortalReports />} />
          <Route path="/portal/support" element={<PortalSupport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
