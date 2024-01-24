import { Container, Grid } from '@mui/material'
import React from 'react'
import './Homesection.scss'
import SpecialoffCard from '../Components/Cards/SpecialoffCard'
import Mainbutton from '../Components/Buttons/Mainbutton'

const SpecialTraveloff = () => {
  return (
    <>
    <div className='specialoff--container'>
        <Container>
        <h1 className='sections--header ' >Special Travel Offer</h1>
        <p className='p--header'>Mollit voluptatem  convallis elementum corporis quo veritatis aliquid blandit, blandit torquent,
             odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
            <div className='specialoff--wrapper'>
                <Grid container>
                    <Grid md={4}lg={4}  xs={12}>
                    <SpecialoffCard/>
                    </Grid>
                    <Grid md={4} lg={4} xs={12}>
                    <SpecialoffCard/>
                    </Grid>
                    <Grid  md={4} lg={4} xs={12 }>
                    <SpecialoffCard/>
                    </Grid>
                </Grid>
               
              
            </div>
           
        </Container>
    </div>
    </>
  )
}

export default SpecialTraveloff