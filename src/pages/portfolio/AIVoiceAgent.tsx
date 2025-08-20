import { motion } from "framer-motion";
import { ArrowLeft, Phone, MessageCircle, Users, Clock, BarChart3, Settings, Globe, Zap, Headphones, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import DotsPattern from "@/components/DotsPattern";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AIVoiceAgent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AI Voice Agent - Voice Automation Platform | Social Dots";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'See how our AI Voice Agent revolutionized customer service with 24/7 multilingual support, 85% query resolution rate, and 3x faster response times across global operations.');
    }
  }, []);

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multilingual Support",
      description: "Support for 50+ languages with native-level fluency"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Round-the-clock customer support without breaks"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Smart Analytics",
      description: "Real-time insights and performance tracking"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Easy Integration",
      description: "Seamless integration with existing systems"
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Handle order inquiries, returns, and product questions",
      volume: "10,000+ daily calls",
      resolution: "92% first-call resolution"
    },
    {
      industry: "Healthcare",
      description: "Appointment scheduling and medical inquiries",
      volume: "5,000+ daily calls",
      resolution: "89% patient satisfaction"
    },
    {
      industry: "Financial Services",
      description: "Account inquiries and transaction support",
      volume: "8,000+ daily calls",
      resolution: "94% accuracy rate"
    },
    {
      industry: "Travel & Hospitality",
      description: "Booking support and travel assistance",
      volume: "7,500+ daily calls",
      resolution: "87% customer satisfaction"
    }
  ];

  const performanceMetrics = [
    {
      number: "85%",
      label: "Query Resolution",
      description: "First-call resolution rate"
    },
    {
      number: "3x",
      label: "Faster Response",
      description: "Than human agents"
    },
    {
      number: "50+",
      label: "Languages",
      description: "Supported globally"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Service availability"
    }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Call Reception",
      description: "AI answers calls instantly with natural voice"
    },
    {
      step: "2",
      title: "Intent Recognition",
      description: "Understand customer needs using NLP"
    },
    {
      step: "3",
      title: "Query Processing",
      description: "Access knowledge base for accurate responses"
    },
    {
      step: "4",
      title: "Resolution Delivery",
      description: "Provide solutions or escalate when needed"
    },
    {
      step: "5",
      title: "Follow-up Actions",
      description: "Send confirmations and schedule callbacks"
    },
    {
      step: "6",
      title: "Analytics & Learning",
      description: "Continuously improve from interactions"
    }
  ];

  const technicalSpecs = [
    { label: "Speech Recognition", value: "Real-time transcription with 98% accuracy" },
    { label: "Natural Language", value: "Advanced NLP with context understanding" },
    { label: "Voice Synthesis", value: "Human-like voices in 50+ languages" },
    { label: "Integration APIs", value: "RESTful APIs for CRM and business systems" },
    { label: "Scalability", value: "Handle 100,000+ concurrent calls" },
    { label: "Security", value: "End-to-end encryption and compliance" }
  ];

  const clientSuccess = [
    {
      company: "TechMart E-commerce",
      challenge: "High call volumes during peak seasons",
      solution: "AI Voice Agent for order support",
      results: "85% reduction in wait times, 92% customer satisfaction"
    },
    {
      company: "Global Health Network",
      challenge: "24/7 patient support across time zones",
      solution: "Multilingual healthcare assistant",
      results: "89% patient satisfaction, 40% cost reduction"
    },
    {
      company: "TravelPro Services",
      challenge: "Booking support for international travelers",
      solution: "Travel-focused voice assistant",
      results: "87% booking completion rate, 3x faster service"
    }
  ];

  return (
    <PageLayout showContact={false}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 overflow-hidden">
          <DotsPattern animated={true} className="opacity-20" />
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white"
                >
                  <Button
                    variant="ghost"
                    className="mb-6 text-white hover:text-white hover:bg-white/20"
                    onClick={() => navigate(-1)}
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to Portfolio
                  </Button>
                  
                  <Badge className="mb-4 bg-white/20 text-white border-white/30">
                    Voice Automation Platform
                  </Badge>
                  
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    AI Voice Agent
                    <span className="block text-2xl md:text-3xl font-normal mt-2 opacity-90">
                      24/7 Customer Support Automation
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-purple-100 mb-8">
                    Revolutionized customer service with 24/7 multilingual support, 85% query resolution rate, and 3x faster response times across global operations.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Multilingual
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      24/7 Support
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Smart Analytics
                    </Badge>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
              >
                <iframe
                  src="https://socialdots.ai"
                  className="w-full h-full border-0"
                  title="Live Preview - AI Voice Agent"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-purple-600 mb-2">{metric.number}</div>
                  <div className="text-lg font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Voice Automation Features
              </h2>
              <p className="text-xl text-gray-600">
                Advanced AI capabilities for superior customer experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Use Cases */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Tailored voice automation for every business sector
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{useCase.industry}</CardTitle>
                      <CardDescription>{useCase.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                          {useCase.volume}
                        </Badge>
                        <Badge variant="outline">{useCase.resolution}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                6-Step Voice Automation Workflow
              </h2>
              <p className="text-xl text-gray-600">
                From call reception to continuous improvement
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mb-4 text-sm font-bold">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Real results from businesses worldwide
              </p>
            </motion.div>

            <div className="space-y-6">
              {clientSuccess.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-l-4 border-purple-500">
                    <CardHeader>
                      <CardTitle className="text-lg">{client.company}</CardTitle>
                      <CardDescription>
                        {client.challenge} → {client.solution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        {client.results}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technical Architecture
              </h2>
              <p className="text-xl text-gray-600">
                Enterprise-grade voice automation infrastructure
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {technicalSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <strong className="text-gray-900">{spec.label}:</strong>
                  <p className="text-gray-600 mt-1">{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Transforming Customer Service Globally
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <p className="text-purple-100">Query Resolution</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">60%</div>
                  <p className="text-purple-100">Cost Reduction</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">3x</div>
                  <p className="text-purple-100">Faster Response</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <p className="text-purple-100">Languages</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Automate Your Customer Service?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Transform your customer support with AI voice automation that works 24/7 in 50+ languages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6"
                  onClick={() => navigate('/contact')}
                >
                  Start Automation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6"
                  onClick={() => navigate('/services')}
                >
                  View All Services
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AIVoiceAgent;