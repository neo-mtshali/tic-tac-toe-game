import React, { createContext, useState, useCallback, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from '../styles/themes'; 

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  }, [currentTheme]);

  const value = useMemo(() => ({
    currentTheme,
    toggleTheme,
  }), [currentTheme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={themes[currentTheme]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};