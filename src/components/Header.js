// Header.js - Renders a navigation menu and a theme toggle button
// Menu includes links to various sections of the site,  and the button allows users to switch between light and dark modes using icons from Font Awesome

// Header component with navigation and theme toggle  

// Import React library for building UI components  
import React from "react"; 
// Import styles specific to Header component  
import './Header.css'; 
// Import FontAwesomeIcon for icons  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
// Import moon and sun icons for theme toggle  
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'; 

// Functional component definition  
function Header({ toggleDarkMode, darkMode }) {  
  return (  
    // Main header element
    <header>
      {/* Navigation section */}  
      <nav>
        {/* Unordered list for navigation links */}  
        <ul> 
          {/* Link to About section */}  
          <li><a href="#about">About</a></li> 
          {/* Link to Experience section */}  
          <li><a href="#experience">Experience</a></li> 
          {/* Link to Projects section */}  
          <li><a href="#projects">Projects</a></li> 
          {/* Link to Skills section */}  
          <li><a href="#skills">Skills</a></li> 
          {/* Link to Contact section */}  
          <li><a href="#contact">Contact</a></li> 
          {/* Link to download Resume */}  
          <li><a href="/assets/resume.pdf" download>Resume</a></li> 
        </ul>  
      </nav>  
      {/* Theme toggle button */}  

      {/* Button to toggle a dark/light mode */}  
      <button onClick={toggleDarkMode} className="theme-toggle"> 
        {/* Conditionally render sun or moon icon */}  
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} /> 
      </button>  
    </header>  
  );  
}  

// Export the Header component for use in other parts of the application
export default Header; 