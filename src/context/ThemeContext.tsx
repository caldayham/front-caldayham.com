'use client';

import React, { createContext, useState } from 'react';

interface ThemeContextProps {
    mode: string,
    toggle: () => void
  }
  
  export const ThemeContext = createContext<ThemeContextProps>({ mode: 'dark', toggle: () => {} });
  
  export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
      const [mode, setMode] = useState<string>('dark');
  
      const toggle = () => {
          setMode((prev) => (prev === "dark" ? "light" : "dark"));
      };
  
      return (
          <ThemeContext.Provider value={{ mode, toggle }}>
              <div className={`${mode + '-theme'} theme`}>
                  {children}
              </div>
          </ThemeContext.Provider>
      );
  };