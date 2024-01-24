// Layout.js
import React from 'react';
import Navbar from '../Theme1/Components/Navbar/Navbar'
import Footer from './Components/Footer';


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer/>
      
    </div>
  );
};

export default Layout;
