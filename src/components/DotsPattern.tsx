import { motion } from "framer-motion";

interface DotsPatternProps {
  className?: string;
  animated?: boolean;
  color?: 'blue' | 'orange' | 'mixed';
  density?: 'low' | 'medium' | 'high';
}

const DotsPattern = ({ 
  className = "", 
  animated = false, 
  color = 'mixed',
  density = 'medium' 
}: DotsPatternProps) => {
  const getDotCount = () => {
    switch (density) {
      case 'low': return 8;
      case 'medium': return 12;
      case 'high': return 16;
      default: return 12;
    }
  };

  const dotCount = getDotCount();
  const dots = Array.from({ length: dotCount }, (_, i) => i);

  const getRandomPosition = () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
  });

  const getColor = (index: number) => {
    if (color === 'blue') return 'hsl(var(--dots-blue))';
    if (color === 'orange') return 'hsl(var(--dots-orange))';
    return index % 2 === 0 ? 'hsl(var(--dots-blue))' : 'hsl(var(--dots-orange))';
  };

  const getAnimation = (index: number) => {
    const animations = ['animate-dot-bounce', 'animate-dot-wave', 'animate-dot-pulse', 'animate-dot-float'];
    return animations[index % animations.length];
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {dots.map((dot, index) => {
        const position = getRandomPosition();
        const size = Math.random() * 4 + 2; // 2-6px
        
        return (
          <motion.div
            key={dot}
            className={`absolute rounded-full ${animated ? getAnimation(index) : ''}`}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: getColor(index),
              opacity: animated ? 0.6 : 0.3,
              animationDelay: animated ? `${index * 0.2}s` : undefined,
            }}
            initial={animated ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 0.3 }}
            animate={animated ? { scale: 1, opacity: 0.6 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1,
              repeat: animated ? Infinity : 0,
              repeatType: animated ? "reverse" : undefined,
              repeatDelay: animated ? 2 : 0,
            }}
          />
        );
      })}
      
      {/* Flowing dots animation */}
      {animated && (
        <>
          <motion.div
            className="absolute w-3 h-3 rounded-full bg-social-dots-orange animate-social-flow"
            style={{ top: '20%', animationDelay: '0s' }}
          />
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-social-dots-blue animate-social-flow"
            style={{ top: '60%', animationDelay: '2s' }}
          />
          <motion.div
            className="absolute w-2.5 h-2.5 rounded-full bg-social-dots-orange animate-social-flow"
            style={{ top: '80%', animationDelay: '4s' }}
          />
        </>
      )}
    </div>
  );
};

export default DotsPattern;