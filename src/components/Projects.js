import React from 'react';
import './Projects.css';
import flickcrazePng from '../assets/flickcraze.png'; // You'll need to add this image
import formwizardPng from '../assets/formwizard.png'; // You'll need to add this image

function Projects() {
  const projects = [
    {
      title: "FlickCraze",
      description: "Online photo social network built with React.js, Node.js, Express.js, and MySQL",
      image: flickcrazePng,
      link: "https://github.com/sevveiwnl/flickcraze"
    },
    {
      title: "FormWizard",
      description: "Form analytics platform capturing user interaction patterns to optimize conversion rates",
      image: formwizardPng,
      link: "https://github.com/sevveiwnl/formwizard"
    }
  ];

  console.log('Projects data:', projects); // Debug: log out projects data


  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="learn-more">Learn More</a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;