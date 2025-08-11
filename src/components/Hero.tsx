import { ArrowRight, Code, Cpu, Layers, MessageSquare, Globe, Smartphone, BarChart3 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-black relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
        <div className="absolute inset-0 bg-black w-full">
          {/* AI-focused background image */}
          <img 
            src="/hero-ai-background.jpg" 
            alt="AI-powered digital workspace - Social Dots" 
            className={`w-full h-full object-cover opacity-70 ${isMobile ? 'object-right' : 'object-center'}`} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-20 sm:pt-24 md:pt-32 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.h1 className="banner-title text-white" variants={itemVariants}>Say Hello to Your New AI Team</motion.h1>
              <motion.p className="banner-subtitle text-gray-300 mt-4 sm:mt-6" variants={itemVariants}>
                We help Canadian small businesses work smarter, faster, and better — with cutting-edge AI agents, AI receptionists, and smart automations that actually get things done.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
                {/* Primary CTA - Talk to AI Agent */}
                <div className="text-center">
                  <button 
                    className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:shadow-orange-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                    onClick={scrollToContact}
                  >
                    Talk to AI Agent
                    <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </button>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">Get instant AI-powered support anytime.</p>
                </div>
                
                {/* Secondary CTA - Book an Appointment */}
                <div className="text-center">
                  <a 
                    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0XVUI4MN2ep4PxV_FNEo2RwyEsE_qQTTyakkMLwGfvzrBJEEBQeEfQTxAGWtZZWHQ7DNrOAEJd?gv=true" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  >
                    Book an Appointment
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">Schedule a meeting with our team for personalized assistance.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <Link to="/ai-concierge" className="block" onClick={() => window.scrollTo(0, 0)}>
            <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer" variants={itemVariants}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-600 mb-2 md:mb-3">
                <Globe className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">AI Concierge</h3>
              <p className="text-gray-600 text-xs md:text-sm">Never miss a call or message again. Smart agents handle bookings, inquiries, and customer chats — 24/7.</p>
            </motion.div>
          </Link>
          
          <Link to="/ai-business-assistant" className="block" onClick={() => window.scrollTo(0, 0)}>
            <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer" variants={itemVariants}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 flex items-center justify-center rounded-lg text-purple-600 mb-2 md:mb-3">
                <Code className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">AI Business Agents</h3>
              <p className="text-gray-600 text-xs md:text-sm">Automate the boring stuff — scheduling, follow-ups, lead nurturing, reporting, and more.</p>
            </motion.div>
          </Link>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 flex items-center justify-center rounded-lg text-green-600 mb-2 md:mb-3">
              <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Digital Transformation</h3>
            <p className="text-gray-600 text-xs md:text-sm">From websites to full AI workflows, we modernize your operations with proven results.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;
