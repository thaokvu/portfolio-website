// Hero.js - Introductory section of my personal portfolio website
// It includes my name, a brief professional description, and links to view projects and download a resume

// Import React library to use JSX and create components
import React from "react";

// Define the Hero functional component
function Hero() {
    return (
        // Create a section for the hero part of the page
        <section id="hero">
            {/* Main heading with the person's name */}
            <h1>Thao Vu</h1>
            {/* Subheading with professional title */}
            <p>Aspiring Software Enginner | Full-Stack Developer</p>
            <div>
                {/* Link to view user's project */}
                <a href="#projects">View My Work</a>
                {/* Link to download the resume in PDF format */}
                <a href="/assets/resume.pdf" download className="resume-button">Download Resume</a>
            </div>
        </section>
    );
}

// Export the Hero component for use in other parts of the application
export default Hero;