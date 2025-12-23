import React, { useMemo } from 'react';
import { Code, Coffee,  Palmtree, PencilRuler } from 'lucide-react';

const About: React.FC = () => {
  const hobbies = [
    { icon: Code, name: 'Side Projects', description: 'Useful and innovative coding endeavors' },
    { icon: Coffee, name: 'Coffee', description: 'Fuel for late-night coding sessions' },
    { icon: Palmtree, name: 'Landscape Art', description: 'Creating serene and inspiring natural scenes' },
    { icon: PencilRuler, name: 'Architecture', description: 'Beautiful and unique structures' },
  ];

  const CAREER_START_DATE = new Date('2024-03-11');
  const yearsExperience = useMemo(() => {
    const now = new Date();
    const diff = now.getTime() - CAREER_START_DATE.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300 space-y-4 text-lg leading-relaxed">
              <p>
                I'm a software developer with over {yearsExperience} years of experience building everything from
                mobile applications to complex web platforms. My journey started with a curiosity
                about how things work, and a desire to build useful software. This led me to explore programming languages,
                system design, and the art of crafting elegant code.
              </p>

              <p>
                Currently, I specialize in full-stack development, mobile app creation, and building
                developer tools that make other programmers' lives easier. I've had the privilege of
                working on everything from custom programming languages to language servers and
                development environments.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Current Focus</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Building scalable web applications with modern frameworks</li>
                <li>• Developing mobile apps for iOS and Android</li>
                <li>• Creating developer tools and language servers</li>
                <li>• Exploring AI/ML integration in software development</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Interests & Hobbies</h3>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500/50"
                  >
                    <hobby.icon size={32} className="text-purple-400 mb-3" />
                    <h4 className="font-semibold mb-2">{hobby.name}</h4>
                    <p className="text-sm text-gray-400">{hobby.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400">{yearsExperience}+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">50+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">15+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">∞</div>
                  <div className="text-sm text-gray-400">Coffee Consumed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
