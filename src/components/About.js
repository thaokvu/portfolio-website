// About.js - Displays an "About Me" section
// Includes a profile photo, a brief description of the individual's background, and a link to download resume

// Import necessary modules and styles  
import React from "react";  
// Import styles specific to the About section  
import './About.css'; 

// About component definition  
function About() {  
  return ( 
    // Section for the About Me information 
    <section id="about"> 
      {/* Main heading for the section */}  
      <h2>About Me</h2> 
      {/* Container for the profile picture and text */}  
      <div className="about-container"> 
        
        {/* Profile Photo */}  
        <img src="/assets/images/profile.jpg" alt="Thao Vu" className="profile-photo" />  
        
        {/* About Details */}  
        <div className="about-text">   
          <p> 
            {/* Brief introduction */}  
            Aspiring Software Engineer with experience in full-stack development, including PHP, C#, and React. 
          </p>  
          {/* Link to download resume */}  
          <a href="/assets/resume.pdf" download className="resume-link">Download My Resume</a> 
        </div>  
      </div>  
    </section>  
  );  
}  

// Exporting the About component to be used in other parts of the application  
export default About;