import React from 'react';
import './Footer.css';


const Footer = () => {
    const devSignature = "Lizzie C";
    const location = "Sydenham";
    const theTime = new Date().getFullYear();
    return (
        <p id="footer">☙ Made in {location} by {devSignature}, {theTime} ❧</p>
    )
}


export default Footer;