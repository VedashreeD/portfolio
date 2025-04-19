import React, { useState } from 'react';
import '../styles/styles.css';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Update form data first
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Update status message based on current message length
        if (name === 'message') {
            if (value.length >= 1000) {
                setStatus(
                    <span> 
                        <a 
                            href="mailto:dasaraveda@gmail.com"
                            className="email-link-text"
                        >
                            Send me an email instead
                        </a>
                    </span>
                );
            } else {
                setStatus(''); // Clear the status message if under limit
            }
        }
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Failed to send message. Please try again.');
        }
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
