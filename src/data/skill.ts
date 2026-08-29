export interface Skill {
  label: string;
  /** Present = also shown in the glance view; `label` overrides the chip text. */
  glance?: { label?: string };
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

const PRACTICES = 'Practices';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: [
      { label: 'Python', glance: {} },
      { label: 'JavaScript', glance: {} },
      { label: 'TypeScript', glance: {} },
      { label: 'Java' },
      { label: 'C' },
      { label: 'Kotlin' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { label: 'Lowdefy' },
      { label: 'React', glance: {} },
      { label: 'FastAPI' },
      { label: 'Flask' },
      { label: 'Express' },
      { label: 'Next.js' },
    ],
  },
  {
    title: 'Databases & tools',
    items: [
      { label: 'PostgreSQL', glance: {} },
      { label: 'MongoDB', glance: {} },
      { label: 'SQL', glance: {} },
      { label: 'Git', glance: {} },
      { label: 'Docker', glance: {} },
      { label: 'Neovim' },
      { label: 'JIRA', glance: {} },
      { label: 'Figma' },
    ],
  },
  {
    title: PRACTICES,
    items: [
      { label: 'Agile', glance: {} },
      { label: 'code review', glance: {} },
      { label: 'CI/CD', glance: {} },
      { label: 'database design', glance: {} },
      {
        label: 'AI agent orchestration',
        glance: { label: 'agent orchestration through the development lifecycle' },
      },
    ],
  },
];

const chipText = (skill: Skill) => skill.glance?.label ?? skill.label;

/** Chips for the glance skills card. Practices read as prose instead — see below. */
export const glanceSkills: string[] = skillGroups
  .filter((group) => group.title !== PRACTICES)
  .flatMap((group) => group.items)
  .filter((skill) => skill.glance)
  .map(chipText);

export const glancePractices: string = (
  skillGroups.find((group) => group.title === PRACTICES)?.items ?? []
)
  .filter((skill) => skill.glance)
  .map(chipText)
  .join(' · ');
