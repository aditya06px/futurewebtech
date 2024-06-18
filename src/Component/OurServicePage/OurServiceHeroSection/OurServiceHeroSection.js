import React from 'react'
import './OurServiceHeroSection.css'

function OurServiceHeroSection() {
  return (
    <div className="our-service-hero-section">
      <div className="our-service-hero-section-breadcrumb">
        <a  href="/">Home</a> &gt; <span>Services</span>
      </div>
      <h1 className="our-service-hero-section-title">Our Service</h1>
      <p className="our-service-hero-section-info">Transforming Visions into Digital Realities: Discover Our Expertise</p>
      <div className="our-service-hero-section-scrolling-links">
        <div className="our-service-hero-section-links">
          <a href="#service4">UI/UX Design</a>
          <a href="#service1">Graphic Design</a>
          <a href="#service2">Digital Marketing</a>
          <a href="#service3">Web Developement</a>
          <a href="#service5">Mobile App Developement</a>
        </div>
      </div>
    </div>
  )
}

export default OurServiceHeroSection

