
import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Activity, Gauge, Flag, Users, BarChart3 } from 'lucide-react';

const HockeyProject = () => {
  return (
    <ProjectPageLayout
      title="Ice Hockey Elite Skill Tracker"
      subtitle="Advanced motion analysis for optimal performance"
      imageUrl="/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png"
      brandName="Mars Blades"
    >
      <h2 className="text-3xl font-bold mb-6">Case Study: Hockey Performance Analysis System</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          Mars Blades, a leading innovator in hockey training equipment, sought to develop a system for 
          quantifying and analyzing the specific movements that contribute to elite hockey performance. They approached 
          WRLDS Technologies to create a solution that could capture detailed metrics during real skating sessions and 
          translate that data into actionable insights for player development.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
          Previous attempts to measure hockey performance relied on multiple external sensors or camera systems 
          that were cumbersome, expensive, and limited to controlled environments. Mars Blades needed a solution that 
          was simple enough for daily use but sophisticated enough to capture the nuanced movements that differentiate 
          elite players, particularly focusing on acceleration, speed transitions, and maneuverability on ice.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        WRLDS Technologies developed a specialized single-point IMU (Inertial Measurement Unit) system embedded directly 
        in hockey footwear that could:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Activity className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Motion Pattern Recognition</h4>
            <p>Identify and categorize specific skating movements from crossovers to tight turns.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Gauge className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Performance Metrics</h4>
            <p>Measure acceleration forces, edge angles, weight distribution, and power output in real-time.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Flag className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Benchmark Comparisons</h4>
            <p>Compare athlete's movements to established elite player patterns and historical personal bests.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Users className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Coach Integration</h4>
            <p>Provide coaches with detailed skill development metrics across team members.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">System Components</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Embedded sensors designed to withstand the harsh conditions of ice hockey</li>
        <li>Bluetooth connectivity with real-time data streaming to rinkside devices</li>
        <li>Athlete-facing mobile app with immediate performance feedback</li>
        <li>Coach dashboard for tracking player development and team trends</li>
        <li>Machine learning algorithm that improves pattern recognition over time</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Skill Development</h4>
            <p>Players using the system showed faster improvement in targeted skating skills.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Injury Prevention</h4>
            <p>Early detection of asymmetrical movements helped reduce strain-related injuries.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Elite Performance Insights</h4>
            <p>Identified specific movement patterns that correlate with elite acceleration and agility.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Coaching Efficiency</h4>
            <p>Reduced subjective assessment with quantifiable metrics for player development.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
      <p>
        The Ice Hockey Elite Skill Tracker has been successfully adopted by professional teams and elite hockey 
        academies across North America and Europe. Mars Blades has integrated the technology into their premium training 
        products, creating a new standard for performance analysis in ice hockey. The data collected has also led to 
        improvements in skate design and training methodologies based on the scientific insights provided.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <BarChart3 className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Research Impact</h4>
          <p>
            The data gathered from this project has contributed to academic research on elite athletic performance 
            and has been cited in sports science publications focused on optimizing movement efficiency in winter sports.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default HockeyProject;
