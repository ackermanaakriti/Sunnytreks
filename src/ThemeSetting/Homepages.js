// Homepages.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Home from '../Pages/Home';
import Homee from '../Theme1/Pages/Home';

const Homepages = () => {
  const { homepage } = useContext(ThemeContext);

  const renderHomePage = () => {
    switch (homepage) {
      case 'themeOne':
        return <Home/>;
      case 'themeTwo':
        return <Homee/>;
      case 'themeThree':
        return 'hfhfh';
      default:
        return null;
    }
  };

  return (
    <div>
      
      {renderHomePage()}
    </div>
  );
};

export default Homepages;
