
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title mb-12 text-center mx-auto">Professional Experience</h2>
        
        <div className="max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-violet-200"></div>
            
            <div className="relative z-10 mb-8">
              <div className="flex items-center">
                <div className="bg-white w-9 h-9 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-violet-600" />
                </div>
                <div className="ml-6">
                  <span className="bg-violet-100 text-violet-800 text-xs font-medium px-3 py-1 rounded-full">Current</span>
                </div>
              </div>
              
              <div className="ml-14 mt-3">
                <div className="card-glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Intern</h3>
                  <p className="text-violet-700 mb-3">Data Science Enthusiast</p>
                  <p className="text-gray-600 mb-4">
                    Actively seeking internship opportunities in data science and analytics to apply my skills in Python, SQL, and data visualization, while gaining practical experience working with real-world datasets and business problems.
                  </p>
                  <div className="text-sm text-gray-500">
                    Skills developed: Python, Data Analysis, Machine Learning, Data Visualization
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 ml-4 pl-10 pb-8">
              <div className="bg-violet-100 rounded-lg p-4 border-l-4 border-violet-500 bg-opacity-70">
                <p className="text-gray-700 italic">
                  "I am eager to contribute my technical skills and passion for data science to an organization where I can gain valuable experience while solving meaningful problems through data-driven approaches."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
