import React, { useRef } from 'react';
import '../OurServicesComponent1/OurServiceComponent1.css'
import  WebDevImg  from '../../../assests/our-services/web-development.jpg'


function OurServiceComponent3() {
    const webDevRef = useRef(null);
    return (
        <div className='OurServiceComponent1-container'>

            <div className='OurServiceComponent1-img'>
                 <img src={WebDevImg} />
            </div>

            <div className='OurServiceComponent1-text' id="web-development" ref={webDevRef}>
                <h3>Web Developement</h3>
                <p>Our Web Development services focus on creating responsive, secure, and scalable websites that provide exceptional user experiences. We leverage the latest technologies and best practices to ensure your digital presence is powerful and effective.</p>
               
                <div className='OurServiceComponent1-button-container'>
                   
                   
                   
                    <button className='service-btn'>ReactJS Developement</button>
                    <button className='service-btn'>AngularJS Developement</button>
                    
                    
                 
                    <button className='service-btn'>Laravel Developement</button>
                    <button className='service-btn'>E-commerce Solutions</button>
                   
                   
                     
                    <button className='service-btn'>Java Developement</button>
                    <button className='service-btn'>NodeJs Developement</button>
                    
                </div>


                <div className='align-to-center'>
                <button className='main-button'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default OurServiceComponent3
