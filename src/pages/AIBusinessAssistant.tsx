import { ArrowLeft, CheckCircle, ArrowRight, Brain, Calendar, FileText, BarChart3, Zap, Clock, Target, Play, PhoneCall, Download } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AIBusinessAssistant = () => {
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
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm mb-6 font-medium">
                  🧠 AI Business Assistant
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                  Your New Executive Assistant Just Got an Upgrade —{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    And It's AI-Powered.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
                  Forget juggling spreadsheets, reminders, and follow-ups. Your AI Business Assistant automates it all — like clockwork.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                    onClick={scrollToContact}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Book a Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
                    onClick={scrollToContact}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Use Case PDF
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Delegate the Boring Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Delegate the Boring. Focus on Growth.</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We learn your process → We build AI workflows → You watch your productivity skyrocket.
                </p>
              </div>
            </motion.div>

            {/* Use Cases Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">✅ What Your AI Assistant Handles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Task & Meeting Reminders",
                    description: "Via Slack/Email with smart scheduling",
                    icon: <Calendar className="w-6 h-6" />
                  },
                  {
                    title: "Weekly Reports & KPIs", 
                    description: "Automated dashboards and insights",
                    icon: <BarChart3 className="w-6 h-6" />
                  },
                  {
                    title: "Document & Invoice Prep",
                    description: "CRM updates and automated generation", 
                    icon: <FileText className="w-6 h-6" />
                  },
                  {
                    title: "Marketing Campaigns",
                    description: "Smart scheduling and execution",
                    icon: <Target className="w-6 h-6" />
                  },
                  {
                    title: "Custom Workflows",
                    description: "Tailored automation for your business",
                    icon: <Zap className="w-6 h-6" />
                  },
                  {
                    title: "Time Management",
                    description: "Priority tracking and optimization",
                    icon: <Clock className="w-6 h-6" />
                  }
                ].map((useCase, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-3">
                          {useCase.icon}
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">{useCase.title}</h3>
                      </div>
                      <p className="text-gray-600">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* How It Works */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">⚙️ How It Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "We Learn Your Process",
                    description: "Deep dive into your current workflows, pain points, and repetitive tasks that drain your time."
                  },
                  {
                    step: "2", 
                    title: "We Build AI Workflows",
                    description: "Custom automation using advanced AI tools, integrated with your existing systems and preferences."
                  },
                  {
                    step: "3",
                    title: "You Watch Productivity Skyrocket", 
                    description: "Sit back as your AI assistant handles routine tasks while you focus on strategic growth and high-value activities."
                  }
                ].map((step, i) => (
                  <Card key={i} className="text-center bg-white shadow-lg">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                        {step.step}
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Key Benefits */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">🚀 Why Businesses Choose AI Business Assistant</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    "Save 15+ hours per week on administrative tasks",
                    "Never miss important deadlines or follow-ups",
                    "Consistent, professional communication",
                    "Real-time business insights and reporting"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-purple-600 mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {[
                    "Seamless integration with existing tools",
                    "Scales with your business growth",
                    "24/7 availability - no sick days or vacations",
                    "ROI visible within the first month"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-purple-600 mt-1 mr-4 flex-shrink-0" />
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
              <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-6 h-6 text-yellow-400 fill-current">⭐</div>
                    ))}
                  </div>
                  <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
                    "Feels like I finally cloned myself — and made that version more organized."
                  </blockquote>
                  <p className="text-lg font-semibold text-purple-600">— Business Consultant, Toronto</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Technology Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">🔧 Powered by Advanced AI Technology</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  {[
                    { name: "OpenAI GPT-4", description: "Advanced language processing" },
                    { name: "Claude AI", description: "Complex task automation" },
                    { name: "n8n Workflows", description: "Seamless integrations" },
                    { name: "Zapier/Make", description: "App connectivity" }
                  ].map((tech, i) => (
                    <div key={i} className="p-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Brain className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                      <p className="text-sm text-gray-600">{tech.description}</p>
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
              className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 shadow-lg text-white"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Business Operations?</h2>
              <p className="text-xl mb-8 opacity-90">
                Stop drowning in administrative tasks. Let AI handle the boring stuff while you focus on what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                  onClick={scrollToContact}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Book a Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
                  onClick={scrollToContact}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Use Case PDF
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIBusinessAssistant;