// ThemeProvider.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [homepage, setHomepage] = useState('themeOne');

  const contextValue = {
    homepage,
    setHomepage,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
