import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Shield } from 'lucide-react';

const skills = [
  {
    title: 'Automation and CI/CD',
    icon: <Code2 className="w-12 h-12 text-teal-600" />,
  },
  {
    title: 'Observability and Monitoring',
    icon: <Server className="w-12 h-12 text-blue-600" />,
  },
  {
    title: 'Cloud Infrastructure (AWS, Terraform, Kubernetes)',
    icon: <Cloud className="w-12 h-12 text-indigo-600" />,
  },
  {
    title: 'Security and Compliance',
    icon: <Shield className="w-12 h-12 text-yellow-600" />,
  },
];

const logos = [
  { name: 'AWS', src: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
  { name: 'Kubernetes', src: 'https://cdn.worldvectorlogo.com/logos/kubernetes.svg' },
  { name: 'Jenkins', src: 'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg' },
  { name: 'Terraform', src: 'https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
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
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-teal-300 rounded-full animate-ping"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-200 rounded-full animate-pulse"></div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hi, I'm <span className="font-bold text-blue-700">Pradip Hivare</span>, a DevOps Engineer passionate about building efficient, secure, and scalable cloud solutions. 
              I specialize in automation, observability, and cloud-native technologies.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Currently working at <span className="font-semibold text-gray-900">Tata Elxsi</span>, I design CI/CD pipelines, automate infrastructure using Terraform and Ansible, 
              and manage Kubernetes environments for high-availability deployments.
            </p>

            {/* Skills Icons */}
            <div className="space-y-6 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="p-6 bg-white rounded-2xl shadow-xl">
                    {skill.icon}
                  </div>
                  <span className="text-lg font-semibold text-gray-800">
                    {skill.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Logos Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center items-center"
                  whileHover={{ scale: 1.15 }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-16 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
