import React, { useEffect } from 'react'
import HeroSection from '../HeroSection/HeroSection'
import AboutUs from '../AboutUs/AboutUs'
import OurServices from '../OurServices/OurServices'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import GetQuotation from '../GetQuotation/GetQuotation'

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <HeroSection />
    <AboutUs />
    <OurServices />
    <WhyChooseUs />
    <GetQuotation />
    </>
  )
}


export default HomePage;
