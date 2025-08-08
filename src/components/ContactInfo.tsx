import React, { useState } from 'react';
import { Mail, Linkedin, Phone, MessageSquare } from 'lucide-react';
import { company } from '@/config/company';
import CalendarButton from '@/components/CalendarButton';
import RetellAIInterface from '@/components/RetellAIInterface';
const ContactInfo = () => {
  const [isAIInterfaceOpen, setIsAIInterfaceOpen] = useState(false);

  return <section id="contact" className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
            Ready to transform your business with AI? Talk to our AI agent for instant support or book an appointment with our team for personalized assistance.
          </p>
          
          {/* Simple Contact Info */}
          <div className="text-center space-y-4">
            <p className="text-gray-600">Get in touch with us:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={`tel:${company.phoneE164}`} className="flex items-center text-gray-700 hover:text-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                {company.phonePretty}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center text-gray-700 hover:text-blue-600">
                <Mail className="w-5 h-5 mr-2" />
                {company.email}
              </a>
            </div>
          </div>
        </div>
        
        {/* Retell AI Interface Modal */}
        <RetellAIInterface 
          isOpen={isAIInterfaceOpen} 
          onClose={() => setIsAIInterfaceOpen(false)} 
        />
      </div>
    </section>;
};
export default ContactInfo;