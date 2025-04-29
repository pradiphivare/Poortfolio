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
          {/* Left Side: Image and Expertise Points */}
          <div>
            <div className="relative mb-12">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800"
                alt="Professional headshot"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-teal-200 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-100 rounded-full"></div>
            </div>

            {/* Expertise Points */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Code2 className="w-12 h-12 text-teal-600" />
                </div>
                <span className="text-lg font-medium text-black">
                  Expertise in Automation and CI/CD
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Server className="w-12 h-12 text-blue-600" />
                </div>
                <span className="text-lg font-medium text-black">
                  Advanced Observability Practices
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Cloud className="w-12 h-12 text-indigo-600" />
                </div>
                <span className="text-lg font-medium text-black">
                  Cloud Expertise: AWS, Terraform, Kubernetes
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Shield className="w-12 h-12 text-yellow-600" />
                </div>
                <span className="text-lg font-medium text-black">
                  Security and Monitoring Integrations
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              I’m <span className="font-bold text-black">Pradip Hivare</span>, a DevOps Engineer with a strong focus on cloud infrastructure, automation, and observability. Currently, I work at <span className="font-semibold text-black">Tata Elxsi</span>, where I design and optimize CI/CD pipelines using <span className="font-bold text-black">Jenkins</span> and <span className="font-bold text-black">GitHub Actions</span>, automate infrastructure provisioning with <span className="font-bold text-black">Terraform</span>, <span className="font-bold text-black">Ansible</span>, and <span className="font-bold text-black">Helm</span>, and manage containerized environments with <span className="font-bold text-black">Docker</span> and <span className="font-bold text-black">Kubernetes</span>.
            </p>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              With expertise in observability tools like <span className="font-bold text-black">Victoria Metrics</span>, <span className="font-bold text-black">Grafana Cloud</span>, <span className="font-bold text-black">Prometheus</span>, and <span className="font-bold text-black">Datadog</span>, I ensure seamless infrastructure performance and security across hybrid cloud systems. I have a proven track record of improving operational efficiency, reducing support tickets by 30-50%, and enhancing incident response times by automating workflows, such as building a Slack bot for automated Jira ticket creation.
            </p>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              I have a deep understanding of <span className="font-bold text-black">AWS services</span>, including Lambda, EC2, S3, and EBS, and have automated infrastructure provisioning while optimizing application performance. My experience also includes leveraging <span className="font-bold text-black">Infrastructure as Code (IaC)</span> and <span className="font-bold text-black">GitOps</span> methodologies to streamline workflows and collaborate effectively across teams, enhancing development processes.
            </p>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              Passionate about continuous learning, I stay ahead of the curve with the latest in cloud-native technologies, DevOps practices, and open-source contributions, driving innovation in every project I take on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
