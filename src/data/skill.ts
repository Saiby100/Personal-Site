export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'Kotlin'],
  },
  {
    title: 'Frameworks',
    items: ['Lowdefy', 'React', 'FastAPI', 'Flask', 'Express', 'Next.js'],
  },
  {
    title: 'Databases & tools',
    items: ['PostgreSQL', 'MongoDB', 'SQL', 'Git', 'Docker', 'Neovim', 'JIRA', 'Figma'],
  },
  {
    title: 'Practices',
    items: ['Agile', 'code review', 'CI/CD', 'database design', 'AI agent orchestration'],
  },
];
