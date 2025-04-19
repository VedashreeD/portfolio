import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TopRightButtons from './components/TopRightButtons';

// Create axios instance with base URL
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000'
});

// Visit tracking function (now simplified)
const trackVisit = async () => {
    try {
        const response = await api.post('/track');
        console.log('Visit tracked:', response.data);
    } catch (error) {
        console.error('Error tracking visit:', error);
    }
};

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [currentSection, setCurrentSection] = useState('home-page');

    // Track visit on initial load
    useEffect(() => {
        trackVisit();
    }, []);  // Empty dependency array ensures it runs only once when the component mounts

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    // Observe which section is in view
    useEffect(() => {
        const sections = document.querySelectorAll('.section');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6, // Trigger when 60% of the section is in view
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCurrentSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();  // Cleanup the observer on component unmount
    }, []);  // Empty dependency array ensures it runs only once when the component mounts

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className="App">
            <div className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? (
                    <div className="moon-icon"></div>
                ) : (
                    <div className="sun-icon"></div>
                )}
            </div>
            <TopRightButtons currentSection={currentSection} />
            <div className="sections-container">
                <section id="home-page" className="section container">
                    <Home />
                </section>
                <section id="about-page" className="section container">
                    <About />
                </section>
                <section id="projects-page" className="section container">
                    <Projects />
                </section>
                <section id="contact-page" className="section container">
                    <Contact />
                </section>
            </div>
        </div>
    );
}

export default App;