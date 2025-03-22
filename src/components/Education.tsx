
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title mb-12 text-center mx-auto">Education</h2>
        
        <div className="max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-violet-200"></div>
            
            <div className="relative z-10 mb-8">
              <div className="flex items-center">
                <div className="bg-white w-9 h-9 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-violet-600" />
                </div>
                <div className="ml-6">
                  <span className="bg-violet-100 text-violet-800 text-xs font-medium px-3 py-1 rounded-full">2028-04 (Expected)</span>
                </div>
              </div>
              
              <div className="ml-14 mt-3">
                <div className="card-glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Bachelor of Technology</h3>
                  <p className="text-violet-700">Computer Science And Engineering With Data Science</p>
                  <p className="text-gray-600 mt-1 mb-3">Parul University - Vadodara, India</p>
                  
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <h4 className="font-medium text-gray-700 mb-2">Key Projects & Achievements</h4>
                    <ul className="ml-5 list-disc text-gray-600 space-y-2">
                      <li>
                        <span className="font-medium">Data Science Job Simulation</span> - 
                        By British Airways by Forage, Completed 2025
                      </li>
                      <li>
                        Currently learning machine learning algorithms and their applications in real-world scenarios
                      </li>
                      <li>
                        Developing skills in data analytics and visualization techniques
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 ml-4 pl-10 pb-8">
              <div className="bg-violet-100 rounded-lg p-4 border-l-4 border-violet-500 bg-opacity-70">
                <p className="text-gray-700 italic">
                  "My academic journey is focused on building a strong foundation in computer science principles while specializing in data science methodologies and techniques."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
