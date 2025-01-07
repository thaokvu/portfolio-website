// Projects.js - Displays a list of projects
// Each project is represented as an object containing a name, description, and a link

// Import React library to create components  
import React from "react"; 
// Import the CSS for styling the Projects component
import "./Projects.css";   

// Define the Projects functional component  
function Projects() {  
  // Array of project objects containing details about each project  
  const projects = [  
    {  
      // Project name  
      name: "Clinical Data Capture System", 
      // Type of the project
      type: "Web App",   
      // Brief description of the project  
      description: "Web application for managing patient data with Flask and SQLAlchemy.", 
      // Tools and technologies used  
      tools: ["Flask", "SQLAlchemy", "Python", "HTML/CSS"], 
      // Link to the project's repository  
      link: "https://github.com/thaokvu/Clinical-Data-Capture-System", 
    },  
    { 
      // Project name   
      name: "5G Data Analytics Pipeline", 
      // Type of the project   
      type: "Data Pipeline",  
      // Brief description of the project 
      description: "Real-time data pipeline using Apache Kafka and AWS Glue.",  
      // Tools and technologies used  
      tools: ["Apache Kafka", "AWS Glue", "Python", "AWS Lambda"], 
      // Link to the project's repository  
      link: "https://github.com/griflot/T4-data-pipeline", 
    },  
  ];  

  // Render the component  
  return (  
    // Section for the projects
    <section id="projects"> 
      {/* Header for the projects section */} 
      <h2>Projects</h2>   
      {/* Container for the project cards */}  
      <div className="projects-grid"> 
       {/* Iterate over the projects array */}
        {projects.map((project, index) => (
          // Card for each project
          <div key={index} className="project-card">   
            {/* Display project type */} 
            <p className="project-type">{project.type}</p>  
            {/* Display project name */}  
            <h3>{project.name}</h3> 
            {/* Container for project tools */}  
            <div className="project-tags"> 
              {/* Iterate over the tools array */}
              {project.tools.map((tool, idx) => ( 
                // Tag for each tool
                <span key={idx} className="project-tag">  
                  {tool}  
                </span>  
              ))}  
            </div>  
            {/* Display project description */}
            <p className="project-description">{project.description}</p>   
            <a  
              // Link to the project repository  
              href={project.link} 
              // Open link in a new tab  
              target="_blank" 
              // Security measure for external links  
              rel="noopener noreferrer" 
              // Styling class for the link  
              className="project-link" 
            >  
              Read More  
            </a>  
          </div>  
        ))}  
      </div>  
    </section>  
  );  
}  

// Export the Projects component to be used in other parts of the application  
export default Projects;