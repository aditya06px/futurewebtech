import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Nav.css';

function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [activePage, setActivePage] = useState('Home');

    const handleItemClick = (page) => {
        setActivePage(page);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="logo.png" alt="Logo" />
            </div>

            <div className={`navbar-links ${isMenuOpen ? 'navbar-div' : ''}`}>
                <ul className={`${isMenuOpen ? 'navbar-toggle' : ''}`}>
                <li><a href="#" className={activePage === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>Home</a></li>
                <li><a href="#" className={activePage === 'About' ? 'active' : ''} onClick={() => handleItemClick('About')}>About</a></li>
                <li><a href="#" className={activePage === 'Services' ? 'active' : ''} onClick={() => handleItemClick('Services')}>Services</a></li>
                <li><a href="#" className={activePage === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>Contact</a></li>
                </ul>
            </div>

            <div className='hamburger' onClick={toggleMenu}>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>

            </div>

        </nav>
    )
}

export default Nav
