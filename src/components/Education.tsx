import React from 'react'

const Education = () => {
  const education = [
    {
      degree: 'B.Tech (Computer Science)',
      institution: 'Radharaman Engineering College',
      year: '2024',
      cgpa: '7.6',
      description: 'Focused on software engineering, Web Development, and modern web technologies.'
    },
    {
      degree: '12th',
      institution: 'Vidya Bharti Higher Secondary School',
      year: '2020',
      cgpa: '63',
      description: 'Passed with 63% in 12th board exam.'
    },
    {
      degree: '10th',
      institution: 'Vidya Bharti Higher Secondary School',
      year: '2018',
      cgpa: '82',
      description: 'Passed with 82% CGPA in 10th board exam.'
    },
  ]

  const certifications = [
    {
      title: 'Web Development Certificate',
      provider: 'Edureka',
      year: '2023',
      description: 'Comprehensive web development course covering full-stack technologies and best practices.'
    }
  ]

  const experience = [
    {
      title: 'Learning & Development',
      description: 'Continuously learning through YouTube tutorials, GitHub projects, and official documentation to stay updated with latest technologies.',
      highlights: ['Open Source Contributions', 'Personal Projects', 'Tech Community Participation']
    },
    {
      title: 'Collaborative Projects',
      description: 'Experience working on team projects during college and personal initiatives, developing strong collaboration and communication skills.',
      highlights: ['Team Leadership', 'Code Reviews', 'Agile Methodologies']
    }
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education & Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education & Certifications */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow">
                  <span className="text-white text-lg">🎓</span>
                </div>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white/90 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{edu.degree}</h4>
                      <span className="text-blue-600 dark:text-blue-400 font-medium mt-2 md:mt-0">CGPA: {edu.cgpa}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
                      <span className="text-gray-500 dark:text-gray-400">{edu.year}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-9 h-9 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow">
                  <span className="text-white text-lg">📜</span>
                </div>
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white/90 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{cert.title}</h4>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-gray-700 dark:text-gray-300">{cert.provider}</span>
                      <span className="text-gray-500 dark:text-gray-400">{cert.year}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Experience & Learning */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow">
                <span className="text-white text-lg">💼</span>
              </div>
              Experience & Learning
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-white/90 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{exp.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
              <h4 className="text-lg font-semibold mb-3">Learning Resources</h4>
              <p className="mb-4 opacity-90 text-sm">
                I believe in continuous learning and regularly engage with various resources to enhance my skills.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-2">📺</div>
                  <span className="text-sm">YouTube</span>
                </div>
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-2">📚</div>
                  <span className="text-sm">Documentation</span>
                </div>
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-2">💻</div>
                  <span className="text-sm">GitHub</span>
                </div>
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <span className="text-sm">Practice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education