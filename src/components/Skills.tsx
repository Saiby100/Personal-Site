import React, { useState } from 'react';
import { Code, Smartphone, Server, PenTool as Tool, Database, Cloud, Brain } from 'lucide-react';
import { personal } from '../constants/portfolioConfig';
import { gradients, layouts, cards, transitions, backgrounds, text, accent, accentAlt } from '../constants/styles';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  // NOTE: Skill colors are intentionally hardcoded - they represent technology brand colors
  const skillCategories = {
    frontend: {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', color: 'from-blue-600 to-blue-400' },
        { name: 'Tailwind CSS', color: 'from-cyan-500 to-teal-500' },
        { name: 'JavaScript', color: 'from-yellow-500 to-orange-500' },
        { name: 'HTML5/CSS3', color: 'from-orange-500 to-red-500' },
        { name: 'Lowdefy', color: 'from-blue-500 to-teal-500' },
      ],
    },
    backend: {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', color: 'from-green-600 to-green-400' },
        { name: 'Express.js', color: 'from-emerald-600 to-emerald-400' },
        { name: 'Socket.IO', color: 'from-slate-600 to-gray-500' },
        { name: 'Python', color: 'from-yellow-600 to-yellow-400' },
        { name: 'Java', color: 'from-red-500 to-orange-500' },
      ],
    },
    database: {
      icon: Database,
      title: 'Database & Storage',
      skills: [
        { name: 'PostgreSQL', color: 'from-blue-600 to-blue-400' },
        { name: 'MongoDB', color: 'from-green-600 to-green-400' },
        { name: 'MySQL', color: 'from-blue-500 to-indigo-500' },
      ],
    },
    mobile: {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', color: 'from-purple-500 to-pink-500' },
        { name: 'Expo', color: 'from-purple-600 to-purple-400' },
        { name: 'Kotlin/Android', color: 'from-green-600 to-green-500' },
      ],
    },
    tools: {
      icon: Tool,
      title: 'Developer Tools',
      skills: [
        { name: 'Neovim', color: 'from-emerald-500 to-green-500' },
        { name: 'Language Servers', color: 'from-purple-500 to-pink-500' },
        { name: 'CLI Tools', color: 'from-gray-500 to-gray-400' },
        { name: 'VS Code Extensions', color: 'from-blue-500 to-cyan-500' },
        { name: 'Git', color: 'from-orange-600 to-orange-400' },
        { name: 'GitHub Actions', color: 'from-blue-600 to-blue-400' },
      ],
    },
    ai: {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Prompt Engineering', color: 'from-pink-500 to-purple-500' },
        { name: 'AI Code Generation', color: 'from-indigo-500 to-purple-500' },
        { name: 'GitHub Copilot', color: 'from-emerald-500 to-cyan-500' },
        { name: 'Claude Code', color: 'from-orange-500 to-amber-500' },
        { name: 'Bolt', color: 'from-lime-500 to-green-500' },
      ],
    },
    cloud: {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS Serverless', color: 'from-orange-500 to-yellow-500' },
        { name: 'CI/CD', color: 'from-green-500 to-blue-500' },
        { name: 'Vercel', color: 'from-purple-500 to-pink-500' },
        { name: 'Heroku', color: 'from-purple-700 to-indigo-600' },
      ],
    },
  };

  const experience = [
    {
      year: '2024 - Present',
      title: personal.title,
      company: 'Lowdefy',
      description: 'Started my professional journey, learning and contributing to various projects.',
    },
    {
      year: 'Jul 2023 - Oct 2023',
      title: 'CS Teaching Assistant',
      company: 'Stellenbosch University',
      description: 'I Attended weekly practical sessions to assist students with solving python coding problems. I Invigilated during exams and handled marking project submissions and demos.',
    },
  ];

  const renderSkills = (skills: Array<{ name: string; color: string }>) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${skill.color} p-4 rounded-lg text-white font-semibold text-center ${transitions.scaleSmall} shadow-lg hover:shadow-xl`}
          >
            {skill.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className={`${layouts.section} ${backgrounds.secondary}`}>
      <div className={layouts.containerLarge}>
        <div className={layouts.sectionHeader}>
          <h2 className={layouts.heading}>
            <span className={gradients.textAccent}>
              Skills & Experience
            </span>
          </h2>
          <p className={`text-xl ${text.muted} max-w-3xl mx-auto`}>
            A comprehensive look at my technical expertise and professional journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(skillCategories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeCategory === key
                        ? `${accent.bg[600]} text-white`
                        : `${backgrounds.tertiary} ${text.secondary} hover:bg-[var(--accent-700)]`
                    }`}
                  >
                    <category.icon size={18} className="mr-2" />
                    {category.title}
                  </button>
                ))}
              </div>

              <div className={`${cards.base} p-6`}>
                <h3 className="text-2xl font-bold mb-6 text-center">
                  {skillCategories[activeCategory as keyof typeof skillCategories].title}
                </h3>
                {renderSkills(skillCategories[activeCategory as keyof typeof skillCategories].skills)}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Experience Timeline</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative">
                  <div className={`${cards.interactive} p-4`}>
                    <div className="flex mb-2 justify-between">
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <div className={`${gradients.bgAccent} text-white px-2 py-1 rounded text-sm font-bold`}>
                        {exp.year}
                      </div>
                    </div>
                    <p className={`${accent.text[400]} font-medium mb-2`}>{exp.company}</p>
                    <p className={`${text.muted} text-sm`}>{exp.description}</p>
                  </div>
                  {index < experience.length - 1 && (
                    <div className={`absolute left-8 w-0.5 h-6 ${gradients.bgAccentVertical} m-1`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={cards.gradient}>
          <div className="p-2">
          <h3 className="text-2xl font-bold mb-4 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className={`text-xl font-semibold ${accent.text[300]}`}>{personal.education.degree}</h4>
              <p className={text.muted}>{personal.education.institution} &bull; {personal.education.years}</p>
              <p className={`text-sm ${text.muted} mt-2`}>Focuses on Computer Science with a strong foundation in Mathematics</p>
            </div>
            <div className="text-center">
              <h4 className={`text-xl font-semibold ${accentAlt.text[400]}`}>Continuous Learning</h4>
              <p className={text.muted}>Self-taught & Online Courses &bull; 2020-Present</p>
              <p className={`text-sm ${text.muted} mt-2`}>Advanced topics in AI/ML, Cloud Architecture, and DevOps</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
