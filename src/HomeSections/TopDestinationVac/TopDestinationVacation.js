import { Container } from '@mui/material'
import React from 'react'
import './TopDestination.scss'
import TopDesCarousel from './TopDesCarousel'
import TdCarousel from './TopDesCarousel'
import Bluebutton from '../../Components/Button/Bluebutton'

const TopDestinationVacation = () => {
  return (
   <div className='tdv--container'>
    <Container>
        <h1 className='section--header'>Top Vacation Destination</h1>
        <TdCarousel/>
        <div style={{display:'flex',margin:'auto',justifyContent:'center'}}>
        <Bluebutton value='Explore More'/>
        </div>
    </Container>
   </div>
  )
}

export default TopDestinationVacation