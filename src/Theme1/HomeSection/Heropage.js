import React from 'react'
import Mainbutton from '../Components/Buttons/Mainbutton'
import { Container } from '@mui/system'
import './Homesection.scss'


const Heropage = () => {
  return (
    <>
    <div className='heropagee--container'>
        <Container>
        <div className='heropagee--content'>
                <h1>Travelling Around The World</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
</p>
                <Mainbutton value='Continue Reading'/>
        </div>
        </Container>
    </div>
    </>
  )
}

export default Heropage