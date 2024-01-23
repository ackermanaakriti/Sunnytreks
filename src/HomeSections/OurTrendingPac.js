import React from 'react'
import { Container } from '@mui/material'
import OurTrendingPackageCard from '../Components/Cards/OurTrendingPackageCard'
import { OurTrendingPacdata } from '../Data/OurTrendingPackData'
import Bluebutton from '../Components/Button/Bluebutton'

const OurTrendingPac = () => {
  return (
    <>
    <div className='ourtrendingpac--container'>
        <Container>
            <h1 className='section--header'>Our Trending Packages</h1>
            <div className='trendingpackage--cards'>

           {
            OurTrendingPacdata.map((item)=>
            (
              <OurTrendingPackageCard/>
            ))
           }
            </div>
            
        </Container>
        <div style={{display:'flex',margin:'auto',justifyContent:'center'}}>
        <Bluebutton value='Explore More'/>
        </div>
    </div>
    </>
  )
}

export default OurTrendingPac