import React, { useRef } from 'react';
import OurServiceHeroSection from './OurServiceHeroSection/OurServiceHeroSection'
import OurServiceComponent1 from './OurServicesComponent1/OurServiceComponent1'
import OurServiceComponent2 from './OurServiceComponent2/OurServiceComponent2'
import OurServiceComponent3 from './OurServiceComponent3/OurServiceComponent3'
import OurServiceComponent4 from './OurServiceComponent4/OurServiceComponent4'
import OurServiceComponent5 from './OurServiceComponent5/OurServiceComponent5'


function OurServicePage() {

    return (
        <>
            <OurServiceHeroSection />
            <OurServiceComponent1 />   
            <OurServiceComponent2  />
            <OurServiceComponent3  />
            <OurServiceComponent4 />
            <OurServiceComponent5 />
        </>
    )
}

export default OurServicePage
