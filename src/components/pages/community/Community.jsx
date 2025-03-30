import React from 'react'
import Building from './communityComponent/Building'
import School from './communityComponent/School'
import Contribution from './communityComponent/Contribution'
import Initiatives from './communityComponent/Initiatives'
import Sustainability from './communityComponent/Sustainablity'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'

const Community = () => {
  return (
    <div className='mt-4'>
      <Header/>
        <Building/>
        <School/>
        <Contribution/>
        <Initiatives/>
        <Sustainability/>
        <Footer/>
    </div>
  )
}

export default Community