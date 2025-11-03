import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

type Theme = 'dark' | 'light';

export const useTheme = (): { theme: Theme; setTheme: (theme: Theme) => void } => {
  const [storedTheme, setStoredTheme] = useLocalStorage<Theme>('theme', 'light');
  const [theme, setTheme] = useState<Theme>(storedTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    setStoredTheme(theme);
  }, [theme, setStoredTheme]);

  return {
    theme,
    setTheme,
  };
};