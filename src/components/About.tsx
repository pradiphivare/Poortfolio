import React from 'react';
import { Code2, Server, Cloud } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800"
              alt="Professional headshot"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-6">
              With over 5 years of experience in both development and DevOps, I specialize in
              building scalable applications and implementing robust CI/CD pipelines.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Code2 className="text-blue-500" />
                <span>Full Stack Development</span>
              </div>
              <div className="flex items-center space-x-4">
                <Server className="text-blue-500" />
                <span>DevOps Engineering</span>
              </div>
              <div className="flex items-center space-x-4">
                <Cloud className="text-blue-500" />
                <span>Cloud Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}