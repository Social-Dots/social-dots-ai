import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Phone, 
  Users, 
  Mail, 
  TrendingUp, 
  Clock, 
  Zap, 
  Shield,
  ArrowRight
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  color: string;
  cta: string;
  href: string;
}

const services: Service[] = [
  {
    id: 'business-assistant',
    title: 'AI Business Assistant',
    description: 'Automate routine business tasks and streamline operations with intelligent AI that works 24/7.',
    icon: Bot,
    features: [
      'Email automation and scheduling',
      'Document processing and data entry',
      'Calendar management',
      'Report generation',
      'Customer support responses'
    ],
    color: 'purple',
    cta: 'Get Business Assistant',
    href: '/services/ai-business-assistant'
  },
  {
    id: 'ai-concierge',
    title: 'AI Concierge',
    description: 'Provide 24/7 customer service with AI that sounds and responds like a real person.',
    icon: Phone,
    features: [
      'Natural voice conversations',
      'Multi-language support',
      'Call routing and scheduling',
      'FAQ handling',
      'Appointment booking'
    ],
    color: 'blue',
    cta: 'Get AI Concierge',
    href: '/services/ai-concierge'
  },
  {
    id: 'inbound-leads',
    title: 'AI Inbound Lead Assistant',
    description: 'Capture and qualify leads automatically from your website, social media, and phone calls.',
    icon: Users,
    features: [
      'Instant lead response',
      'Lead qualification',
      'CRM integration',
      'Appointment scheduling',
      'Follow-up sequences'
    ],
    color: 'green',
    cta: 'Get Lead Assistant',
    href: '/services/ai-inbound-assistant'
  },
  {
    id: 'outbound-sales',
    title: 'AI Outbound Sales Agent',
    description: 'Scale your sales outreach with AI that makes personalized calls and sends targeted messages.',
    icon: TrendingUp,
    features: [
      'Cold calling automation',
      'Personalized messaging',
      'Lead nurturing sequences',
      'Performance tracking',
      'CRM synchronization'
    ],
    color: 'red',
    cta: 'Get Sales Agent',
    href: '/services/ai-outbound-agent'
  },
  {
    id: 'email-automation',
    title: 'Email Automation',
    description: 'Automate your email marketing and customer communication with AI-powered campaigns.',
    icon: Mail,
    features: [
      'Automated email sequences',
      'Personalized campaigns',
      'A/B testing',
      'Performance analytics',
      'List segmentation'
    ],
    color: 'orange',
    cta: 'Get Email Automation',
    href: '/contact'
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    description: 'Transform your business operations with custom AI workflows tailored to your needs.',
    icon: Zap,
    features: [
      'Custom workflow design',
      'Multi-step automation',
      'Integration with existing tools',
      'Error handling and monitoring',
      'Performance optimization'
    ],
    color: 'indigo',
    cta: 'Start Automation',
    href: '/contact'
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-social-dots-blue text-white">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            AI Solutions That Drive Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI automation. From customer service to sales, 
            we help you work smarter, not harder.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-${service.color}-100 flex items-center justify-center mb-4 group-hover:bg-${service.color}-200 transition-colors`}>
                    <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Clock className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-social-dots-blue hover:bg-social-dots-blue/90 group-hover:bg-social-dots-orange transition-colors"
                    asChild
                  >
                    <a href={service.href} className="flex items-center justify-center">
                      {service.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Not sure which solution is right for you?
          </p>
          <Button 
            size="lg"
            className="bg-social-dots-orange hover:bg-social-dots-orange/90"
            asChild
          >
            <a href="/contact">Schedule a Free Consultation</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};