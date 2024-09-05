// src/components/AboutUs.js
import React from 'react';
import '../styles/AboutUs.css';
import about from '../assets/images/about.svg';

const AboutUs = () => {
    return (
        <section className="about-us-section">
            <div className="about-us-details">
                <h2>About Us</h2>
                <p>
                    Welcome to our movie platform! We are passionate about providing you with the best
                    movie experience, from the latest blockbusters to the golden classics. Our team
                    is dedicated to curating a wide selection of films to suit all tastes. Whether you're
                    a fan of action, romance, or documentary, we have something for you!
                </p>
                <p>
                    Founded in 2024, we aim to build a community of movie lovers who can share and enjoy 
                    cinema together. Join us on this cinematic journey!
                </p>
            </div>
            <div className="about-us-image">
                <img src={about} alt="About Us" />
            </div>
        </section>
    );
};

export default AboutUs;
