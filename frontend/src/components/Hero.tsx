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
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-cyan-400 neon-text">Pradip Hivare</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-300">
              DevOps Engineer | Cloud Enthusiast | Full Stack Developer
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm passionate about creating{" "}
              <span className="text-cyan-400 neon-text">scalable cloud architectures</span> and automating{" "}
              <span className="text-cyan-500 neon-text">infrastructure workflows</span>. With expertise in{" "}
              <span className="text-cyan-400 neon-text">CI/CD pipelines, observability </span>and 
              <span className="text-cyan-400 neon-text"> modern development practices</span>
             , I strive to deliver reliable, efficient, and secure solutions for complex challenges.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
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
          </div>

          {/* Image Section */}
        
<div className="md:w-1/2 flex justify-center relative">
  <div className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full blur-lg animate-pulse"></div>
  <div className="relative p-6 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-2xl">
    <img
      src="https://media.licdn.com/dms/image/v2/D5603AQERcx2BcsqEmQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711795833930?e=1741219200&v=beta&t=bE5JSwIHKHz4VSmOQBvypifsSz-vVr2x0Dv6pKdGSnk"
      alt="Pradip Hivare"
      className="relative rounded-full shadow-2xl w-64 h-64 transform hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
