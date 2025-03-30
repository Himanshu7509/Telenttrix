import React from 'react'
import HeroSec from './aboutComponents/HeroSec'
import Advantage from './aboutComponents/Advantage'
import GreatCertification from './aboutComponents/GreatCertification'
import OurCards from './aboutComponents/OurCards'
import Empowering from './aboutComponents/Empowering'
import OurLeadership from './aboutComponents/OurLeadership'
import Winning from './aboutComponents/Winning'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'

const AboutUs = () => {
  return (
    <div className='mt-4'>
      <Header/>
        <HeroSec/>
        <Advantage/>
        <GreatCertification/>
        <OurCards/>
        <Empowering/>
        <OurLeadership/>
        <Winning/>
        <Footer/>
    </div>
  )
}

export default AboutUs