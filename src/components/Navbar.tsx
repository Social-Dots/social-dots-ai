
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link as RouterLink } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-black")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <RouterLink to="/" className="flex items-center">
              <img
                src="/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png"
                alt="Social Dots"
                className={cn("h-8 md:h-9 w-auto object-contain transition mr-3", isScrolled ? "" : "invert")}
                loading="eager"
                decoding="async"
              />
              <span className="text-2xl font-bold">
                <span className="text-blue-700">Social</span>
                <span className="text-yellow-500">Dots</span>
              </span>
            </RouterLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <RouterLink to="/" className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Home
                    </RouterLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <RouterLink to="/about" className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      About Us
                    </RouterLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[420px]">
                      <li>
                        <RouterLink to="/services" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">All Services</div>
                          <p className="text-sm text-gray-500">Explore everything we offer</p>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/services/ai-concierge" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">AI Concierge</div>
                          <p className="text-sm text-gray-500">24/7 AI assistant for calls, messages & bookings</p>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/services/ai-business-assistant" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">AI Business Assistant</div>
                          <p className="text-sm text-gray-500">Automate tasks, reports, and workflows</p>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/services/ai-inbound-assistant" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">AI Inbound Lead Assistant</div>
                          <p className="text-sm text-gray-500">24/7 lead capture and qualification</p>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/services/ai-outbound-agent" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">AI Outbound Sales Agent</div>
                          <p className="text-sm text-gray-500">Personalized outreach at scale</p>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/services/ai-support-agent" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">AI Support Agent</div>
                          <p className="text-sm text-gray-500">24/7 support with human handoff</p>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/services/video-avatars" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Video Avatars</div>
                          <p className="text-sm text-gray-500">AI-generated avatars for scalable content</p>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/services/web-services" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Web Services</div>
                          <p className="text-sm text-gray-500">Professional landing pages from $299</p>
                        </RouterLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <RouterLink to="/portfolio" className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Portfolio
                    </RouterLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <RouterLink to="/blog" className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Blog
                    </RouterLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <RouterLink to="/careers" className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Careers
                    </RouterLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-social-dots-orange text-white hover:bg-social-dots-orange/90" : "bg-social-dots-orange text-white hover:bg-social-dots-orange/90")}>
                    Get Started
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Reduced height and simplified */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-sm overflow-y-auto max-h-80", isScrolled ? "bg-white" : "bg-black")}>
          <RouterLink to="/" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Home
          </RouterLink>
          
          <RouterLink to="/about" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            About Us
          </RouterLink>
          
          {/* Services */}
          <RouterLink to="/services" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Services
          </RouterLink>
          
          {/* Portfolio */}
          <RouterLink to="/portfolio" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Portfolio
          </RouterLink>
          
          <RouterLink to="/blog" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Blog
          </RouterLink>
          
          <RouterLink to="/careers" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Careers
          </RouterLink>
          
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-white bg-social-dots-orange hover:bg-social-dots-orange/90" : "text-white bg-social-dots-orange hover:bg-social-dots-orange/90")}>
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
