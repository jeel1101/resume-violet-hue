
import { Award } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title mb-12 text-center mx-auto">Certifications</h2>
        
        <div className="max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-violet-200"></div>
            
            <div className="relative z-10 mb-8">
              <div className="flex items-center">
                <div className="bg-white w-9 h-9 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <Award className="w-4 h-4 text-violet-600" />
                </div>
                <div className="ml-6">
                  <span className="bg-violet-100 text-violet-800 text-xs font-medium px-3 py-1 rounded-full">2025-01</span>
                </div>
              </div>
              
              <div className="ml-14 mt-3">
                <div className="card-glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Microsoft Excel</h3>
                  <p className="text-gray-600 mt-1 mb-3">Microsoft</p>
                  
                  <p className="text-gray-600">
                    Comprehensive certification covering advanced Excel functionalities including data analysis, 
                    visualization, and productivity tools essential for data processing and reporting.
                  </p>
                  
                  <div className="mt-4 flex">
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">Data Analysis</span>
                    <span className="ml-2 px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">Reporting</span>
                    <span className="ml-2 px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">Visualization</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mb-8">
              <div className="flex items-center">
                <div className="bg-white w-9 h-9 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <Award className="w-4 h-4 text-violet-600" />
                </div>
                <div className="ml-6">
                  <span className="bg-violet-100 text-violet-800 text-xs font-medium px-3 py-1 rounded-full">In Progress</span>
                </div>
              </div>
              
              <div className="ml-14 mt-3">
                <div className="card-glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Data Science Job Simulation</h3>
                  <p className="text-gray-600 mt-1 mb-3">British Airways by Forage</p>
                  
                  <p className="text-gray-600">
                    Hands-on virtual work experience program focused on applying data science techniques 
                    to solve real-world business problems in the airline industry.
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">Machine Learning</span>
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">Data Analysis</span>
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">Business Intelligence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
