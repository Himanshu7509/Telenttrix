import React from 'react'
import HeroSec from './contact-usComponents/HeroSec'
import GlobalSec from './contact-usComponents/GlobalSec'
import UsaBranches from './contact-usComponents/UsaBranches'
import CountriesBranches from './contact-usComponents/CountriesBranches'


const ContactUs = () => {
  return (
    <div className='mt-12 sm:mt-22'>
      
        <HeroSec/>
        <GlobalSec/>
        <UsaBranches/>
        <CountriesBranches/>
        
    </div>
  )
}

export default ContactUs