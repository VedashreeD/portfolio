import React, { useState, useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaYoutube, FaGithub } from 'react-icons/fa'; // Import icons
import '../styles/styles.css';

const Home = () => {
    const typedElement = useRef(null);
    const [isVideoExpanded, setIsVideoExpanded] = useState(false); // State to manage video expansion
    const videoRef = useRef(null); // Ref for the video element
    const modalRef = useRef(null); // Ref for the modal container

    useEffect(() => {
        const options = {
            strings: [
                "AI Developer",
                "Code Architect",
                "Prompt Engineer",
                "Problem Solver",
                "Tech Enthusiast",
                "Adventurer"
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true,
        };

        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy(); // Cleanup on component unmount
        };
    }, []);

    // Handle video click (expand)
    const handleVideoClick = () => {
        setIsVideoExpanded(true);
    };

    // Close the video (when clicking outside or pressing ESC)
    const closeVideo = () => {
        setIsVideoExpanded(false);
    };

    // Close the modal if clicking outside of the video
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeVideo();
            }
        };

        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                closeVideo();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
        };
    }, []);

    return (
        <section id="home-page" className="section container home-layout" style={{ marginTop: '-50px' }}>
            <div className="name-section">
                <div className="photo-container">
                    {/* The video */}
                    <div className={`video-container ${isVideoExpanded ? 'expanded' : ''}`} ref={modalRef}>
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            className={`background-video ${isVideoExpanded ? 'expanded-video' : ''}`}
                            onClick={handleVideoClick}
                        >
                            <source src="public/images/about.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="text-container">
                    <h1>
                        
                        VEDA <span style={{ color: '#800000' }}>DASARA</span>
                    </h1>
                    <h3 id="dynamic-tagline">
                        <span ref={typedElement}></span>
                    </h3>
                    <p className="brief-description">
                        "I combine expertise and innovation to deliver purposeful, high-impact designs that leave a lasting impression. Driven by an unwavering commitment to exceptional quality and precision, my work stands as a testament to the seamless integration of mastery and creativity."
                    </p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/veda-dasara-97a137121/" target="_blank" rel="noopener noreferrer" className="linkedin-icon" style={{ color: '#0077B5' }}>
                            <FaLinkedin />
                        </a>
                        <a href="mailto:dasaraveda@gmail.com" className="email-icon" style={{ color: '#D44638' }}>
                            <FaEnvelope />
                        </a>
                        <a href="tel:+16145683032" className="phone-icon" style={{ color: '#25D366' }}>
                            <FaPhoneAlt />
                        </a>
                        <a href="https://www.youtube.com/@vevedee" target="_blank" rel="noopener noreferrer" className="youtube-icon" style={{ color: '#FF0000' }}>
                            <FaYoutube />
                        </a>
                        <a href="https://github.com/VedashreeD" target="_blank" rel="noopener noreferrer" className="github-icon" style={{ color: '#333' }}>
                            <FaGithub />
                        </a>
                    </div>
                    <div className="resume-link-container">
                        <a
                            href="https://drive.google.com/file/d/1TkaSDKiKgxQWNdk8qs-MvtQcJJSenzOa/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-link"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
