// Contact.js - Renders a contact form alongside links to different contact methods
// such as LinkedIn, GitHub, and Email, each with accompanying icons

// Importing React library to use JSX 
import React from "react";  
// Importing icons from react-icons for LinkedIn, GitHub, and Email  
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; 

// Define the Contact component  
function Contact() {  
  return (  
    // Main section for the contact information
    <section id="contact">  
    {/* Section heading */}  
      <h2>Contact Me</h2> 
      {/* Contact form */}  
      <form> 
        {/* Input for name */}  
        <input type="text" placeholder="Name" required /> 
        {/* Input for email */}  
        <input type="email" placeholder="Email" required /> 
        {/* Text area for user's message */} 
        <textarea placeholder="Message" required></textarea>  
        {/* Submit button */}  
        <button type="submit">Send</button> 
      </form>  

      {/* Contact Links Section */}  
      {/* Wrapper for contact links */}  
      <div className="contact-links"> 
        {/* Instruction text for alternatives */}  
        <p>Or reach out to me through:</p> 
        {/* List of contact links */}  
        <ul> 
          <li>  
            <a href="https://www.linkedin.com/in/thaokvu" target="_blank" rel="noopener noreferrer">  
              {/* LinkedIn link with icon */}  
              <FaLinkedin size={30} /> LinkedIn 
            </a>  
          </li>  
          <li>  
            <a href="https://github.com/thaokvu" target="_blank" rel="noopener noreferrer"> 
              {/* GitHub link with icon */}   
              <FaGithub size={30} /> GitHub 
            </a>  
          </li>  
          <li>  
            <a href="mailto:thaokimvu25@gmail.com" target="_blank" rel="noopener noreferrer">
              {/* Email link with icon */}   
              <FaEnvelope size={30} /> Email  
            </a>  
          </li>  
        </ul>  
      </div>  
    </section>  
  );  
}  

// Exporting the Contact component for use in other parts of the application
export default Contact; 