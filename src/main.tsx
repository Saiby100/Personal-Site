import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/theme.css';
import { applyRandomTheme } from './constants/theme';

// Apply random theme and mode on page load
applyRandomTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
