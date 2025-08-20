import { motion } from "framer-motion";
import { ArrowLeft, Play, Users, Trophy, Calendar, Star, Target, Clock, Award, TrendingUp, Shield, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import DotsPattern from "@/components/DotsPattern";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CricketCadets = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cricket Cadets - AI Sports Coaching Platform | Social Dots";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'See how Cricket Cadets revolutionized cricket coaching with AI-powered video analysis, personalized training programs, and global talent discovery for 50,000+ young athletes worldwide.');
    }
  }, []);

  const features = [
    {
      icon: <Play className="w-6 h-6" />,
      title: "AI Video Analysis",
      description: "Real-time technique analysis with 95% accuracy"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Training",
      description: "Custom programs based on skill level and goals"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Talent Discovery",
      description: "Connect with scouts and academies worldwide"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Performance Tracking",
      description: "Comprehensive stats and progress monitoring"
    }
  ];

  const coachingModules = [
    {
      title: "Batting Technique",
      description: "AI-powered stroke analysis and improvement recommendations",
      metrics: "85% technique improvement rate",
      duration: "8-week program"
    },
    {
      title: "Bowling Action",
      description: "Biomechanical analysis for bowling accuracy and injury prevention",
      metrics: "92% accuracy improvement",
      duration: "6-week program"
    },
    {
      title: "Fielding Skills",
      description: "Reaction time training and catching technique optimization",
      metrics: "78% faster reactions",
      duration: "4-week program"
    },
    {
      title: "Game Strategy",
      description: "Tactical decision-making and match situation analysis",
      metrics: "65% better decisions",
      duration: "10-week program"
    }
  ];

  const successMetrics = [
    {
      number: "50K+",
      label: "Active Athletes",
      description: "Young cricketers worldwide"
    },
    {
      number: "95%",
      label: "Accuracy Rate",
      description: "AI technique analysis"
    },
    {
      number: "150+",
      label: "Pro Connections",
      description: "Scouts and academies"
    },
    {
      number: "4.8",
      label: "User Rating",
      description: "Average app store rating"
    }
  ];

  const trainingWorkflow = [
    {
      step: "1",
      title: "Video Upload",
      description: "Record and upload practice sessions from any device"
    },
    {
      step: "2",
      title: "AI Analysis",
      description: "Advanced computer vision analyzes technique in real-time"
    },
    {
      step: "3",
      title: "Personalized Feedback",
      description: "Receive detailed reports with specific improvement areas"
    },
    {
      step: "4",
      title: "Custom Training Plan",
      description: "Get tailored drills and exercises based on analysis"
    },
    {
      step: "5",
      title: "Progress Tracking",
      description: "Monitor improvement with detailed performance metrics"
    },
    {
      step: "6",
      title: "Expert Guidance",
      description: "Connect with certified coaches for advanced training"
    }
  ];

  const athleteStories = [
    {
      name: "Rahul Sharma",
      age: "16",
      location: "Mumbai, India",
      achievement: "Selected for Mumbai U-19 team",
      story: "Started with Cricket Cadets 18 months ago. AI analysis helped me fix my batting stance and improve my timing by 40%."
    },
    {
      name: "Emma Wilson",
      age: "14",
      location: "London, UK",
      achievement: "England U-15 development squad",
      story: "The personalized bowling program improved my accuracy by 65%. Now I'm getting offers from top academies."
    },
    {
      name: "David Chen",
      age: "15",
      location: "Sydney, Australia",
      achievement: "NSW Cricket Academy scholarship",
      story: "Cricket Cadets connected me with scouts I never would have met. The platform changed my career trajectory."
    }
  ];

  const technicalFeatures = [
    { label: "Video Processing", value: "Real-time 4K analysis with 60fps" },
    { label: "AI Models", value: "Computer vision + biomechanics engine" },
    { label: "Mobile Support", value: "iOS, Android, and web platforms" },
    { label: "Offline Mode", value: "Download training modules for offline use" },
    { label: "Data Security", value: "Athlete privacy protection with encryption" },
    { label: "Global Reach", value: "Available in 12 languages, 50+ countries" }
  ];

  return (
    <PageLayout showContact={false}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500 overflow-hidden">
          <DotsPattern animated={true} className="opacity-20" />
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
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
                  Sports Coaching Platform
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Cricket Cadets
                  <span className="block text-2xl md:text-3xl font-normal mt-2 opacity-90">
                    AI-Powered Cricket Coaching
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-green-100 mb-8">
                  AI sports coaching platform with video analysis, personalized training, and global talent discovery for 50,000+ young athletes worldwide.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Video Analysis
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Global Talent
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Mobile App
                  </Badge>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-green-600 mb-2">{metric.number}</div>
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
                AI-Powered Coaching Features
              </h2>
              <p className="text-xl text-gray-600">
                Advanced technology meets expert coaching
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
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
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

        {/* Coaching Modules */}
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
                Specialized Training Modules
              </h2>
              <p className="text-xl text-gray-600">
                Expert-designed programs for every aspect of cricket
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {coachingModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {module.metrics}
                        </Badge>
                        <Badge variant="outline">{module.duration}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Workflow */}
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
                6-Step Training Process
              </h2>
              <p className="text-xl text-gray-600">
                From video upload to expert guidance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingWorkflow.map((step, index) => (
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
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mb-4 text-sm font-bold">
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

        {/* Athlete Success Stories */}
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
                Athlete Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Real results from young athletes worldwide
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {athleteStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{story.name}</CardTitle>
                      <CardDescription>
                        {story.age} • {story.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 mb-3">
                        {story.achievement}
                      </Badge>
                      <p className="text-sm text-gray-600">{story.story}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Features */}
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
                Technical Innovation
              </h2>
              <p className="text-xl text-gray-600">
                Cutting-edge technology for sports excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {technicalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <strong className="text-gray-900">{feature.label}:</strong>
                  <p className="text-gray-600 mt-1">{feature.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Impact */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Transforming Cricket Training Globally
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <p className="text-green-100">Technique Improvement</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">65%</div>
                  <p className="text-green-100">Accuracy Increase</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <p className="text-green-100">Academy Partnerships</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">12</div>
                  <p className="text-green-100">Languages Supported</p>
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
                Ready to Transform Your Cricket Training?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join 50,000+ young athletes worldwide who are improving their game with AI-powered coaching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6"
                  onClick={() => navigate('/contact')}
                >
                  Start Training
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-6"
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

export default CricketCadets;