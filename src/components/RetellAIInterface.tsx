import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mic, MicOff, Phone, PhoneOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { company } from '@/config/company';

// Retell SDK type definitions
declare global {
  interface Window {
    RetellClient?: any;
  }
}

interface RetellAIInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const RetellAIInterface: React.FC<RetellAIInterfaceProps> = ({ isOpen, onClose }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [statusText, setStatusText] = useState('Ready to connect');
  const retellClientRef = useRef<any>(null);

  // Initialize Retell Client when component mounts
  useEffect(() => {
    const loadRetellSDK = async () => {
      try {
        // Import the SDK
        const { RetellWebClient } = await import('retell-client-js-sdk');
        
        // Initialize client
        const client = new RetellWebClient();
        retellClientRef.current = client;

        // Set up event listeners
        client.on('conversationStarted', () => {
          console.log('Conversation started');
          setIsConnected(true);
          setIsConnecting(false);
          setStatusText('Connected - You can speak now');
        });

        client.on('conversationEnded', () => {
          console.log('Conversation ended');
          setIsConnected(false);
          setIsConnecting(false);
          setStatusText('Call ended');
        });

        client.on('error', (error: any) => {
          console.error('Retell error:', error);
          setIsConnecting(false);
          setIsConnected(false);
          setStatusText('Connection error - Please try again');
        });

        client.on('update', (update: any) => {
          console.log('Call update:', update);
        });

      } catch (error) {
        console.error('Failed to load Retell SDK:', error);
        setStatusText('Failed to initialize AI assistant');
      }
    };

    if (isOpen && !retellClientRef.current) {
      loadRetellSDK();
    }

    return () => {
      // Cleanup on unmount
      if (retellClientRef.current && isConnected) {
        retellClientRef.current.stopCall();
      }
    };
  }, [isOpen, isConnected]);

  const startCall = async () => {
    if (!retellClientRef.current) return;

    try {
      setIsConnecting(true);
      setStatusText('Connecting to AI assistant...');

      // Start the web call with your agent
      await retellClientRef.current.startCall({
        accessToken: company.retell.apiKey,
        callId: `web_call_${Date.now()}`, // Generate unique call ID
        sampleRate: 24000,
        enableUpdate: true
      });
    } catch (error) {
      console.error('Failed to start call:', error);
      setIsConnecting(false);
      setStatusText('Failed to connect - Please try again');
    }
  };

  const endCall = () => {
    if (retellClientRef.current && isConnected) {
      retellClientRef.current.stopCall();
      setIsConnected(false);
      setIsConnecting(false);
      setStatusText('Call ended');
    }
  };

  const toggleMute = () => {
    if (retellClientRef.current && isConnected) {
      if (isMuted) {
        retellClientRef.current.unmute();
        setIsMuted(false);
      } else {
        retellClientRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  const handleClose = () => {
    if (isConnected) {
      endCall();
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-social-dots-blue to-social-dots-blue-light text-white p-6 relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-xl font-bold mb-2">AI Assistant</h2>
              <p className="text-blue-100 text-sm">Powered by Social Dots AI</p>
            </div>

            {/* Voice Interface */}
            <div className="p-6 text-center">
              {/* Status Display */}
              <div className="mb-6">
                <motion.div
                  animate={isConnected ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ repeat: isConnected ? Infinity : 0, duration: 2 }}
                  className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    isConnected 
                      ? 'bg-green-100 text-green-600' 
                      : isConnecting 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {isConnecting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      <Phone size={32} />
                    </motion.div>
                  ) : isConnected ? (
                    <Mic size={32} />
                  ) : (
                    <Phone size={32} />
                  )}
                </motion.div>
                <p className="text-gray-700 text-sm">{statusText}</p>
              </div>

              {/* Call Controls */}
              <div className="space-y-4">
                {!isConnected && !isConnecting ? (
                  <Button
                    onClick={startCall}
                    size="lg"
                    className="w-full bg-social-dots-blue hover:bg-social-dots-blue/90 text-white"
                  >
                    <Phone className="mr-2" size={20} />
                    Start AI Conversation
                  </Button>
                ) : (
                  <div className="flex gap-3 justify-center">
                    {/* Mute Toggle */}
                    <Button
                      onClick={toggleMute}
                      variant="outline"
                      size="lg"
                      disabled={!isConnected}
                      className={isMuted ? 'bg-red-50 text-red-600 border-red-200' : ''}
                    >
                      {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
                    </Button>

                    {/* End Call */}
                    <Button
                      onClick={endCall}
                      size="lg"
                      variant="destructive"
                      disabled={!isConnected && !isConnecting}
                    >
                      <PhoneOff className="mr-2" size={20} />
                      End Call
                    </Button>
                  </div>
                )}
              </div>

              {/* Fallback Option */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-3">
                  Having trouble? Call us directly:
                </p>
                <a
                  href={`tel:${company.phoneE164}`}
                  className="text-social-dots-blue hover:text-social-dots-blue/80 font-semibold text-sm"
                >
                  {company.phonePretty}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RetellAIInterface;