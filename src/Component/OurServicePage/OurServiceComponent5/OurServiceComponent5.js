import React, { useRef } from 'react';
import '../OurServicesComponent1/OurServiceComponent1.css'
import DigitalMarketingImg from '../../../assests/our-services/digital-marketing.jpg'


function OurServiceComponent5() {
    const digitalMarketingRef = useRef(null);
    return (
        <div className='OurServiceComponent1-container'>

            <div className='OurServiceComponent1-img'>
                 <img src={DigitalMarketingImg}/>
            </div>

            <div className='OurServiceComponent1-text' id="digital-marketing" ref={digitalMarketingRef}>
                <h3>Digital Marketing</h3>
                <p>Our Digital Marketing services are designed to enhance your online presence and drive business growth. By leveraging data-driven strategies and innovative techniques, we ensure your brand reaches and engages the right audience effectively.</p>
               
                <div className='OurServiceComponent1-button-container'>
                   
                   
                   
                    <button className='service-btn'>Search Engine Optimization</button>
                    <button className='service-btn'>Social Media Marketing</button>
                    
                    
                 
                    <button className='service-btn'>Email Marketing</button>
                    <button className='service-btn'> PPC (Pay-Per-Click) Advertising</button>
                   
                   
                     
                    <button className='service-btn'>Content Marketing</button>
                    
                    
                </div>

            </div>
        </div>
    )
}

export default OurServiceComponent5
