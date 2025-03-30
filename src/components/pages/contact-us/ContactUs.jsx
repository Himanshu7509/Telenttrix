import React from 'react'
import HeroSec from './contact-usComponents/HeroSec'
import GlobalSec from './contact-usComponents/GlobalSec'
import UsaBranches from './contact-usComponents/UsaBranches'
import CountriesBranches from './contact-usComponents/CountriesBranches'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'

const ContactUs = () => {
  return (
    <div className='mt-6'>
      <Header/>
        <HeroSec/>
        <GlobalSec/>
        <UsaBranches/>
        <CountriesBranches/>
        <Footer/>
    </div>
  )
}

export default ContactUs