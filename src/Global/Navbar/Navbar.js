import React from 'react'
import Topbar from './Topbar'
import Navlinks from './Navlinks'
import './Navbar.scss'

const Navbar = () => {
  return (
   <>
   <div className='header--wrapper'>

   <Topbar/>
   <Navlinks/>
   </div>
   </>
  )
}

export default Navbar