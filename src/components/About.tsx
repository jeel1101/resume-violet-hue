
import { Mail, MapPin, Linkedin, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title mb-12 text-center mx-auto">About Me</h2>
          
          <div className="card-glass rounded-xl p-8 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <p className="text-gray-700 mb-6">
              I am an aspiring Data Scientist and Machine Learning enthusiast currently pursuing my Bachelor's degree in Computer Science and Engineering with a specialization in Data Science. With a passion for extracting meaningful insights from complex datasets, I'm dedicated to developing my skills in machine learning, deep learning, and big data analytics.
            </p>
            <p className="text-gray-700">
              My goal is to leverage data-driven approaches to solve real-world problems across various domains. I'm continuously expanding my knowledge and practical experience to become a proficient data scientist capable of building innovative predictive models and analytics solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-animation">
            <div className="card-glass rounded-xl p-6 flex items-center">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                <MapPin className="text-violet-700" size={20} />
              </div>
              <div>
                <h3 className="text-sm text-gray-500 font-medium">Location</h3>
                <p className="text-gray-700">Anand, IN 388121</p>
              </div>
            </div>
            
            <div className="card-glass rounded-xl p-6 flex items-center">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                <Mail className="text-violet-700" size={20} />
              </div>
              <div>
                <h3 className="text-sm text-gray-500 font-medium">Email</h3>
                <a href="mailto:jeelp12005@gmail.com" className="text-gray-700 hover:text-violet-700 transition-colors">
                  jeelp12005@gmail.com
                </a>
              </div>
            </div>
            
            <div className="card-glass rounded-xl p-6 flex items-center">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                <Phone className="text-violet-700" size={20} />
              </div>
              <div>
                <h3 className="text-sm text-gray-500 font-medium">Phone</h3>
                <a href="tel:9313464150" className="text-gray-700 hover:text-violet-700 transition-colors">
                  9313464150
                </a>
              </div>
            </div>
            
            <div className="card-glass rounded-xl p-6 flex items-center">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                <Linkedin className="text-violet-700" size={20} />
              </div>
              <div>
                <h3 className="text-sm text-gray-500 font-medium">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/jeet-patel-4799933233u" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-violet-700 transition-colors"
                >
                  jeet-patel-4799933233u
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
