import React from 'react';
import comcastImage from '../assets/comcast.png';
import tataElxsiImage from '../assets/tata-elxsi.png';
import nozanzatImage from '../assets/nozanzat.png';

const experiences = [
  {
    title: 'DevOps, Observability & AIOps Engineer (On Deputation)',
    company: 'Comcast (via Tata Elxsi)',
    location: 'Remote / Pune, India',
    period: 'Sep 2023 – Present',
    companyImage: comcastImage,
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Transitioned from <strong>Prometheus</strong> to <strong>Victoria Metrics</strong>.</li>
        <li>Migrated observability stacks from <strong>Datadog</strong> to <strong>Grafana Cloud</strong>.</li>
        <li>Integrated observability with <strong>Slack</strong> and <strong>Istio</strong>.</li>
        <li>Automated dashboards using <strong>Grafana REST APIs</strong>.</li>
        <li>Built a <strong>Slack bot</strong> to automate <strong>Jira ticket creation</strong>.</li>
      </ul>
    ),
  },
  {
    title: 'Engineer',
    company: 'Tata Elxsi',
    location: 'Pune, India',
    period: 'Jul 2021 – Present',
    companyImage: tataElxsiImage,
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Provisioned infra using <strong>Terraform</strong> and <strong>Ansible</strong>.</li>
        <li>Managed CI/CD with <strong>Jenkins</strong> and <strong>GitHub Actions</strong>.</li>
        <li>Monitored workloads using <strong>Prometheus</strong> and <strong>Grafana</strong>.</li>
      </ul>
    ),
  },
  {
    title: 'Engineer',
    company: 'NoZanzat',
    location: 'Pune, India',
    period: 'Jul 2022 – Sep 2023',
    companyImage: nozanzatImage,
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Built CI/CD pipelines using <strong>Jenkins</strong>.</li>
        <li>Managed AWS infra with <strong>Terraform</strong>.</li>
        <li>Built backend services in <strong>Python</strong> and <strong>Go</strong>.</li>
      </ul>
    ),
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
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full z-0" />

          <div className="space-y-24 relative z-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 border-4 border-white rounded-full z-20" />

                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
                  <img
                    src={exp.companyImage}
                    alt={exp.company}
                    className="w-64 h-40 object-cover rounded-xl shadow-2xl transform hover:scale-105 hover:rotate-1 transition duration-500 ease-in-out"
                  />
                </div>

                {/* Text Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                    <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-500 font-semibold">{exp.company}</p>
                    {exp.period && (
                      <p className="text-sm text-gray-500 mb-1">{exp.period}</p>
                    )}
                    {exp.location && (
                      <p className="text-sm text-gray-400 italic mb-2">{exp.location}</p>
                    )}
                    <div className="text-gray-700">{exp.description}</div>
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
