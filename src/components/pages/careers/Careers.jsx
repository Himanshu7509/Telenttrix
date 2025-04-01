import React from 'react'
import HeroSec from './careerComponents/HeroSec'
import OurBenefits from './careerComponents/OurBenefits'
import Certification from './careerComponents/Certification'
import OurTalent from './careerComponents/OurTalent'
import TeamGallery from './careerComponents/TeamGallery'
import Pace from './careerComponents/Pace'
import OurValues from './careerComponents/OurValues'
import OurCulture from './careerComponents/OurCulture'


const Careers = () => {
  return (
    <div >
   
        <HeroSec/>
        <Certification/>
        <OurTalent/>
        <TeamGallery/>
        <OurCulture/>
        <OurValues/>
        <OurBenefits/>
        <Pace/>
 
    </div>
  )
}

export default Careers