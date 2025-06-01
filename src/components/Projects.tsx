import { useState } from 'react';

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
      summary: 'Offline customizable games that can be personalized for the user\'s preferences.',
      link: 'https://github.com/VedashreeD/GAMES',
    },
    {
      title: 'ResNet50-PyTorch',
      description: 'ResNet50 model implementation in PyTorch',
      techStack: ['Python', 'PyTorch', 'Deep Learning'],
      summary: 'An implementation of the ResNet50 model in PyTorch, showcasing the architecture and training process.',
      link: 'https://github.com/OpenGenus/ResNet50-PyTorch',
    },
    {
      title: 'CNN-pytorch',
      description: 'CNN model implementation in PyTorch',
      techStack: ['Python', 'PyTorch', 'Deep Learning'],
      summary: 'An implementation of a Convolutional Neural Network (CNN) in PyTorch, demonstrating the architecture and training process.',
      link: 'https://github.com/OpenGenus/CNN-pytorch',
    },
    {
      title: 'Data-structures-and-algorithms',
      description: 'Data structures and algorithms in C++',
      techStack: ['C++', 'Algorithms'],
      summary: 'A collection of data structures and algorithms implemented in C++, showcasing various techniques and optimizations.',
      link: 'https://github.com/VedashreeD/Data-structures-and-algorithms'
    },
    {
      title: 'Drawn2Code',
      description: 'A proof-of-concept web app to convert hand-drawn sketches into code',
      techStack: ['Python', 'Ollama', 'Javascript'],
      summary: 'Convert hand-drawn sketches into code using multi-modal ollama models.',
      link: 'https://github.com/VedashreeD/Drawn2Code'
    },
    {
      title: 'FinPal',
      description: 'Finance management application.',
      techStack: ['React', 'Node.js'],
      summary: 'A web application to manage personal finances effectively.',
      link: 'https://github.com/VedashreeD/FinPal'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest work across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                <p className="text-gray-500 dark:text-gray-300 mb-6 text-sm line-clamp-3">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-gray-800 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;