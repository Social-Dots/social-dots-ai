
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import SocialDotsLogo from '@/components/SocialDotsLogo';
import DotsPattern from '@/components/DotsPattern';
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
    <PageLayout>
      <SEO 
        title="Social Dots - AI-Powered Digital Solutions for Canadian Businesses" 
        description="Transform your business with Social Dots AI solutions. From AI receptionists to automated workflows, we help Canadian SMBs work smarter with cutting-edge AI technology."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['AI solutions canada', 'AI business automation', 'AI receptionist', 'digital transformation', 'AI chatbots', 'business AI tools', 'canadian AI services']}
      />
      
      {/* Enhanced Hero with Social Dots Focus */}
      <Hero />
      
      {/* AI Services Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <DotsPattern animated={true} color="mixed" density="low" className="opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <SocialDotsLogo animated={true} showText={false} className="scale-150" />
            </div>
            <Badge className="mb-4 bg-social-dots-blue text-white">
              AI-Powered Solutions
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Your New
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-social-dots-blue to-social-dots-orange">
                AI Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Social Dots specializes in AI automation that actually works for Canadian small businesses. 
              No tech jargon. Just results that matter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={service.link}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-sm">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button variant="outline" className="w-full group-hover:bg-social-dots-blue group-hover:text-white transition-colors">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Enhanced Features Section */}
      <Features />
      
      {/* Social Dots Advantage */}
      <WhyWrlds />
      
      {/* Latest Projects Preview */}
      <Projects />
      
      {/* Blog Preview */}
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;
