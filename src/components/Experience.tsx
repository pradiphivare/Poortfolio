import React from 'react';

const experiences = [
  {
    title: 'Senior DevOps Engineer',
    company: 'Tech Corp',
    period: '2022 - Present',
    description: 'Led cloud infrastructure management and implemented automated CI/CD pipelines.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Innovation Labs',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple web applications using React and Node.js.',
  },
  {
    title: 'DevOps Engineer',
    company: 'Cloud Solutions Inc',
    period: '2018 - 2020',
    description: 'Managed AWS infrastructure and implemented monitoring solutions.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200" />
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="w-1/2" />
                <div className="w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 rounded-full border-4 border-blue-400 bg-white" />
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-500 font-semibold">{exp.company}</p>
                    <p className="text-gray-600 mb-2">{exp.period}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}