import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      title: 'Exclusive E-Commerce App',
      description: 'Full-featured e-commerce platform with Razorpay payment integration, advanced search & filtering, shopping cart functionality, and responsive design.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Razorpay'],
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      liveLink: 'https://exclusive-786.netlify.app/',
      githubLink: 'https://github.com/ayush789815/ecommerce'
    },
    {
      title: 'Resume Builder App',
      description: 'Interactive resume builder with real-time preview, multiple templates, PDF export functionality, and user-friendly interface.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=300&fit=crop',
      liveLink: '#',
      githubLink: 'https://github.com/ayush789815'
    },
    {
      title: 'Real Estate Website',
      description: 'Modern real estate platform with property listings, advanced search filters, mobile-first responsive design, and interactive map integration.',
      tech: ['React', 'Vite', 'TailwindCSS'],
      category: 'Frontend',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop',
      liveLink: 'https://fabulous-daffodil-9cf19d.netlify.app/',
      githubLink: 'https://github.com/ayush789815/Osumare_frontend_task'
    },
    {
      title: 'Uber Clone',
      description: 'Ride-sharing application with Google Maps API integration, real-time location tracking, booking system, and driver-passenger matching.',
      tech: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=300&fit=crop',
      liveLink: '#',
      githubLink: 'https://github.com/ayush789815/uberFrontend'
    },
     {
      title: 'Asernity UI Animation Website',
      description: 'A modern animation website built with Next.js and Asernity UI, featuring smooth transitions and interactive UI components.',
      tech: ['Next.js', 'Asernity UI'],
      category: 'Frontend',
      image: 'https://images.unsplash.com/photo-1707524464813-78014aa12861?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFyayUyMGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
      liveLink: '#',
      githubLink: 'https://github.com/ayush789815/firstnext.jsproject'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium text-center hover:scale-105 transition-transform duration-300 shadow-md"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg font-medium text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/ayush789815"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            View More on GitHub
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
