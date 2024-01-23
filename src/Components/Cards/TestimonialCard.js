import React from 'react'
import testimonial from '../../images/testimoniall.jpg'
import './Card.scss'

const TestimonialCard = () => {
  return (
   <>
  <div className='testimonialcard--container'>
    <div className='testimonialcard--img'>
        <img src={testimonial}/>
        <div className='info--testimonial'>
        <p className='name--testimonial'>Esther Hills</p>
        <p className='work--testimonial'>Lead Intranet Technician</p>
        </div>
        
    </div>
    <div className='testimonial--description'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam  Integer nec odio. Praesent libero. Sed cursus ante dapibus diam </p>
       

    </div>
  </div>

   </>
  )
}

export default TestimonialCard