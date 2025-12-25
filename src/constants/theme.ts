import { Theme } from "../types/theme";
import { themes } from "../themes";

export type ThemeName = keyof typeof themes;

export const themeNames = Object.keys(themes) as ThemeName[];

export const getRandomTheme = (): ThemeName => {
  const randomIndex = Math.floor(Math.random() * themeNames.length);
  return themeNames[randomIndex];
};

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;

  // Background
  root.style.setProperty('--bg-primary', theme.bg.primary);
  root.style.setProperty('--bg-secondary', theme.bg.secondary);
  root.style.setProperty('--bg-tertiary', theme.bg.tertiary);
  root.style.setProperty('--bg-card', theme.bg.card);

  // Text
  root.style.setProperty('--text-primary', theme.text.primary);
  root.style.setProperty('--text-secondary', theme.text.secondary);
  root.style.setProperty('--text-muted', theme.text.muted);

  // Border
  root.style.setProperty('--border-color', theme.border);

  // Accent scale
  root.style.setProperty('--accent-50', theme.accent[50]);
  root.style.setProperty('--accent-100', theme.accent[100]);
  root.style.setProperty('--accent-200', theme.accent[200]);
  root.style.setProperty('--accent-300', theme.accent[300]);
  root.style.setProperty('--accent-400', theme.accent[400]);
  root.style.setProperty('--accent-500', theme.accent[500]);
  root.style.setProperty('--accent-600', theme.accent[600]);
  root.style.setProperty('--accent-700', theme.accent[700]);
  root.style.setProperty('--accent-800', theme.accent[800]);
  root.style.setProperty('--accent-900', theme.accent[900]);
  root.style.setProperty('--accent-950', theme.accent[950]);

  // Accent alt (for gradients)
  root.style.setProperty('--accent-alt-400', theme.accentAlt[400]);
  root.style.setProperty('--accent-alt-500', theme.accentAlt[500]);
  root.style.setProperty('--accent-alt-600', theme.accentAlt[600]);
};

export const applyThemeByName = (name: ThemeName) => applyTheme(themes[name]);
