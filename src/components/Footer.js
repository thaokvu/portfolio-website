// Footer.js -

// Importing necessary libraries and components from React and Font Awesome  

// Import React to use its features  
import React from "react"; 
// Import FontAwesomeIcon component  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
// Import specific icons  
import { faLinkedin, faGithub, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

// Define a functional component called Footer  
function Footer() {  
  return (  
    // The footer element that contains the content  
    <footer>  
      {/* A simple message inviting users to connect */}  
      <p>Connect with me:</p> 
      <div>  
        {/* LinkedIn link with Font Awesome icon */}  
        <a href="https://linkedin.com/in/thaokvu" target="_blank" rel="noopener noreferrer">  
          {/* LinkedIn icon */}  
          <FontAwesomeIcon icon={faLinkedin} className="icon" /> 
        </a>  
        {/* GitHub link with Font Awesome icon */}  
        <a href="https://github.com/thaokvu" target="_blank" rel="noopener noreferrer">
          {/* GitHub icon */}    
          <FontAwesomeIcon icon={faGithub} className="icon" /> 
        </a>  
        {/* Email link with Font Awesome icon */}  
        <a href="mailto:thaokimvu25@gmail.com">  
          {/* Email icon */}  
          <FontAwesomeIcon icon={faEnvelope} className="icon" /> 
        </a>  
      </div>  
    </footer>  
  );  
}  

// Exporting the Footer component for use in other parts of the application  
export default Footer;