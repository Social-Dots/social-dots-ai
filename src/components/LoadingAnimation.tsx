
import React from 'react';
import { motion } from 'framer-motion';

export const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {[0, 1, 2, 3].map((index) => (
          <motion.span
            key={index}
            className="absolute inline-block w-4 h-4 bg-purple-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 0.2,
              ease: "easeInOut"
            }}
            style={{
              left: `${index * 12}px`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;
