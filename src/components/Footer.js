import React from 'react';
import './Footer.css'; // Assuming you want to style the footer

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} My React Site. All rights reserved.</p>
        </footer>
    );
};

export default Footer;