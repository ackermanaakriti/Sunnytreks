import { Container,Grid } from '@mui/material'
import React from 'react'
import img from '../../../images/logo.png'
import '../Components.scss'

const Navbar = () => {
  return (
    <>
    <div className='navbar--container'>
        <Container>
            <div className='navbar--wrapper'>
                <Grid container>
                    <Grid xs={2}>
                        <div className='logo--containerr'>
                            <img src={img}/>
                        </div>
                    </Grid>
                    <Grid xs={10}></Grid>
                   
                </Grid>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Navbar