
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  LineChart, BarChart, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, Bar, ResponsiveContainer
} from 'recharts';

// Updated technical skills based on the resume
const technicalSkills = [
  { name: "Python", value: 90 },
  { name: "SQL", value: 85 },
  { name: "Tableau", value: 85 },
  { name: "Power BI", value: 80 },
  { name: "Excel", value: 90 },
  { name: "ETL", value: 80 },
  { name: "Machine Learning", value: 75 },
  { name: "Statistical Analysis", value: 85 },
  { name: "Data Visualization", value: 90 },
];

// Updated tool experience to match resume
const toolExperience = [
  { name: "Python", years: 2, color: "#3B82F6" },
  { name: "SQL", years: 2, color: "#8B5CF6" },
  { name: "Tableau", years: 2, color: "#06B6D4" },
  { name: "Power BI", years: 2, color: "#2DD4BF" },
  { name: "Excel", years: 2, color: "#6366F1" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Detail-oriented Data Analyst with expertise in Python, SQL, and data visualization tools. 
            Skilled in analyzing complex data sets and translating insights into actionable business strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-semibold mb-6">Technical Proficiency</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={technicalSkills}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8B5CF6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-semibold mb-6">Additional Skills</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Data Warehousing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Predictive Analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Statistical Analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Data Collection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Problem-Solving</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Collaboration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Data Visualization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>GitHub</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
