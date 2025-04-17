import React, { useEffect, useRef } from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, ResponsiveContainer, 
  Cell, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const technicalSkills = [
  { name: "Python", value: 90 },
  { name: "SQL (MySQL, PostgreSQL)", value: 95 },
  { name: "Tableau", value: 85 },
  { name: "Power BI", value: 80 },
  { name: "Excel", value: 90 },
  { name: "ETL", value: 75 },
  { name: "Machine Learning", value: 70 },
  { name: "Statistical Analysis", value: 85 },
  { name: "Data Visualization", value: 95 },
];

const softSkills = [
  { name: "Problem Solving", value: 45 },
  { name: "Communication", value: 32 },
  { name: "Collaboration", value: 25 },
  { name: "Stakeholder Management", value: 20 },
  { name: "Project Management", value: 18 },
];

const toolExperience = [
  { name: "Python", value: 70, color: "#3B82F6" },
  { name: "SQL", value: 85, color: "#8B5CF6" },
  { name: "Tableau", value: 65, color: "#06B6D4" },
  { name: "Power BI", value: 60, color: "#2DD4BF" },
  { name: "Excel", value: 75, color: "#6366F1" },
];

const projectsData = [
  { name: "Data Analysis", value: 40 },
  { name: "Machine Learning", value: 25 },
  { name: "Data Visualization", value: 20 },
  { name: "ETL", value: 15 }
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
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      
      chartRefs.current.forEach(ref => {
        if (ref) {
          ref.style.opacity = '1';
          ref.classList.add('animate-fade-in');
        }
      });
    }, 500);
    
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
            and visualization techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div 
            className="space-y-6" 
            ref={el => chartRefs.current[0] = el}
            style={{ opacity: 1 }}
          >
            <h3 className="text-2xl font-display font-semibold">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-gray-500">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div 
            ref={el => chartRefs.current[1] = el}
            style={{ opacity: 1 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-6">Tools Experience</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={toolExperience}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip formatter={(value) => [`${value}%`, 'Proficiency']} />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                    {toolExperience.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            ref={el => chartRefs.current[2] = el}
            style={{ opacity: 1 }}
          >
            <Card className="border bg-gray-50 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold mb-6">Project Distribution</h3>
                <div className="h-[280px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={projectsData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {projectsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Projects']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div 
            ref={el => chartRefs.current[3] = el}
            style={{ opacity: 1 }}
          >
            <Card className="border bg-gray-50 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold mb-6">Professional Skills Growth</h3>
                <div className="h-[280px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={softSkills}
                      margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value} pts`, 'Skill Level']} />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        dot={{ stroke: '#8B5CF6', strokeWidth: 2, r: 4, fill: 'white' }}
                        activeDot={{ r: 6, fill: '#8B5CF6' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
