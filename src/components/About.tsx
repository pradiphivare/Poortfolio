import React from 'react';
import { Code2, Server, Cloud, Shield } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800"
              alt="Professional headshot"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-teal-200 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-100 rounded-full"></div>
          </div>

          {/* Text Section */}
          <div>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              I’m <span className="font-bold text-blue-700">Pradip Hivare</span>, a DevOps Engineer with a strong focus on cloud infrastructure, automation, and observability. Currently, I work at <span className="font-semibold text-gray-900">Tata Elxsi</span>, where I design and optimize CI/CD pipelines using <strong>Jenkins</strong> and <strong>GitHub Actions</strong>, automate infrastructure provisioning with <strong>Terraform</strong>, <strong>Ansible</strong>, and <strong>Helm</strong>, and manage containerized environments with <strong>Docker</strong> and <strong>Kubernetes</strong>.
            </p>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              With expertise in observability tools like <strong>Victoria Metrics</strong>, <strong>Grafana Cloud</strong>, <strong>Prometheus</strong>, and <strong>Datadog</strong>, I ensure seamless infrastructure performance and security across hybrid cloud systems. I have a proven track record of improving operational efficiency, reducing support tickets by 30–50%, and enhancing incident response times by automating workflows, such as building a <strong>Slack bot</strong> for automated <strong>Jira</strong> ticket creation.
            </p>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              I have a deep understanding of <strong>AWS</strong> services, including <strong>Lambda</strong>, <strong>EC2</strong>, <strong>S3</strong>, and <strong>EBS</strong>, and have automated infrastructure provisioning while optimizing application performance. My experience also includes leveraging <strong>Infrastructure as Code (IaC)</strong> and <strong>GitOps</strong> methodologies to streamline workflows and collaborate effectively across teams, enhancing development processes.
            </p>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              Passionate about continuous learning, I stay ahead of the curve with the latest in cloud-native technologies, DevOps practices, and open-source contributions, driving innovation in every project I take on.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Code2 className="w-12 h-12 text-teal-600" />
                </div>
                <span className="text-lg font-medium text-gray-900">
                  Expertise in Automation and CI/CD
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Server className="w-12 h-12 text-blue-600" />
                </div>
                <span className="text-lg font-medium text-gray-900">
                  Advanced Observability Practices
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Cloud className="w-12 h-12 text-indigo-600" />
                </div>
                <span className="text-lg font-medium text-gray-900">
                  Cloud Expertise: AWS, Terraform, Kubernetes
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Shield className="w-12 h-12 text-yellow-600" />
                </div>
                <span className="text-lg font-medium text-gray-900">
                  Security and Monitoring Integrations
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
