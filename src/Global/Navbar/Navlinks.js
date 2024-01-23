import { Container,Grid } from '@mui/material'
import React from 'react'
import logo from '../../images/logo.png'
import './Navbar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';


const Navlinks = () => {
  return (
   <>
   <div className='navlinks--container'>
    <Container>
        <Grid container>
            <Grid xs={2}>
                <div className='logo--container'>
                    <img src={logo}/>
                </div>

            </Grid>
            <Grid xs={8}>
                <div className='ul--navlinks'>
                    <ul>
                        <li>Destinations <ExpandMoreIcon/></li>
                        <li>Activities <ExpandMoreIcon/></li>
                        <li>Seasons <ExpandMoreIcon/></li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </Grid>
            <Grid xs={2}>
                <div style={{display:'flex',justifyContent:'end',padding:'12px 0px'}}>
                <button className='btn--navbar'> <GpsFixedIcon/> Customize Tour</button>
                </div>
            </Grid>
        </Grid>
    </Container>
   
   </div>
   </>
  )
}

export default Navlinks