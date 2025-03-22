
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-violet-400">Jeel Patel</h2>
            <p className="text-gray-400 mt-1">Aspiring Data Scientist</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="text-center md:text-right mb-4 md:mb-0 md:mr-8">
              <p className="text-gray-400">
                Made with <Heart className="inline-block text-violet-400" size={16} /> by Jeel Patel
              </p>
              <p className="text-gray-500 text-sm mt-1">
                &copy; {currentYear} All rights reserved
              </p>
            </div>
            
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/jeet-patel-4799933233u"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-violet-800 text-white rounded-full flex items-center justify-center hover:bg-violet-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="mailto:jeelp12005@gmail.com"
                className="w-9 h-9 bg-violet-800 text-white rounded-full flex items-center justify-center hover:bg-violet-700 transition-colors"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Expected graduation: 2028-04 | Bachelor of Technology in Computer Science And Engineering With Data Science
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
