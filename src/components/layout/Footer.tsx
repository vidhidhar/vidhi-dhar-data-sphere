
import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold gradient-text">Vidhi Dhar</h3>
            <p className="text-gray-600 max-w-xs">
              Data professional with experience in Python, SQL, and data visualization, 
              translating complex data into actionable insights.
            </p>
            <div className="flex items-center space-x-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Linkedin size={18} />
              </a>
              <a href="mailto:vidhidhar.vd@gmail.com" className="text-gray-600 hover:text-primary">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-display font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-primary">About</a></li>
              <li><a href="#experience" className="text-gray-600 hover:text-primary">Experience</a></li>
              <li><a href="#skills" className="text-gray-600 hover:text-primary">Skills</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-primary">Projects</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-display font-semibold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail size={16} className="mt-1 mr-2 text-datasphere-blue" />
                <span className="text-gray-600">vidhidhar.vd@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-2 text-datasphere-blue" />
                <span className="text-gray-600">Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Vidhi Dhar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
