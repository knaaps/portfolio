import React from 'react';
import { ExternalLink } from 'lucide-react'; // Using an icon from the dependencies listed in your package.json

export default function Projects() {
  const projects = [
    {
      title: 'Aegis-Lite: Security Intelligence Platform',
      description: 'Developed an automated security assessment platform for SMEs: architected a modular pipeline integrating security tools, built dual CLI and web interfaces, and containerized the application with Docker. Impact: Processed 50+ assessments, reducing manual analysis time by 70%.',
      tags: ['Python', 'Docker', 'Streamlit', 'ReportLab'],
      link: 'https://github.com/knaaps/aegis-lite'
    },
    {
      title: 'Job Recommendation System',
      description: 'Built a machine learning system matching job seekers with suitable positions using scikit-learn. Implemented classification models with feature extraction and text preprocessing. Created an interactive dashboard for visualizing results.',
      tags: ['Python', 'scikit-learn', 'Pandas', 'Django'],
      link: 'https://github.com/knaaps/job-recommender'
    },
    {
      title: 'Library Management System',
      description: 'Python CLI application with MySQL integration featuring CRUD operations and search functionality for efficient library management.',
      tags: ['Python', 'MySQL', 'CLI'],
      link: '#'
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <h2 className="text-4xl font-bold text-primary">Projects</h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 group shadow-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              {project.link !== '#' && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors ml-4"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              )}
            </div>
            <p className="text-muted mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="px-3 py-1 bg-border text-primary text-xs font-medium rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
