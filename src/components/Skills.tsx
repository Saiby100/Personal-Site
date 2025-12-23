import React, { useState } from 'react';
import { Code, Smartphone, Server, PenTool as Tool, Database, Cloud, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
        { name: 'Vue.js', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'Tailwind CSS', level: 95, color: 'from-cyan-500 to-teal-500' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-500 to-orange-500' },
      ],
    },
    mobile: {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 90, color: 'from-purple-500 to-pink-500' },
        { name: 'Flutter', level: 85, color: 'from-blue-500 to-indigo-500' },
        { name: 'Swift/iOS', level: 80, color: 'from-gray-500 to-gray-400' },
        { name: 'Kotlin/Android', level: 80, color: 'from-green-600 to-green-500' },
        { name: 'Expo', level: 85, color: 'from-purple-600 to-purple-400' },
      ],
    },
    backend: {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 95, color: 'from-green-600 to-green-400' },
        { name: 'Python', level: 85, color: 'from-yellow-600 to-yellow-400' },
        { name: 'Go', level: 80, color: 'from-cyan-600 to-blue-500' },
        { name: 'Rust', level: 75, color: 'from-orange-600 to-red-500' },
        { name: 'GraphQL/REST', level: 90, color: 'from-pink-500 to-purple-500' },
      ],
    },
    tools: {
      icon: Tool,
      title: 'Developer Tools',
      skills: [
        { name: 'Custom Languages', color: 'from-indigo-500 to-purple-500' },
        { name: 'Language Servers', color: 'from-purple-500 to-pink-500' },
        { name: 'CLI Tools', color: 'from-gray-500 to-gray-400' },
        { name: 'VS Code Extensions', color: 'from-blue-500 to-cyan-500' },
        { name: 'Build Tools', color: 'from-orange-500 to-red-500' },
        { name: 'Compiler Design', color: 'from-red-500 to-pink-500' },
        { name: 'AST Manipulation', color: 'from-cyan-500 to-blue-500' },
        { name: 'Code Generation', color: 'from-green-500 to-teal-500' },
      ],
    },
    ai: {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: [
        { name: 'OpenAI GPT APIs', color: 'from-green-500 to-emerald-500' },
        { name: 'Claude/Anthropic', color: 'from-orange-500 to-red-500' },
        { name: 'LangChain', color: 'from-purple-500 to-indigo-500' },
        { name: 'Vector Databases', color: 'from-blue-500 to-cyan-500' },
        { name: 'Prompt Engineering', color: 'from-pink-500 to-purple-500' },
        { name: 'RAG Systems', color: 'from-cyan-500 to-teal-500' },
        { name: 'Fine-tuning', color: 'from-yellow-500 to-orange-500' },
        { name: 'AI Code Generation', color: 'from-indigo-500 to-purple-500' },
      ],
    },
    database: {
      icon: Database,
      title: 'Database & Storage',
      skills: [
        { name: 'PostgreSQL', level: 90, color: 'from-blue-600 to-blue-400' },
        { name: 'MongoDB', level: 85, color: 'from-green-600 to-green-400' },
        { name: 'Redis', level: 80, color: 'from-red-600 to-red-400' },
        { name: 'Supabase', level: 85, color: 'from-green-500 to-teal-500' },
        { name: 'Firebase', level: 80, color: 'from-yellow-500 to-orange-500' },
      ],
    },
    cloud: {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 85, color: 'from-orange-500 to-yellow-500' },
        { name: 'Docker', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'Kubernetes', level: 75, color: 'from-blue-600 to-purple-500' },
        { name: 'CI/CD', level: 85, color: 'from-green-500 to-blue-500' },
        { name: 'Vercel/Netlify', level: 90, color: 'from-purple-500 to-pink-500' },
      ],
    },
  };

  const experience = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Startup',
      description: 'Leading development of mobile and web applications, architecting scalable solutions.',
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      description: 'Built custom web applications and mobile apps for various clients.',
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      company: 'SaaS Company',
      description: 'Developed responsive web applications and improved user experience.',
    },
    {
      year: '2020',
      title: 'Junior Developer',
      company: 'Local Startup',
      description: 'Started my professional journey, learning and contributing to various projects.',
    },
  ];

  const renderSkills = (skills: any[]) => {
    const activeSkills = skillCategories[activeCategory as keyof typeof skillCategories].skills;
    const hasLevels = activeSkills.some(skill => 'level' in skill);

    if (hasLevels) {
      return (
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
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
    }
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
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-2 py-1 rounded text-sm font-bold mr-3">
                        {exp.year}
                      </div>
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                    </div>
                    <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                  {index < experience.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-6 bg-gradient-to-b from-purple-500 to-cyan-500"></div>
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
              <h4 className="text-xl font-semibold text-purple-300">Bachelor of Computer Science</h4>
              <p className="text-gray-400">University of Technology • 2016-2020</p>
              <p className="text-sm text-gray-500 mt-2">Focus on Software Engineering and System Design</p>
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