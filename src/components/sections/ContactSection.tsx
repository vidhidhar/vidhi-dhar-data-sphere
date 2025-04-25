
import React from 'react';
import { Mail, MapPin, Github, Linkedin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Information</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for any opportunities or collaborations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email Address</h4>
                <p className="text-gray-600 mt-1">
                  <a href="mailto:vidhidhar.vd@gmail.com" className="hover:text-primary">
                    vidhidhar.vd@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-600 mt-1">Delhi, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-600 mt-1">
                  <a href="tel:+919654947654" className="hover:text-primary">
                    +91 9654947654
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
