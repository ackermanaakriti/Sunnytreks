import React from 'react'
import img from  '../../images/dolpa.jpeg'
import './Card.scss'

const TopDestinationCard = ({item}) => {
  return (
   <>
   <div className='tdcard--container'>
   <img src={img} alt='card-img'/>
     <div className='tdcard--content'>
       
        <p> {item.title}</p>
     </div>
   </div>
   </>
  )
}

export default TopDestinationCard