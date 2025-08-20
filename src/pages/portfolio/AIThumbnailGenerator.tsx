import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, ExternalLink, Clock, Users, TrendingUp, Palette, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import DotsPattern from "@/components/DotsPattern";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AIThumbnailGenerator = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AI Thumbnail Generator - Automated YouTube Thumbnails | Social Dots";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'See how our AI thumbnail generator automated YouTube thumbnail creation for content teams, increasing production speed 10x while maintaining brand consistency.');
    }
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "10x Faster Production",
      description: "Generate professional thumbnails in seconds instead of hours"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Brand Consistency",
      description: "Maintain visual identity across all thumbnails automatically"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "CTR Uplift",
      description: "Optimized designs proven to increase click-through rates"
    }
  ];

  const technicalSpecs = [
    { label: "AI Model", value: "Custom-trained Stable Diffusion + GPT-4" },
    { label: "Processing Time", value: "3-5 seconds per thumbnail" },
    { label: "Batch Processing", value: "Up to 100 thumbnails simultaneously" },
    { label: "Brand Kit Integration", value: "Automated color palette and font detection" },
    { label: "Platform Support", value: "YouTube, Instagram, TikTok, LinkedIn" },
    { label: "Export Formats", value: "PNG, JPG, WebP (optimized for each platform)" }
  ];

  const beforeAfter = {
    before: {
      time: "4-6 hours per thumbnail",
      process: "Manual design in Photoshop",
      consistency: "Inconsistent branding",
      cost: "$50-100 per thumbnail"
    },
    after: {
      time: "3-5 seconds per thumbnail",
      process: "AI automated generation",
      consistency: "Perfect brand alignment",
      cost: "$0.50 per thumbnail"
    }
  };

  return (
    <PageLayout showContact={false}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 overflow-hidden">
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
                    AI Automation Success Story
                  </Badge>
                  
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    AI Thumbnail Generator
                    <span className="block text-2xl md:text-3xl font-normal mt-2 opacity-90">
                      10x Faster Production for Content Teams
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-purple-100 mb-8">
                    Automated, branded thumbnails generated from titles and keywords to boost CTR and production speed for YouTube content teams.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      YouTube Content Creation
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Brand Automation
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      AI Design
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
                  title="Live Preview - AI Thumbnail Generator"
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

        {/* Before/After Comparison */}
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
                Before vs After AI Implementation
              </h2>
              <p className="text-xl text-gray-600">
                Transforming thumbnail creation from hours to seconds
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Before AI
                  </CardTitle>
                  <CardDescription>Manual Design Process</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <strong className="text-gray-900">Time per thumbnail:</strong>
                    <p className="text-gray-600">{beforeAfter.before.time}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Process:</strong>
                    <p className="text-gray-600">{beforeAfter.before.process}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Consistency:</strong>
                    <p className="text-gray-600">{beforeAfter.before.consistency}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Cost:</strong>
                    <p className="text-gray-600">{beforeAfter.before.cost}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    After AI
                  </CardTitle>
                  <CardDescription>Automated AI Solution</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <strong className="text-gray-900">Time per thumbnail:</strong>
                    <p className="text-gray-600">{beforeAfter.after.time}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Process:</strong>
                    <p className="text-gray-600">{beforeAfter.after.process}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Consistency:</strong>
                    <p className="text-gray-600">{beforeAfter.after.consistency}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Cost:</strong>
                    <p className="text-gray-600">{beforeAfter.after.cost}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
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
                Advanced AI architecture powering seamless thumbnail generation
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

        {/* Impact Metrics */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
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
                  <div className="text-4xl font-bold mb-2">10x</div>
                  <p className="text-purple-100">Faster Production</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <p className="text-purple-100">Cost Reduction</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-purple-100">Brand Consistency</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">40%</div>
                  <p className="text-purple-100">CTR Improvement</p>
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
                Ready to Transform Your Content Creation?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI automation can revolutionize your content production workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6"
                  onClick={() => navigate('/contact')}
                >
                  Start Your Project
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

export default AIThumbnailGenerator;