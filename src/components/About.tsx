import React, { useMemo } from 'react';
import { Code, Coffee, Palmtree, PencilRuler } from 'lucide-react';
import { gradients, layouts, cards, text, accent, accentAlt } from '../constants/styles';

const About: React.FC = () => {
  const hobbies = [
    { icon: Code, name: 'Side Projects', description: 'Useful and innovative coding endeavors' },
    { icon: Coffee, name: 'Coffee', description: 'Fuel for late-night coding sessions' },
    { icon: Palmtree, name: 'Landscape Art', description: 'Creating serene and inspiring natural scenes' },
    { icon: PencilRuler, name: 'Architecture', description: 'Beautiful and unique structures' },
  ];

  const yearsExperience = useMemo(() => {
    const CAREER_START_DATE = new Date('2024-03-11');
    const now = new Date();
    const diff = now.getTime() - CAREER_START_DATE.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  }, [])

  return (
    <section id="about" className={layouts.section}>
      <div className={layouts.containerMedium}>
        <div className={layouts.sectionHeader}>
          <h2 className={layouts.heading}>
            <span className={gradients.textAccent}>
              About Me
            </span>
          </h2>
          <p className={`text-xl ${text.muted} max-w-3xl mx-auto`}>
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className={`prose prose-lg ${text.secondary} space-y-4 text-lg leading-relaxed`}>
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

            <div className={cards.gradient}>
              <h3 className={`text-xl font-semibold mb-3 ${accent.text[300]}`}>Current Focus</h3>
              <ul className={`space-y-2 ${text.secondary}`}>
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
                    className={`${cards.interactive} p-6`}
                  >
                    <hobby.icon size={32} className={`${accent.text[400]} mb-3`} />
                    <h4 className="font-semibold mb-2">{hobby.name}</h4>
                    <p className={`text-sm ${text.muted}`}>{hobby.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${cards.base} p-6`}>
              <h3 className={`text-xl font-semibold mb-4 ${accentAlt.text[400]}`}>Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className={`text-2xl font-bold ${accent.text[400]}`}>{yearsExperience}+</div>
                  <div className={`text-sm ${text.muted}`}>Years Experience</div>
                </div>
                <div>
                  <div className={`text-2xl font-bold ${accentAlt.text[400]}`}>Don't Ask</div>
                  <div className={`text-sm ${text.muted}`}>Unfinished Projects</div>
                </div>
                <div>
                  <div className={`text-2xl font-bold ${accent.text[500]}`}>7</div>
                  <div className={`text-sm ${text.muted}`}>App Ideas</div>
                </div>
                <div>
                  <div className={`text-2xl font-bold ${accent.text[400]}`}>&infin;</div>
                  <div className={`text-sm ${text.muted}`}>Coffee Consumed</div>
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
