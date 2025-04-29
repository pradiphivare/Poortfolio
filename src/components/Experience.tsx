import React from 'react';
import comcastLogo from '../assets/comcast.png';
import tataElxsiLogo from '../assets/tata-elxsi.png';
import nozanzatLogo from '../assets/nozanzat.png';

const experiences = [
  {
    title: 'DevOps, Observability & AIOps Engineer (On Deputation)',
    company: 'Comcast (via Tata Elxsi)',
    location: 'Remote / Pune, India',
    companyLogo: comcastLogo,
    companyImage: comcastLogo,
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Transitioned from <strong>Prometheus</strong> to <strong>Victoria Metrics</strong> for high-cardinality workloads.</li>
        <li>Migrated observability stacks from <strong>Datadog</strong> to <strong>Grafana Cloud</strong>.</li>
        <li>Integrated full-stack observability with <strong>Slack</strong> and <strong>VictoriaMetrics</strong>.</li>
        <li>Automated dashboard and alert migration using <strong>Grafana REST APIs</strong>.</li>
        <li>Developed custom API scripts to replicate monitoring configs.</li>
        <li>Implemented tracing with <strong>OpenTelemetry</strong> and <strong>Jaeger</strong>.</li>
        <li>Integrated observability with <strong>Istio service mesh</strong>.</li>
        <li>Adopted <strong>GitOps</strong> practices using <strong>ArgoCD</strong> and <strong>FluxCD</strong>.</li>
        <li>Worked with platform teams for scalable hybrid-cloud observability and <strong>AIOps</strong>.</li>
        <li>Built a <strong>Slack bot</strong> to automate <strong>Jira ticket creation</strong>.</li>
      </ul>
    ),
  },
  {
    title: 'Engineer',
    company: 'Tata Elxsi',
    location: 'Pune, India',
    companyLogo: tataElxsiLogo,
    companyImage: tataElxsiLogo,
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Automated infrastructure provisioning with <strong>Terraform</strong> and <strong>Ansible</strong>.</li>
        <li>Maintained CI/CD pipelines with <strong>Jenkins</strong>, <strong>Concourse</strong>, <strong>GitHub Actions</strong>.</li>
        <li>Monitored Kubernetes workloads using <strong>Prometheus</strong> and <strong>Grafana</strong>.</li>
        <li>Managed services on <strong>AWS ECS</strong> and <strong>EKS</strong>.</li>
        <li>Created Helm charts and autoscaling policies.</li>
        <li>Embedded observability into CI/CD for faster rollbacks.</li>
      </ul>
    ),
  },
  {
    title: 'Engineer',
    company: 'NoZanzat',
    period: 'Jul 2022 – Sep 2023',
    location: 'Pune, India',
    companyLogo: nozanzatLogo,
    companyImage: nozanzatLogo,
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Optimized CI/CD pipelines using <strong>Jenkins</strong>.</li>
        <li>Managed AWS infra with <strong>Terraform</strong> and <strong>CloudFormation</strong>.</li>
        <li>Automated testing and deployment processes.</li>
        <li>Built backend services with <strong>Python</strong> and <strong>Go</strong>.</li>
        <li>Collaborated with QA and frontend teams for delivery.</li>
        <li>Built internal log parsing tools for teams.</li>
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
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200" />

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
                  <div className="flex flex-col items-center space-y-3">
                    <img
                      src={exp.companyLogo}
                      alt={exp.company}
                      className="w-20 h-20 object-contain"
                    />
                    <img
                      src={exp.companyImage}
                      alt={`${exp.company} banner`}
                      className="w-40 h-28 object-cover rounded-lg"
                    />
                  </div>
                </div>

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
