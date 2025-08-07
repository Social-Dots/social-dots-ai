import { ArrowLeft, CheckCircle, ArrowRight, Send, Users, TrendingUp, Zap, Globe, Target, Play, PhoneCall, FileText, Mail } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from '@/components/SEO';

const AIOutboundSalesAgent = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <PageLayout>
      <SEO 
        title="AI Outbound Sales Agent for Lead Generation in Canada | Cold Outreach That Converts"
        description="Scale your business with AI-powered outbound sales agents. Personalized outreach, smart follow-ups, and high-converting messages that drive results."
        keywords={['outbound lead generation Canada', 'AI cold email tool for small business', 'WhatsApp outreach for real estate', 'lead generation automation Toronto', 'AI follow-up assistant Canada']}
      />
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <RouterLink to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </RouterLink>
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm mb-6 font-medium">
                  📤 AI Outbound Sales Agent
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                  Outreach That Feels Personal —{' '}
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    At Scale.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
                  Our AI Outbound Agent reaches your leads, warms them up, and gets them to reply — with intelligent follow-ups and human-like conversations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                    onClick={scrollToContact}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Test the Sales Agent
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-red-300 text-red-600 hover:bg-red-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
                    onClick={scrollToContact}
                  >
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Book a Growth Call
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* For Businesses Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">For Businesses Who Want to Grow — Fast and Smart</h2>
              </div>
            </motion.div>

            {/* Use Cases */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">🔧 Use Cases</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Realtors & Mortgage Brokers",
                    description: "WhatsApp outreach for real estate",
                    icon: <Users className="w-6 h-6" />
                  },
                  {
                    title: "Digital Agencies & Freelancers", 
                    description: "Scale client acquisition",
                    icon: <Globe className="w-6 h-6" />
                  },
                  {
                    title: "Local Businesses",
                    description: "Growing into new markets", 
                    icon: <Target className="w-6 h-6" />
                  },
                  {
                    title: "Service Providers",
                    description: "Productized service scaling",
                    icon: <TrendingUp className="w-6 h-6" />
                  }
                ].map((useCase, i) => (
                  <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mx-auto mb-4">
                        {useCase.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">{useCase.title}</h3>
                      <p className="text-gray-600">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* What It Does */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">🛠️ What It Does</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Personalized Cold Campaigns",
                    description: "Email & WhatsApp outreach that converts",
                    icon: <Mail className="w-6 h-6" />
                  },
                  {
                    title: "Smart Follow-up Sequences", 
                    description: "Behavior-based automation",
                    icon: <Zap className="w-6 h-6" />
                  },
                  {
                    title: "CRM Sync + Lead Scoring",
                    description: "Automatic lead qualification", 
                    icon: <Target className="w-6 h-6" />
                  },
                  {
                    title: "Multi-Channel Support",
                    description: "LinkedIn, Email, WhatsApp native",
                    icon: <Globe className="w-6 h-6" />
                  },
                  {
                    title: "A/B Testing",
                    description: "Optimize messaging styles",
                    icon: <TrendingUp className="w-6 h-6" />
                  },
                  {
                    title: "Real-Time Notifications",
                    description: "Instant alerts on hot leads",
                    icon: <Send className="w-6 h-6" />
                  }
                ].map((feature, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mr-3">
                          {feature.icon}
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Why Use AI Outbound */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">💡 Why Use AI Outbound?</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Reach 10x more leads",
                    "Personalized messages at scale",
                    "No burnout, no cold feet",
                    "Works 24/7",
                    "Lower cost than a full-time SDR"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-16"
            >
              <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-6 h-6 text-yellow-400 fill-current">⭐</div>
                    ))}
                  </div>
                  <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
                    "We booked 14 sales calls in 10 days using the AI agent — with zero manual outreach."
                  </blockquote>
                  <p className="text-lg font-semibold text-red-600">— Digital Marketing Agency, Toronto</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Local SEO Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">🇨🇦 Lead Generation Across Canada</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  {[
                    { city: "Toronto", description: "Lead generation automation" },
                    { city: "Vancouver", description: "AI cold email campaigns" },
                    { city: "Montreal", description: "Multilingual outreach" }
                  ].map((location, i) => (
                    <div key={i} className="p-4">
                      <h3 className="font-bold text-xl text-gray-900 mb-2">{location.city}</h3>
                      <p className="text-gray-600">{location.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 shadow-lg text-white"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Outreach?</h2>
              <p className="text-xl mb-8 opacity-90">
                Stop manually reaching out to prospects. Let AI handle the heavy lifting while you focus on closing deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                  onClick={scrollToContact}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Deploy My Outbound Agent
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
                  onClick={scrollToContact}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Request Campaign Audit
                </Button>
              </div>
            </motion.div>

            {/* Cross-sell CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mt-12 text-center bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">🎯 Want Inbound + Outbound Combined?</h3>
              <p className="text-lg text-gray-600 mb-6">
                Build a full AI-powered sales funnel with both agents working together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="bg-gray-800 text-white hover:bg-gray-900 px-6 py-3 rounded-lg font-semibold transition-all"
                  onClick={scrollToContact}
                >
                  Talk to an Expert
                </Button>
                <Button 
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all"
                  onClick={scrollToContact}
                >
                  See Full Funnel Setup
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIOutboundSalesAgent;