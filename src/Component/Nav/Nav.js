import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css'

function Nav( { activePage, handleItemClick } ) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (  ) => {
        setIsMenuOpen(!isMenuOpen);
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
            <Link to="/" onClick={() => handleItemClick('Home')}>
                    <img src="logo.png" alt="Logo" />
            </Link>
            </div>

            <div className={`navbar-links ${isMenuOpen ? 'navbar-div' : ''}`}>
                <ul className={`${isMenuOpen ? 'navbar-toggle' : ''}`}>
                    <li>
                        <Link 
                            to="/" 
                            className={activePage === 'Home' ? 'active' : ''} 
                            onClick={() => handleItemClick('Home')}
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="/service" 
                            className={activePage === 'Services' ? 'active' : ''} 
                            onClick={() => handleItemClick('Services')}
                        >
                            Services
                        </Link>
                    </li>
                    
                    <li>
                        <Link 
                            to="/about" 
                            className={activePage === 'About' ? 'active' : ''} 
                            onClick={() => handleItemClick('About')}
                        >
                            About
                        </Link>
                    </li>
                    
                    <li>
                        <Link 
                            to="/contact" 
                            className={activePage === 'Contact' ? 'active' : ''} 
                            onClick={() => handleItemClick('Contact')}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='hamburger' onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </div>
        </nav>
    );
}

export default Nav;
