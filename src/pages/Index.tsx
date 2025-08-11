
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhySocialDots from '@/components/WhySocialDots';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import SocialDotsLogo from '@/components/SocialDotsLogo';
import DotsPattern from '@/components/DotsPattern';
import PricingCalculator from '@/components/PricingCalculator';
import DemoVideos from '@/components/DemoVideos';
import LiveChatWidget from '@/components/LiveChatWidget';
import { TestimonialDisplay } from '@/components/testimonials/TestimonialDisplay';
import { AccessibilityEnhancements } from '@/components/AccessibilityEnhancements';
import { PWAEnhancements } from '@/components/PWAEnhancements';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Zap, Users, MessageSquare, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  const aiServices = [
    {
      icon: Bot,
      title: "AI Concierge",
      description: "24/7 AI assistant for calls, messages & bookings",
      link: "/services/ai-concierge",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageSquare,
      title: "AI Business Assistant",
      description: "Automate tasks, reports, and workflows",
      link: "/services/ai-business-assistant",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "AI Sales Agents",
      description: "Inbound & outbound lead generation",
      link: "/services/ai-inbound-assistant",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Video Avatars",
      description: "AI-generated avatars for scalable content",
      link: "/services/video-avatars",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <PWAEnhancements>
      <AccessibilityEnhancements>
        <PageLayout>
          <SEO
        title="Social Dots - AI-Powered Digital Solutions for Canadian Businesses" 
        description="Transform your business with Social Dots AI solutions. From AI receptionists to automated workflows, we help Canadian SMBs work smarter with cutting-edge AI technology."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['AI solutions canada', 'AI business automation', 'AI receptionist', 'digital transformation', 'AI chatbots', 'business AI tools', 'canadian AI services']}
      />
      
      {/* Enhanced Hero with Social Dots Focus */}
      <Hero />
      

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              See how Canadian businesses are transforming with Social Dots AI solutions
            </p>
            <Link to="/portfolio">
              <Button size="lg" className="bg-social-dots-orange hover:bg-social-dots-orange/90 text-white">
                View Portfolio
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="animate-dot-pulse"
            >
              <div className="text-4xl font-bold text-social-dots-blue mb-2">50+</div>
              <div className="text-gray-600">Businesses Automated</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate-dot-bounce"
            >
              <div className="text-4xl font-bold text-social-dots-orange mb-2">80%</div>
              <div className="text-gray-600">Average Time Saved</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="animate-dot-wave"
            >
              <div className="text-4xl font-bold text-social-dots-blue mb-2">300%</div>
              <div className="text-gray-600">Average Growth Increase</div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Social Dots Advantage */}
      <WhySocialDots />
      
      {/* Customer Testimonials */}
      <TestimonialDisplay />
      
      {/* Latest Projects Preview */}
      <Projects />
      
      {/* Blog Preview */}
      <BlogPreview />
      </PageLayout>
    </AccessibilityEnhancements>
  </PWAEnhancements>
  );
};

export default Index;
