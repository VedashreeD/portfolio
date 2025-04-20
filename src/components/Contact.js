import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope } from 'react-icons/fa';
import '../styles/styles.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Show email link if message is too long
        if (name === 'message' && value.length >= 1000) {
            setStatus(
                <span>
                    <a 
                        href="mailto:dasaraveda@gmail.com"
                        className="email-link-text"
                    >
                        <FaEnvelope /> Send me an email instead
                    </a>
                </span>
            );
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString()
        };

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then(
            (response) => {
                console.log('Success:', response);
                setStatus('Thanks for reaching out! I will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            },
            (error) => {
                console.error('Error:', error);
                setStatus('');
            }
        );
    };

    return (
        <div className="contact-section">
            <h2 className="header-title">Contact</h2>
            <div id="contact-page">
                <div className="contact-box">
                    <p className="contact-intro">
                        Let's connect and discuss ideas and potential collaborations.
                    </p>
                    <form onSubmit={sendEmail} className="contact-form">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                            maxLength={100}
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="What's the best email to reach you?"
                            required
                            maxLength={100}
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Send me a message"
                            required
                            maxLength={1000}
                        ></textarea>
                        <div className="char-count">
                            {formData.message.length === 0 
                                ? "Got a vision? Let's turn it into reality." 
                                : ""
                            }
                        </div>
                        <button type="submit">📩</button>
                        {status && <p className="status-message">{status}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
