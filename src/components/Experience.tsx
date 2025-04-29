import React from 'react';
import comcastImage from '../assets/comcast.png';
import tataElxsiImage from '../assets/tata-elxsi.png';
import nozanzatImage from '../assets/nozanzat.png';

const experiences = [
  {
    title: 'DevOps & Observability Engineer (On Deputation)',
    company: 'Comcast (via Tata Elxsi)',
    location: 'Remote / Pune, India',
    period: 'June 2024 – Present',
    companyImage: comcastImage,
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Transitioned from <strong>Prometheus</strong> to <strong>Victoria Metrics</strong> for high-cardinality workloads.</li>
        <li>Migrated observability stacks from <strong>Datadog</strong> to <strong>Grafana Cloud</strong> for improved visualization, integrations, and cost efficiency.</li>
        <li>Integrated full-stack observability with <strong>Grafana Cloud</strong>, <strong>Slack</strong>, and <strong>VictoriaMetrics</strong>, reducing support tickets by 30–50%.</li>
        <li>Automated dashboard and alert migration using <strong>Grafana REST APIs</strong>.</li>
        <li>Built custom API scripts to replicate monitoring configurations across teams.</li>
        <li>Implemented distributed tracing using <strong>OpenTelemetry</strong> and <strong>Jaeger</strong>.</li>
        <li>Integrated observability with <strong>Istio service mesh</strong> for deep traffic insights.</li>
        <li>Collaborated with platform teams to architect a scalable hybrid-cloud observability strategy.</li>
        <li>Adopted <strong>GitOps</strong> deployment using <strong>ArgoCD</strong> and <strong>FluxCD</strong>.</li>
        <li>Enabled predictive insights and intelligent incident management through <strong>AIOps</strong> practices.</li>
        <li>Built a <strong>Slack bot</strong> for automated <strong>Jira ticket creation</strong> to streamline incident response.</li>
      </ul>
    ),
  },
  {
    title: 'Engineer',
    company: 'Tata Elxsi',
    location: 'Pune, India',
    period: 'Dec 2023 – June 2024',
    companyImage: tataElxsiImage,
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Automated infrastructure provisioning using <strong>Terraform</strong> and <strong>Ansible</strong> to improve reliability and scalability.</li>
        <li>Built and maintained CI/CD pipelines using <strong>Jenkins</strong>, <strong>Concourse</strong>, and <strong>GitHub Actions</strong>, saving ~30 engineering hours/month.</li>
        <li>Implemented monitoring with <strong>Prometheus</strong> and <strong>Grafana</strong> for Kubernetes and apps.</li>
        <li>Managed services on <strong>AWS ECS</strong> and <strong>EKS</strong> with secure and efficient production deployments.</li>
        <li>Created <strong>Helm charts</strong> and autoscaling patterns for robust infrastructure.</li>
        <li>Integrated observability into CI/CD, enabling faster troubleshooting and automated rollbacks.</li>
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
        <li>Optimized CI/CD pipelines using <strong>Jenkins</strong>, improving deployment speed by 40%.</li>
        <li>Managed AWS infrastructure with <strong>Terraform</strong> and <strong>CloudFormation</strong>.</li>
        <li>Automated testing and deployments, accelerating SDLC.</li>
        <li>Developed backend microservices using <strong>Python</strong> and <strong>Go</strong>.</li>
        <li>Collaborated with frontend and QA teams for seamless feature delivery.</li>
        <li>Built internal tools for log parsing and metrics collection to improve team visibility.</li>
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

                {/* Company Image */}
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
