// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <h4>Profile</h4>
                <ul>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#pricing">Pricing Plan</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h4>Customer</h4>
                <ul>
                    <li><a href="#contact-us">Contact Us</a></li>
                    <li><a href="#store">Online Store</a></li>
                    <li><a href="#terms">Terms & Conditions</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h4>Contact</h4>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
