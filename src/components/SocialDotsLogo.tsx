import { motion } from "framer-motion";

interface SocialDotsLogoProps {
  className?: string;
  showText?: boolean;
  animated?: boolean;
}

const SocialDotsLogo = ({ className = "", showText = true, animated = false }: SocialDotsLogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Icon */}
      <motion.div 
        className="relative mr-3"
        animate={animated ? { rotate: [0, 5, -5, 0] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
        >
          {/* S Shape */}
          <motion.path
            d="M25 25 C 10 25, 10 45, 25 45 L 75 45 C 90 45, 90 65, 75 65 L 25 65 C 10 65, 10 85, 25 85 L 75 85"
            stroke="hsl(var(--dots-blue))"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={animated ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Orange Dot */}
          <motion.circle
            cx="50"
            cy="55"
            r="8"
            fill="hsl(var(--dots-orange))"
            initial={animated ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            animate={animated ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: animated ? 1.5 : 0 }}
          />
          
          {/* Animated dots around */}
          {animated && (
            <>
              <motion.circle
                cx="20"
                cy="30"
                r="2"
                fill="hsl(var(--dots-orange))"
                className="animate-dot-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <motion.circle
                cx="80"
                cy="35"
                r="1.5"
                fill="hsl(var(--dots-blue))"
                className="animate-dot-bounce"
                style={{ animationDelay: "1s" }}
              />
              <motion.circle
                cx="25"
                cy="75"
                r="2.5"
                fill="hsl(var(--dots-orange))"
                className="animate-dot-wave"
                style={{ animationDelay: "0.3s" }}
              />
              <motion.circle
                cx="75"
                cy="70"
                r="2"
                fill="hsl(var(--dots-blue))"
                className="animate-dot-float"
                style={{ animationDelay: "0.8s" }}
              />
            </>
          )}
        </svg>
      </motion.div>
      
      {/* Logo Text */}
      {showText && (
        <motion.span 
          className="text-2xl font-bold"
          style={{ color: "hsl(var(--dots-blue))" }}
          initial={animated ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
          animate={animated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: animated ? 2 : 0 }}
        >
          Social Dots
        </motion.span>
      )}
    </div>
  );
};

export default SocialDotsLogo;