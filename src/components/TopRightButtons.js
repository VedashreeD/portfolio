import React from 'react';
import { FaHome, FaLaptop, FaPhoneAlt, FaUser } from 'react-icons/fa'; // Updated icon for About

const TopRightButtons = ({ currentSection }) => {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    const isActive = (sectionId) => currentSection === sectionId;

    return (
        <div className="top-right-buttons">
            <button onClick={() => scrollToSection('home-page')}>
                <FaHome style={{ color: isActive('home-page') ? '#0AB0DA' : 'inherit' }} />
                <span style={{ color: isActive('home-page') ? '#0AB0DA' : 'inherit' }}>Home</span>
            </button>
            <button onClick={() => scrollToSection('about-page')}>
                <FaUser style={{ color: isActive('about-page') ? '#0AB0DA' : 'inherit' }} />
                <span style={{ color: isActive('about-page') ? '#0AB0DA' : 'inherit' }}>About</span>
            </button>
            <button onClick={() => scrollToSection('projects-page')}>
                <FaLaptop style={{ color: isActive('projects-page') ? '#0AB0DA' : 'inherit' }} />
                <span style={{ color: isActive('projects-page') ? '#0AB0DA' : 'inherit' }}>Projects</span>
            </button>
            <button onClick={() => scrollToSection('contact-page')}>
                <FaPhoneAlt style={{ color: isActive('contact-page') ? '#0AB0DA' : 'inherit' }} />
                <span style={{ color: isActive('contact-page') ? '#0AB0DA' : 'inherit' }}>Contact</span>
            </button>
        </div>
    );
};

export default TopRightButtons;