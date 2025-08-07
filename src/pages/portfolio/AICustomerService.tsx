import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Phone, MessageSquare, Calendar, TrendingUp, Users, Clock, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const AICustomerService = () => {
  useEffect(() => {
    document.title = "AI Customer Service Automation - Canadian Restaurant Chain Success Story | Social Dots";
  }, []);

  const features = [
    { icon: Bot, title: "Smart AI Chatbots", description: "Multilingual support for English and French" },
    { icon: Phone, title: "Call Automation", description: "Intelligent call routing and response" },
    { icon: MessageSquare, title: "Live Chat Integration", description: "Seamless website and social media chat" },
    { icon: Calendar, title: "Booking Management", description: "Automated reservation and appointment handling" }
  ];

  const results = [
    { metric: "60%", description: "Reduction in call center costs" },
    { metric: "80%", description: "Customer inquiries resolved automatically" },
    { metric: "24/7", description: "Availability for customer support" },
    { metric: "95%", description: "Customer satisfaction rate maintained" }
  ];

  const implementation = [
    {
      phase: "Discovery & Analysis",
      duration: "Week 1",
      details: "Analyzed existing customer service processes and pain points"
    },
    {
      phase: "AI Training & Setup",
      duration: "Week 2-3",
      details: "Trained AI models on restaurant-specific queries and responses"
    },
    {
      phase: "Integration & Testing",
      duration: "Week 4",
      details: "Integrated with existing systems and conducted thorough testing"
    },
    {
      phase: "Launch & Optimization",
      duration: "Week 5-6",
      details: "Soft launch with continuous monitoring and optimization"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-social-dots-blue to-social-dots-blue-light text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Featured Case Study
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI Customer Service 
              <span className="block text-social-dots-orange">Automation</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              How a Canadian restaurant chain reduced call center costs by 60% while improving customer satisfaction 
              with AI-powered customer service automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-social-dots-orange hover:bg-social-dots-orange/90 text-white">
                Get Similar Results
                <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Case Study
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A growing Canadian restaurant chain with 15 locations was struggling with high call center costs 
                and overwhelmed staff during peak hours. They were missing potential customers due to busy phone 
                lines and slow response times to online inquiries.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span>High call center operational costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Missed calls during peak dining hours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Slow response to online reservations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Overwhelmed staff affecting service quality</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="/ai-call-center-automation.jpg" 
                alt="Restaurant staff overwhelmed with calls"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
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
              The Social Dots Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implemented a comprehensive AI customer service system that handles inquiries, 
              bookings, and support across all channels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 text-social-dots-blue mx-auto mb-4" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-social-dots-blue to-social-dots-blue-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Remarkable Results
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Within 30 days of implementation, the restaurant chain saw dramatic improvements 
              in efficiency and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-social-dots-orange mb-4">
                  {result.metric}
                </div>
                <div className="text-blue-100">
                  {result.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
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
              Implementation Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to full deployment in just 6 weeks
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementation.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-social-dots-blue text-white rounded-full flex items-center justify-center font-bold mr-6">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {phase.phase}
                  </h3>
                  <Badge className="mb-3 bg-social-dots-orange text-white">
                    {phase.duration}
                  </Badge>
                  <p className="text-gray-600">{phase.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Customer Service?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let Social Dots create a custom AI customer service solution for your business. 
              Reduce costs, improve satisfaction, and never miss a customer again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-social-dots-blue hover:bg-social-dots-blue/90 text-white">
                Start Your AI Transformation
                <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AICustomerService;