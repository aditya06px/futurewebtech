import React from 'react'
import './MobileFooter.css'
import { Link } from 'react-router-dom';
import { ReactComponent as FacebookLogo } from '../../../assests/footer-icons/facebook.svg'
import { ReactComponent as  InstagramLogo} from '../../../assests/footer-icons/instagram.svg'
import { ReactComponent as LinkdinLogo } from '../../../assests/footer-icons/linkdin.svg'
import { ReactComponent as TwitterLogo } from '../../../assests/footer-icons/twitter.svg'


function MobileFooter() {
  return (
    <div className="mobilefooter">
    <div className="mobilefooter-logo">
      LOGO
    </div>
    <div className="mobilefooter-quick-links">
      <h3>Quick Links</h3>
      <ul>
        <li>Services</li>
        <li>Web Development</li>
        <li>App Development</li>
        <li>Digital Marketing</li>
      </ul>
    </div>
    <div className="mobilefooter-sitemap">
      <h3>Sitemap</h3>
      <ul className='mobilefooter-page-links'>
        <li> 
        <Link to='/about'>About us</Link>
        </li>

        <li> 
        <Link to='/contact'>Contact us</Link>
        </li>

      </ul>
    </div>

    <div className='mobilefooter-logos'> 
        <FacebookLogo />
        <InstagramLogo /> 
        <LinkdinLogo /> 
        <TwitterLogo />
    </div>

    <p className='mobilefooter-copyright'>Copyright © 2024. All Rights Reserved | Future Web Technologies</p>
  </div>
  )
}


export default MobileFooter
