import React from 'react'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Renaldetails from '../components/Renaldetails'
import Renalhospital from '../components/Renalhospital'
import Aboutrenal from '../components/Aboutrenal'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Sidebar />
      <Hero />
      <Renaldetails />
      <Renalhospital />
      <Aboutrenal />
      <Slider />
    </div>
  )
}

export default Home
