import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
import callusicon from '../../assests/about-icons/call.png'
import emailicon from '../../assests/about-icons/mail.png'
import addressicon from '../../assests/about-icons/address.png'

const ContactUs = () => {
  const form = useRef();
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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8co694f',      // Replace with your Service ID
      'template_vafufv4',     // Replace with your Template ID
      form.current,
      '57hdkNVG50aTphqNf'          // Replace with your User ID
    )
      .then((response) => {
        alert('Your message has been sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        console.log(error)
        alert('There was an error sending your message. Please try again.');
      });
  };

  return (
    <>
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
                +91 9373979779/ +91 8788278677/ +91 9359945490
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
              <iframe className='contact_map'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4544.68445533079!2d74.24784735143187!3d16.696445026864243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10039a38aefc1%3A0x6b7b86e97b981c6e!2sModern%20Apartment!5e0!3m2!1sen!2sin!4v1720269888134!5m2!1sen!2sin"  ></iframe>
                </div>
         </div>  



           <form className="contact-us-form" id="contact-us" ref={form} onSubmit={handleSubmit}>
            <div className="contact-us-form-group">
              <input placeholder='Full Name' type="text" id="full-name"
               name="fullName"
              //  value={formState.fullName}
              //   onChange={handleChange}
               required />
            </div>
            <div className="contact-us-form-group">
              <input placeholder='Mobile No' type="number" id="mobile-no"
               name="mobileNo"
              //  value={formState.mobileNo}
              //  onChange={handleChange}
                required />
            </div>
            <div className="contact-us-form-group">
              <input placeholder='Email ID' type="email" id="email"
               name="email" 
              //  value={formState.email}
              //  onChange={handleChange}
               required />
            </div>
            <div className="contact-us-form-group">
              <textarea placeholder='Message' id="message" 
              name="message"
              // value={formState.message}
              // onChange={handleChange} 
              rows="4" required></textarea>
            </div>
            <button type="submit" className="contact-us-button">Send Your Request</button>
          </form>


        </section>


      </div>
    </>
  );
};

export default ContactUs;
