import React, { useState, useEffect } from 'react';
import './ContactUs.css';
import mobileImage from '../../assests/contact.jpg'
import callusicon from '../../assests/about-icons/call.png'
import emailicon from '../../assests/about-icons/mail.png'
import addressicon from '../../assests/about-icons/address.png'

const ContactUs = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const text = "One Agency For Your All Digital Needs";
  const n = text.length;

  return (
    <>
      {/* <div className={isMobile ? 'contact-us-mobile-img-container' : 'contact-us-desktop-img-container'}>
        {isMobile ? (
          <img src={mobileImage} alt="Contact Us - Mobile" />
        ) : (
          <img src={desktopImage} alt="Contact Us - Desktop" className='contact-us-desktop-img' />
        )}
      </div> */}

      <div className="contact-us">

        <div className="contact-us-text-animation">
          <span className="contact-us-heading" style={{ '--n': n }} > {text}</span>
        </div>

        <div className="contact-us-card-container">
          <div className="contact-us-card">
            <span className="icon">
              <img src={callusicon} alt='call icon' />
            </span>
            <div className="content-wrap">
              <span className="item-title">
                Call us anytime
              </span>
              <p className="text">
                +91 9373979779/ +91 8788278677/ +91 93
                59945490
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="contact-us-card">
            <span className="icon">
              <img src={addressicon} alt='address icon' />
            </span>
            <div className="content-wrap">
              <span className="item-title">
                Our headquarters              </span>
              <p className="text">
                Modern Apartment, Mali Colony,<br /> Rajarampuri, Kolhapur - 416008 Maharashtra INDIA
              </p>
            </div>
          </div>
        </div>

        <div >
          <div className="contact-us-card">
            <span className="icon">
              <img src={emailicon} alt='email icon' />
            </span>
            <div className="content-wrap">
              <span className="item-title">
                Email
              </span>
              <p className="text">
                info@futurewebtechnologies.co.in
              </p>
            </div>
          </div>

        </div>

        <section className='contact-us-info-container'>

          <div className="contact-us-info">
              <div className={isMobile ? 'contact-us-mobile-img-container' : 'contact-us-desktop-img-container'}>
                  <img src={mobileImage} alt='contact us' />
                </div>
         </div>  



           <form className="contact-us-form" id='contact-us'>
            <div className="contact-us-form-group">
              <input placeholder='Full Name' type="text" id="full-name" name="fullName" required />
            </div>
            <div className="contact-us-form-group">
              <input placeholder='Mobile No' type="tel" id="mobile-no" name="mobileNo" required />
            </div>
            <div className="contact-us-form-group">
              <input placeholder='Email ID' type="email" id="email" name="email" required />
            </div>
            <div className="contact-us-form-group">
              <textarea placeholder='Message' id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="contact-us-button">Send Your Request</button>
          </form>


        </section>


      </div>
    </>
  );
};

export default ContactUs;
