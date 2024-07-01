import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './AboutUsPage.css';
import aboutus from '../../assests/about.jpg'

const AboutUsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="about-us-page">
           
           <div className='abous-us-hero-section'> 
            <div className='abous-us-hero-section-item'>
                <img src={aboutus} />
            </div>
            <header className='abous-us-hero-section-item header'>
                <h1>Future Web Technologies</h1>
                <p>At Future Web Technologies
                    We are a team of energetic, young professionals passionate about delivering exceptional software services. Our mission is to help your business thrive in the digital age through cutting-edge technology and bespoke solutions. We specialize in providing comprehensive software services tailored to meet the unique needs of our clients.</p>
            </header>
           </div>

            <section className="about-us-why-choose-us">
                <h2>Why Choose Us?</h2>
                <ul>
                    <li className="about-us-card">
                        <div className="content-wrap">
                            <span className="item-title">
                                Innovation:</span>
                            <p className="text">
                                We stay ahead of industry trends to offer the latest solutions.
                            </p>
                        </div>
                    </li>

                    <li className="about-us-card">
                        <div className="content-wrap">
                            <span className="item-title">
                                Passion:</span>
                            <p className="text">
                                Our youthful team is enthusiastic and committed to delivering the best results.
                            </p>
                        </div>
                    </li>

                    <li className="about-us-card">
                        <div className="content-wrap">
                            <span className="item-title">
                                Youthful Energy:</span>
                            <p className="text">
                                Our young and vibrant team brings fresh perspectives and innovative ideas.
                            </p>
                        </div>
                    </li>

                    <li className="about-us-card">
                        <div className="content-wrap">
                            <span className="item-title">
                                Expertise:</span>
                            <p className="text">
                                Despite our youth, we possess a wealth of knowledge and experience in the software industry.
                            </p>
                        </div>
                    </li>


                    <li className="about-us-card">
                        <div className="content-wrap">
                            <span className="item-title">
                                Quality:</span>
                            <p className="text">
                                We prioritize excellence in every project, ensuring top-notch performance.
                            </p>
                        </div>
                    </li>



                    <li className="about-us-card">
                        <div className="content-wrap">
                            <span className="item-title">
                                Commitment:</span>
                            <p className="text">
                                We are dedicated to delivering high-quality solutions that exceed expectations.
                            </p>
                        </div>
                    </li>

                    <li className="about-us-card">
                        <div className="content-wrap">
                            <span className="item-title">
                                Collaboration:</span>
                            <p className="text">
                                We work closely with our clients to understand their needs and provide personalized service. We work hand-in-hand with our clients to achieve their goals.
                            </p>
                        </div>
                    </li>


                </ul>
            </section>


            <div className='about-us-text-container'> 

            <section className="our-promise">
                <h2>Our Promise</h2>
                <p>At Future Web Technologies, we believe in the power of technology to transform businesses. Our goal is to provide you with the tools and expertise you need to succeed in an ever-evolving digital landscape. We are here to support you every step of the way, from concept to completion.</p>
                <button><Link to='/service' >chekout services</Link></button>
            </section>

            <section className="future-together">
                <h2>Let's Create the Future Together</h2>
                <p>Partner with us and experience the energy and innovation of a young, forward-thinking team. Whether you're a startup or an established enterprise, we are here to help you navigate the complexities of the digital world and achieve your vision.</p>
               <button><Link to='/contact'> Contact Us</Link></button>
            </section>
            
            </div>


        </div>
    );
}

export default AboutUsPage;
