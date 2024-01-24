import { Container } from '@mui/material'
import React from 'react'
import Layout from '../../Layout'
import '../Pages.scss'
import BestinMarket from './BestinMarket'
import Testimonials from '../../../HomeSections/Testimonials'
import Testimonialls from './Testimonialls'

const Aboutus = () => {
  return (
    <>
    <Layout>
    <div className='aboutus--container'>
        <Container>
            <div className='aboutus--content'>
            <h1 className='pages--header'>About Us</h1>
            <p className='pages--subheader'>orem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        
        </Container>
      
    </div>
    <BestinMarket/>
   <Testimonialls/>
    </Layout>
    </>
  )
}

export default Aboutus