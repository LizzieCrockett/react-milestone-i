import React from 'react';


const Footer = (props) => {
    const devSignature = "Lizzie C";
    const location = "Sydenham";
    const theTime = new Date().getFullYear();
    return (
        <p>☙ Made in {location} by {devSignature}, {theTime} ❧</p>
    )
}


export default Footer;