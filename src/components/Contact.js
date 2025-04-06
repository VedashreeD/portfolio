import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/styles.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending your message...');

    const templateParams = {
      name: name,
      time: new Date().toLocaleString(),
      message: message,
      email: email,
    };

    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        templateParams,
        process.env.ID
      )
      .then(
        (response) => {
          console.log('Success:', response);
          setStatus('Thanks for reaching out! I will get back to you soon.');
        },
        (error) => {
          console.error('Error:', error);
          setStatus('Uh-oh! Something went wrong. Please try again!');
        }
      );
  };

  return (
    <>
      <div className="contact-section">
        <h2 className="header-title">Contact</h2> {/* Title aligned to the left */}
        <div id="contact-page">
          <div className="contact-box">
            <p className="contact-intro">
              Let's connect and discuss ideas and potential collaborations.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
                required
              />
              <input
                type="email"
                placeholder="What's the best email to reach you?"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <textarea
                placeholder="Send me a message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
              <button type="submit">📩</button> {/* Paper plane emoji */}
              {status && <p>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
