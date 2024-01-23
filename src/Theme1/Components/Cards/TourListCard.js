import React from 'react'
import Mainbutton from '../Buttons/Mainbutton'
import StarIcon from '@mui/icons-material/Star';
import '../components.scss'
import img from '../../../images/mustang.jpg'


const TourListCard = () => {
  return (
    <>
    <div className='tourlistcard--container'>
        <img src={img}/>
        <div className='tourlistcard--content'>
            <h2>
              Annapurna Trekking
            </h2>
            <p> Solukhumbu, Nepal</p>
            <div style={{display:'flex',justifyContent:'space-between',padding:'10px',alignItems:'center'}}>
                <div>
                <StarIcon sx={{color:'gray',fontSize:'30px'}}/> <StarIcon sx={{color:'gray',fontSize:'30px'}}/> <StarIcon sx={{color:'gray',fontSize:'30px'}}/>
                </div>
            
            <Mainbutton value='Explore'/>
            </div>
          

        </div>
    </div>
    </>
  )
}

export default TourListCard