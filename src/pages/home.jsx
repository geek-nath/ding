import React from 'react'
import HomeHero from '../components/hero'
import Services from '../components/services'
import SaleOne from '../components/salesone'

const Home = () => {
  return (
    <>
      <main id="home">
        <HomeHero />
        <Services />
        <SaleOne />
      </main>
    </>
  )
}

export default Home