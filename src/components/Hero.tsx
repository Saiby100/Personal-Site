import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { social, contact, personal } from '../constants/portfolioConfig';
import { gradients, transitions } from '../constants/styles';
import { scrollToSection } from '../constants/navigation';

const Hero: React.FC = () => {
  const scrollToAbout = () => scrollToSection('about');

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {personal.title}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
              Building the future with code, one project at a time
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer specializing in mobile apps, web applications, and developer tools.
            Passionate about creating elegant solutions to complex problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className={`${gradients.bgPurpleBlue} hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold ${transitions.scaleSmall} shadow-lg hover:shadow-xl`}
            >
              Learn More About Me
            </button>

            <div className="flex space-x-4">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-gray-800 hover:bg-gray-700 rounded-lg ${transitions.scaleMedium}`}
              >
                <Github size={24} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-gray-800 hover:bg-gray-700 rounded-lg ${transitions.scaleMedium}`}
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className={`p-3 bg-gray-800 hover:bg-gray-700 rounded-lg ${transitions.scaleMedium}`}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400 hover:text-white transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
