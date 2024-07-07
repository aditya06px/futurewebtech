import React from 'react'
import { Link } from 'react-router-dom';
import './PcFooter.css'
import { ReactComponent as FacebookLogo } from '../../../assests/footer-icons/facebook.svg'
import { ReactComponent as  InstagramLogo} from '../../../assests/footer-icons/instagram.svg'
import { ReactComponent as LinkdinLogo } from '../../../assests/footer-icons/linkdin.svg'
import { ReactComponent as TwitterLogo } from '../../../assests/footer-icons/twitter.svg'
import Logo from "../../../assests/icons/logo.png"
function PcFooter({ activePage, handleItemClick }) {
  return (
    <div className="pcfooter">
      <div className="pcfooter-logo">
        <img src={Logo} alt="company logo" className='company-logo' />
      </div>
      <div className="pcfooter-quick-links">
        <div className="pcfooter-column">
          <h3>Web Development</h3>
          <ul>
            <li>Website Design and Development</li>
            <li>E-commerce Portal Development</li>
            <li>PHP Web Application Development</li>
            <li>WordPress Development</li>
          </ul>
        </div>
        <div className="pcfooter-column">
          <h3>App Development</h3>
          <ul>
            <li>Android Application Development</li>
            <li>iPhone Application Development</li>
            <li>iPhone Application Development</li>
          </ul>
        </div>
        <div className="pcfooter-column">
          <h3>Search Engine Optimization</h3>
          <ul>
            <li>Keyword Ranking Solution</li>
            <li>Ethical SEO</li>
            <li>Pay Per Click</li>
            <li>Local SEO</li>
          </ul>
        
        </div>
        <div className="pcfooter-column">
          <h3>Digital Marketing</h3>
          <ul>
            <li>Digital Marketing Solutions</li>
            <li>YouTube Optimization Services</li>
            <li>Instagram Services</li>
            <li>Twitter Handle Management</li>
            <li>Affiliate Marketing Services</li>
          </ul>
        </div>
        <div className=""><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4544.68445533079!2d74.24784735143187!3d16.696445026864243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10039a38aefc1%3A0x6b7b86e97b981c6e!2sModern%20Apartment!5e0!3m2!1sen!2sin!4v1720269888134!5m2!1sen!2sin" width="350" height="250" ></iframe></div>

      </div>

      
      <ul className='pcfooter-page-links'>
        <li> 
        <Link to='/about' onClick={() => handleItemClick('About')}>About us</Link>
        </li>
      <li>
        <Link to='/contact' onClick={() => handleItemClick('Contact')}>Contact us</Link>
      </li>

      <li>
        <Link> Site map</Link>
      </li>
      </ul>
      
  

      <div className='pcfooter-logos'> 
        <FacebookLogo className='social-media-icons'/>
        <InstagramLogo className='social-media-icons'/> 
        <LinkdinLogo className='social-media-icons'/> 
        <TwitterLogo className='social-media-icons'/>
    </div>

    <p className='pcfooter-copyright'>Copyright © 2022. All Rights Reserved | Future Web Technologies</p>

    </div>
  )
}

export default PcFooter
