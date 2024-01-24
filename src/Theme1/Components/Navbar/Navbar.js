import { Container, Grid } from '@mui/material'
import React, { useState,useContext } from 'react'
import logo from '../../../images/logo.png'
import '../components.scss'
import Mainbutton from '../Buttons/Mainbutton'
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '../../../ThemeSetting/ThemeContext'
import Topbar from '../../../Global/Navbar/Topbar'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom'


const Navbar = () => {

    const { setHomepage } = useContext(ThemeContext);
    const [isListVisible, setIsListVisible] = useState(false);
  
    const handleThemeClick = (theme) => {
      setHomepage(theme);
      setIsListVisible(false);
    };
    const toggleListVisibility = () => {
      setIsListVisible((prev) => !prev);
    };

    
  return (
  <>
 
  <div className='navbar--container'>
  <Topbar/>
    <Container>
 
        <div className='navbar--wrapper'>
            <Grid container>
                <Grid xs={2}>
                    <div className='logo--container'>
                        <Link style={{textDecoration:'none'}} to='/'> <img src={logo}/></Link>
                       
                    </div>
                </Grid>
                <Grid xs={7}>
                    <div className='navlinkss--container'>
                        <ul>
                            <li onClick={toggleListVisibility}>Destinations <ExpandMoreIcon/>

                            {isListVisible&&(
                                <ul className='navlinks--subul'>
                                    <Link style={{textDecoration:'none'}} to='/singlepage'>    <li>Pokhara</li></Link>
                            
                                <li>Mustang</li>
                                <li>Chitwan</li>
                                <li>Dolpa</li>
                                </ul>
                            )}
                           
                             </li>
                            <li>Services</li>
                          <Link style={{textDecoration:'none'}} to='/aboutus'><li>About Us</li></Link>  
                          <Link style={{textDecoration:'none'}} to='/contactus'><li>Contact Us</li></Link>  
                        </ul>
                    </div>
                </Grid>
                <Grid xs={3}>
                    <div style={{ display:'flex',paddingTop:'20px',justifyContent:'end',alignItems:'center',gap:'20px',position:'relative',zIndex:'0'}}>


                        {/* <Brightness7Icon   onClick={toggleListVisibility} sx={{color:'#F56960',position:'relative'}}/>
                        {isListVisible && (
        <ul className='themelist'>
          <li onClick={() => handleThemeClick('themeOne')}>Theme One</li>
          <li onClick={() => handleThemeClick('themeTwo')}>Theme Two</li>
          <li onClick={() => handleThemeClick('themeThree')}>Theme Three</li>
        </ul>)} */}
                        
                    <Mainbutton value='Book Now'/>
                    </div>
                    
                </Grid>
            </Grid>
        </div>
    </Container>
  </div>
  </>
  )
}

export default Navbar