import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './AboutUsPage.css';
import aboutus from '../../assests/about.jpg'

const AboutUsPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to run only once on mount

    useEffect(() => {
        // Scroll to top on initial render
        window.scrollTo(0, 0);
    }, []);

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

            <section className="about-us-why-choose-us ">
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

            {isMobile ? (<><section className="our-promise">
                <h2>Our Promise</h2>
                <p>At Future Web Technologies, we believe in the power of technology to transform businesses. Our goal is to provide you with the tools and expertise you need to succeed in an ever-evolving digital landscape. We are here to support you every step of the way, from concept to completion.</p>
                <button><Link to='/service' >chekout services</Link></button>
            </section>

                <section className="future-together">
                    <h2>Let's Create the Future Together</h2>
                    <p>Partner with us and experience the energy and innovation of a young, forward-thinking team. Whether you're a startup or an established enterprise, we are here to help you navigate the complexities of the digital world and achieve your vision.</p>
                    <button><Link to='/contact'> Contact Us</Link></button>
                </section></>) :
                <>
                    <div className='about-us-text-container'>
                        <div class="card">
                            <div class="content">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"
                                    ></path>
                                </svg>
                                <h2>Our Promise</h2>
                                <p>At Future Web Technologies, we believe in the power of technology to transform businesses. Our goal is to provide you with the tools and expertise you need to succeed in an ever-evolving digital landscape. We are here to support you every step of the way, from concept to completion.</p>
                                <button><Link to='/service' >Checkout Services</Link></button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="content">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"
                                    ></path>
                                </svg>
                                <h2>Let's Create the Future Together</h2>
                                <p>Partner with us and experience the energy and innovation of a young, forward-thinking team. Whether you're a startup or an established enterprise, we are here to help you navigate the complexities of the digital world and achieve your vision.</p>
                                <button><Link to='/contact'> Get Free Consultation</Link></button>
                            </div>
                        </div>
                    </div></>}

        </div>
    );
}

export default AboutUsPage;
