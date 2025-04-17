import React from 'react';
import { FaCode, FaPython, FaReact, FaAws, FaJsSquare, FaGithub, FaTools, FaNetworkWired, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiCplusplusbuilder } from 'react-icons/si';
import aboutImage from '../images/home-page-bg.jpg';

import '../styles/styles.css';

const About = () => {
    return (
        <div className="about-section">
            <div className="about-content">
            <h2 className="header-title">About</h2>
                {/* Left Section: About Text */}
                <div className= "about-divide">
                <div className="about-text">

                    <div className="about-details">
                        <p className="about-description">
                            Hello! I’m Veda Dasara, a Developer with over <span className="keyword">5 years</span> of experience building <span className="keyword">robust</span>, <span className="keyword">scalable systems</span>. My journey in technology began as a <span className="keyword">Computer Science</span> student, where an innate curiosity led me to immerse myself in a multitude of <span className="keyword">emerging technologies</span>. This hands-on exploration allowed me to discover my niche and sparked a passion for <span className="keyword">continuous learning</span>.
                        </p>
                        <p className="about-description">
                            Starting out at <span className="keyword">Larson & Toubro Technology Services</span>, I had the privilege of working with <span className="keyword">5G architectures</span>, specializing in <span className="keyword">C++</span> and <span className="keyword">Python</span>. Collaborating with dynamic teams, I contributed to the creation of <span className="keyword">next-generation systems</span> poised to revolutionize <span className="keyword">telecommunications</span>. This experience deepened my understanding of <span className="keyword">intricate systems</span> and solidified my commitment to using technology to drive <span className="keyword">innovation</span>.
                        </p>
                        <p className="about-description">
                            Currently, I work at a <span className="keyword">startup</span>, delving into <span className="keyword">Artificial Intelligence</span>, <span className="keyword">agents</span>, and <span className="keyword">Model Context Protocols (MCP)</span>, continuously expanding my expertise to stay ahead of <span className="keyword">tech advancements</span>. This ongoing journey of exploration and mastery drives my dedication to creating <span className="keyword">secure</span>, <span className="keyword">efficient</span>, and <span className="keyword">transformative technologies</span> that meet the evolving demands of the <span className="keyword">tech industry</span>.
                        </p>
                    </div>
                </div>

                {/* Right Section: About Photo */}
                <div className="about-photo">
                    <img
                        src={aboutImage}
                        alt="About Me"
                        className="about-photo-img"
                    />
                </div>
            </div>
            </div>

            {/* Skills Section */}
            <div className="about-skills">
                <div className="skills-icons">
                    <SiCplusplus title="C++" className="skill-icon" />
                    <FaPython title="Python" className="skill-icon" />
                    <FaReact title="React" className="skill-icon" />
                    <SiCplusplusbuilder title="C++ Builder" className="skill-icon" />
                    <FaJsSquare title="JavaScript" className="skill-icon" />
                    <FaAws title="AWS" className="skill-icon" />
                    <FaCode title="Code" className="skill-icon" />
                    <FaGithub title="GitHub" className="skill-icon" />
                    <FaTools title="Tools" className="skill-icon" />
                    <FaNetworkWired title="Networking" className="skill-icon" />
                    <FaDatabase title="Database" className="skill-icon" />
                </div>
            </div>
        </div>
    );
};

export default About;