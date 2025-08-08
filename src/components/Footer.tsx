
import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { company } from '@/config/company';
import CalendarButton from '@/components/CalendarButton';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with Airtable proxy; temporarily no-op with optimistic UI
      toast({
        title: "Success!",
        description: "Thank you for subscribing.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <img 
              src="/6-01.png" 
              alt="Social Dots Logo" 
              className="h-10 w-auto mb-6 invert object-contain"
              loading="lazy"
              decoding="async"
            />
            <p className="text-gray-300 mb-6">
              Social Dots provides AI-powered digital solutions for Canadian small businesses. We specialize in AI automation, voice agents, and modern web services that help businesses grow and thrive.
            </p>
            <p className="text-gray-300 mb-6">
              Toronto, Ontario, Canada
            </p>
            <div className="flex space-x-4">
              <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Get in Touch</h3>
            <div className="space-y-2">
              <a href={`tel:${company.phoneE164}`} className="block text-gray-300 hover:text-white transition-colors">Call {company.phonePretty}</a>
              <a href={`mailto:${company.email}`} className="block text-gray-300 hover:text-white transition-colors">Email {company.email}</a>
              <CalendarButton className="pt-2" />
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
