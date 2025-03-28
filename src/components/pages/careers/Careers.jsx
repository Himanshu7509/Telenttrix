import React from 'react'
import HeroSec from './careerComponents/HeroSec'
import OurBenefits from './careerComponents/OurBenefits'
import Certification from './careerComponents/Certification'
import OurTalent from './careerComponents/OurTalent'
import TeamGallery from './careerComponents/TeamGallery'

const Careers = () => {
  return (
    <>
        <HeroSec/>
        <Certification/>
        <OurTalent/>
        <TeamGallery/>
        <OurBenefits/>
    </>
  )
}

export default Careers