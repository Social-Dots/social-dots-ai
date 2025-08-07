import { ArrowLeft, CheckCircle, ArrowRight, Phone, MessageSquare, Calendar, Brain, Globe, Link, Star, Play, PhoneCall } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AIConcierge = () => {
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
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-6 font-medium">
                  💼 AI Concierge Service
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                  Let AI Handle the Front Desk.{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    So You Can Focus on the Big Stuff.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
                  Whether it's booking appointments, answering customer questions, or following up — your AI Concierge does it all. 24/7. Multilingual. Never off duty.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                    onClick={scrollToContact}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Book a Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
                    onClick={scrollToContact}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Try the AI Demo
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* What is AI Concierge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">🤖 What is AI Concierge?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  AI Concierge is your digital front-desk manager, receptionist, and customer care rep — all rolled into one powerful AI assistant.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  It learns how you run your business and handles:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Incoming phone calls",
                    "Text messages & WhatsApp replies", 
                    "Appointment bookings",
                    "Customer follow-ups",
                    "FAQs, quotes, and more"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-semibold text-gray-900">
                  It's not a bot. It's your digital team member — trained in your tone, style, and workflows.
                </p>
              </div>
            </motion.div>

            {/* Perfect For Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">✅ Perfect for:</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Salons & Clinics",
                    description: "Bookings, reschedules, reminders",
                    icon: <Calendar className="w-6 h-6" />
                  },
                  {
                    title: "Realtors", 
                    description: "Pre-screening leads, qualifying buyers",
                    icon: <Phone className="w-6 h-6" />
                  },
                  {
                    title: "Lawyers & Accountants",
                    description: "Capturing client inquiries professionally", 
                    icon: <MessageSquare className="w-6 h-6" />
                  },
                  {
                    title: "Service Providers",
                    description: "Auto-replies, estimates, job scheduling",
                    icon: <Brain className="w-6 h-6" />
                  },
                  {
                    title: "Any Small Business",
                    description: "That can't afford to miss a lead",
                    icon: <Star className="w-6 h-6" />
                  }
                ].map((business, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3">
                          {business.icon}
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">{business.title}</h3>
                      </div>
                      <p className="text-gray-600">{business.description}</p>
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
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">🔧 How It Works</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Discovery Call",
                    description: "We understand your workflows, tone, and customer journey."
                  },
                  {
                    step: "2", 
                    title: "Custom Agent Setup",
                    description: "We build your AI Concierge using tools like Claude, GPT-4, Whisper, and n8n workflows."
                  },
                  {
                    step: "3",
                    title: "Connect Channels", 
                    description: "Phone, SMS, WhatsApp, Instagram, or your website — it works where your customers are."
                  },
                  {
                    step: "4",
                    title: "Launch + Optimize",
                    description: "We monitor real conversations, fine-tune the responses, and scale with your needs."
                  }
                ].map((step, i) => (
                  <Card key={i} className="text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {step.step}
                      </div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">🌟 Key Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: "24/7 Call Handling",
                    description: "With human-like voice"
                  },
                  {
                    icon: <MessageSquare className="w-6 h-6" />,
                    title: "Instant Messaging", 
                    description: "On WhatsApp, SMS, web chat"
                  },
                  {
                    icon: <Calendar className="w-6 h-6" />,
                    title: "Booking Automation",
                    description: "Real-time scheduling via Google/Outlook"
                  },
                  {
                    icon: <Brain className="w-6 h-6" />,
                    title: "Business Logic",
                    description: "Smart routing, escalation, and follow-ups"
                  },
                  {
                    icon: <Globe className="w-6 h-6" />,
                    title: "Multilingual Support",
                    description: "Serve customers in English, Urdu, Punjabi & more"
                  },
                  {
                    icon: <Link className="w-6 h-6" />,
                    title: "CRM Integrations",
                    description: "Syncs with Salesforce, HubSpot, or your existing stack"
                  }
                ].map((feature, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-3">
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

            {/* Testimonials */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">📈 Why Businesses Love It</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    quote: "We cut down 80% of manual scheduling. Clients now get replies within seconds — and they love it.",
                    author: "Spa Owner, Brampton"
                  },
                  {
                    quote: "Feels like I finally hired someone who never sleeps and never makes mistakes.",
                    author: "Real Estate Agent, Oakville"
                  },
                  {
                    quote: "This is the future of small business ops. It's fast, polite, and gets smarter with every customer.",
                    author: "Clinic Manager, Toronto"
                  }
                ].map((testimonial, i) => (
                  <Card key={i} className="bg-gray-50">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                      <p className="font-semibold text-gray-900">— {testimonial.author}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Social Dots */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">🚀 Why Choose Social Dots?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Built in Canada, powered by top-tier talent in Pakistan",
                    "15+ years of enterprise tech + small business insight",
                    "Deep expertise in Salesforce, AI automation & customer experience",
                    "We don't just deploy bots — we build smart workflows around your business"
                  ].map((reason, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{reason}</span>
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
              className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">🔗 Ready to Try AI Concierge?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                  onClick={scrollToContact}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Get Started Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
                  onClick={scrollToContact}
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Try the AI Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIConcierge;