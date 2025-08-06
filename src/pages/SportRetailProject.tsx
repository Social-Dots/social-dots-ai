
import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Footprints, Zap, LineChart, Award, Sparkles, FlaskConical } from 'lucide-react';

const SportRetailProject = () => {
  return (
    <ProjectPageLayout
      title="Performance Athletic Footwear"
      subtitle="Revolutionary R&D for next-generation athletic footwear"
      imageUrl="/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
      brandName="Global Sports Retail Leader"
    >
      <SEO 
        title="WRLDS - Performance Athletic Footwear Project" 
        description="Revolutionary R&D for next-generation athletic footwear with embedded textile sensors for real-time performance analytics and personalized footwear."
        type="article"
      />
      
      <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
        <p className="text-yellow-700 font-medium text-sm">Ongoing R&D Project — Currently in Prototyping Phase</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Case Study: Smart Footwear Development</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          A global sports retail leader approached WRLDS Technologies with a vision to revolutionize the development, 
          fitting, and testing of athletic footwear. Their goal was to create a data-driven approach to footwear design 
          that would enhance athlete performance while reducing development cycles.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Traditional footwear development relied heavily on subjective feedback and limited quantitative testing. 
        The company needed a precise way to measure actual performance metrics, foot movements, and pressure 
        distribution in real-world athletic scenarios. Additionally, they wanted to personalize footwear recommendations 
        based on individual biomechanics.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        WRLDS Technologies developed a comprehensive smart footwear R&D platform that includes:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Footprints className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Embedded Sensors</h4>
            <p>Textile-based pressure and motion sensors integrated directly into prototype footwear.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Zap className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Real-time Analysis</h4>
            <p>Instant feedback on gait, pressure points, and energy transfer during athletic movements.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <LineChart className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Performance Metrics</h4>
            <p>Comprehensive data collection on acceleration, stability, and energy return across different sports movements.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Award className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Athlete Cloud Platform</h4>
            <p>AI-powered analytics comparing performance across prototype iterations and athlete profiles.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Key Features</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Machine washable sensor technology for extended testing periods</li>
        <li>Low-profile design that doesn't interfere with natural movement</li>
        <li>Cross-platform mobile app for real-time coaching and feedback</li>
        <li>Materials testing module to evaluate durability and performance longevity</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Preliminary Results</h3>
      <p>
        The smart footwear prototype platform has shown promising results in initial testing phases. 
        The data-driven approach has not only provided valuable insights for product development but also opened 
        new possibilities for personalized product recommendations in retail environments. Patent applications have 
        been filed based on innovations developed during this ongoing project.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <Sparkles className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Development Roadmap</h4>
          <p>
            WRLDS Technologies continues to partner with this client on this R&D initiative to refine the prototype and 
            develop potential consumer versions of this technology, which could enable everyday athletes to benefit 
            from professional-grade footwear analysis and recommendations.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default SportRetailProject;
