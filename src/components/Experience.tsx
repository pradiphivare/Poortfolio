import React from 'react';

const experiences = [
  {
    title: 'Engineer',
    company: 'Tata-Elxsi',
    period: 'Dec 2023 – Current',
    description:
      'Automated infrastructure provisioning with Terraform and Ansible, enhanced CI/CD workflows, and migrated monitoring stacks to advanced observability tools like Grafana Cloud and VictoriaMetrics.',
  },
  {
    title: 'DevOps Engineer',
    company: 'NoZanzat',
    period: 'July 2022 – Sep 2023',
    description:
      'Designed and implemented CI/CD pipelines, managed AWS infrastructure, and automated provisioning workflows with Terraform and Ansible, reducing deployment time and configuration errors.',
  },
  {
    title: 'Intern - Full Stack Developer',
    company: 'Startup Hub',
    period: 'jan 2022  – june 2021',
    description:
      'Contributed to developing interactive web interfaces and backend services, laying the foundation for a career in development and DevOps.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-700">
          Experience
        </h2>
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
                <div className="w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 rounded-fu
                ll border-4 border-blue-400 bg-white" />
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-blue-500 font-semibold">
                      {exp.company}
                    </p>
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
