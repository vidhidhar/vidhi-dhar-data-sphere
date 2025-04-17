
import React from 'react';
import { GraduationCap, Briefcase, Award, BarChart3, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Detail-oriented Data Analyst with 2+ years of experience specializing in Python, SQL, and data visualization tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold gradient-text">
                Transforming Data into Actionable Insights
              </h3>
              <p className="text-gray-600">
                I'm passionate about analyzing complex data sets, designing robust data models, 
                and optimizing data pipelines to support business goals. With a background in 
                Information Technology and a Master's in Data Science from the University of Birmingham, 
                I combine technical expertise with business acumen to deliver valuable insights.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gray-50 border-none card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium">2+ Years</h4>
                    <p className="text-sm text-gray-500">Professional Experience</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-50 border-none card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium">MSc Data Science</h4>
                    <p className="text-sm text-gray-500">University of Birmingham</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-50 border-none card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium">SQL & Python</h4>
                    <p className="text-sm text-gray-500">Technical Expertise</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-50 border-none card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium">Data Visualization</h4>
                    <p className="text-sm text-gray-500">Tableau & Power BI</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-datasphere-purple/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-datasphere-blue/20 rounded-full blur-3xl"></div>
            <img 
              src="./profile-image.png" 
              alt="Vidhi Dhar" 
              loading="eager"
              width="400"
              height="400"
              className="rounded-lg shadow-lg z-10 relative w-full max-w-md mx-auto"
              onError={(e) => {
                console.error(`Failed to load profile image`);
                e.currentTarget.src = "placeholder.svg"; // Fallback to placeholder
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
