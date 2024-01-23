import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Heropage from '../HomeSection/Heropage'
import SearchDestination from '../HomeSection/SearchDestination'
import TopNotchDestination from '../HomeSection/TopNotchDestination'
import AdventureActivity from '../HomeSection/AdventureActivity'
import SpecialTraveloff from '../HomeSection/SpecialTraveloff'
import Footer from '../../Global/Footer'
import TourList from '../HomeSection/TourList'

const Homee = () => {
  return (
    <>
    <Navbar/>
    <Heropage/>
    <SearchDestination/>
    <TopNotchDestination/>
    <AdventureActivity/>
    <SpecialTraveloff/> 
    <TourList/>
    <Footer/>
    
    
    </>
  )
}

export default Homee