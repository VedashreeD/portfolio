import React from 'react';
import '../styles/styles.css';

const Projects = () => {
  const projects = [
    {
      title: 'Data-Integration-Challenge',
      description: 'Classification-model integration with 3-rd party API',
      techStack: ['Python', 'FastAPI', 'Classification Models'],
      summary: 'The classification model curates trends based on current local weather using TF-IDF and Naive Bayes classification.',
      link: 'https://github.com/VedashreeD/data-integration-challenge',
    },
    {
      title: 'Games',
      description: 'Games for all!',
      techStack: ['C++', 'QtDesign', 'Offline Games'],
      summary: 'Offline customizable games that can be personalized for the user’s preferences.',
      link: 'https://github.com/VedashreeD/GAMES',
    },
    {
      title: 'ResNet50-PyTorch',
      description:'ResNet50 model implementation in PyTorch',
      techStack: ['Python', 'PyTorch', 'Deep Learning'],
      summary: 'An implementation of the ResNet50 model in PyTorch, showcasing the architecture and training process.',
      link: 'https://github.com/OpenGenus/ResNet50-PyTorch',
    },
    {
      title: 'CNN-pytorch',
      description:'CNN model implementation in PyTorch',
      techStack: ['Python', 'PyTorch', 'Deep Learning'],
      summary: 'An implementation of a Convolutional Neural Network (CNN) in PyTorch, demonstrating the architecture and training process.',
      link: 'https://github.com/OpenGenus/CNN-pytorch',
    },
    {
      title: 'Data-structures-and-algorithms',
      description:'Data structures and algorithms in C++',
      techStack: ['C++', 'Algorithms'],
      summary: 'A collection of data structures and algorithms implemented in C++, showcasing various techniques and optimizations.',
      link: 'https://github.com/VedashreeD/Data-structures-and-algorithms'
    },
    {
      title: 'Drawn2Code',
      description:'A web app to convert hand-drawn sketches into code',
      techStack: ['Python', 'Ollama', 'Javascript'],
      summary: 'Convert hand-drawn sketches into code using multi-modal ollama models.',
      link: 'https://github.com/VedashreeD/Drawn2Code'
    
    }
  ];

  return (
    <div className="projects-section">
      {/* Content */}
      <div className="content">
        <h2 className="header-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-title"
              >
                {project.title}
              </a>
              <p className="project-description">{project.summary}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span className={`tech-tag ${tech.replace(/\s+/g, '')}`} key={i}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
