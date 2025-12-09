import React from 'react';

export default function About() {
  const skills = [
    'Python', 'Java', 'C/C++', 'JavaScript', 'HTML/CSS',
    'MySQL', 'MongoDB', 'SQLite', 'Docker', 'Git',
    'FastAPI', 'Streamlit', 'REST APIs', 'Linux'
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="block">Hi, I'm</span>
          <span className="text-green-400 block mt-2">Vinayak Santhosh</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          MCA Student · Security Intelligence · Software Developer
        </p>
      </div>

      {/* Bio */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-green-400">About Me</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Final-year MCA student specializing in cybersecurity and software development. 
              Experienced in building end-to-end applications including security intelligence 
              platforms, machine learning systems, and database-driven applications.
            </p>
            <p>
              Skilled in Python, vulnerability assessment, and containerization with a focus 
              on automated threat detection and affordable security solutions for SMEs.
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6 text-green-400">Education</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-green-400 pl-4">
              <h3 className="font-bold text-lg">Master of Computer Applications (MCA)</h3>
              <p className="text-gray-400 text-sm">Rajiv Gandhi Institute of Technology</p>
              <p className="text-gray-500 text-sm">2024–2026 · SGPA 7.41</p>
            </div>
            <div className="border-l-2 border-green-400 pl-4">
              <h3 className="font-bold text-lg">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-gray-400 text-sm">BVM College, Cherpunkal</p>
              <p className="text-gray-500 text-sm">2021–2024 · CGPA 7.2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-green-400 text-center">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-green-400 hover:text-black transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Links */}
      <div className="text-center">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://github.com/knaaps" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/vinayak-s-937b9126a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">
            LinkedIn
          </a>
          <a href="mailto:vinayak4x@gmail.com" className="text-gray-400 hover:text-green-400">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}