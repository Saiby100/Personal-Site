import React, { useState } from 'react';
import { Code, Smartphone, Server, PenTool as Tool, Database, Cloud, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

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
      title: 'Software Developer',
      company: 'Lowdefy',
      description: 'Started my professional journey, learning and contributing to various projects.',
    },
  ];

  const renderSkills = (skills: any[]) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${skill.color} p-4 rounded-lg text-white font-semibold text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
          >
            {skill.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <category.icon size={18} className="mr-2" />
                    {category.title}
                  </button>
                ))}
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
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
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex mb-2 justify-between">
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-2 py-1 rounded text-sm font-bold">
                        {exp.year}
                      </div>
                    </div>
                    <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                  {index < experience.length - 1 && (
                    <div className="absolute left-8 w-0.5 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 m-1"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-lg p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-purple-300">Bachelor of Mathematics & Computer Science</h4>
              <p className="text-gray-400">Stellenbosch University • 2021-2023</p>
              <p className="text-sm text-gray-500 mt-2">Focuses on Computer Science with a strong foundation in Mathematics</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-cyan-300">Continuous Learning</h4>
              <p className="text-gray-400">Self-taught & Online Courses • 2020-Present</p>
              <p className="text-sm text-gray-500 mt-2">Advanced topics in AI/ML, Cloud Architecture, and DevOps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
