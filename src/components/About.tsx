import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Hello! I'm Ayush Vishwakarma
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              A passionate MERN Stack Developer based in Bhopal, India. With a strong foundation in 
              modern web technologies, I specialize in creating full-stack applications that combine 
              beautiful user interfaces with robust backend systems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My journey in web development started with a curiosity about how websites work, 
              and has evolved into a deep passion for crafting digital experiences that make a difference. 
              I believe in writing clean, maintainable code and staying updated with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-400 break-all">ayushvishwakarmaa612@gmail.com</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Location
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Bhopal, India</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300">
                Clean Code Advocate
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors duration-300">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-medium hover:bg-cyan-200 dark:hover:bg-cyan-900/50 transition-colors duration-300">
                Continuous Learner
              </span>
            </div>
          </div>

          {/* Right Column - Image/Illustration */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-full shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 mx-auto mb-4">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        AV
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">MERN Stack Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
