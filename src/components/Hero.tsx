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
  {/* Wrapper for glow + image */}
  <div className="relative flex items-center justify-center">
    {/* Glow background (centered behind image) */}
    <div className="absolute w-72 h-72 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>

    {/* Image container */}
    <div className="relative z-10 p-2 bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 rounded-full shadow-2xl">
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQF2BPnpTKHLsg/profile-displayphoto-shrink_400_400/B56ZZ1gZ2EGQAk-/0/1745728153676?e=1751500800&v=beta&t=fVvcpPGFwmELG7i7Afnt9srFO0oSud2I-MVko_1los8"
        alt="Pradip Hivare"
        className="w-64 h-64 object-cover rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
</div>
