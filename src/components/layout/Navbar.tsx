
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

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
            <ScrollLink to="hero" spy={true} smooth={true} offset={-70} duration={500} className="flex items-center cursor-pointer">
              <span className="text-xl font-display font-bold gradient-text">Vidhi Dhar</span>
              <span className="hidden sm:inline-block ml-2 px-2 py-1 text-xs bg-gradient-to-r from-datasphere-blue to-datasphere-purple text-white rounded-md">
                Data Scientist
              </span>
            </ScrollLink>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link cursor-pointer">About</ScrollLink>
              <ScrollLink to="experience" spy={true} smooth={true} offset={-70} duration={500} className="nav-link cursor-pointer">Experience</ScrollLink>
              <ScrollLink to="skills" spy={true} smooth={true} offset={-70} duration={500} className="nav-link cursor-pointer">Skills</ScrollLink>
              <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-link cursor-pointer">Projects</ScrollLink>
              <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link cursor-pointer">Contact</ScrollLink>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a href="https://github.com/vidhidhar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/vidhidhar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
              <Linkedin size={18} />
            </a>
            <Button variant="default" size="sm" onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
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
            <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link py-3 text-base cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>About</ScrollLink>
            <ScrollLink to="experience" spy={true} smooth={true} offset={-70} duration={500} className="nav-link py-3 text-base cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Experience</ScrollLink>
            <ScrollLink to="skills" spy={true} smooth={true} offset={-70} duration={500} className="nav-link py-3 text-base cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Skills</ScrollLink>
            <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-link py-3 text-base cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Projects</ScrollLink>
            <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link py-3 text-base cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Contact</ScrollLink>
            
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://github.com/vidhidhar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/vidhidhar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
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
