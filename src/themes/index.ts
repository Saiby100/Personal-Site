import { midnightTheme } from './midnight';
import { oceanTheme } from './ocean';
import { sunsetTheme } from './sunset';
import { forestTheme } from './forest';
import { roseTheme } from './rose';
import { slateTheme } from './slate';

export const themes = {
  midnight: midnightTheme,
  ocean: oceanTheme,
  sunset: sunsetTheme,
  forest: forestTheme,
  rose: roseTheme,
  slate: slateTheme,
} as const;
