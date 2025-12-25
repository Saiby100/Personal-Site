import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { social, contact, personal } from '../constants/portfolioConfig';
import { gradients, transitions, text, backgrounds } from '../constants/styles';
import { scrollToSection } from '../constants/navigation';

const Hero: React.FC = () => {
  const scrollToAbout = () => scrollToSection('about');

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className={`absolute inset-0 ${gradients.bgAccentSubtle}`}></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--accent-500)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-alt-500)]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className={gradients.textAccent}>
                {personal.title}
              </span>
            </h1>
            <h2 className={`text-xl sm:text-2xl lg:text-3xl ${text.secondary} font-light`}>
              Building the future with code, one project at a time
            </h2>
          </div>

          <p className={`text-lg sm:text-xl ${text.muted} max-w-2xl mx-auto leading-relaxed`}>
            Full-stack developer specializing in mobile apps, web applications, and developer tools.
            Passionate about creating elegant solutions to complex problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className={`${gradients.bgAccent} text-white px-8 py-3 rounded-lg font-semibold ${transitions.scaleSmall} shadow-lg hover:shadow-xl`}
            >
              Learn More About Me
            </button>

            <div className="flex space-x-4">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 ${backgrounds.tertiary} hover:bg-[var(--accent-600)] rounded-lg ${transitions.scaleMedium}`}
              >
                <Github size={24} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 ${backgrounds.tertiary} hover:bg-[var(--accent-600)] rounded-lg ${transitions.scaleMedium}`}
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className={`p-3 ${backgrounds.tertiary} hover:bg-[var(--accent-600)] rounded-lg ${transitions.scaleMedium}`}
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
        <ChevronDown size={32} className={`${text.muted} hover:text-[var(--text-primary)] transition-colors`} />
      </button>
    </section>
  );
};

export default Hero;
