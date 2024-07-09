import React from 'react'
import './MobileFooter.css'
import { Link } from 'react-router-dom';
import { ReactComponent as FacebookLogo } from '../../../assests/footer-icons/facebook.svg'
import { ReactComponent as  InstagramLogo} from '../../../assests/footer-icons/instagram.svg'
import { ReactComponent as LinkdinLogo } from '../../../assests/footer-icons/linkdin.svg'
import { ReactComponent as TwitterLogo } from '../../../assests/footer-icons/twitter.svg'
import Logo from "../../../assests/icons/logo.png"

function MobileFooter( { activePage, handleItemClick } ) {
  return (
    <div className="mobilefooter">
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
      <ul className='mobilefooter-page-links'>
      <li>Sitemap</li>
        <li> 
        <Link to='/about' onClick={() => handleItemClick('About')} >About us</Link>
        </li>

        <li> 
        <Link to='/contact' onClick={() => handleItemClick('Contact')} >Contact us</Link>
        </li>

      </ul>
    </div>

    <div className='mobilefooter-logos'> 
        <a href="https://www.linkedin.com/in/future-web-technologies" target="_blank" rel="noopener noreferrer">
            <FacebookLogo />
        </a>
      
        <a href="https://www.linkedin.com/in/future-web-technologies" target="_blank" rel="noopener noreferrer">
          <InstagramLogo /> 
        </a>


        <a href="https://www.linkedin.com/in/future-web-technologies" target="_blank" rel="noopener noreferrer">
          <LinkdinLogo /> 
        </a>
    </div>

    <p className='mobilefooter-copyright'>Copyright © 2022. All Rights Reserved | Future Web Technologies</p>
  </div>
  )
}


export default MobileFooter
