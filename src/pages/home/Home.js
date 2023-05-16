import React from 'react'
import HomeAbout from './HomeAbout'
import Hero from './Hero'
import HomeServices from './HomeServices'

export const Home = () => {
  return (
    <div>
      <Hero />
      <HomeServices />
      <HomeAbout />
    </div>
  )
}

export default Home
