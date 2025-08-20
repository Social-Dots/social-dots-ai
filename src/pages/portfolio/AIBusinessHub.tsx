import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Zap, Users, Clock, BarChart3, Settings, Link2, FileText, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import DotsPattern from "@/components/DotsPattern";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AIBusinessHub = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AI Business Hub - SMB Automation Platform | Social Dots";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'See how our AI Business Hub centralized workflows for SMBs, automating lead intake, routing, documents, and analytics across tools with 60-80% admin reduction.');
    }
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lead Intake Automation",
      description: "Automatically capture and qualify leads from multiple channels"
    },
    {
      icon: <Link2 className="w-6 h-6" />,
      title: "Smart Routing",
      description: "Intelligently route tasks and communications to the right team members"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Processing",
      description: "Automate document creation, processing, and management"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Weekly Insights",
      description: "Generate automated reports and actionable business insights"
    }
  ];

  const integrations = [
    {
      name: "Slack",
      description: "Real-time notifications and team collaboration",
      impact: "40% faster response times"
    },
    {
      name: "CRM Systems",
      description: "Automated lead management and customer data sync",
      impact: "60% reduction in data entry"
    },
    {
      name: "Email Marketing",
      description: "Automated follow-ups and campaign management",
      impact: "3x higher engagement rates"
    },
    {
      name: "Calendar Systems",
      description: "Smart scheduling and appointment management",
      impact: "50% reduction in scheduling conflicts"
    }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Lead Capture",
      description: "Multi-channel lead intake from web forms, emails, and calls"
    },
    {
      step: "2",
      title: "AI Qualification",
      description: "Automatic lead scoring and qualification using AI"
    },
    {
      step: "3",
      title: "Smart Routing",
      description: "Intelligent assignment to sales team based on expertise and availability"
    },
    {
      step: "4",
      title: "Automated Follow-up",
      description: "Personalized email sequences and task reminders"
    },
    {
      step: "5",
      title: "Document Generation",
      description: "Auto-create proposals, contracts, and onboarding documents"
    },
    {
      step: "6",
      title: "Analytics & Reporting",
      description: "Weekly insights and performance tracking"
    }
  ];

  const technicalSpecs = [
    { label: "AI Engine", value: "Custom GPT-4 + Business Logic Engine" },
    { label: "Processing Speed", value: "Real-time workflow automation" },
    { label: "Integration APIs", value: "RESTful APIs for 50+ business tools" },
    { label: "Data Security", value: "End-to-end encryption + SOC 2 compliance" },
    { label: "Scalability", value: "Handles 10,000+ daily workflows" },
    { label: "Setup Time", value: "2-week implementation with training" }
  ];

  return (
    <PageLayout showContact={false}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 overflow-hidden">
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
                    SMB Automation Platform
                  </Badge>
                  
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    AI Business Hub
                    <span className="block text-2xl md:text-3xl font-normal mt-2 opacity-90">
                      Centralized Workflows for SMBs
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-blue-100 mb-8">
                    Centralized AI workflows for lead intake, routing, docs, and analytics across your tools, reducing admin workload by 60-80%.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      CRM Integration
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Document Automation
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Analytics Dashboard
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
                  title="Live Preview - AI Business Hub"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                6-Step AI Workflow Automation
              </h2>
              <p className="text-xl text-gray-600">
                From lead capture to insights - fully automated
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
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-sm font-bold">
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

        {/* Integration Ecosystem */}
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
                Seamless Tool Integration
              </h2>
              <p className="text-xl text-gray-600">
                Connect with 50+ business tools your team already uses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{integration.name}</CardTitle>
                      <CardDescription>{integration.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {integration.impact}
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
                Technical Implementation
              </h2>
              <p className="text-xl text-gray-600">
                Enterprise-grade automation with SMB-friendly setup
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Measurable Business Impact
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">70%</div>
                  <p className="text-blue-100">Admin Reduction</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50%</div>
                  <p className="text-blue-100">Faster SLAs</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">3x</div>
                  <p className="text-blue-100">Lead Response</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">20hrs</div>
                  <p className="text-blue-100">Weekly Time Saved</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Study Details */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <CardTitle>Real SMB Success Story</CardTitle>
                  <CardDescription>
                    How a 15-person consulting firm automated their entire business workflow
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">The Challenge</h3>
                    <p className="text-gray-600">
                      A growing consulting firm was drowning in administrative tasks. Their team was spending 
                      20+ hours per week on lead qualification, document creation, and manual follow-ups. 
                      This left less time for actual client work and was limiting their growth potential.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Solution</h3>
                    <p className="text-gray-600">
                      We implemented a comprehensive AI Business Hub that automated their entire workflow: 
                      from lead capture and qualification to document generation and client communication. 
                      The system integrates seamlessly with their existing CRM, email, and calendar tools.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Implementation Results</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>70% reduction in administrative workload</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>50% faster response times to client inquiries</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>3x increase in qualified lead conversion</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>20+ hours saved per week across the team</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
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
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI automation can transform your SMB operations and free up your team's time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
                  onClick={() => navigate('/contact')}
                >
                  Start Automation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
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

export default AIBusinessHub;