
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "PyGuide: Intelligent Python Lab Assistant",
    description: "Developed an AI-driven assistant providing real-time guidance for Python programming, improving learning outcomes for students.",
    image: "/project-pyguide.png",
    tags: ["Python", "PyQt5", "Machine Learning", "NLP"],
    link: "https://github.com",
    type: "Dissertation Project"
  },
  {
    title: "fNIRS Data Vault",
    description: "Led implementation of a data vault for functional near-infrared spectroscopy datasets, improving storage and retrieval efficiency by 45%.",
    image: "/project-fnirs.png", 
    tags: ["SQL", "Python", "Data Modeling", "Tableau"],
    link: "https://github.com",
    type: "Research Project"
  },
  {
    title: "Customer Churn Prediction Model",
    description: "Developed a machine learning model to predict customer churn with 87% accuracy, enabling proactive retention strategies for a telecom company.",
    image: "/project-database.png",
    tags: ["Python", "Scikit-learn", "Pandas", "Random Forest"],
    link: "https://github.com",
    type: "Data Science Project"
  },
  {
    title: "Sales Dashboard with Power BI",
    description: "Created interactive Power BI dashboards to visualize sales data across regions, products, and time periods with drill-down capabilities.",
    image: "/data-grid-bg.png",
    tags: ["Power BI", "DAX", "Data Visualization", "ETL"],
    link: "https://github.com",
    type: "Analytics Project"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my data science and analytics projects, demonstrating my technical expertise and problem-solving skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border bg-white shadow-md card-hover">
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant="outline" className="mb-2 bg-primary/10 text-primary">
                      {project.type}
                    </Badge>
                    <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-gray-600 mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t bg-gray-50 flex justify-between">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary flex items-center hover:underline"
                >
                  <Github size={16} className="mr-1" />
                  View Code
                </a>
                <a 
                  href="#" 
                  className="text-sm text-primary flex items-center hover:underline"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
