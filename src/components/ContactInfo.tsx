import React, { useState } from 'react';
import { Mail, Linkedin, Phone, MessageSquare } from 'lucide-react';
import { company } from '@/config/company';
import CalendarButton from '@/components/CalendarButton';
import AIVoiceInterface from '@/components/AIVoiceInterface';
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
            Experience our AI solutions firsthand. Talk to our AI agent or schedule a call with our team to discover how we can help automate and grow your business.
          </p>
          
          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={() => setIsAIInterfaceOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Talk to AI Agent
            </button>
            <CalendarButton className="px-8 py-4 rounded-xl text-lg font-semibold" />
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI Demo */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Try Our AI Agent</h3>
              <p className="text-gray-600 mb-4">Experience our AI technology with an interactive demo</p>
              <button 
                onClick={() => setIsAIInterfaceOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Start Demo
              </button>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call or Email</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <div className="space-y-3">
                <a href={`tel:${company.phoneE164}`} className="flex items-center text-gray-700 hover:text-blue-600 justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  {company.phonePretty}
                </a>
                <a href={`mailto:${company.email}`} className="flex items-center text-gray-700 hover:text-blue-600 justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI Interface Modal */}
        <AIVoiceInterface 
          isOpen={isAIInterfaceOpen} 
          onClose={() => setIsAIInterfaceOpen(false)} 
        />
      </div>
    </section>;
};
export default ContactInfo;