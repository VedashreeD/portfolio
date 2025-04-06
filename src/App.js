import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About'; // Import the About component
import Projects from './components/Projects';
import Contact from './components/Contact';
import TopRightButtons from './components/TopRightButtons';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [currentSection, setCurrentSection] = useState('home-page');

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    useEffect(() => {
        const sections = document.querySelectorAll('.section');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6, // Trigger when 60% of the section is visible
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCurrentSection(entry.target.id); // Update the current section
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect(); // Cleanup observer on unmount
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className="App">
            <div className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? (
                    <div className="moon-icon"></div> // White circle for the moon
                ) : (
                    <div className="sun-icon"></div> // Glowing sun
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