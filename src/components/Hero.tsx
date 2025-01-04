import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-400">Pradip Hivare</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              DevOps Engineer & Full Stack Developer
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Passionate about building scalable infrastructure and creating elegant solutions
              to complex problems. Specializing in cloud architecture and modern development practices.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="http://www.linkedin.com/in/pradip-hivare-48a50719b/" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:pradiphivare2510@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQERcx2BcsqEmQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711795833930?e=1741219200&v=beta&t=bE5JSwIHKHz4VSmOQBvypifsSz-vVr2x0Dv6pKdGSnk"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}