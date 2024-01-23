import React from 'react'
import Heropage from '../HomeSections/Heropage/Heropage'
import TopDestinationVacation from '../HomeSections/TopDestinationVac/TopDestinationVacation'
import TdCarousel from '../HomeSections/TopDestinationVac/TopDesCarousel'
import MyCarousel from '../HomeSections/TopDestinationVac/TopDesCarousel'
import MajesticPeaks from '../HomeSections/MajesticPeaks'
import OurTrendingPac from '../HomeSections/OurTrendingPac'
import Footer from '../Global/Footer'
import Testimonials from '../HomeSections/Testimonials'

const Home = () => {
  return (
    <>
    <Heropage/>
    <TopDestinationVacation/>
    <MajesticPeaks/>
    <OurTrendingPac/>
    <Testimonials/>
    <Footer/>
   
    </>
  )
}

export default Home