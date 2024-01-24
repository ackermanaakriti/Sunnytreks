import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Heropage from '../HomeSection/Heropage'
import SearchDestination from '../HomeSection/SearchDestination'
import TopNotchDestination from '../HomeSection/TopNotchDestination'
import AdventureActivity from '../HomeSection/AdventureActivity'
import SpecialTraveloff from '../HomeSection/SpecialTraveloff'
import Footer from '../../Global/Footer'
import TourList from '../HomeSection/TourList'
import Layout from '../Layout'

const Homee = () => {
  return (
    <>
    <Layout>
    <Heropage/>
    <SearchDestination/>
    <TopNotchDestination/>
    <AdventureActivity/>
    <SpecialTraveloff/> 
    <TourList/>
    </Layout>
    
    
    
    </>
  )
}

export default Homee