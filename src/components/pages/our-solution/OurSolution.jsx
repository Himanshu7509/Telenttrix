import React from 'react'
import HeroSection from './oursolutionComponents/HeroSection'
import InnovativeSolution from './oursolutionComponents/InnovativeSolution'
import WorkForceSolution from './oursolutionComponents/WorkForceSolution'
import CardSection from './oursolutionComponents/CardSection'
import ManageService from './oursolutionComponents/ManageService'
import OurApproach from './oursolutionComponents/OurApproach'
import PreferredChoice from './oursolutionComponents/PreferredChoice'


const OurSolution = () => {
  return (
    <div className='mt-12 sm:mt-22'>

      <HeroSection/>
      <InnovativeSolution/>
      <WorkForceSolution/>
      <CardSection/>
      <ManageService/>
      <OurApproach/>
      <PreferredChoice/>
     
    </div>
  )
}

export default OurSolution