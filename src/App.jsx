import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Footer from './components/common/footer/Footer'
import Header from './components/common/header/Header'
import OurSolution from './components/pages/our-solution/OurSolution'
import Careers from './components/pages/careers/Careers'


const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/our-solution' element={<OurSolution/>} />
        <Route path='/career' element={<Careers/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App