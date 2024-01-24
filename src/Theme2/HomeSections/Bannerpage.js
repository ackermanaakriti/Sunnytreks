import { Container } from '@mui/material'
import React from 'react'
import './sections.scss'
import PrimaryButton from '../Components/Buttons/PrimaryButton'

const Bannerpage = () => {
  return (
   <>
   <div className='bannerpage--container'>
    <Container>
        <div className='bannerpage--content'>
            <h1>Welcome to the place where dreams come true</h1>
            <p>Mollit voluptatem  convallis elementum corporis quo veritatis aliquid blandit, blandit torquent,
             odit placeat. Adipiscing repudiandae eius cursus?</p>
        </div>
        <div className='bannerpage--button'>
            <PrimaryButton/>
        </div>
    </Container>
   </div>
   </>
  )
}

export default Bannerpage