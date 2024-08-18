import React from 'react';
import './About.css';
import headshot from '../assets/headshot.png';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="container">
        <div className="left">
          <img src={headshot} alt="Sathya's headshot" className="headshot" />
          <p>
            I am a passionate full-stack developer with a focus on creating
            modern, responsive web applications. With a deep passion for 
            continuous learning and adapting to the latest technologies, I 
            strive to deliver top-notch user experiences and scalable solutions.
          </p>
        </div>
        <div className="right">
            <span>Git</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>SQL</span>
        </div>
      </div>
    </section>
  );
}

export default About;







