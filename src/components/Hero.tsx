import { ArrowRight, Code, Cpu, Layers, MessageSquare, Globe, Smartphone, BarChart3 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { company } from "@/config/company";

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
  
  const handleTalkToAgent = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `tel:${company.phoneE164}`;
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
                A Canada-based company leveraging AI to drive business growth globally. Our innovative solutions empower businesses to thrive in a digital landscape. With AI-driven strategies, we help companies achieve their goals and stay ahead of the curve.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
                {/* Primary CTA - Talk to AI Agent */}
                <div className="text-center">
                  <button 
                    className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:shadow-orange-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                    onClick={handleTalkToAgent}
                  >
                    Talk to AI Agent
                    <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </button>
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
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
    </motion.div>;
};

export default Hero;
