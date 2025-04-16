
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "PyGuide: Intelligent Python Lab Assistant",
    description: "AI-driven assistant that provides real-time guidance for Python programming, improving learning outcomes and programming experience.",
    image: "/project-pyguide.png",
    technologies: ["Python", "PyQt5", "NLP", "Machine Learning"],
    link: "#",
    github: "#",
    highlights: [
      "Developed an AI-driven assistant for Python programming guidance",
      "Built a user-friendly interface using PyQt5",
      "Applied advanced AI methodologies for complex programming challenges",
      "Received high user ratings for ease of use and accuracy"
    ]
  },
  {
    id: 2,
    title: "Data Vault Implementation for fNIRS",
    description: "Implementation of a data vault architecture for functional Near-Infrared Spectroscopy (fNIRS) datasets, enhancing storage and retrieval efficiency.",
    image: "/project-fnirs.png",
    technologies: ["SQL", "Python", "Tableau", "Data Modeling"],
    link: "#",
    github: "#",
    highlights: [
      "Led implementation of a data vault for fNIRS datasets",
      "Improved storage and retrieval efficiency using SQL and Python",
      "Created visualizations with Tableau to enhance data processing",
      "Optimized neuroimaging studies workflow"
    ]
  },
  {
    id: 3,
    title: "Database Management with PostgreSQL & Git",
    description: "Comprehensive project focusing on database management using PostgreSQL and version control with Git for efficient collaborative development.",
    image: "/project-database.png",
    technologies: ["PostgreSQL", "Git", "Bash", "Database Design"],
    link: "#",
    github: "#",
    highlights: [
      "Developed scripts in bash to automate repetitive tasks",
      "Created and managed relational databases in PostgreSQL",
      "Designed schemas and wrote complex queries",
      "Used Git for version control in team collaboration"
    ]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing my expertise through real-world data science and analytics projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="border overflow-hidden card-hover animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <p key={i} className="text-sm text-gray-600 flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </p>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between items-center">
                <a 
                  href={project.github}
                  className="text-gray-600 hover:text-primary inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} className="mr-1" />
                  <span className="text-sm">View code</span>
                </a>
                <a 
                  href={project.link}
                  className="text-primary font-medium inline-flex items-center hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-sm">View project</span>
                  <ArrowUpRight size={16} className="ml-1" />
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
