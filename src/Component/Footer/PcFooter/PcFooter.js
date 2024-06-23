import React from 'react'
import { Link } from 'react-router-dom';
import './PcFooter.css'
import { ReactComponent as FacebookLogo } from '../../../assests/footer-icons/facebook.svg'
import { ReactComponent as  InstagramLogo} from '../../../assests/footer-icons/instagram.svg'
import { ReactComponent as LinkdinLogo } from '../../../assests/footer-icons/linkdin.svg'
import { ReactComponent as TwitterLogo } from '../../../assests/footer-icons/twitter.svg'

function PcFooter() {
  return (
    <div class="pcfooter">
      <div class="pcfooter-logo">
        LOGO
      </div>
      <div class="pcfooter-quick-links">
        <div class="pcfooter-column">
          <h3>Web Development</h3>
          <ul>
            <li>Website Design and Development</li>
            <li>E-commerce Portal Development</li>
            <li>PHP Web Application Development</li>
            <li>WordPress Development</li>
          </ul>
        </div>
        <div class="pcfooter-column">
          <h3>App Development</h3>
          <ul>
            <li>Android Application Development</li>
            <li>iPhone Application Development</li>
            <li>iPhone Application Development</li>
          </ul>
        </div>
        <div class="pcfooter-column">
          <h3>Search Engine Optimization</h3>
          <ul>
            <li>Keyword Ranking Solution</li>
            <li>Ethical SEO</li>
            <li>Pay Per Click</li>
            <li>Local SEO</li>
          </ul>
        </div>
        <div class="pcfooter-column">
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

      <div>

      <ul className='pcfooter-page-links'>
        <li> 
        <Link to='/about'>About us</Link>
        </li>
      <li>
        <Link to='/contact'>Contact us</Link>
      </li>

      </ul>
      
      </div>

      <div className='pcfooter-logos'> 
        <FacebookLogo />
        <InstagramLogo /> 
        <LinkdinLogo /> 
        <TwitterLogo />
    </div>

    <p className='pcfooter-copyright'>Copyright © 2022. All Rights Reserved | Future Web Technologies</p>

    </div>
  )
}

export default PcFooter
