
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const dataSphereRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!dataSphereRef.current) return;
    
    const container = dataSphereRef.current;
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    
    // Create data nodes and connections
    for (let i = 0; i < 20; i++) {
      // Create data node
      const node = document.createElement('div');
      node.className = 'data-node';
      
      // Random position
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 180 + 30;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      
      // Set size and position
      const size = Math.random() * 10 + 5;
      node.style.width = `${size}px`;
      node.style.height = `${size}px`;
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.style.animationDelay = `${Math.random() * 2}s`;
      
      // Add node to container
      container.appendChild(node);
      
      // Create 1-3 connections from this node
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionCount; j++) {
        // Connect to another random position
        const connectionAngle = Math.random() * Math.PI * 2;
        const connectionDistance = Math.random() * 100 + 50;
        const x2 = x + Math.cos(connectionAngle) * connectionDistance;
        const y2 = y + Math.sin(connectionAngle) * connectionDistance;
        
        // Calculate line length and angle
        const dx = x2 - x;
        const dy = y2 - y;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        // Create connection element
        const connection = document.createElement('div');
        connection.className = 'data-connection';
        connection.style.width = `${length}px`;
        connection.style.left = `${x}px`;
        connection.style.top = `${y + size / 2}px`;
        connection.style.transform = `rotate(${angle}deg)`;
        
        // Add connection to container
        container.appendChild(connection);
      }
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background to-gray-50">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              Data Scientist & Analyst
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Vidhi Dhar</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Transforming complex data into actionable insights through Python, SQL, and visualization tools. 
              Let's turn your data challenges into opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">View My Work</Button>
              <Button size="lg" variant="outline">
                <a href="/vidhi-dhar-resume.pdf" download className="flex items-center">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in-slow">
            <div className="data-sphere-container mx-auto" ref={dataSphereRef}></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
