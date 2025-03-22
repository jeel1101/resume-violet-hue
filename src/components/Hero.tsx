
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_#8b5cf6_0%,transparent_30%)]"
        style={{ opacity: 0.6 }}
      ></div>
      
      <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-2/3 stagger-animation">
          <div className="inline-block mb-2 px-3 py-1 bg-violet-100 text-violet-800 rounded-full font-medium animate-fade-in-up">
            Aspiring Data Scientist
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Hi, I'm <span className="text-violet-700">Jeel Patel</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-xl">
            Machine Learning Enthusiast | Data Analytics
          </p>
          <p className="text-gray-600 mb-8 max-w-xl">
            Passionate about uncovering insights from data and building predictive models.
            Skilled in Python, SQL, and data visualization tools. Currently learning machine
            learning, deep learning, and big data analytics. Excited to apply data-driven
            solutions to real-world problems.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-violet-700 text-white rounded-lg hover:bg-violet-800 transition-colors shadow-lg hover:shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </a>
            <a 
              href="#skills" 
              className="px-6 py-3 border-2 border-violet-600 text-violet-700 rounded-lg hover:bg-violet-50 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Skills
            </a>
          </div>
        </div>
        
        <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-violet-600 rounded-2xl rotate-6 opacity-20"></div>
            <div className="absolute inset-0 bg-violet-600 rounded-2xl -rotate-6 opacity-20"></div>
            <img 
              src="/lovable-uploads/0345f4d0-5e4e-4bd1-8ca7-0580a8beed5c.png" 
              alt="Jeel Patel" 
              className="w-64 h-64 object-cover rounded-2xl shadow-xl z-10 relative animate-fade-in"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse cursor-pointer" onClick={scrollToAbout}>
        <ArrowDown className="text-violet-700" size={30} />
      </div>
    </section>
  );
};

export default Hero;
