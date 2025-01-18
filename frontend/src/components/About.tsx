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
              Hi, I'm <span className="font-bold text-blue-700">Pradip Hivare</span>, a dedicated DevOps Engineer with a passion for cloud technologies, automation, and observability. Over the past years, I've honed my skills to deliver secure, scalable infrastructure solutions that optimize performance and streamline processes.
            </p>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              At Tata-Elxsi and NoZanzat, I successfully reduced incidents and enhanced efficiency by integrating advanced monitoring tools like Grafana Cloud and VictoriaMetrics. My expertise spans across automation with tools like Terraform and Ansible, ensuring seamless deployments and robust CI/CD workflows.
            </p>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              I thrive on tackling challenges, leveraging my knowledge to create innovative solutions that empower teams and drive impactful results.
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
