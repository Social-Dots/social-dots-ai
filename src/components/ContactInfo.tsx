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
          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <a href={`tel:${company.phoneE164}`} className="flex items-center text-blue-700 hover:text-blue-800 transition-colors font-semibold text-lg mb-2">
                  <Phone className="w-6 h-6 mr-3 text-blue-600" />
                  {company.phonePretty}
                </a>
                <p className="text-sm text-blue-600 font-medium bg-blue-100 px-3 py-1 rounded-full">Mon–Fri, 9 AM–6 PM EST</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <a href={`mailto:${company.email}`} className="flex items-center text-orange-700 hover:text-orange-800 transition-colors font-semibold text-lg">
                  <Mail className="w-6 h-6 mr-3 text-orange-600" />
                  {company.email}
                </a>
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