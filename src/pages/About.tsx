
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About Social Dots
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                Founded in Toronto, Social Dots Inc. brings together strategic thinking, cutting-edge technology, and deep Canadian market expertise to help businesses navigate and excel in the digital landscape.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    At Social Dots, we combine strategic thinking with technical expertise to deliver exceptional 
                    results for our clients across Canada.
                  </p>
                  <p className="text-gray-600">
                    We bring 15+ years of experience from top Canadian tech companies into every project, whether 
                    it's Salesforce automation or lead-generating websites.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Human-AI Hybrid Workflow:</strong> We blend our Canadian strategy team with skilled talent and AI tools for smart, affordable solutions.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Flat Rates. No BS. Fast Delivery:</strong> We ship fast, keep it lean, and deliver high quality that performs.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Big Experience for Small Business:</strong> Bringing 15+ years of top-tier Canadian tech expertise to small businesses.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Cross-Border Impact:</strong> Creating opportunities for Canadian businesses and skilled professionals globally.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    Social Dots was born to create opportunities — for Canadian businesses to grow smarter, and for 
                    skilled professionals in Pakistan to work on global projects. When you work with us, you support 
                    cross-border collaboration, ethical outsourcing, and real economic impact.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Most agencies either go full manual or hand everything over to AI. We blend both — our Canadian 
                    strategy team works with skilled talent in Pakistan and leverages AI tools like ChatGPT, Claude, 
                    and HeyGen to deliver smart, affordable, and scalable digital services.
                  </p>
                  <p className="text-gray-600">
                    Our diverse team combines deep Canadian market knowledge with international expertise and 
                    cutting-edge technical skills to deliver exceptional results with over 100 successful 
                    implementations across Canada.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Meet Our CEO</h2>
                <p className="text-gray-600 mb-8">
                  Our diverse team combines deep Canadian market knowledge with international expertise and 
                  cutting-edge technical skills.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-md mx-auto">
                  {[
                    {
                      name: "Ali Shafique",
                      role: "Founder & CEO",
                      bio: "15+ years of Canadian IT industry experience with deep Salesforce ecosystem expertise. AI Strategy & Marketing Coach and spiritual guide for purpose-driven entrepreneurs. Integrates strategic clarity with learning design, having worked with business and technical teams across top Canadian and US companies.",
                      image: "https://media.licdn.com/dms/image/v2/D5603AQFnKUOtxRp7BA/profile-displayphoto-shrink_800_800/B56Zb2LMVYGgAc-/0/1747886851794?e=1757548800&v=beta&t=tEcmZQhzJVamv9zVnUFOgh0h5eLkSDvrR2oK7JSJVpU"
                    }
                  ].map((member, i) => (
                    <Card key={i} className="bg-gray-50 border border-gray-100 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover filter grayscale" 
                            />
                          </div>
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-gray-500 text-sm mb-2">{member.role}</p>
                          <p className="text-gray-600 text-sm">{member.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
