import React, { useRef } from 'react';
import './OurServiceComponent1.css'
import  UiuxDesignImg  from '../../../assests/our-services/ui-ux-design.jpg'


function OurServiceComponent1() {

    const uiUxRef = useRef(null);
    return (
        <div className='OurServiceComponent1-container' >

            <div className='OurServiceComponent1-img'>
                 <img src={UiuxDesignImg}/>
            </div>

            <div className='OurServiceComponent1-text' id="ui-ux" ref={uiUxRef}>
                <h3>UI/UX Design</h3>
                <p>Our UI/UX Design services are dedicated to crafting digital
                    products that are both visually stunning and easy to use. By combining creative design with user-centered principles, we ensure that your digital presence not only looks great but also provides an exceptional user experience. </p>
               
                <div className='OurServiceComponent1-button-container'>
                   
                   
                   
                    <button className='service-btn'>User Research</button>
                    <button className='service-btn'>User Personas</button>
                    
                    
                 
                    <button className='service-btn'>Usability Testing</button>
                    <button className='service-btn'> Wireframing</button>
                   
                   
                     
                    <button className='service-btn'>Prototyping</button>
                    <button className='service-btn'>Visual Design</button>
                    
                </div>


                <div className='align-to-center'>
                <button className='main-button'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default OurServiceComponent1
