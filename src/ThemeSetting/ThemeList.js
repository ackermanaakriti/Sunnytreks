// ThemeList.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
const ThemeList = () => {
  const { setHomepage } = useContext(ThemeContext);

  const handleThemeClick = (theme) => {
    setHomepage(theme);
  };

  return (
    <ul>
      <li onClick={() => handleThemeClick('themeOne')}>Theme One</li>
      <li onClick={() => handleThemeClick('themeTwo')}>Theme Two</li>
      <li onClick={() => handleThemeClick('themeThree')}>Theme Three</li>
    </ul>
  );
};

export default ThemeList;
