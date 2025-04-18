
import React, { useEffect, useRef } from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, ResponsiveContainer, 
  Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// Updated data with more meaningful values and consistent scales
const technicalSkills = [
  { name: "Python", value: 90 },
  { name: "SQL", value: 85 },
  { name: "Tableau", value: 80 },
  { name: "Power BI", value: 75 },
  { name: "Excel", value: 90 },
  { name: "ETL", value: 70 },
  { name: "Machine Learning", value: 65 },
  { name: "Statistical Analysis", value: 80 },
  { name: "Data Visualization", value: 85 },
];

const projectExperience = [
  { name: "Data Analysis", value: 40 },
  { name: "Machine Learning", value: 25 },
  { name: "Data Visualization", value: 20 },
  { name: "ETL Pipelines", value: 15 }
];

// Updated with years of experience instead of arbitrary values
const toolExperience = [
  { name: "Python", value: 5, color: "#3B82F6" },
  { name: "SQL", value: 6, color: "#8B5CF6" },
  { name: "Tableau", value: 4, color: "#06B6D4" },
  { name: "Power BI", value: 3, color: "#2DD4BF" },
  { name: "Excel", value: 7, color: "#6366F1" },
];

// Updated to represent actual soft skill ratings (out of 100)
const softSkills = [
  { name: "Problem Solving", value: 90 },
  { name: "Communication", value: 85 },
  { name: "Collaboration", value: 80 },
  { name: "Stakeholder Management", value: 75 },
  { name: "Project Management", value: 70 },
];

const COLORS = ['#3B82F6', '#8B5CF6', '#06B6D4', '#2DD4BF', '#6366F1'];

const SkillsSection = () => {
  const chartRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .recharts-wrapper {
        width: 100% !important;
      }
      .animate-fade-in {
        animation: fadeIn 1s ease-in-out forwards;
        opacity: 1 !important;
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  useEffect(() => {
    // Trigger re-render of charts
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      
      chartRefs.current.forEach(ref => {
        if (ref) {
          ref.style.opacity = '1';
          ref.classList.add('animate-fade-in');
        }
      });
    }, 500);
    
    // Intersection observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
              window.dispatchEvent(new Event('resize'));
            }, 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    chartRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      chartRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional toolbox includes technical skills, data analysis methodologies, 
            and visualization techniques refined over years of experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-semibold mb-6">Technical Proficiency</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.value}%</span>
                    </div>
                    <Progress 
                      value={skill.value} 
                      className="h-2" 
                      style={{
                        background: 'linear-gradient(to right, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5))',
                      }}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-semibold mb-6">Years of Tool Experience</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={toolExperience}
                    margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Years', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => [`${value} years`, 'Experience']} />
                    <Legend />
                    <Bar dataKey="value" name="Years of Experience">
                      {toolExperience.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-semibold mb-6">Project Distribution</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={projectExperience}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {projectExperience.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Projects']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-display font-semibold mb-6">Soft Skills Assessment</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    outerRadius="80%" 
                    data={softSkills}
                  >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar 
                      name="Skills Level" 
                      dataKey="value" 
                      stroke="#8B5CF6" 
                      fill="#8B5CF6" 
                      fillOpacity={0.6} 
                    />
                    <Tooltip formatter={(value) => [`${value}%`, 'Proficiency']} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
