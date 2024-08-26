import React from 'react';
import './Contact.css';
import githubIcon from '../assets/github.png'; 

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>If you have any questions or proposals, feel free to reach out.</p>
      <a href="mailto:sathyakguru81@gmail.com" className="email-link">sathyakguru81@gmail.com</a>
      <div className="github-icon-container">
        <a href="https://github.com/sevveiwnl" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </section>
  );
}

export default Contact;


