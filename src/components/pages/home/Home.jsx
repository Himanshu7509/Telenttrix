import React from 'react'
import HeroSec from './homeComponents/HeroSec'
import CountriesComponent from './homeComponents/CountriesComponent'
import AchievementComponent from './homeComponents/AchievementComponent'
import WhatWeOffer from './homeComponents/WhatWeOffer'
import WhyArtech from './homeComponents/WhyArtech'
import CertificationComponent from './homeComponents/CertificationComponent'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'


const Home = () => {
  return (
    <>
    <Header/>
      <HeroSec/>
      <CountriesComponent/>
      <AchievementComponent/>
      <WhatWeOffer/>
      <WhyArtech/>
      <CertificationComponent/>
      <Footer/>
    </>
  )
}

export default Home