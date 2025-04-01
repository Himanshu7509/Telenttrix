import React from 'react'
import HeroSec from './homeComponents/HeroSec'
import CountriesComponent from './homeComponents/CountriesComponent'
import AchievementComponent from './homeComponents/AchievementComponent'
import WhatWeOffer from './homeComponents/WhatWeOffer'
import WhyArtech from './homeComponents/WhyArtech'
import CertificationComponent from './homeComponents/CertificationComponent'



const Home = () => {
  return (
    <div className='mt-12 sm:mt-22'>
   
      <HeroSec/>
      <CountriesComponent/>
      <AchievementComponent/>
      <WhatWeOffer/>
      <WhyArtech/>
      <CertificationComponent/>
      
    </div>
  )
}

export default Home