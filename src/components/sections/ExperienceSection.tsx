
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Associate Data Analyst",
    company: "Victoria Solutions",
    location: "London, United Kingdom",
    period: "Feb 2025 - Present",
    responsibilities: [
      "Identified patterns and trends in large data sets and provided actionable insights.",
      "Developed and optimized SQL/Python scripts, reducing data extraction and processing time by 30% across 3+ data sources.",
      "Designed and maintained 5+ interactive dashboards in Tableau/Power BI, enabling real-time tracking of key business metrics.",
      "Analyzed data to identify root causes of problems and recommend corrective actions.",
      "Implemented business intelligence solutions to increase operational efficiency.",
      "Generated standard and custom reports to provide insights into business performance."
    ]
  },
  {
    title: "Data Analyst",
    company: "Publicis Media",
    location: "Gurugram, India",
    period: "Feb 2021 - Sep 2022",
    responsibilities: [
      "Analyzed 1M+ rows of data to uncover trends, patterns, and hidden insights.",
      "Designed data pipelines that reduced data processing time by 40%, improving availability and accuracy across 4+ departments.",
      "Deployed predictive models (e.g., regression, classification) that achieved up to 90% accuracy in forecasting customer behavior.",
      "Applied statistical techniques to generate business reports that influenced quarterly planning and resource allocation.",
      "Communicated insights using data storytelling to deliver actionable findings to stakeholders with varying technical expertise.",
      "Built and maintained 10+ interactive dashboards in Tableau/Power BI to monitor KPIs, leading to a 25% reduction in reporting time."
    ]
  },
  {
    title: "Media Analyst - Programmatic Hub",
    company: "Publicis Media",
    location: "Gurugram, India",
    period: "Sep 2020 - Feb 2021",
    responsibilities: [
      "Produced monthly reports using advanced Excel spreadsheet functions.",
      "Strategized campaigns for clients, helping to meet goals and reach untapped potential customers.",
      "Assessed paid media analytics against KPIs using Google Analytics, internal and agency reporting.",
      "Presented findings to key stakeholders.",
      "Identified target audiences to analyze characteristics, behavior, and media habits."
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in the world of data analytics and visualization.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/30 ml-3 pl-8 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="timeline-dot"></div>
                <Card className="border bg-white/80 backdrop-blur-sm shadow-sm card-hover">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 mb-2 rounded-full bg-primary/10 text-primary text-sm">
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-1">
                        <span className="flex items-center">
                          <Briefcase size={14} className="mr-1" /> {exp.company}
                        </span>
                        <span className="flex items-center">
                          <MapPin size={14} className="mr-1" /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 text-gray-600">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
