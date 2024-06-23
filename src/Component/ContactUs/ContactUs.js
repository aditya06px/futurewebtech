import React, {useEffect} from 'react';
import './ContactUs.css'; 
import contactus from '../../assests/contact.jpg'

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className="contact-us">
      <div>
        <img src={contactus}/>
      </div>
      <h1 className="contact-us-heading">One Agency For Your All Digital Needs</h1>
      <div className="contact-us-info">
        <div className="contact-us-address">
          <p><strong>Address:</strong></p>
          <p>Modern Apartment, Mali Colony, Rajarampuri, Kolhapur - 416008 Maharashtra INDIA</p>
        </div>
        <div className="contact-us-cell">
          <p><strong>Cell:</strong></p>
          <p>+91 9359945490, +91 9373979779, +91 8788278677</p>
        </div>
        <div className="contact-us-email">
          <p><strong>Email:</strong></p>
          <p>contact@futurewebtechnologies.co.in</p>
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
    </div>
  );
};

export default ContactUs;
