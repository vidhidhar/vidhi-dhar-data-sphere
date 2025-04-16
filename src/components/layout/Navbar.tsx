
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-xl font-display font-bold gradient-text">Vidhi Dhar</span>
              <span className="hidden sm:inline-block ml-2 px-2 py-1 text-xs bg-gradient-to-r from-datasphere-blue to-datasphere-purple text-white rounded-md">
                Data Scientist
              </span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#about" className="nav-link">About</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
              <Linkedin size={18} />
            </a>
            <Button variant="default" size="sm">
              <Mail size={16} className="mr-2" /> Get In Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-primary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="px-4 pt-2 pb-4 space-y-1 flex flex-col">
            <a href="#about" className="nav-link py-3 text-base" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#experience" className="nav-link py-3 text-base" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
            <a href="#skills" className="nav-link py-3 text-base" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
            <a href="#projects" className="nav-link py-3 text-base" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" className="nav-link py-3 text-base" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="mailto:vidhidhar.vd@gmail.com" className="text-gray-600 hover:text-primary">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
