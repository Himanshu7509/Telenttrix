import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Footer from './components/common/footer/Footer'
import Header from './components/common/header/Header'
import OurSolution from './components/pages/our-solution/OurSolution'
import Careers from './components/pages/careers/Careers'
import Community from './components/pages/community/Community'
import AboutUs from './components/pages/about-us/AboutUs'
import Resources from './components/pages/resources/Resources'
import ContactUs from './components/pages/contact-us/ContactUs'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/our-solution' element={<OurSolution/>} />
        <Route path='/career' element={<Careers/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App