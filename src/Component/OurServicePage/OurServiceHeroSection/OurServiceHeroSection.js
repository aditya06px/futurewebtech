import React from 'react'
import { Link } from 'react-router-dom'
import './OurServiceHeroSection.css'

function OurServiceHeroSection() {
  return (
    <div className="our-service-hero-section">
      <div className="our-service-hero-section-breadcrumb">
        <Link  to="/">Home</Link> &gt; <span>Services</span>
      </div>
      <h1 className="our-service-hero-section-title">Our Service</h1>
      <p className="our-service-hero-section-info">Transforming Visions into Digital Realities: Discover Our Expertise</p>
      <div className="our-service-hero-section-scrolling-links">
        <div className="our-service-hero-section-links">
          <Link to="#ui-ux">UI/UX Design</Link>
          <Link to="#graphic-design">Graphic Design</Link>
          <Link to="#digital-marketing">Digital Marketing</Link>
          <Link to="#web-development">Web Developement</Link>
          <Link to="#mobile-app-development">Mobile App Developement</Link>
        </div>
      </div>
    </div>
  )
}

export default OurServiceHeroSection

