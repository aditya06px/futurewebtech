import React, { useState, useEffect } from 'react';
import './ContactUs.css';
import mobileImage from '../../assests/contact.jpg'
import desktopImage from '../../assests/contact-us-pc.png'
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

  const text = "One Agency For Your All Digital Need";
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

        <div class="contact-us-text-animation">
          <span class="contact-us-heading" style={{ '--n': n }} > {text}</span>
        </div>

        <div className="contact-us-card-container">
              <div class="contact-us-card">
                <span class="icon">
                  <img src={callusicon} />
                </span>
                <div class="content-wrap">
                  <span class="item-title">
                    Call us anytime
                  </span>
                  <p class="text">
                    +91 9373979779/ +91 8788278677/ +91 93
                    59945490
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div class="contact-us-card">
                <span class="icon">
                    <img src={addressicon} />
                </span>
                <div class="content-wrap">
                  <span class="item-title">
                    Our headquarters              </span>
                  <p class="text">
                    Modern Apartment, Mali Colony,<br /> Rajarampuri, Kolhapur - 416008 Maharashtra INDIA
                  </p>
                </div>
              </div>
            </div>

            <div >
              <div class="contact-us-card">
                <span class="icon">
                <img src={emailicon} />
                </span>
                <div class="content-wrap">
                  <span class="item-title">
                    Email
                  </span>
                  <p class="text">
                    futurewebtechnologies.co.in
                  </p>
                </div>
            </div>
         
          </div>

        <section className='contact-us-info-container'>
       
        <div className="contact-us-info">
              <div className={isMobile ? 'contact-us-mobile-img-container' : 'contact-us-desktop-img-container'}>
                  <img src={mobileImage}  />
                </div>
         </div> 



          <form className="contact-us-form" id='contact-us'>
            <div className="contact-us-form-group">
              <label htmlFor="full-name">Full Name:</label>
              <input type="text" id="full-name" name="fullName" required />
            </div>
            <div className="contact-us-form-group">
              <label htmlFor="mobile-no">Mobile No:</label>
              <input type="tel" id="mobile-no" name="mobileNo" required />
            </div>
            <div className="contact-us-form-group">
              <label htmlFor="email">Email ID:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="contact-us-form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="contact-us-button">Send Your Request</button>
          </form>


        </section>


      </div>
    </>
  );
};

export default ContactUs;
