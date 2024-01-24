import React from 'react'
import { Router as BrowserRouter,Route, Routes} from 'react-router-dom'
import Aboutus from '../Pages/Aboutus/Aboutus'
import Homepages from '../../ThemeSetting/Homepages'
import SinglePage from '../Pages/SinglePage'
import Contactus from '../Pages/Contactus'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Homepages/>}/>
        <Route  path='/aboutus' element={<Aboutus/>}/>
        <Route  path='/singlepage' element={<SinglePage/>}/>
        <Route  path='/contactus' element={<Contactus/>}/>
    </Routes>
    </>
  )
}

export default Router