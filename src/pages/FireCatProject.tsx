
import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Shield, Radio, Activity, Box } from 'lucide-react';

const FireCatProject = () => {
  return (
    <ProjectPageLayout
      title="FireCat's 6th SENSE"
      subtitle="Advanced safety system for high-risk environments"
      imageUrl="/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
      brandName="FireCat Group"
      darkMode={true}
    >
      <h2 className="text-3xl font-bold mb-6">Case Study: FireCat's 6th SENSE by WRLDS Technologies</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          FireCat Group aimed to enhance the safety and operational effectiveness of personnel in high-risk 
          environments such as law enforcement, military operations, and firefighting. They required an advanced, 
          integrated sensor solution that could provide critical real-time data for risk management and decision-making.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Traditional approaches lacked comprehensive real-time tracking and situational awareness, leaving personnel 
        vulnerable and decision-making delayed. The market required a robust solution capable of capturing essential 
        data while being resilient enough for extreme conditions.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        WRLDS Technologies provided an end-to-end solution called the 6th SENSE, combining sophisticated AI-driven 
        sensors seamlessly integrated into uniforms. The solution features:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Shield className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Main Unit</h4>
            <p>Secure real-time data transmission with encrypted communication.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Radio className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">High-Quality Sensors</h4>
            <p>Durable sensors resistant to dust, water, and extreme temperatures.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Box className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Integrated Clothing</h4>
            <p>Customized shirts embedding AI-powered sensors, maintaining user comfort.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Activity className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Control Unit</h4>
            <p>Centralized AI interface providing transparent data visualization and management via an intuitive supervisor app.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Critical Features</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Man Down Alarm for immediate alerts</li>
        <li>Precise GPS positioning for location tracking</li>
        <li>Real-time monitoring of vital signs</li>
        <li>Easily accessible Panic Button for emergencies</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Life-saving technology</h4>
            <p>Rapid data acquisition facilitates quicker responses in emergencies.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Technological advancement</h4>
            <p>Machine learning prevents false alarms by adapting to individual behavioral baselines.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Long-lasting and secure</h4>
            <p>Durable hardware with extended lifespan, robust encryption, and full GDPR compliance.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Easy Maintenance</h4>
            <p>Sensors are fully washable and require minimal maintenance.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">User-Friendly</h4>
            <p>Plug & Play installation within minutes, providing hours of continuous operation per charge.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
      <p>
        FireCat successfully implemented the 6th SENSE solution, significantly enhancing situational awareness, 
        safety, and operational efficiency of high-risk personnel. WRLDS' innovative platform and specialized 
        knowledge allowed for rapid deployment, immediate positive impact, and a scalable model for future expansions.
      </p>
    </ProjectPageLayout>
  );
};

export default FireCatProject;
