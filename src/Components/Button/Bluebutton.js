import React from 'react'
import './Bluebutton.scss'

const Bluebutton = ({value}) => {
  return (
   <>
   <button className='btn--container'>
    <p> {value}</p>
   </button>
   </>
  )
}

export default Bluebutton