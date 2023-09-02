import React from 'react'
import HomeHero from '../components/hero'
import Services from '../components/services'
import SaleOne from '../components/salesone'
import Steps from '../components/steps'
import Portfolio from '../components/portfolio'

const Home = () => {
  return (
    <>
      <main id="home">
        <HomeHero />
        <Services />
        <SaleOne />
        <Steps />
        <Portfolio />
      </main>
    </>
  )
}

export default Home