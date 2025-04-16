
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Master of Science - Data Science",
    institution: "University of Birmingham",
    location: "Birmingham, UK",
    period: "Sept 2022 - Sept 2024",
    gpa: "8.4/10"
  },
  {
    degree: "Bachelor of Technology - Information Technology",
    institution: "Amity University",
    location: "Noida, India",
    period: "July 2016 - July 2020",
    gpa: "7.9/10"
  }
];

const certificates = [
  {
    name: "Power BI Data Analyst Associate",
    issuer: "Microsoft",
    status: "(on-going)"
  },
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco",
    status: ""
  },
  {
    name: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    status: ""
  },
  {
    name: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Google",
    status: ""
  }
];

const EducationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic background and professional certifications that have shaped my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Academic Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border bg-white shadow-sm card-hover">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <p className="text-primary font-medium mt-1">{edu.institution}</p>
                    <div className="flex flex-wrap mt-2 gap-x-4 gap-y-2 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" /> {edu.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1" /> {edu.location}
                      </span>
                      <span className="flex items-center">
                        <Award size={14} className="mr-1" /> GPA: {edu.gpa}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Professional Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <Card key={index} className="border bg-gray-50 card-hover">
                  <CardContent className="p-4">
                    <div className="flex flex-col">
                      <h4 className="font-medium">{cert.name}</h4>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-gray-500">
                          {cert.issuer}
                        </span>
                        {cert.status && (
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {cert.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
