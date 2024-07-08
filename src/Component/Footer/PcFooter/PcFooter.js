import React from 'react'
import { Link } from 'react-router-dom';
import './PcFooter.css'
import { ReactComponent as FacebookLogo } from '../../../assests/footer-icons/facebook.svg'
import { ReactComponent as  InstagramLogo} from '../../../assests/footer-icons/instagram.svg'
import { ReactComponent as LinkdinLogo } from '../../../assests/footer-icons/linkdin.svg'
function PcFooter({ activePage, handleItemClick }) {
  return (
    <div className="pcfooter">
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
          <h3> SEO </h3>
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
      </div>

      
      <div className='pcfooter-logos'> 
         <a href="https://www.linkedin.com/in/future-web-technologies" target="_blank" rel="noopener noreferrer">
          <FacebookLogo className='social-media-icons'/>
         </a>
          
          <a href="https://www.linkedin.com/in/future-web-technologies" target="_blank" rel="noopener noreferrer">
            <InstagramLogo className='social-media-icons'/> 
          </a>
          
          <a href="https://www.linkedin.com/in/future-web-technologies" target="_blank" rel="noopener noreferrer">
              <LinkdinLogo className='social-media-icons'/> 
          </a>

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

    <p className='pcfooter-copyright'>Copyright © 2022. All Rights Reserved | Future Web Technologies</p>

    </div>
  )
}

export default PcFooter
