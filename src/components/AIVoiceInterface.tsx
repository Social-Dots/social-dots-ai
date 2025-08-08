import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mic, MicOff, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { company } from '@/config/company';

interface AIVoiceInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIVoiceInterface: React.FC<AIVoiceInterfaceProps> = ({ isOpen, onClose }) => {
  const [isListening, setIsListening] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [statusText, setStatusText] = useState('Click to start conversation...');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  // Galaxy animation effect
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Initialize particles
    const createParticles = () => {
      const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'];
      for (let i = 0; i < (isListening ? 150 : 80); i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (isListening ? 2 : 0.5),
          vy: (Math.random() - 0.5) * (isListening ? 2 : 0.5),
          size: Math.random() * (isListening ? 4 : 2) + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      particles.forEach((particle, index) => {
        // Move towards center with some randomness
        const dx = centerX - particle.x;
        const dy = centerY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (isListening) {
          // More dynamic movement when listening
          particle.vx += (dx * 0.0001) + (Math.random() - 0.5) * 0.1;
          particle.vy += (dy * 0.0001) + (Math.random() - 0.5) * 0.1;
        } else {
          // Gentle orbital movement when idle
          particle.vx += (dx * 0.00005);
          particle.vy += (dy * 0.00005);
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width || 
            particle.y < 0 || particle.y > canvas.height) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections to nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < (isListening ? 60 : 40)) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 60) * 0.3;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Setup canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles.length = 0;
      createParticles();
    };

    resizeCanvas();
    animate();

    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isOpen, isListening]);

  const handleStartConversation = () => {
    setIsListening(true);
    setStatusText('Connecting to AI agent...');
    
    // Simulate connection
    setTimeout(() => {
      setIsConnected(true);
      setStatusText('AI Agent: Hello! I\'m here to help. How can I assist you today?');
    }, 2000);
  };

  const handleCallNow = () => {
    window.open(`tel:${company.phoneE164}`, '_self');
  };

  const toggleMicrophone = () => {
    setIsListening(!isListening);
    if (isListening) {
      setStatusText('Microphone muted');
    } else {
      setStatusText('Listening...');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 max-w-lg w-full max-h-[80vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
          >
            <X className="w-5 h-5" />
          </Button>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Social Dots AI</h2>
            <p className="text-gray-400">Intelligent Assistant</p>
          </div>

          {/* Canvas Animation */}
          <div className="relative mb-6">
            <canvas
              ref={canvasRef}
              className="w-full h-64 rounded-xl bg-gray-950"
              style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(0,0,0,0.9) 70%)' }}
            />
            
            {/* Central AI indicator */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: isListening ? [1, 1.2, 1] : [1, 1.1, 1],
                  rotate: isConnected ? 360 : 0
                }}
                transition={{ 
                  scale: { duration: 2, repeat: Infinity },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
                className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  isConnected ? 'bg-green-500' : isListening ? 'bg-blue-500' : 'bg-gray-600'
                } shadow-lg`}
              >
                <motion.div
                  animate={{ opacity: isListening ? [0.5, 1, 0.5] : 1 }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {isListening ? (
                    <Mic className="w-6 h-6 text-white" />
                  ) : (
                    <MessageSquare className="w-6 h-6 text-white" />
                  )}
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Status Text */}
          <div className="text-center mb-6">
            <p className="text-gray-300 min-h-[3rem] flex items-center justify-center">
              {statusText}
            </p>
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center gap-4">
            {!isConnected ? (
              <>
                <Button
                  onClick={handleStartConversation}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
                  disabled={isListening && !isConnected}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {isListening ? 'Connecting...' : 'Start Chat'}
                </Button>
                <Button
                  onClick={handleCallNow}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={toggleMicrophone}
                  className={`px-6 py-3 rounded-xl ${
                    isListening 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-gray-600 hover:bg-gray-700 text-white'
                  }`}
                >
                  {isListening ? (
                    <><MicOff className="w-4 h-4 mr-2" /> Mute</>
                  ) : (
                    <><Mic className="w-4 h-4 mr-2" /> Unmute</>
                  )}
                </Button>
                <Button
                  onClick={handleCallNow}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Voice Call
                </Button>
              </>
            )}
          </div>

          {/* Footer info */}
          <div className="text-center mt-6 text-xs text-gray-500">
            Powered by Social Dots AI • Canadian-owned
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AIVoiceInterface;