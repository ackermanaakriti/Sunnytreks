import { Container, Grid } from '@mui/material'
import React from 'react'
import './Homesection.scss'
import  { TopDestinationCard, TopDestinationCardFullh } from '../Components/Cards/TopDestinationCard'
import Mainbutton from '../Components/Buttons/Mainbutton'

const TopNotchDestination = () => {
  return (
    <>
    <div className='topnotchdes--container'>
        <Container>
        <h1  className='sections--header ' >Top Notch Destinations</h1>
            <div className='topnotchdes--wrapper'>
                
            
            <Grid container spacing={2}>
              <Grid xs={7}>
                <div style={{display:'flex',gap:'30px'}} >
                  <TopDestinationCardFullh/>
                  <TopDestinationCardFullh/>
                </div>
              </Grid>
              <Grid xs={5}>
              <div  style={{display:'flex',gap:'30px',flexDirection:'column',marginLeft:'30px'}}>
              <TopDestinationCard/>
                   <TopDestinationCard/>
              </div>
              </Grid>
            </Grid>
            </div>
            <div style={{marginTop:'50px'}}>
            <Mainbutton value='More Destination'/>
            </div>
            
        </Container>
        
        
    </div>
    </>
  )
}

export default TopNotchDestination