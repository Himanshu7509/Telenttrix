import React from 'react'
import Articles from './resourcesComponent/Articles'
import ManageServiceCards from './resourcesComponent/ManageServiceCards'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'

const Resources = () => {
  return (
    <div className='mt-16'>
      <Header/>
        <Articles/>
        <ManageServiceCards/>
        <Footer/>
    </div>
  )
}

export default Resources