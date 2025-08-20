
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
import FireCatProject from "./pages/FireCatProject";
import SportRetailProject from "./pages/SportRetailProject";
import WorkwearProject from "./pages/WorkwearProject";
import HockeyProject from "./pages/HockeyProject";
import PetProject from "./pages/PetProject";
import AICustomerService from "./pages/portfolio/AICustomerService";
import AIThumbnailGenerator from "./pages/portfolio/AIThumbnailGenerator";
import AIFakeListingTester from "./pages/portfolio/AIFakeListingTester";
import AIBusinessHub from "./pages/portfolio/AIBusinessHub";
import CricketCadets from "./pages/portfolio/CricketCadets";
import AIVoiceAgent from "./pages/portfolio/AIVoiceAgent";
import TechDetails from "./pages/TechDetails";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AIConcierge from "./pages/AIConcierge";
import AIBusinessAssistant from "./pages/AIBusinessAssistant";
import VideoAvatars from "./pages/VideoAvatars";
import AIInboundLeadAssistant from "./pages/AIInboundLeadAssistant";
import AIOutboundSalesAgent from "./pages/AIOutboundSalesAgent";
import WebServices from "./pages/WebServices";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import EcommerceGrowth from "./pages/portfolio/EcommerceGrowth";
import SocialMediaAutomation from "./pages/portfolio/SocialMediaAutomation";
import LeadGeneration from "./pages/portfolio/LeadGeneration";
import ProcessAutomation from "./pages/portfolio/ProcessAutomation";

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
            <Route path="/projects/firecat" element={<FireCatProject />} />
            <Route path="/projects/sport-retail" element={<SportRetailProject />} />
            <Route path="/projects/workwear" element={<WorkwearProject />} />
            <Route path="/projects/hockey" element={<HockeyProject />} />
            <Route path="/projects/pet-tracker" element={<PetProject />} />
            <Route path="/portfolio/ai-customer-service" element={<AICustomerService />} />
            <Route path="/portfolio/ecommerce-growth" element={<EcommerceGrowth />} />
            <Route path="/portfolio/social-media-automation" element={<SocialMediaAutomation />} />
            <Route path="/portfolio/lead-generation" element={<LeadGeneration />} />
            <Route path="/portfolio/process-automation" element={<ProcessAutomation />} />
            <Route path="/portfolio/ai-thumbnail-generator" element={<AIThumbnailGenerator />} />
            <Route path="/portfolio/ai-fake-listing-tester" element={<AIFakeListingTester />} />
            <Route path="/portfolio/ai-business-hub" element={<AIBusinessHub />} />
            <Route path="/portfolio/cricket-cadets" element={<CricketCadets />} />
            <Route path="/portfolio/ai-voice-agent" element={<AIVoiceAgent />} />
            <Route path="/tech-details" element={<TechDetails />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
            <Route path="/services/ai-concierge" element={<AIConcierge />} />
            <Route path="/services/ai-business-assistant" element={<AIBusinessAssistant />} />
            <Route path="/services/video-avatars" element={<VideoAvatars />} />
            <Route path="/services/ai-inbound-assistant" element={<AIInboundLeadAssistant />} />
            <Route path="/services/ai-outbound-agent" element={<AIOutboundSalesAgent />} />
            <Route path="/services/web-services" element={<WebServices />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
