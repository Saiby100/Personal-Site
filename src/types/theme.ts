export interface Theme {
  name: string;
  // Accent color scale (Tailwind-like 50-950)
  accent: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  // Secondary accent for gradients
  accentAlt: {
    400: string;
    500: string;
    600: string;
  };
}
