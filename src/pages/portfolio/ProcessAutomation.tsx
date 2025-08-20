import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, FileText, Zap, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ProcessAutomation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: 'Time Saved', value: '20h/week', icon: Clock },
    { label: 'Document Processing', value: '95%', icon: FileText },
    { label: 'Process Speed', value: '300%', icon: Zap },
    { label: 'Accuracy Rate', value: '99.5%', icon: BarChart3 }
  ];

  const features = [
    {
      title: 'Document Processing Automation',
      description: 'AI-powered extraction and processing of documents, contracts, and forms with 99.5% accuracy.',
      details: 'OCR technology combined with natural language processing automatically extracts key data from various document types, reducing manual data entry by 95%.'
    },
    {
      title: 'Client Onboarding Workflow',
      description: 'Automated client onboarding with digital forms, e-signatures, and compliance verification.',
      details: 'Streamlined onboarding process reduces time-to-value for new clients from days to hours, with automated compliance checks and document collection.'
    },
    {
      title: 'Automated Reporting',
      description: 'Real-time dashboard generation and scheduled reports for stakeholders and clients.',
      details: 'Automated data collection and report generation saves 15 hours per week previously spent on manual reporting, with customizable templates and scheduled delivery.'
    },
    {
      title: 'Workflow Orchestration',
      description: 'End-to-end automation of complex business processes across multiple departments.',
      details: 'Intelligent routing and approval workflows ensure tasks move efficiently through the organization, with automatic notifications and escalation protocols.'
    }
  ];

  const automationWorkflow = [
    'Document intake and classification using AI',
    'Automated data extraction and validation',
    'Intelligent routing to appropriate team members',
    'Digital approval workflows with e-signatures',
    'Automated client communication and updates',
    'Real-time process monitoring and optimization'
  ];

  const beforeAfter = [
    {
      title: 'Document Processing',
      before: 'Manual data entry taking 2-3 hours per document',
      after: 'Automated processing in under 5 minutes'
    },
    {
      title: 'Client Onboarding',
      before: '5-7 day process with multiple touchpoints',
      after: 'Same-day completion with digital workflows'
    },
    {
      title: 'Report Generation',
      before: 'Weekly manual reports taking 8+ hours',
      after: 'Real-time dashboards with scheduled automation'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
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
                Business Process Automation
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Comprehensive workflow automation including document processing, client onboarding, and reporting that saved 20 hours per week of manual work
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Process Automation</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Workflow Optimization</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Document Processing</span>
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
                title="Social Dots Process Automation"
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
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-3">
                  <metric.icon className="w-6 h-6 text-indigo-600" />
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
                  A rapidly growing tech startup was drowning in manual administrative tasks. 
                  Their team was spending over 20 hours per week on repetitive processes like 
                  document processing, client onboarding, and report generation instead of focusing 
                  on strategic growth initiatives.
                </p>
                <p>
                  Key challenges included:
                </p>
                <ul>
                  <li>Manual document processing with frequent errors</li>
                  <li>Lengthy client onboarding processes</li>
                  <li>Inconsistent data across systems</li>
                  <li>Time-intensive manual reporting</li>
                  <li>Lack of process visibility and optimization</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Social Dots implemented a comprehensive business process automation system 
                  that handles document processing, client onboarding, and reporting through 
                  intelligent workflows and AI-powered automation.
                </p>
                <p>
                  The solution integrates with existing systems, provides real-time visibility 
                  into process performance, and continuously optimizes workflows based on 
                  usage patterns and business requirements.
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

      {/* Before/After Comparison */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Before vs After Automation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfter.map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{item.title}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-red-600 font-medium mb-1">Before:</p>
                    <p className="text-gray-600">{item.before}</p>
                  </div>
                  <div>
                    <p className="text-sm text-green-600 font-medium mb-1">After:</p>
                    <p className="text-gray-600">{item.after}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Automation Workflow */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">End-to-End Automation Workflow</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {automationWorkflow.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformative Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The startup achieved significant operational improvements and cost savings within 60 days
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Impact</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weekly time savings:</span>
                    <span className="font-semibold text-indigo-600">20 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Process accuracy improvement:</span>
                    <span className="font-semibold text-indigo-600">99.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Document processing speed:</span>
                    <span className="font-semibold text-indigo-600">300% faster</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    Team focused on strategic growth initiatives
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    Improved client satisfaction with faster onboarding
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    Real-time visibility into business processes
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    Scalable system supporting rapid growth
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
          <h2 className="text-3xl font-bold mb-4">Ready to Save 20+ Hours Per Week?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how business process automation can transform your operational efficiency
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