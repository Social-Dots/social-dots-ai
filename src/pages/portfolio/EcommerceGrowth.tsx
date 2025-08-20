import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, TrendingUp, ShoppingCart, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function EcommerceGrowth() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: 'Sales Increase', value: '300%', icon: TrendingUp },
    { label: 'New Customers', value: '250%', icon: Users },
    { label: 'Conversion Rate', value: '180%', icon: Target },
    { label: 'Average Order Value', value: '40%', icon: ShoppingCart }
  ];

  const features = [
    {
      title: 'Custom E-commerce Platform',
      description: 'Built a fully responsive, mobile-first e-commerce website with advanced filtering, search, and checkout optimization.',
      details: 'React-based frontend with integrated payment processing, inventory management, and customer account system.'
    },
    {
      title: 'AI-Powered Recommendations',
      description: 'Implemented intelligent product recommendations based on customer behavior and purchase history.',
      details: 'Machine learning algorithms analyze browsing patterns to suggest relevant products, increasing average order value by 40%.'
    },
    {
      title: 'Automated Marketing Campaigns',
      description: 'Set up triggered email sequences, abandoned cart recovery, and personalized promotions.',
      details: 'Integrated with customer data platform to deliver targeted campaigns at optimal times, resulting in 60% higher open rates.'
    },
    {
      title: 'Inventory Management System',
      description: 'Real-time inventory tracking with automated reordering and supplier integration.',
      details: 'Prevents stockouts and overstock situations, reducing carrying costs by 25% while maintaining optimal stock levels.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              E-commerce Growth Platform
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Complete digital transformation for a local retail business that resulted in 300% increase in online sales
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">E-commerce</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Digital Transformation</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Marketing Automation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                  <metric.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  A well-established local retail business was struggling to compete in the digital marketplace. 
                  Their outdated website was losing customers to competitors with better online experiences, 
                  and they lacked the technical expertise to implement modern e-commerce solutions.
                </p>
                <p>
                  Key challenges included:
                </p>
                <ul>
                  <li>Outdated website with poor mobile experience</li>
                  <li>No online sales capability</li>
                  <li>Manual inventory management leading to stockouts</li>
                  <li>Limited customer data and insights</li>
                  <li>No automated marketing or customer retention strategies</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Social Dots implemented a comprehensive e-commerce growth platform that transformed 
                  their entire digital presence. We built a modern, mobile-first e-commerce website 
                  with integrated inventory management, automated marketing, and AI-powered recommendations.
                </p>
                <p>
                  The solution included custom development, seamless data migration, staff training, 
                  and ongoing optimization to ensure sustained growth and competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features & Implementation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-3">{feature.description}</p>
                <p className="text-sm text-gray-500">{feature.details}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Outstanding Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Within 6 months of launch, the business saw unprecedented growth across all key metrics
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
                <div className="text-gray-700">Increase in Online Sales</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">250%</div>
                <div className="text-gray-700">New Customer Acquisition</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">180%</div>
                <div className="text-gray-700">Conversion Rate Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a similar transformation for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100"
              onClick={() => window.open('/contact', '_self')}
            >
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => window.open('/portfolio', '_self')}
            >
              View More Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}