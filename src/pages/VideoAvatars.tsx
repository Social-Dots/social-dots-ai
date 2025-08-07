import { ArrowLeft, CheckCircle, ArrowRight, Video, Users, Globe, Zap, Clock, Target, Play, PhoneCall, Upload, Package } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const VideoAvatars = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <RouterLink to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </RouterLink>
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm mb-6 font-medium">
                  🎥 Video Avatars Service
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                  Create Stunning AI Avatars That Represent You —{' '}
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Or Your Brand — 24/7
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
                  From founder intros to sales videos, training content to multilingual explainers — Video Avatars let you scale your voice, story, and presence without stepping in front of a camera every time.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                    onClick={scrollToContact}
                  >
                    <Video className="mr-2 h-5 w-5" />
                    Create My Avatar
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
                    onClick={scrollToContact}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    See Avatar Examples
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Talk to Your Audience. Without Ever Pressing Record.</h2>
              </div>
            </motion.div>

            {/* What Are Video Avatars */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">🔹 What Are Video Avatars?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  AI-generated avatars that look, sound, and speak like you, created using advanced tools like HeyGen, Synthesia, or D-ID.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">They can:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Deliver pitch-perfect product demos",
                    "Host onboarding & explainer videos",
                    "Handle multilingual content for global audiences",
                    "Represent your brand on your website or socials",
                    "Share updates… while you sleep"
                  ].map((capability, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Why It Works */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">🔸 Why It Works</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  {
                    title: "Consistent Messaging",
                    description: "Same quality every time",
                    icon: <Target className="w-6 h-6" />
                  },
                  {
                    title: "Cost-Effective Production", 
                    description: "No studio or crew needed",
                    icon: <CheckCircle className="w-6 h-6" />
                  },
                  {
                    title: "Always Available",
                    description: "Across time zones", 
                    icon: <Clock className="w-6 h-6" />
                  },
                  {
                    title: "Easy Updates",
                    description: "No reshoots needed",
                    icon: <Zap className="w-6 h-6" />
                  },
                  {
                    title: "Multilingual Teams",
                    description: "Perfect for global reach",
                    icon: <Globe className="w-6 h-6" />
                  }
                ].map((benefit, i) => (
                  <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mx-auto mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="font-bold text-sm mb-2 text-gray-900">{benefit.title}</h3>
                      <p className="text-xs text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Use Cases */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">🧠 Use Cases</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Founder Welcome Videos",
                    description: "Personal introductions at scale",
                    icon: <Users className="w-6 h-6" />
                  },
                  {
                    title: "Social Media Updates", 
                    description: "Consistent brand presence",
                    icon: <Video className="w-6 h-6" />
                  },
                  {
                    title: "Website Onboarding",
                    description: "Guide new visitors professionally", 
                    icon: <Target className="w-6 h-6" />
                  },
                  {
                    title: "Course Creators & Educators",
                    description: "Scalable educational content",
                    icon: <CheckCircle className="w-6 h-6" />
                  },
                  {
                    title: "Internal Training & SOPs",
                    description: "Consistent team education",
                    icon: <Clock className="w-6 h-6" />
                  },
                  {
                    title: "Real Estate Listing Intros",
                    description: "Personal touch for every property",
                    icon: <Globe className="w-6 h-6" />
                  },
                  {
                    title: "WhatsApp/DM Auto-Intros",
                    description: "Automated personal greetings",
                    icon: <Zap className="w-6 h-6" />
                  }
                ].map((useCase, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mr-3">
                          {useCase.icon}
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">{useCase.title}</h3>
                      </div>
                      <p className="text-gray-600">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* See It In Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">🌟 See It In Action</h2>
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-2xl font-bold mb-4">🔗 Meet Ali's Digital Avatar – Founder of Social Dots</h3>
                  <p className="text-xl mb-6 opacity-90">
                    See how Ali cloned himself to scale his content, engagement, and brand.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                    <p className="text-lg italic">
                      🎬 "Hey, I'm Digital Ali. While the real Ali is busy helping clients, I'll be your AI guide through Social Dots…"
                    </p>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                    onClick={scrollToContact}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Ali's Avatar Demo
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Social Dots */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">💡 Why Choose Social Dots?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "Personalized avatar creation (voice, tone, scriptwriting included)",
                  "Fully managed video workflow — from concept to delivery",
                  "Studio-quality scripts + visuals",
                  "AI setup + editing handled by real humans",
                  "Options to localize videos in Urdu, Punjabi, English, and more"
                ].map((reason, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-600 mt-1 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mb-16"
            >
              <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-6 h-6 text-yellow-400 fill-current">⭐</div>
                    ))}
                  </div>
                  <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
                    "I've recorded once — and my avatar is now creating content in 3 languages, on 4 platforms, every week."
                  </blockquote>
                  <p className="text-lg font-semibold text-orange-600">— Business Coach, Vancouver</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Packages */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">🚀 Start Building Your Avatar</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Avatar Demo",
                    description: "See the technology in action",
                    icon: <Video className="w-6 h-6" />,
                    action: "Book an Avatar Demo"
                  },
                  {
                    title: "Script Upload", 
                    description: "Upload your script, let us do the magic",
                    icon: <Upload className="w-6 h-6" />,
                    action: "Upload Your Script"
                  },
                  {
                    title: "Done-For-You Package",
                    description: "Includes scriptwriting, styling & delivery", 
                    icon: <Package className="w-6 h-6" />,
                    action: "Get Full Service"
                  }
                ].map((service, i) => (
                  <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <Button 
                        className="bg-orange-600 text-white hover:bg-orange-700 px-6 py-2 rounded-lg font-semibold transition-all"
                        onClick={scrollToContact}
                      >
                        {service.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Clone Yourself?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Scale your presence, message, and brand without being everywhere at once.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                  onClick={scrollToContact}
                >
                  <Video className="mr-2 h-5 w-5" />
                  Create My Avatar
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
                  onClick={scrollToContact}
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  See Avatar Examples
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VideoAvatars;