
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
              <span className={cn("text-xl font-bold", isScrolled ? "text-blue-600" : "text-white")}>Social Dots</span>
            </RouterLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <RouterLink to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Home
                    </NavigationMenuLink>
                  </RouterLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <RouterLink to="/about">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      About Us
                    </NavigationMenuLink>
                  </RouterLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
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
                        <RouterLink to="/services/video-avatars" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Video Avatars</div>
                          <p className="text-sm text-gray-500">AI-generated avatars for scalable content</p>
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
                        <RouterLink to="/services/web-development" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Web Development</div>
                          <p className="text-sm text-gray-500">Professional landing pages from $299</p>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/services/ai-solutions" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">AI Solutions</div>
                          <p className="text-sm text-gray-500">Custom AI tools and automation</p>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/services/digital-marketing" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Digital Marketing</div>
                          <p className="text-sm text-gray-500">Complete marketing systems</p>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/services/social-media" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Social Media</div>
                          <p className="text-sm text-gray-500">Strategic content and management</p>
                        </RouterLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <RouterLink to="/portfolio">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Portfolio
                    </NavigationMenuLink>
                  </RouterLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <RouterLink to="/blog">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Blog
                    </NavigationMenuLink>
                  </RouterLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <RouterLink to="/careers">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Careers
                    </NavigationMenuLink>
                  </RouterLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-orange-500 text-white hover:bg-orange-600")}>
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
          
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-white bg-orange-500 hover:bg-orange-600" : "text-white bg-orange-500 hover:bg-orange-600")}>
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
