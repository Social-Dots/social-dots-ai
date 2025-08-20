import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SocialDotsLogo from "@/components/SocialDotsLogo";
import DotsPattern from "@/components/DotsPattern";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Zap, Users, Globe, Star, CheckCircle, MessageSquare, Smartphone, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio - Social Dots AI Solutions & Digital Marketing Success Stories";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'See how Social Dots AI solutions and digital marketing services have helped Canadian businesses grow. Real results from AI automation, web development, and digital transformation projects.');
    }
  }, []);

  const portfolioItems = [
  {
    id: 1,
    title: "AI Thumbnail Generator",
    brand: "YouTube Creators",
    description: "AI generates eye-catching thumbnails from video content with brand consistency, boosting click-through rates.",
    tags: ["AI Design", "YouTube", "Automation", "CTR Optimization"],
    imageUrl: "/digital-marketing-ai.jpg",
    results: ["+30% CTR", "Brand Consistency", "Time Savings"],
    link: "/portfolio/socialdots/ai-thumbnail-generator",
    featured: true
  },
  {
    id: 2,
    title: "AI Fake Listing Tester",
    brand: "Marketplaces",
    description: "AI detects fake or low-quality listings across marketplaces with scoring and evidence.",
    tags: ["Trust & Safety", "Computer Vision", "NLP", "Moderation"],
    imageUrl: "/digital-marketing-ai.jpg",
    results: ["Reduced Fraud", "Buyer Confidence", "Less Manual Review"],
    link: "/portfolio/socialdots/ai-fake-listing-tester",
    featured: true
  },
  {
    id: 3,
    title: "AI Business Hub",
    brand: "SMBs",
    description: "Centralized AI workflows for lead intake, routing, docs, and analytics across your tools.",
    tags: ["Automation", "CRM", "Docs", "Slack"],
    imageUrl: "/business-automation-ai.jpg",
    results: ["60–80% Admin Offloaded", "Faster SLAs", "Weekly Insights"],
    link: "/portfolio/socialdots/ai-business-hub",
    featured: false
  },
  {
    id: 4,
    title: "AI Voice Agent",
    brand: "Sales & Support",
    description: "Inbound/outbound AI voice for lead capture, booking, and triage with human handoff.",
    tags: ["Voice", "Scheduling", "CRM", "After-hours"],
    imageUrl: "/ai-call-center-automation.jpg",
    results: ["Higher Booking Rate", "24/7 Coverage", "Unified Leads"],
    link: "/portfolio/socialdots/ai-voice-agent",
    featured: false
  },
  {
    id: 5,
    title: "Cricket Cadets",
    brand: "CricketCadets.ca",
    description: "Website + AI concierge for a cricket coaching academy: bookings and parent FAQs.",
    tags: ["Web", "AI Concierge", "Scheduling", "Airtable"],
    imageUrl: "/web-development-ai.jpg",
    results: ["More Trial Sign-ups", "Faster Responses", "Reduced Admin"],
    link: "/portfolio/socialdots/cricket-cadets",
    featured: false
  }
];

  const featuredProjects = portfolioItems.filter(item => item.featured);
  const allProjects = portfolioItems;

  const stats = [
    { icon: Users, value: "50+", label: "Businesses Transformed" },
    { icon: Bot, value: "80%", label: "Average Automation Rate" },
    { icon: Zap, value: "300%", label: "Average Growth Increase" },
    { icon: Star, value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <PageLayout showContact={false}>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-social-dots-blue via-social-dots-blue-light to-social-dots-blue overflow-hidden">
        <DotsPattern animated={true} className="opacity-20" />
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex justify-center mb-8">
              <SocialDotsLogo animated={true} className="text-white [&_span]:text-white" />
            </div>
            
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Success Stories
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Real Results from 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-social-dots-orange to-social-dots-orange-light">
                AI Innovation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
              See how Canadian businesses are transforming their operations with Social Dots AI solutions, 
              automation, and digital marketing strategies that deliver measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-social-dots-orange hover:bg-social-dots-orange/90 text-white text-lg px-8 py-6">
                View All Projects
                <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Start Your Project
                <MessageSquare className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-social-dots-blue mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Social Dots AI solutions are transforming Canadian businesses
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-social-dots-orange text-white">
                      Featured
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500 mb-2">
                      {project.brand}
                    </CardDescription>
                    <p className="text-gray-700">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={project.link}>
                      <Button className="w-full bg-social-dots-blue hover:bg-social-dots-blue/90">
                        View Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
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
              All Portfolio Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete portfolio of AI solutions and digital transformation projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.featured && (
                      <Badge className="absolute top-3 left-3 bg-social-dots-orange text-white text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                    <CardDescription className="text-xs text-gray-500">
                      {project.brand}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    <Link to={project.link}>
                      <Button variant="outline" className="w-full text-sm">
                        View Details
                        <ArrowRight className="ml-2 w-3 h-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-social-dots-blue to-social-dots-blue-light text-white relative overflow-hidden">
        <DotsPattern animated={true} className="opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the growing number of Canadian businesses leveraging AI and automation for competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-social-dots-orange hover:bg-social-dots-orange/90 text-white text-lg px-8 py-6">
                  Start Your Project
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    window.location.href = '/#contact';
                  }
                }}
              >
                Schedule Consultation
                <MessageSquare className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;