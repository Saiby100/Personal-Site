export interface BaseTheme {
  bg: {
    primary: string;
    secondary: string;
    tertiary: string;
    card: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  border: string;
}

export const darkMode: BaseTheme = {
  bg: {
    primary: '#0f1012',
    secondary: '#16181a',
    tertiary: '#1e2023',
    card: '#16181a',
  },
  text: {
    primary: '#f0f2f4',
    secondary: '#9ca3af',
    muted: '#6b7280',
  },
  border: '#2a2d32',
};

export const lightMode: BaseTheme = {
  bg: {
    primary: '#ffffff',
    secondary: '#f9fafb',
    tertiary: '#f3f4f6',
    card: '#ffffff',
  },
  text: {
    primary: '#111827',
    secondary: '#4b5563',
    muted: '#9ca3af',
  },
  border: '#e5e7eb',
};

export const baseModes = {
  dark: darkMode,
  light: lightMode,
} as const;

export type ModeName = keyof typeof baseModes;
