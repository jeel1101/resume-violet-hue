
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Find the active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'certifications', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold text-violet-800 hover:text-violet-600 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Jeel Patel
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'experience', label: 'Experience' },
            { id: 'education', label: 'Education' },
            { id: 'certifications', label: 'Certifications' },
            { id: 'contact', label: 'Contact' }
          ].map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "nav-link",
                activeSection === item.id && "active"
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
          <div className="p-2">
            <span className="block w-6 h-0.5 bg-violet-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-violet-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-violet-800"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
