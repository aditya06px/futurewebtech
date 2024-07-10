import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css'
// import Logo from "../../assests/icons/logo.png"
import Logo from "../../assests/icons/logo-transparent-png.png"


function Nav( { activePage, handleItemClick } ) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (  ) => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const location = useLocation();

    useEffect(() => {

        switch (location.pathname) {
          case '/':
            handleItemClick('Home');
            break;
          case '/service':
            handleItemClick('Services');
            break;
          case '/about':
            handleItemClick('About');
            break;
          case '/contact':
            handleItemClick('Contact');
            break;
          default:
            handleItemClick('Home');
        }
      }, [location.pathname, handleItemClick]);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
            {/* <Link to="/" onClick={() => { handleItemClick('Home'); closeMenu(); }}> */}
                    {/* <img src={Logo} alt="Logo" /> */}
            {/* </Link> */ }

            <Link to="/" onClick={() => { handleItemClick('Home'); closeMenu(); }}>
                    <img src={Logo} alt="Logo" />
                     </Link>
            </div>

            <div className={`navbar-links ${isMenuOpen ? 'navbar-div' : ''}`}>
                <ul className={`${isMenuOpen ? 'navbar-toggle' : ''}`}>
                    <li>
                        <Link 
                            to="/" 
                            className={activePage === 'Home' ? 'active' : ''} 
                            onClick={() => { handleItemClick('Home'); closeMenu(); }}
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="/service" 
                            className={activePage === 'Services' ? 'active' : ''} 
                            onClick={() => { handleItemClick('Services'); closeMenu(); }}
                        >
                            Services
                        </Link>
                    </li>
                    
                    <li>
                        <Link 
                            to="/about" 
                            className={activePage === 'About' ? 'active' : ''} 
                            onClick={() => { handleItemClick('About'); closeMenu(); }}
                        >
                            About
                        </Link>
                    </li>
                    
                    <li>
                        <Link 
                            to="/contact" 
                            className={activePage === 'Contact' ? 'active' : ''} 
                            onClick={() => { handleItemClick('Contact'); closeMenu(); }}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='hamburger' onClick={toggleMenu}>
                {isMenuOpen ? ( 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" width="24" height="24">
                        <path d="M242.72 256l100.07-100.07c12.5-12.5 12.5-32.76 0-45.26l-22.63-22.63c-12.5-12.5-32.76-12.5-45.26 0L174.81 188.11 74.74 88.04c-12.5-12.5-32.76-12.5-45.26 0L6.84 110.67c-12.5 12.5-12.5 32.76 0 45.26L106.91 256 6.84 356.07c-12.5 12.5-12.5 32.76 0 45.26l22.63 22.63c12.5 12.5 32.76 12.5 45.26 0l100.07-100.07 100.07 100.07c12.5 12.5 32.76 12.5 45.26 0l22.63-22.63c12.5-12.5 12.5-32.76 0-45.26L242.72 256z"/>
                    </svg>
                ) : ( 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32-14.3 32 32z"/>
                    </svg>
                )}
            </div>
        </nav>
    );
}

export default Nav;
