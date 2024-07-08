import React from 'react'
import './OurServices.css'
import { ReactComponent as UiUxLogo } from '../../assests/icons/uiux.svg'
import { ReactComponent as DigitalMarketingLogo } from '../../assests/icons/digital-marketing.svg'
import { ReactComponent as GraphicDesignLogo } from '../../assests/icons/graphic-design.svg'
import { ReactComponent as MobileAppDevLogo } from '../../assests/icons/mobile-app-development.svg'
import { ReactComponent as WebDevLogo } from '../../assests/icons/web-development.svg'


function OurServices() {
    return (
        <section className="our-services">

            <h2> Our Services </h2>
            <div className="our-services-container">

                <div className="our-services-top-container">

                    <div className="card1">
                        <div className="car1_innerConrainer">
                            <UiUxLogo />
                            <h3>UI/UX Design</h3>
                        </div>
                        <div className="card__content1">
                            <p className="card__title1">UI/UX Design</p>
                            <p className="card__description1">
                                Transform user experiences with our UI/UX Design services, crafting intuitive interfaces that blend aesthetics with seamless functionality</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="car1_innerConrainer">
                            <GraphicDesignLogo />
                            <h3>Graphic Design</h3>
                        </div>
                        <div className="card__content1">
                            <p className="card__title1">Graphic Design</p>
                            <p className="card__description1">Craft visually stunning graphics with our expertise in Graphic Design, tailored to tell your brand's story and captivate your audience across logos, social media visuals, and promotional materials.</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="car1_innerConrainer">
                            <WebDevLogo />
                            <h3>Web Developement</h3>
                        </div>
                        <div className="card__content1">
                            <p className="card__title1">Web Developement</p>
                            <p className="card__description1">Revamp your digital presence with our Web Development services, creating scalable websites that combine robust functionality with standout design.</p>
                        </div>
                    </div>

                </div>

                <div className="our-services-bottom-container">

                    <div className="card1">
                        <div className="car1_innerConrainer">
                            <DigitalMarketingLogo />
                            <h3>Digital Marketingt</h3>
                        </div>
                        <div className="card__content1">
                            <p className="card__title1">Digital Marketingt</p>
                            <p className="card__description1">
                                Maximize digital impact with our targeted Digital Marketing strategies—from SEO and content to social media and PPC—driving traffic, boosting engagement, and increasing conversions for your online success.</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="car1_innerConrainer">
                            <MobileAppDevLogo />
                            <h3>Mobile App Developement</h3>
                        </div>
                        <div className="card__content1">
                            <p className="card__title1">Mobile App Developement</p>
                            <p className="card__description1">Turn your ideas into reality with our Mobile App Development services. We create innovative, user-friendly apps for Android, iOS, or both, designed to meet your business goals and delight users.</p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default OurServices
