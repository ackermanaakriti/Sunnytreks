import { Container, Grid } from '@mui/material'
import React from 'react'
import './Homesection.scss'
import img from '../../images/icon10.png'
import img1 from '../../images/icon6.png'
import img2 from '../../images/icon9.png'
import img3 from '../../images/icon8.png'

const AdventureActivity = () => {
  return (
   <>
   <div className='adac--container'>
    <Container>
        
  
        <h1 className='sections--header ' >Adventur And Activity</h1>
        <p className='p--header'>Mollit voluptatem  convallis elementum corporis quo veritatis aliquid blandit, blandit torquent,
             odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
             <div className='adac--wrapper'>
            <Grid container >
                <Grid  sx={{padding:'0px 9px'}} xs={2}>
                    <div className='adac--logo'>
                        <img src={img} />
                        <h3>Adventure</h3>
                        <p>Mollit voluptatem  </p>

                    </div>
                </Grid>
                <Grid sx={{ padding: '0px 9px' }} xs={2}>
                <div className='adac--logo'>
                        <img src={img1} />
                        <h3>Adventure</h3>
                        <p>Mollit voluptatem  </p>

                    </div>
                </Grid>
                <Grid sx={{ padding: '0px 9px' }} xs={2}>
                <div className='adac--logo'>
                        <img src={img2} />
                        <h3>Adventure</h3>
                        <p>Mollit voluptatem  </p>

                    </div>
                </Grid>
                <Grid  sx={{ padding: '0px 9px' }}xs={2}>
                <div className='adac--logo'>
                        <img src={img3} />
                        <h3>Adventure</h3>
                        <p>Mollit voluptatem  </p>

                    </div>
                </Grid>
                <Grid sx={{ padding: '0px 9px' }} xs={2}>
                <div className='adac--logo'>
                        <img src={img} />
                        <h3>Adventure</h3>
                        <p>Mollit voluptatem  </p>

                    </div>
                </Grid>
                <Grid sx={{ padding: '0px 9px' }} xs={2}>
                <div className='adac--logo'>
                        <img src={img} />
                        <h3>Adventure</h3>
                        <p>Mollit voluptatem  </p>

                    </div>
                </Grid>
            </Grid>
        </div>
    </Container>
   </div>
   </>
  )
}

export default AdventureActivity