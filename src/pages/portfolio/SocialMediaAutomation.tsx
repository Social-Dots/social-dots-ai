import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Share2, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function SocialMediaAutomation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: 'Client Accounts', value: '50+', icon: Users },
    { label: 'Engagement Rate', value: '400%', icon: Share2 },
    { label: 'Time Saved', value: '30h/week', icon: Clock },
    { label: 'Content Reach', value: '2M+', icon: TrendingUp }
  ];

  const features = [
    {
      title: 'AI Content Generation',
      description: 'Advanced AI creates engaging posts tailored to each client\'s brand voice and audience preferences.',
      details: 'Natural language processing analyzes past performance to generate content that resonates with target demographics, increasing engagement by 300%.'
    },
    {
      title: 'Automated Scheduling',
      description: 'Intelligent scheduling system posts content at optimal times for maximum reach and engagement.',
      details: 'Machine learning algorithms determine peak engagement windows for each platform and audience segment, automatically adjusting posting schedules.'
    },
    {
      title: 'Cross-Platform Management',
      description: 'Unified dashboard manages content across Instagram, Facebook, Twitter, LinkedIn, and TikTok simultaneously.',
      details: 'Seamless integration with all major platforms allows for coordinated campaigns and consistent brand messaging across channels.'
    },
    {
      title: 'Performance Analytics',
      description: 'Real-time analytics track engagement, reach, and conversion metrics across all social channels.',
      details: 'Comprehensive reporting provides actionable insights for content optimization and strategic decision-making, with automated monthly client reports.'
    }
  ];

  const clientWorkflow = [
    'Content strategy development based on client goals',
    'AI generates initial content drafts aligned with brand guidelines',
    'Human review and approval process for quality assurance',
    'Automated scheduling across all platforms',
    'Real-time monitoring and engagement response',
    'Weekly performance reports and optimization recommendations'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-4xl">
              <Link 
                to="/" 
                className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Social Media AI Management
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  AI-powered content creation and scheduling system managing 50+ client accounts with automated engagement and analytics
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Social Media</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">AI Content</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Automation</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://socialdots.ai"
                className="w-full h-full border-0"
                title="Live Preview - Social Media AI Management"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3">
                  <metric.icon className="w-6 h-6 text-purple-600" />
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
                  A Canadian marketing agency was struggling to efficiently manage social media 
                  across their growing portfolio of 50+ clients. Manual content creation, 
                  scheduling, and engagement monitoring was consuming 40+ hours per week and 
                  limiting their ability to scale.
                </p>
                <p>
                  Key challenges included:
                </p>
                <ul>
                  <li>Inconsistent content quality across different clients</li>
                  <li>Time-consuming manual scheduling and posting</li>
                  <li>Difficulty maintaining brand consistency across platforms</li>
                  <li>Limited insights into content performance</li>
                  <li>Inability to quickly respond to trending topics</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Social Dots developed a comprehensive AI-powered social media management system 
                  that automates content creation, scheduling, and engagement monitoring while 
                  maintaining the personal touch that clients expect.
                </p>
                <p>
                  The system learns each client's brand voice, analyzes audience engagement patterns, 
                  and automatically optimizes content strategies for maximum impact across all 
                  major social platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features & Technology</h2>
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

      {/* Workflow */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Client Workflow Process</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {clientWorkflow.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Exceptional Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The agency now manages 50+ client accounts efficiently with improved quality and engagement
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average engagement rate increase:</span>
                    <span className="font-semibold text-purple-600">400%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time saved per week:</span>
                    <span className="font-semibold text-purple-600">30 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Content reach across platforms:</span>
                    <span className="font-semibold text-purple-600">2M+ monthly</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Consistent brand voice across all platforms
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Real-time engagement monitoring and response
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Automated reporting and client dashboards
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Scalable system supporting business growth
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Social Media?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI-powered social media management can transform your agency's efficiency
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