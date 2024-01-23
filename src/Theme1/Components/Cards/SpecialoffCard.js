import React from 'react'
import '../components.scss'
import img from '../../../images/img10.jpg'

const SpecialoffCard = () => {
  return (
    <>
    <div className='specialoffcard--container'>
        <img src={img}/>
        <span>20% </span>
        <div className='specialoffcard--content'>
            <h4>Pokhara</h4>
            <h2>Experience the natural beauty of glacier</h2>
            <h3>Price:$2000</h3>
        </div>


    </div>
    </>
  )
}

export default SpecialoffCard