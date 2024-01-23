import { Container } from '@mui/material'
import React from 'react'
import './Heropage.scss'
import HeropSearch from './HeropSearch'
import TopDestinationVacation from '../TopDestinationVac/TopDestinationVacation'
import Navbar from '../../Global/Navbar/Navbar'
import HeropageSearch from './test'

const Heropage = () => {
  return (
   <>
   <Navbar/>
   <div className='heropage--container'>
    <Container>
      <div className='heropage--content'>
      <h1>Your Friend for <span>Travelling</span> </h1>
        <p>Welcome to cozy cabin nestled in the heart of the mountains! <br></br>
        Our cabin is the perfect gateway for those seeking peace and relaxation in a natural</p>
      </div>
        
    </Container>
   </div>
<HeropageSearch/>
   
   </>
  )
}

export default Heropage