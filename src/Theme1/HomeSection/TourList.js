import { Container, Grid } from '@mui/material'
import React from 'react'
import TourListCard from '../Components/Cards/TourListCard'
import './Homesection.scss'

const TourList = () => {
  return (
   <>
   <div className='tourlist--container'>
    <Container>
    <h1 className='sections--header ' >Our Tour and Treks</h1>
        <p className='p--header'>Mollit voluptatem  convallis elementum corporis quo veritatis aliquid blandit, blandit torquent,
             odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
             <div style={{paddingTop:'40px'}}>
          <Grid container>
            <Grid xs={4}>
                <TourListCard/>
            </Grid>
            <Grid xs={4}>
                <TourListCard/>
            </Grid>
            <Grid xs={4}>
                <TourListCard/>
            </Grid>
          </Grid>
          </div>
    </Container>
   </div>
   </>
  )
}

export default TourList