import React from 'react';
import { Sun, CloudSun } from 'phosphor-react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
    return (
        <button
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
        >
            {darkMode ? (
                // When dark mode is ON → show CloudSun in white
                <CloudSun size={50} color="#bfbfbb" weight="fill" />
            ) : (
                // When light mode is ON → show Sun in yellow
                <Sun size={50} color="#e7c104" weight="fill" />
            )}
        </button>
    );
};

export default DarkModeToggle;
