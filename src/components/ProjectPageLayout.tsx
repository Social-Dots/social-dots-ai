
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { useEffect } from 'react';

interface ProjectPageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  imageUrl: string;
  brandName: string;
  darkMode?: boolean;
}

const ProjectPageLayout: React.FC<ProjectPageLayoutProps> = ({
  children,
  title,
  subtitle,
  imageUrl,
  brandName,
  darkMode = false
}) => {
  // Ensure page scrolls to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const bgColor = darkMode ? 'bg-[#0c151c]' : 'bg-gray-100';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  
  return (
    <PageLayout>
      <div className="pt-16 pb-16">
        {/* Hero Section */}
        <div 
          className={`relative w-full h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center`}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className={`absolute inset-0 ${darkMode ? 'bg-black/70' : 'bg-white/70'}`}></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
            <motion.div 
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className={`text-4xl md:text-5xl font-bold mb-4 text-center ${textColor}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {title}
              </motion.h1>
              <motion.div 
                className={`w-20 h-1 ${darkMode ? 'bg-white' : 'bg-gray-800'} mb-6`}
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.p 
                className={`text-xl text-center max-w-2xl ${darkMode ? 'text-white' : 'text-gray-700'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {subtitle}
              </motion.p>
            </motion.div>
          </div>
        </div>
        
        {/* Back Button */}
        <div className="w-full max-w-4xl mx-auto px-6 md:px-8 mt-8">
          <Link to="/#projects" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
        
        {/* Case Study Content */}
        <div className="w-full max-w-4xl mx-auto px-6 md:px-8 py-12">
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProjectPageLayout;
