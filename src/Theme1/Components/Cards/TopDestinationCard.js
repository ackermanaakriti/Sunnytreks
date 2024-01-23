import React from 'react'
import img from '../../../images/pokhara.jpg'
import '../components.scss'
import StarIcon from '@mui/icons-material/Star';
 
 export const TopDestinationCard = () => {
  return (
    <>
    <div className='tndcard--container'>
        <img src={img}/>
        <div className='overlay'></div>
        <button>Pokhara</button>
        <div className='tndcard--content'>
            <p>Disney Land</p>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>

        </div>
    </div>
        </>
  )
}

export const TopDestinationCardFullh = () => {
    return (
      <>
      <div className='tndcardfullh--container'>
          <img src={img}/>
          <div className='overlay'></div>
          <button>Pokhara</button>
          <div className='tndcard--content'>
              <p>Disney Land</p>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
  
          </div>
      </div>
          </>
    )
  }

