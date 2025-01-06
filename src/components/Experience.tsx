import React from 'react';

const experiences = [
  {
    title: 'Engineer',
    company: 'Tata-Elxsi',
    period: 'Dec 2023 – Current',
    description: (
      <ul className="list-disc pl-5">
        <li>
          Automated infrastructure provisioning using <strong>Terraform</strong> and <strong>Ansible</strong>, improving scalability and reliability.
        </li>
        <li>
          Engineered robust CI/CD workflows with <strong>Jenkins</strong> and <strong>GitHub Actions</strong>, reducing release cycles by 30 hours monthly and enhancing iteration speed for critical features.
        </li>
        <li>
          Led migration to advanced observability tools like <strong>Grafana Cloud</strong> and <strong>VictoriaMetrics</strong>, ensuring high availability and optimized incident response.
        </li>
        <li>
          Migrated monitoring workloads from <strong>Prometheus</strong> to <strong>VictoriaMetrics</strong>, improving performance and storage efficiency for high-cardinality metrics.
        </li>
        <li>
          Reduced 30-50 support tickets monthly through proactive monitoring and alerting integrations across cloud applications.
        </li>
      </ul>
    ),
  },
  {
    title: 'DevOps Engineer',
    company: 'NoZanzat',
    period: 'July 2022 – Sep 2023',
    description: (
      <ul className="list-disc pl-5">
        <li>
          Focused on <strong>Web Development</strong> and <strong>DevOps Foundation</strong>, bridging development and operational workflows.
        </li>
        <li>
          Designed and implemented CI/CD pipelines using <strong>Jenkins</strong>, accelerating deployment speed by 40%.
        </li>
        <li>
          Automated cloud infrastructure provisioning in <strong>AWS</strong> using <strong>Terraform</strong> and <strong>CloudFormation</strong>, reducing manual errors and improving scalability.
        </li>
        <li>
          Enabled seamless setup of virtual machines and databases through automated workflows, achieving 70% process automation.
        </li>
        <li>
          Optimized the software development lifecycle (SDLC) by collaborating with development teams to automate testing and environment provisioning, reducing bottlenecks.
        </li>
      </ul>
    ),
  },
  {
    title: 'Intern - Full Stack Developer',
    company: 'Startup Hub',
    period: 'Jan 2022 – June 2022',
    description: (
      <ul className="list-disc pl-5">
        <li>
          Contributed to building interactive <strong>web interfaces</strong> using modern front-end frameworks.
        </li>
        <li>
          Developed scalable backend services, enhancing the overall system performance and user experience.
        </li>
        <li>
          Gained foundational knowledge in full-stack development and deployment processes, paving the way for future roles in DevOps and automation.
        </li>
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
                  <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-blue-500 font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 mb-2">{exp.period}</p>
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
