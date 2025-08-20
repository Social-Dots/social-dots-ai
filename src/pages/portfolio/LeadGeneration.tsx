import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Mail, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LeadGeneration() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: 'Qualified Leads', value: '200%', icon: Target },
    { label: 'Email Open Rate', value: '45%', icon: Mail },
    { label: 'Conversion Rate', value: '35%', icon: BarChart3 },
    { label: 'Lead Quality Score', value: '9.2/10', icon: Users }
  ];

  const features = [
    {
      title: 'AI Lead Scoring',
      description: 'Machine learning algorithms analyze prospect behavior to identify high-quality leads.',
      details: 'Tracks website interactions, email engagement, and demographic data to assign lead scores, focusing sales efforts on the most promising prospects.'
    },
    {
      title: 'CRM Integration',
      description: 'Seamless integration with existing CRM systems for unified lead management.',
      details: 'Two-way sync with Salesforce, HubSpot, and other major CRMs ensures all lead data stays current across systems with automated data enrichment.'
    },
    {
      title: 'Automated Email Sequences',
      description: 'Personalized email campaigns triggered by lead behavior and engagement patterns.',
      details: 'Behavioral triggers automatically send targeted content based on prospect actions, with A/B testing optimization for maximum conversion rates.'
    },
    {
      title: 'Conversion Tracking',
      description: 'End-to-end tracking from initial lead capture to final sale conversion.',
      details: 'Detailed attribution modeling shows which campaigns and touchpoints drive the most valuable conversions, enabling data-driven optimization.'
    }
  ];

  const leadProcess = [
    'Website visitor tracking and behavior analysis',
    'Automated lead capture with progressive profiling',
    'AI-powered lead scoring and qualification',
    'Personalized email nurture sequences',
    'Sales team notification for hot leads',
    'Conversion tracking and ROI measurement'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Lead Generation System
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Custom CRM integration with automated lead scoring, email sequences, and conversion tracking that doubled qualified leads in 3 months
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Lead Generation</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">CRM Integration</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Email Automation</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-96">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Live Preview</span>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs">socialdots.ai</span>
                </div>
              </div>
              <iframe 
                src="https://socialdots.ai" 
                className="w-full h-full rounded-lg bg-white"
                title="Social Dots Lead Generation System"
              />
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
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
                  <metric.icon className="w-6 h-6 text-green-600" />
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
                  A professional services firm was struggling with inconsistent lead quality and 
                  inefficient manual processes. Their sales team was spending too much time on 
                  unqualified prospects, while high-value leads were falling through the cracks.
                </p>
                <p>
                  Key challenges included:
                </p>
                <ul>
                  <li>No systematic lead qualification process</li>
                  <li>Manual data entry and follow-up tracking</li>
                  <li>Inconsistent lead nurturing across the sales team</li>
                  <li>Poor visibility into lead source effectiveness</li>
                  <li>Long sales cycles with low conversion rates</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Social Dots implemented a comprehensive lead generation system that combines 
                  AI-powered lead scoring, automated email sequences, and seamless CRM integration 
                  to create a streamlined lead-to-customer conversion process.
                </p>
                <p>
                  The system automatically qualifies leads, nurtures prospects with personalized 
                  content, and provides sales teams with prioritized, sales-ready opportunities.
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

      {/* Lead Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Automated Lead Process</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {leadProcess.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Outstanding Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Within 3 months, the firm doubled their qualified leads and significantly improved sales efficiency
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead Generation Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Qualified leads increase:</span>
                    <span className="font-semibold text-green-600">200%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email open rates:</span>
                    <span className="font-semibold text-green-600">45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lead-to-customer conversion:</span>
                    <span className="font-semibold text-green-600">35%</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Sales team efficiency improved by 60%
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Lead response time reduced to under 5 minutes
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Manual data entry eliminated completely
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Real-time lead quality scoring and prioritization
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
          <h2 className="text-3xl font-bold mb-4">Ready to Double Your Qualified Leads?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can implement a similar lead generation system for your business
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