import React from 'react';
import { Code2, Server, Cloud, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

// Skills data (dynamic)
const skills = [
  {
    title: 'Expertise in Automation and CI/CD',
    icon: <Code2 className="w-12 h-12 text-teal-600" />,
  },
  {
    title: 'Advanced Observability Practices',
    icon: <Server className="w-12 h-12 text-blue-600" />,
  },
  {
    title: 'Cloud Expertise: AWS, Terraform, Kubernetes',
    icon: <Cloud className="w-12 h-12 text-indigo-600" />,
  },
  {
    title: 'Security and Monitoring Integrations',
    icon: <Shield className="w-12 h-12 text-yellow-600" />,
  },
];

// Logos data
const logos = [
  { name: 'AWS', src: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
  { name: 'Kubernetes', src: 'https://cdn.worldvectorlogo.com/logos/kubernetes.svg' },
  { name: 'Jenkins', src: 'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg' },
  { name: 'Terraform', src: 'https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg' },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800"
              alt="Professional headshot"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-teal-200 rounded-full animate-ping"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-100 rounded-full"></div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              I’m <span className="font-bold text-blue-700">Pradip Hivare</span>, a DevOps Engineer with a strong focus on cloud infrastructure, automation, and observability. 
              Currently, I work at <span className="font-semibold text-gray-900">Tata Elxsi</span>, where I design and optimize CI/CD pipelines using <strong>Jenkins</strong> and <strong>GitHub Actions</strong>, 
              automate infrastructure provisioning with <strong>Terraform</strong>, <strong>Ansible</strong>, and <strong>Helm</strong>, and manage containerized environments with <strong>Docker</strong> and <strong>Kubernetes</strong>.
            </p>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              With expertise in observability tools like <strong>Victoria Metrics</strong>, <strong>Grafana Cloud</strong>, <strong>Prometheus</strong>, and <strong>Datadog</strong>, I ensure seamless infrastructure performance and security across hybrid cloud systems.
            </p>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              I have deep knowledge of <strong>AWS</strong> services, and have automated infrastructure provisioning while optimizing application performance using <strong>Infrastructure as Code (IaC)</strong> and <strong>GitOps</strong> principles.
            </p>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              Passionate about continuous learning, I drive innovation by staying ahead of the curve with cloud-native tech and DevOps practices.
            </p>

            {/* Dynamic Skills Section */}
            <div className="space-y-6 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="p-6 bg-white rounded-xl shadow-lg">
                    {skill.icon}
                  </div>
                  <span className="text-lg font-medium text-gray-900">
                    {skill.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Technology Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={logo.src} alt={logo.name} className="h-16 object-contain" />
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
