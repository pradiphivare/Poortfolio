import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        background: "radial-gradient(circle, rgba(34, 34, 54, 1) 20%, rgba(17, 17, 29, 1) 80%)",
      }}
    >
      <div className="container mx-auto px-6 py-20 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-cyan-400 neon-text">Pradip Hivare</span>
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-300">
          DevOps Engineer | Cloud Enthusiast | Full Stack Developer
        </p>
        <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl">
          I'm passionate about creating{" "}
          <span className="text-cyan-400 neon-text">scalable cloud architectures</span> and automating{" "}
          <span className="text-cyan-500 neon-text">infrastructure workflows</span>. With expertise in{" "}
          <span className="text-cyan-400 neon-text">CI/CD pipelines, observability</span> and{" "}
          <span className="text-cyan-400 neon-text">modern development practices</span>, I strive to deliver reliable, efficient, and secure solutions for complex challenges.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-6 justify-center md:justify-start">
          <a
            href="https://github.com"
            className="hover:text-cyan-400 transition-transform transform hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={30} />
          </a>
          <a
            href="http://www.linkedin.com/in/pradip-hivare-48a50719b/"
            className="hover:text-cyan-400 transition-transform transform hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={30} />
          </a>
          <a
            href="mailto:pradiphivare2510@gmail.com"
            className="hover:text-cyan-400 transition-transform transform hover:scale-125"
          >
            <Mail size={30} />
          </a>
        </div>

        {/* Call to Action Button */}
        <div className="mt-10">
          <a
            href="#contact"
            className="px-8 py-4 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-500 transition-colors"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
}
