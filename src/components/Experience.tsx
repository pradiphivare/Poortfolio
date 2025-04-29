import React from 'react';

const experiences = [
  {
    title: 'DevOps, Observability & AIOps Engineer (On Deputation)',
    company: 'Comcast (via Tata Elxsi)',
    period: 'June 2024 – Present',
    location: 'Remote / Pune, India',
    description: (
      <ul className="list-disc pl-5">
        <li>Transitioned from <strong>Prometheus</strong> to <strong>Victoria Metrics</strong> to support high-cardinality workloads with better storage and performance.</li>
        <li>Migrated observability stacks from <strong>Datadog</strong> to <strong>Grafana Cloud</strong>, achieving superior visualization and cost efficiency.</li>
        <li>Integrated full-stack observability with <strong>Grafana Cloud</strong>, <strong>Slack</strong>, and <strong>VictoriaMetrics</strong>, reducing support tickets by 30–50%.</li>
        <li>Automated dashboard and alert migration using <strong>Grafana REST APIs</strong>, improving consistency and reducing manual efforts.</li>
        <li>Developed custom API scripts to replicate monitoring configurations across teams and environments.</li>
        <li>Implemented distributed tracing with <strong>OpenTelemetry</strong> and <strong>Jaeger</strong> for microservices latency analysis.</li>
        <li>Integrated observability with <strong>Istio service mesh</strong> for enhanced service-to-service communication visibility.</li>
        <li>Adopted <strong>GitOps</strong> practices for deploying observability components using tools like <strong>ArgoCD</strong> and <strong>FluxCD</strong>, ensuring consistent and reliable deployments across environments.</li>
        <li>Worked closely with platform teams to design and roll out scalable hybrid-cloud observability and <strong>AIOps</strong> strategies, enabling predictive insights, anomaly detection, and intelligent incident management.</li>
        <li>Built a <strong>Slack bot</strong> to automate <strong>Jira ticket creation</strong>, streamlining incident response workflows and accelerating mean time to resolution (MTTR).</li>
      </ul>
    ),
  },
  {
    title: 'Engineer',
    company: 'Tata Elxsi',
    period: 'Dec 2023 – June 2024',
    location: 'Pune, India',
    description: (
      <ul className="list-disc pl-5">
        <li>Automated infrastructure provisioning with <strong>Terraform</strong> and <strong>Ansible</strong>, enhancing reliability and scalability.</li>
        <li>Designed and maintained CI/CD pipelines using <strong>Jenkins</strong>, <strong>Concourse</strong>, and <strong>GitHub Actions</strong>, saving ~30 engineering hours monthly.</li>
        <li>Implemented end-to-end monitoring with <strong>Prometheus</strong> and <strong>Grafana</strong> for Kubernetes workloads and application health visibility.</li>
        <li>Deployed and managed services on <strong>AWS ECS</strong> and <strong>EKS</strong>, ensuring high availability and secure deployments.</li>
        <li>Created Kubernetes-native deployment patterns using <strong>Helm Charts</strong> and autoscaling policies for resilient infrastructure.</li>
        <li>Embedded observability best practices into CI/CD workflows, improving deployment confidence and enabling rapid troubleshooting with automated rollbacks.</li>
      </ul>
    ),
  },
  {
    title: 'Engineer',
    company: 'NoZanzat',
    period: 'Jul 2022 – Sep 2023',
    location: 'Pune, India',
    description: (
      <ul className="list-disc pl-5">
        <li>Optimized CI/CD pipelines with <strong>Jenkins</strong>, improving deployment speed and reliability by 40%.</li>
        <li>Managed AWS infrastructure using <strong>Terraform</strong> and <strong>CloudFormation</strong>, reducing errors and improving consistency.</li>
        <li>Automated testing and deployment processes, accelerating the SDLC and enabling faster feature delivery.</li>
        <li>Developed backend services using <strong>Python</strong> and <strong>Go</strong>, contributing to internal microservices and RESTful APIs.</li>
        <li>Collaborated with frontend and QA teams to ensure comprehensive test coverage and smooth feature delivery.</li>
        <li>Built internal tools for log parsing and metrics collection, enhancing visibility and troubleshooting efficiency across teams.</li>
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
