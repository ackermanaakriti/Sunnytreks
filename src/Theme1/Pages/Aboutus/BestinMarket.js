import React from 'react'
import '../Pages.scss'
import { Container,Grid } from '@mui/material'
import img from '../../../images/icon16.png'
import img2 from '../../../images/icon15.png'
import img3 from '../../../images/icon17.png'


const BestinMarket = () => {
  return (
    <>
    <div className='bestinmarkte--container'>
        <Container>
            <div className='header--info'>
            <h1 className='sections--header'>Our agency has been best in the market.</h1>
            {/* <p className='p--headerr'>Mollit voluptatem  convallis elementum corporis quo veritatis aliquid blandit, blandit torquent,
             odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p> */}
            </div>

            <div className='ourser'>
                <Grid container>
                    <Grid xs={4}>
                        <div className='about--service'>
                            <div className='about--service--icon'>
                                <img src={img}/>
                            </div>
                            <div className='about--service--content'>
                                <h4>PERSONAL SERVICE</h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>          
                             </div>
                        </div>
                    </Grid>
                    <Grid xs={4}>
                    <div className='about--service'>
                            <div className='about--service--icon'>
                                <img src={img2}/>
                            </div>
                            <div className='about--service--content'>
                                <h4>AFFORDABLE PRICE</h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>          
                             </div>
                        </div>
                    </Grid>
                    <Grid xs={4}>
                    <div className='about--service'>
                            <div className='about--service--icon'>
                                <img src={img3}/>
                            </div>
                            <div className='about--service--content'>
                                <h4>PERSONAL SERVICE</h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>          
                             </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    </div>
    </>
  )
}

export default BestinMarket