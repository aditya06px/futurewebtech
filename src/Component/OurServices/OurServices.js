import React from 'react'
import './OurServices.css'
import { ReactComponent as UiUxLogo } from '../../assests/icons/uiux.svg'
import { ReactComponent as DigitalMarketingLogo } from '../../assests/icons/digital-marketing.svg'
import { ReactComponent as GraphicDesignLogo } from '../../assests/icons/graphic-design.svg'
import { ReactComponent as MobileAppDevLogo } from '../../assests/icons/mobile-app-development.svg'
import { ReactComponent as WebDevLogo } from '../../assests/icons/web-development.svg'


function OurServices() {
    return (
        <section className="our-services">

            <h2> Our Services </h2>
            <div className="our-services-container">

                <div className="our-services-top-container"> 

                <article className="card">
                    <div>
                        <div className='our-services-logo'>
                            <UiUxLogo />
                        </div>
                        <h3>UI/UX Design</h3>
                        <p>Our UI/UX design services focus on creating intuitive and engaging user experiences that delight and inspire. From wireframing and prototyping to user testing and optimization, we ensure that every aspect of your digital product is user-friendly and visually stunning.</p>
                    </div>
                    <button>Learn More</button>
                </article>

                <article className="card second-card">
                    <div>
                        <div className='our-services-logo'>
                            <GraphicDesignLogo  />
                        </div>
                        <h3>Graphic Design</h3>
                        <p>Our graphic design services encompass everything from branding and logo design to marketing collateral and digital assets. We specialize in creating visually impactful designs that communicate your brand's message and captivate your audience.</p>
                    </div>
                    <button>Learn More</button>
                </article>


                <article className="card">
                    <div>
                        <div className='our-services-logo'>
                            <WebDevLogo />
                        </div>
                        <h3>Web Developement</h3>
                        <p>Our web development services cover the full spectrum of website development, from front-end design and development to back-end programming and database integration. We leverage the latest technologies and best practices to build responsive, scalable, and secure websites read more</p>
                    </div>
                    <button>Learn More</button>
                </article>

                </div>

                <div className="our-services-bottom-container"> 

                <article className="card fourth-card">
                    <div>
                        <div className='our-services-logo'>
                            <DigitalMarketingLogo  />
                        </div>
                        <h3>Digital Marketing</h3>
                        <p>Our digital marketing services are designed to help you reach and engage your target audience effectively across various digital channels. From search engine optimization (SEO) and social media marketing to email campaigns and pay-per-click (PPC) read more</p>
                    </div>
                    <button>Learn More</button>
                </article>


                <article className="card last-card">
                    <div>
                        <div className='our-services-logo'>
                            <MobileAppDevLogo  />
                        </div>
                        <h3>Mobile App Developement</h3>
                        <p>Our mobile app development services focus on turning your ideas into innovative and user-friendly mobile applications that engage and delight users. From concept to launch, we collaborate closely with you to create custom solutions that meet your business objectives and exceed user expectations.</p>
                    </div>
                    <button>Learn More</button>
                </article>
                </div>
            </div>


        </section>
    )
}

export default OurServices
