import React from 'react';

const experiences = [
  {
    title: 'Engineer',
    company: 'Tata-Elxsi',
    period: 'Dec 2023 – Current',
    location: 'Pune, India',
    description: (
      <ul className="list-disc pl-5">
        <li>
          Automated infrastructure provisioning and management using <strong>Terraform</strong> and <strong>Ansible</strong>, improving system scalability and reliability.
        </li>
        <li>
          Engineered robust CI/CD workflows with <strong>Jenkins</strong> and <strong>GitHub Actions</strong>; these improvements decreased release cycle duration by 30 hours monthly, allowing for quicker iteration on critical features impacting user experience.
        </li>
        <li>
          Led Migration and Proactive Monitoring: Managed the migration of monitoring stacks to advanced observability tools like <strong>Grafana Cloud</strong> and <strong>VictoriaMetrics</strong>, ensuring smooth transitions, improved system performance, and enhanced incident management.
        </li>
        <li>
          Grafana to Grafana Cloud Migration: Successfully transitioned <strong>Grafana</strong> to <strong>Grafana Cloud</strong>, enhancing scalability, simplifying maintenance, and enabling advanced cloud-native features.
        </li>
        <li>
          Prometheus to VictoriaMetrics Migration: Migrated monitoring workloads from <strong>Prometheus</strong> to <strong>VictoriaMetrics</strong>, ensuring improved performance and storage efficiency for handling high-cardinality metrics.
        </li>
        <li>
          Led the integration of monitoring and alerting tools like <strong>VictoriaMetrics</strong> and <strong>Grafana Cloud</strong>, ensuring high availability and early detection of issues across cloud applications and infrastructure, which helped in the reduction of 30-50 support tickets.
        </li>
        <li>
          Slack Bot for Jira Ticket Creation: Designed and implemented a Slack bot to automate Jira ticket creation, streamlining incident tracking and improving response times.
        </li>
      </ul>
    ),
  },
  {
    title: 'DevOps Engineer',
    company: 'NoZanzat',
    period: 'July 2022 – Sep 2023',
    location: 'Pune, India',
    description: (
      <ul className="list-disc pl-5">
        <li>
          Infrastructure Automation: Designed and implemented CI/CD pipelines using <strong>Jenkins</strong> to automate deployment and provisioning of infrastructure in cloud environments, improving deployment speed by 40%.
        </li>
        <li>
          Managed cloud infrastructure on <strong>Amazon Web Services (AWS)</strong>, automating provisioning with <strong>Terraform</strong> and <strong>CloudFormation</strong>. Reduced manual configuration errors and increased scalability.
        </li>
        <li>
          Collaborated with development teams to optimize the software development lifecycle (SDLC), reducing bottlenecks by automating testing, deployments, and environment provisioning.
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
                    {exp.location && (
                      <p className="text-gray-500 italic mb-2">{exp.location}</p>
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
