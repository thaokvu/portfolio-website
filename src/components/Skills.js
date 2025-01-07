// Skills.js - Renders a section on the webpage displaying various programming skills represented by icons 

// Import necessary libraries and components  

// Library for building user interfaces  
import React from "react"; 
// Component for rendering icons  
import { Icon } from '@iconify/react'; 
// Python icon  
import pythonIcon from '@iconify-icons/mdi/language-python'; 
// React icon  
import reactIcon from '@iconify-icons/mdi/react'; 
// Docker icon  
import dockerIcon from '@iconify-icons/mdi/docker'; 
// JavaScript icon  
import javascriptIcon from '@iconify-icons/mdi/language-javascript'; 
// MySQL icon  
import mysqlIcon from '@iconify-icons/mdi/database'; 
// TensorFlow icon  
import tensorflowIcon from '@iconify-icons/mdi/tensorflow'; 
// AWS icon  
import awsIcon from '@iconify-icons/logos/aws'; 
// Git icon  
import gitIcon from '@iconify-icons/mdi/git'; 
// Cloud icon  
import cloudIcon from '@iconify-icons/mdi/cloud'; 
// Importing specific CSS for styling the Skills section  
import './Skills.css'; 

// Functional component definition  
function Skills() {  
  return (  
    // Section containing the Skills header and icons
    <section id="skills"> 
      {/* Header for the Skills section */}  
      <h2>Skills</h2> 
      {/* Container for skill icons */}  
      <div className="skills-container"> 
        {/* Render icons for each skill */}  
        {/* Python icon */}  
        <Icon icon={pythonIcon} className="icon" title="Python" /> 
        {/* React icon */}  
        <Icon icon={reactIcon} className="icon" title="React" /> 
        {/* Docker icon */}  
        <Icon icon={dockerIcon} className="icon" title="Docker" /> 
        {/* JavaScript icon */}  
        <Icon icon={javascriptIcon} className="icon" title="JavaScript" /> 
        {/* MySQL icon */}  
        <Icon icon={mysqlIcon} className="icon" title="MySQL" /> 
        {/* TensorFlow icon */}  
        <Icon icon={tensorflowIcon} className="icon" title="TensorFlow" /> 
        {/* AWS icon */}  
        <Icon icon={awsIcon} className="icon" title="AWS" /> 
        {/* Git icon */}  
        <Icon icon={gitIcon} className="icon" title="Git" /> 
        {/* Cloud icon */}  
        <Icon icon={cloudIcon} className="icon" title="Cloud Computing" /> 
        {/* Add more icons as needed for other skills */}  
      </div>  
    </section>  
  );  
}  

// Exporting the Skills component for use in other parts of the application  
export default Skills;

