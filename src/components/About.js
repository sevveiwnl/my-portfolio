import React, { useEffect, useRef } from 'react';
import './About.css';
import headshot from '../assets/headshot.png';

// Import all skill icons
import cssIcon from '../assets/css.png';
import htmlIcon from '../assets/html.png';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import nodeIcon from '../assets/node.png';
import expressIcon from '../assets/express.png';
import gitIcon from '../assets/git.png';
import mysqlIcon from '../assets/mysql.png';
import pythonIcon from '../assets/python.png';

function About() {
  const skillsRef = useRef(null);
  const leftSectionRef = useRef(null);

  useEffect(() => {
    const leftObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          leftSectionRef.current.style.opacity = 1;
          leftSectionRef.current.style.transform = 'translateX(0)';
          
          // Start skill animations after left section is visible
          setTimeout(() => {
            if (skillsRef.current) {
              skillsRef.current.querySelectorAll('.skill-item').forEach((item, index) => {
                setTimeout(() => {
                  item.style.opacity = 1;
                  item.style.transform = 'translateY(0)';
                }, index * 200); // 200ms delay between each skill
              });
            }
          }, 500); // 500ms delay after left section is visible
        }
      },
      { threshold: 0.1 }
    );

    if (leftSectionRef.current) {
      leftObserver.observe(leftSectionRef.current);
    }

    return () => leftObserver.disconnect();
  }, []);

  const skills = [
    { name: 'CSS', icon: cssIcon },
    { name: 'HTML', icon: htmlIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Node.js', icon: nodeIcon },
    { name: 'Express.js', icon: expressIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Python', icon: pythonIcon },
  ];

  return (
    <section id="about" className="about">
      <h2 className="about-title">About</h2>
      <div className="container">
        <div className="left" ref={leftSectionRef}>
          <div className="headshot-container">
            <img src={headshot} alt="Sathya's headshot" className="headshot" />
          </div>
          <p>
            As a full-stack developer, my passion for web development is continually fueled by the ever-evolving landscape of technology. There's always a new challenge to tackle and a new skill to master, which keeps my enthusiasm high. My commitment to professional growth and learning makes my journey in web development both exciting and rewarding.
          </p>
        </div>
        <div className="right" ref={skillsRef}>
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-item-content">
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;




