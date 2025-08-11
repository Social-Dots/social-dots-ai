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
            Let's Build Your AI-Powered Future – Book Your Free Consultation Today.
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
            Get a free 30-minute strategy session with our experts. Learn how AI automation can help your business grow and thrive.
          </p>
          
          {/* Enhanced Get in Touch Button */}
          <div className="mb-8">
            <a 
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0XVUI4MN2ep4PxV_FNEo2RwyEsE_qQTTyakkMLwGfvzrBJEEBQeEfQTxAGWtZZWHQ7DNrOAEJd?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
          
          {/* Contact Information Block */}
          <div className="text-center space-y-8">
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch max-w-4xl mx-auto">
              <div className="flex-1 bg-white p-8 rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl hover:border-blue-200/60 transition-all duration-500 group backdrop-blur-sm">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <a href={`tel:${company.phoneE164}`} className="block text-gray-900 hover:text-blue-600 transition-colors font-semibold text-xl mb-2 group-hover:scale-105 transition-transform duration-300">
                      {company.phonePretty}
                    </a>
                    <p className="text-sm text-gray-500 font-medium px-3 py-1 bg-gray-50 rounded-full inline-block">
                      Mon–Fri, 9 AM–6 PM EST
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 bg-white p-8 rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl hover:border-orange-200/60 transition-all duration-500 group backdrop-blur-sm">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-center">
                    <a href={`mailto:${company.email}`} className="block text-gray-900 hover:text-orange-600 transition-colors font-semibold text-xl group-hover:scale-105 transition-transform duration-300">
                      {company.email}
                    </a>
                    <p className="text-sm text-gray-500 font-medium mt-2">
                      Get a response within 24 hours
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