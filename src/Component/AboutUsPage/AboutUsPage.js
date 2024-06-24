import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './AboutUsPage.css';
import aboutus from '../../assests/about.jpg'

const AboutUsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="about-us">
            <div>
                <img src={aboutus} />
            </div>
            <header>
                <h1>Future Web Technologies</h1>
                <p>At Future Web Technologies
                    We are a team of energetic, young professionals passionate about delivering exceptional software services. Our mission is to help your business thrive in the digital age through cutting-edge technology and bespoke solutions. We specialize in providing comprehensive software services tailored to meet the unique needs of our clients.</p>
            </header>

            <section className="why-choose-us">
                <h2>Why Choose Us?</h2>
                <ul>
                    <li>
                        <h3>Innovation:</h3>
                        <p> We stay ahead of industry trends to offer the latest solutions.</p>
                    </li>

                    <li>
                        <h3>Passion:</h3>
                        <p>Our youthful team is enthusiastic and committed to delivering the best results.</p>
                    </li>

                    <li>
                        <h3>Youthful Energy:</h3>
                        <p> Our young and vibrant team brings fresh perspectives and innovative ideas.</p>
                    </li>

                    <li>
                        <h3>Expertise:</h3>
                        <p> Despite our youth, we possess a wealth of knowledge and experience in the software industry.
                        </p>
                    </li>

                    <li>
                        <h3>Quality:</h3>
                        <p>We prioritize excellence in every project, ensuring top-notch performance.</p>
                    </li>

                    <li>
                        <h3>Commitment:</h3>
                        <p> We are dedicated to delivering high-quality solutions that exceed expectations.</p>
                    </li>

                    <li>
                        <h3>Collaboration:</h3>
                        <p>We work closely with our clients to understand their needs and provide personalized service. We work hand-in-hand with our clients to achieve their goals.</p>
                    </li>
                </ul>
            </section>

            <section className="our-promise">
                <h2>Our Promise</h2>
                <p>At Future Web Technologies, we believe in the power of technology to transform businesses. Our goal is to provide you with the tools and expertise you need to succeed in an ever-evolving digital landscape. We are here to support you every step of the way, from concept to completion.</p>
            </section>

            <section className="future-together">
                <h2>Let's Create the Future Together</h2>
                <p>Partner with us and experience the energy and innovation of a young, forward-thinking team. Whether you're a startup or an established enterprise, we are here to help you navigate the complexities of the digital world and achieve your vision.</p>
            </section>

            <button><Link to='/conact#contact-us'> Contact Us</Link></button>

        </div>
    );
}

export default AboutUsPage;
