// Reusable Tailwind CSS class combinations
// Centralized styling constants for consistent design across components

// Accent color utilities using CSS variables
export const accent = {
  text: {
    50: 'text-[var(--accent-50)]',
    100: 'text-[var(--accent-100)]',
    200: 'text-[var(--accent-200)]',
    300: 'text-[var(--accent-300)]',
    400: 'text-[var(--accent-400)]',
    500: 'text-[var(--accent-500)]',
    600: 'text-[var(--accent-600)]',
    700: 'text-[var(--accent-700)]',
    800: 'text-[var(--accent-800)]',
    900: 'text-[var(--accent-900)]',
    950: 'text-[var(--accent-950)]',
  },
  bg: {
    50: 'bg-[var(--accent-50)]',
    100: 'bg-[var(--accent-100)]',
    200: 'bg-[var(--accent-200)]',
    300: 'bg-[var(--accent-300)]',
    400: 'bg-[var(--accent-400)]',
    500: 'bg-[var(--accent-500)]',
    600: 'bg-[var(--accent-600)]',
    700: 'bg-[var(--accent-700)]',
    800: 'bg-[var(--accent-800)]',
    900: 'bg-[var(--accent-900)]',
    950: 'bg-[var(--accent-950)]',
  },
  border: {
    400: 'border-[var(--accent-400)]',
    500: 'border-[var(--accent-500)]',
    600: 'border-[var(--accent-600)]',
  },
  ring: {
    400: 'ring-[var(--accent-400)]',
    500: 'ring-[var(--accent-500)]',
    600: 'ring-[var(--accent-600)]',
  },
} as const;

// Secondary accent for gradients
export const accentAlt = {
  text: {
    400: 'text-[var(--accent-alt-400)]',
    500: 'text-[var(--accent-alt-500)]',
    600: 'text-[var(--accent-alt-600)]',
  },
  bg: {
    400: 'bg-[var(--accent-alt-400)]',
    500: 'bg-[var(--accent-alt-500)]',
    600: 'bg-[var(--accent-alt-600)]',
  },
} as const;

export const gradients = {
  // Primary gradient text (accent -> accent-alt)
  textAccent: 'bg-gradient-to-r from-[var(--accent-400)] to-[var(--accent-alt-400)] bg-clip-text text-transparent',

  // Background gradients
  bgAccent: 'bg-gradient-to-r from-[var(--accent-500)] to-[var(--accent-alt-500)]',
  bgAccentLight: 'bg-gradient-to-r from-[var(--accent-400)] to-[var(--accent-alt-400)]',
  bgAccentSubtle: 'bg-gradient-to-r from-[var(--accent-900)]/20 to-[var(--accent-alt-600)]/20',

  // Vertical gradient for decorative elements
  bgAccentVertical: 'bg-gradient-to-b from-[var(--accent-500)] to-[var(--accent-alt-500)]',
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
  base: 'bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)]',

  // Card with subtle accent gradient and accent border
  gradient: 'bg-gradient-to-r from-[var(--accent-900)]/20 to-[var(--accent-alt-600)]/20 rounded-lg p-6 border border-[var(--accent-500)]/20',

  // Interactive card with hover
  interactive: 'bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] hover:bg-[var(--bg-tertiary)] hover:border-[var(--accent-500)]/50 transition-all duration-300',
} as const;

export const backgrounds = {
  primary: 'bg-[var(--bg-primary)]',
  secondary: 'bg-[var(--bg-secondary)]',
  tertiary: 'bg-[var(--bg-tertiary)]',
  card: 'bg-[var(--bg-card)]',
} as const;

export const focus = {
  ring: 'focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)] focus:border-transparent',
} as const;

// Helper function to combine multiple style constants
export const combineStyles = (...styles: string[]): string => {
  return styles.join(' ');
};

// Text color utilities
export const text = {
  primary: 'text-[var(--text-primary)]',
  secondary: 'text-[var(--text-secondary)]',
  muted: 'text-[var(--text-muted)]',
  hover: 'hover:text-[var(--text-primary)]',
} as const;

// Common background and border utilities
export const surface = {
  nav: 'bg-[var(--bg-primary)]/80 border-b border-[var(--border-color)]',
  hover: 'hover:bg-[var(--bg-tertiary)]',
  border: 'border-[var(--border-color)]',
} as const;

// Form input styling
export const inputs = {
  base: 'bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)]',
} as const;

// Button variants
export const buttons = {
  primary: 'bg-gradient-to-r from-[var(--accent-500)] to-[var(--accent-alt-500)] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105',
  secondary: 'bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-lg hover:bg-[var(--accent-600)] transition-all duration-300',
  ghost: 'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] rounded-lg transition-all duration-300',
} as const;
