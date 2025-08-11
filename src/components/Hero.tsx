import { ArrowRight, Phone, Mail, Calendar, ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-ai-tech-background.jpg";

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
      <div className="banner-container bg-black relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[600px] lg:h-[650px] xl:h-[700px] w-full">
        <div className="absolute inset-0 bg-black w-full">
          {/* AI-themed background image */}
          <img 
            src={heroBackground} 
            alt="AI-powered digital transformation - Social Dots" 
            className={`w-full h-full object-cover opacity-60 ${isMobile ? 'object-right' : 'object-center'}`} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-24 sm:pt-28 md:pt-36 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-5xl text-center" variants={itemVariants}>
              <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" variants={itemVariants}>
                Boost Your Sales with AI –<br />
                <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
                  Book Your Free Consultation Today
                </span>
              </motion.h1>
              
              <motion.p className="text-lg sm:text-xl md:text-2xl text-gray-200 mt-6 mb-8 max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
                Discover proven AI strategies tailored for your business. Limited free slots available this month – 
                <span className="text-orange-400 font-semibold"> book now.</span>
              </motion.p>

              {/* Contact Info */}
              <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mb-8 text-white" variants={itemVariants}>
                <a href="tel:+12898153123" className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium">+1 (289) 815-3123</span>
                </a>
                <a href="mailto:hello@socialdots.ca" className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium">hello@socialdots.ca</span>
                </a>
              </motion.div>
              
              <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 justify-center items-center" variants={itemVariants}>
                {/* Primary CTA - Book Consultation */}
                <div className="text-center">
                  <a 
                    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0XVUI4MN2ep4PxV_FNEo2RwyEsE_qQTTyakkMLwGfvzrBJEEBQeEfQTxAGWtZZWHQ7DNrOAEJd?gv=true" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-h-[56px] px-8 sm:px-10 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 hover:scale-105 flex items-center justify-center group text-lg font-bold tracking-wide"
                  >
                    <Calendar className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                    Book My Free Consultation
                  </a>
                </div>
                
                {/* Secondary CTA */}
                <div className="text-center">
                  <Link 
                    to="/web-services"
                    className="w-full sm:w-auto min-h-[56px] px-8 sm:px-10 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/20 flex items-center justify-center group text-lg font-medium"
                  >
                    Learn More About Our AI Solutions
                    <ExternalLink className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div className="mt-12 pt-8 border-t border-gray-700" variants={itemVariants}>
                <p className="text-sm text-gray-400 mb-4 font-medium">
                  ✓ Trusted by 10+ Canadian Businesses
                </p>
                <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
                  {/* Placeholder for client logos - you can replace with actual logos */}
                  <div className="w-20 h-12 bg-gray-200 rounded opacity-50 flex items-center justify-center">
                    <span className="text-xs text-gray-600 font-bold">CLIENT</span>
                  </div>
                  <div className="w-20 h-12 bg-gray-200 rounded opacity-50 flex items-center justify-center">
                    <span className="text-xs text-gray-600 font-bold">CLIENT</span>
                  </div>
                  <div className="w-20 h-12 bg-gray-200 rounded opacity-50 flex items-center justify-center">
                    <span className="text-xs text-gray-600 font-bold">CLIENT</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
    </motion.div>;
};

export default Hero;
