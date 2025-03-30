import React from 'react'
import HeroSection from './oursolutionComponents/HeroSection'
import InnovativeSolution from './oursolutionComponents/InnovativeSolution'
import WorkForceSolution from './oursolutionComponents/WorkForceSolution'
import CardSection from './oursolutionComponents/CardSection'
import ManageService from './oursolutionComponents/ManageService'
import OurApproach from './oursolutionComponents/OurApproach'
import PreferredChoice from './oursolutionComponents/PreferredChoice'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'

const OurSolution = () => {
  return (
    <>
    <Header/>
      <HeroSection/>
      <InnovativeSolution/>
      <WorkForceSolution/>
      <CardSection/>
      <ManageService/>
      <OurApproach/>
      <PreferredChoice/>
      <Footer/>
    </>
  )
}

export default OurSolution