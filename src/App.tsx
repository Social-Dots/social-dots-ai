
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "@/components/auth/AuthProvider";
import AdminDashboard from "./pages/AdminDashboard";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AICustomerService from "./pages/portfolio/AICustomerService";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AIConcierge from "./pages/AIConcierge";
import AIBusinessAssistant from "./pages/AIBusinessAssistant";
import VideoAvatars from "./pages/VideoAvatars";
import AIInboundLeadAssistant from "./pages/AIInboundLeadAssistant";
import AIOutboundSalesAgent from "./pages/AIOutboundSalesAgent";
import WebServices from "./pages/WebServices";
import Portfolio from "./pages/Portfolio";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/portfolio/ai-customer-service" element={<AICustomerService />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
            <Route path="/services/ai-concierge" element={<AIConcierge />} />
            <Route path="/services/ai-business-assistant" element={<AIBusinessAssistant />} />
            <Route path="/services/video-avatars" element={<VideoAvatars />} />
            <Route path="/services/ai-inbound-assistant" element={<AIInboundLeadAssistant />} />
            <Route path="/services/ai-outbound-agent" element={<AIOutboundSalesAgent />} />
            <Route path="/services/web-services" element={<WebServices />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
