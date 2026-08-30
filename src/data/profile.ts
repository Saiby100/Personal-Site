export const profile = {
  name: 'Salahuddin Saiet',
  role: 'Software Developer',
  location: 'Cape Town',
  availability: 'Open to work in Cape Town or remote.',
  // Prose rather than computed from a start date — a floored year count would
  // render "two years" and contradict the sentence. Both views read these; the
  // detail page gets a longer summary of its own later.
  summary: {
    paragraphs: [
      'Software developer with experience building internal business tooling and streamlining complex business processes. I also lead project work end to end. From planning and scoping with clients to partitioning features for my team to work as efficiently as possible.',
      'I am experienced in agent orchestration throughout the development lifecycle in a production environment. From designing and architecting new features to implementation, reviewing and testing. My favourite tools include a highly customised tmux configuration, Neovim for coding, and Obsidian for research and notes.',
    ],
  },
};

export const links = {
  email: 'salahuddinsaiet.10@gmail.com',
  github: 'https://github.com/Saiby100',
  linkedin: 'https://linkedin.com/in/salahuddin-saiet-2a7190241',
  cv: '/salahuddin-saiet-cv.pdf',
  // phone: '061 403 9272', // uncomment to publish a tel: link in both views
};
