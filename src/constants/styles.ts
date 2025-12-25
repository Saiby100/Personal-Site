// Reusable Tailwind CSS class combinations
// Centralized styling constants for consistent design across components

export const gradients = {
  // Primary gradient used for text and accents
  textPurpleCyan: 'bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent',

  // Background gradients
  bgPurpleCyan: 'bg-gradient-to-r from-purple-600 to-cyan-600',
  bgPurpleCyanSubtle: 'bg-gradient-to-r from-purple-600/10 to-cyan-600/10',
  bgPurpleBlue: 'bg-gradient-to-r from-purple-600 to-blue-600',
} as const;

export const transitions = {
  // Hover scale effects
  scaleSmall: 'transition-all duration-300 transform hover:scale-105',
  scaleMedium: 'transition-all duration-300 transform hover:scale-110',

  // Base transition
  base: 'transition-all duration-300',
} as const;

export const layouts = {
  // Section containers
  section: 'py-20 px-4 sm:px-6 lg:px-8',
  containerMedium: 'max-w-6xl mx-auto',
  containerLarge: 'max-w-7xl mx-auto',

  // Section headers
  sectionHeader: 'text-center mb-16',

  // Main heading sizes
  heading: 'text-3xl sm:text-4xl lg:text-5xl font-bold mb-4',
} as const;

export const cards = {
  // Card/box base styles
  base: 'bg-gray-800 rounded-lg border border-gray-700',

  // Card with gradient border
  gradient: 'bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-lg p-6 border border-purple-500/20',
} as const;

export const backgrounds = {
  dark: 'bg-gray-900',
  darkTransparent: 'bg-gray-800/50',
} as const;

export const focus = {
  ring: 'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent',
} as const;

// Helper function to combine multiple style constants
export const combineStyles = (...styles: string[]): string => {
  return styles.join(' ');
};
