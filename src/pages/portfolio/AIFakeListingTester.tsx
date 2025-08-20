import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Shield, Eye, Search, AlertTriangle, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import DotsPattern from "@/components/DotsPattern";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AIFakeListingTester = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AI Fake Listing Tester - Marketplace Fraud Detection | Social Dots";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'See how our AI fake listing tester detected fraudulent marketplace listings with computer vision and NLP, reducing fraud and increasing buyer confidence.');
    }
  }, []);

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fraud Detection",
      description: "AI-powered identification of fake and low-quality marketplace listings"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Computer Vision",
      description: "Advanced image analysis to detect manipulated or stolen photos"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "NLP Analysis",
      description: "Natural language processing to identify suspicious descriptions"
    }
  ];

  const detectionTypes = [
    {
      type: "Image Manipulation",
      description: "Detects photoshopped, filtered, or stolen images",
      accuracy: "98.5%"
    },
    {
      type: "Price Anomalies",
      description: "Identifies unrealistic pricing patterns",
      accuracy: "94.2%"
    },
    {
      type: "Description Fraud",
      description: "Flags copied or misleading descriptions",
      accuracy: "96.7%"
    },
    {
      type: "Seller Verification",
      description: "Cross-references seller information and history",
      accuracy: "92.1%"
    }
  ];

  const technicalSpecs = [
    { label: "AI Models", value: "YOLOv8 + ResNet50 + BERT" },
    { label: "Processing Speed", value: "1000+ listings per minute" },
    { label: "Image Analysis", value: "Computer vision + metadata extraction" },
    { label: "Text Processing", value: "NLP sentiment + similarity detection" },
    { label: "Real-time Scoring", value: "0-100 fraud probability score" },
    { label: "Integration", value: "RESTful API + webhook notifications" }
  ];

  return (
    <PageLayout showContact={false}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 overflow-hidden">
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
                    Trust & Safety AI
                  </Badge>
                  
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    AI Fake Listing Tester
                    <span className="block text-2xl md:text-3xl font-normal mt-2 opacity-90">
                      Advanced Fraud Detection for Marketplaces
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-orange-100 mb-8">
                    AI detects fake or low-quality listings across marketplaces with scoring and evidence, reducing fraud and increasing buyer confidence.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Computer Vision
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      NLP Processing
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Real-time Analysis
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
                  title="Live Preview - AI Fake Listing Tester"
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
            <div className="grid md:grid-cols-3 gap-8">
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
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
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

        {/* Detection Capabilities */}
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
                Multi-Layer Fraud Detection
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive analysis across multiple fraud vectors
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {detectionTypes.map((detection, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg flex justify-between items-center">
                        {detection.type}
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {detection.accuracy} accuracy
                        </Badge>
                      </CardTitle>
                      <CardDescription>{detection.description}</CardDescription>
                    </CardHeader>
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
                Advanced AI stack for real-time fraud detection
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
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Business Impact Metrics
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">78%</div>
                  <p className="text-orange-100">Fraud Reduction</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <p className="text-orange-100">Less Manual Review</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">92%</div>
                  <p className="text-orange-100">Buyer Confidence</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <p className="text-orange-100">Listings/Minute</p>
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
              <Card className="border-l-4 border-red-500">
                <CardHeader>
                  <CardTitle>Challenge & Solution</CardTitle>
                  <CardDescription>
                    How we built a comprehensive fraud detection system for a major marketplace
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">The Challenge</h3>
                    <p className="text-gray-600">
                      A growing marketplace was struggling with increasing numbers of fake listings, 
                      fraudulent sellers, and manipulated product images. Manual review processes 
                      couldn't keep up with the volume, leading to poor buyer experiences and 
                      potential safety issues.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Solution</h3>
                    <p className="text-gray-600">
                      We developed a multi-layered AI system that analyzes every aspect of a listing: 
                      from image authenticity and description accuracy to pricing patterns and seller 
                      verification. The system provides real-time fraud scores and detailed evidence 
                      for human reviewers to make informed decisions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Implementation Results</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>78% reduction in fraudulent listings within 3 months</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>85% reduction in manual review workload</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>92% increase in buyer confidence scores</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Real-time processing of 1000+ listings per minute</span>
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
                Protect Your Marketplace from Fraud
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI-powered fraud detection can secure your platform and build buyer trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6"
                  onClick={() => navigate('/contact')}
                >
                  Get Fraud Detection
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-red-600 text-red-600 hover:bg-red-50 text-lg px-8 py-6"
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

export default AIFakeListingTester;