import React from 'react'
import HomeHero from '../components/hero'
import Services from '../components/services'
import SaleOne from '../components/salesone'
import Steps from '../components/steps'
import Portfolio from '../components/portfolio'
import PfImageSteps from '../components/pfImageSteps'
import SalesTwo from '../components/salesTwo'
import Teams from '../components/teams'
import Achivements from '../components/achivements'
import Blog from '../components/blog'
import Contact from '../components/contact'

const Home = () => {
  return (
    <>
      <main id="home">
        <HomeHero />
        <Services />
        <SaleOne />
        <Steps />
        <Portfolio />
        <PfImageSteps />
        <SalesTwo />
        <Teams />
        <Achivements />
        <Blog />
        <Contact />
      </main>
    </>
  )
}

export default Home