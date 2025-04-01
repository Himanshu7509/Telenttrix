import React from 'react'
import Building from './communityComponent/Building'
import School from './communityComponent/School'
import Contribution from './communityComponent/Contribution'
import Initiatives from './communityComponent/Initiatives'
import Sustainability from './communityComponent/Sustainablity'


const Community = () => {
  return (
    <div className='mt-12 sm:mt-22'>

        <Building/>
        <School/>
        <Contribution/>
        <Initiatives/>
        <Sustainability/>
    
    </div>
  )
}

export default Community