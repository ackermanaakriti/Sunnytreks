// Homepages.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Home from '../Pages/Home';
import Homee from '../Theme1/Pages/Home';
import Homme from '../Theme2/Pages/Homme';

const Homepages = () => {
  const { homepage } = useContext(ThemeContext);

  const renderHomePage = () => {
    switch (homepage) {
      case 'themeOne':
        return <Home/>;
      case 'themeTwo':
        return <Homee/>;
      case 'themeThree':
        return <Homme/>;
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
