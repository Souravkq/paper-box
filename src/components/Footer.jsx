import React from 'react';
import '../index.css';

const Footer = () => {
    return (
        <footer>
            <div className="socials">
                <a href="https://www.facebook.com/profile.php?id=61571557747408" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/paperbox_5/" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://x.com/box_paper5" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/paper-box-679722345/" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-linkedin-square"></i>
                </a>
            </div>
            <p>Copyright ©2025, All rights reserved.</p>
        </footer>
    );
};

export default Footer;

