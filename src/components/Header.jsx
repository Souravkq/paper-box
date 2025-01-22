import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/grey-lo.png';
import '../index.css';

const Header = ({ selectedPage }) => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Toggle navbar visibility based on scroll direction
            if (currentScrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: '#fff',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.3s ease-in-out',
                zIndex: 1000,
            }}
        >
            {/* Logo Section */}
            <div className="logo">
                <img src={logo} alt="Logo" />
                <Link to="/home">Paper Box</Link>
            </div>
            {/* Navigation Links */}
            <div className="nav-links">
                <div className="nav-item">
                    <Link
                        className={selectedPage === 'home' ? 'selected' : ''}
                        to="/home"
                    >
                        Home
                    </Link>
                    {selectedPage === 'home' && <hr />}
                </div>
                <div className="nav-item">
                    <Link
                        className={selectedPage === 'about' ? 'selected' : ''}
                        to="/about"
                    >
                        About
                    </Link>
                    {selectedPage === 'about' && <hr />}
                </div>
                <div className="nav-item">
                    <Link
                        className={selectedPage === 'contact' ? 'selected' : ''}
                        to="/contact"
                    >
                        Contact us
                    </Link>
                    {selectedPage === 'contact' && <hr />}
                </div>
                <div className="nav-item">
                    <Link
                        className={selectedPage === 'services' ? 'selected' : ''}
                        to="/services"
                    >
                        Services
                    </Link>
                    {selectedPage === 'services' && <hr />}
                </div>
            </div>
            {/* Login Button */}
            <div className="nav-login">
                <Link to="/login">
                    <button className="login-button">Login</button>
                </Link>
                
            </div>
        </nav>
    );
};

export default Header;
