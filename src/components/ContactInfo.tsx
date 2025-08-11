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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Let's Build Your AI-Powered Future – Book Your Free Consultation Today.
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
            Get a free 30-minute strategy session with our experts. Learn how AI automation can help your business grow and thrive.
          </p>
          
          {/* Plain Get in Touch text */}
          <div className="mb-8">
            <span className="text-gray-600 font-medium text-lg">
              Get in Touch
            </span>
          </div>
          
          {/* Contact Information Block */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 group w-48">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <a href={`tel:${company.phoneE164}`} className="block text-gray-900 hover:text-blue-600 transition-colors font-medium text-sm">
                      {company.phonePretty}
                    </a>
                    <p className="text-xs text-gray-500 mt-1">
                      Mon–Fri, 9 AM–6 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 group w-48">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <a href={`mailto:${company.email}`} className="block text-gray-900 hover:text-blue-600 transition-colors font-medium text-sm">
                      {company.email}
                    </a>
                    <p className="text-xs text-gray-500 mt-1">
                      Quick response
                    </p>
                  </div>
                </div>
              </div>
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