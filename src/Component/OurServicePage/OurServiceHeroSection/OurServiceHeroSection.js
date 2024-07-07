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
    </div>
  )
}

export default OurServiceHeroSection

