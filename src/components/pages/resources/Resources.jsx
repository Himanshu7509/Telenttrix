import React from 'react'
import Articles from './resourcesComponent/Articles'
import ManageServiceCards from './resourcesComponent/ManageServiceCards'

const Resources = () => {
  return (
    <div className='mt-16'>
        <Articles/>
        <ManageServiceCards/>
    </div>
  )
}

export default Resources