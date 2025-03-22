
import { useEffect, useRef } from 'react';

interface SkillProps {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
}

const Skill = ({ name, level }: SkillProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (progressRef.current) {
                progressRef.current.style.width = `${(level / 5) * 100}%`;
              }
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    
    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [level]);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{name}</span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full mx-0.5 ${
                index < level ? 'bg-violet-600' : 'bg-gray-200'
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="skill-bar">
        <div 
          ref={progressRef} 
          className="skill-progress" 
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title mb-12 text-center mx-auto">Skills</h2>
        
        <div 
          ref={skillsRef}
          className="max-w-3xl mx-auto opacity-0 transition-opacity duration-1000"
        >
          <div className="card-glass rounded-xl p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-violet-800 mb-6">Technical Skills</h3>
              <Skill name="Python" level={4} />
              <Skill name="Java" level={3} />
              <Skill name="Excel" level={4} />
              <Skill name="Power BI" level={5} />
              <Skill name="SQL" level={3} />
              <Skill name="Data Visualization" level={4} />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-violet-800 mb-6">Areas of Interest</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Machine Learning",
                  "Deep Learning",
                  "Data Analytics",
                  "Predictive Modeling",
                  "Big Data",
                  "Data Visualization",
                  "Statistical Analysis"
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium transition-transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
