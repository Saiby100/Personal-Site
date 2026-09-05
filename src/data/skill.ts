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
    items: ['Lowdefy', 'React', 'React Native', 'Expo', 'Next.js', 'FastAPI', 'Flask', 'Express'],
  },
  {
    title: 'Databases & tools',
    items: ['PostgreSQL', 'MongoDB', 'SQL', 'Supabase', 'Git', 'Docker', 'Bash', 'tmux', 'Neovim', 'JIRA', 'Figma'],
  },
  {
    title: 'Practices',
    items: ['Agile', 'code review', 'CI/CD', 'database design', 'AI agent orchestration'],
  },
];
