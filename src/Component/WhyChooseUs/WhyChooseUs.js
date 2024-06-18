import React from 'react'
import './WhyChooseUs.css'

function WhyChooseUs() {
  return (
    <section className='why-choose-us'>
      <h2> Why choose <span className='dark-red-color'>Us</span></h2>

      <div className='why-choose-us-container'>
            <div className='why-choose-us-card'>
                <h3>Expertise</h3>
                <p>Our team brings years of experience and expertise to the table, ensuring that you receive top-notch service and unparalleled results.</p>
            </div>

            <div className='why-choose-us-card'>
                <h3>Creativity</h3>
                <p>We thrive on creativity and innovation, constantly pushing the boundaries to deliver unique and impactful solutions that captivate audiences and drive engagement.</p>
            </div>

            <div className='why-choose-us-card'>
                <h3>Customization</h3>
                <p>We understand that every business is unique, which is why we tailor our services to meet your specific needs and objectives, delivering personalized solutions that exceed expectations.</p>
            </div>
      </div>


    </section>
  )
}
export default WhyChooseUs;
