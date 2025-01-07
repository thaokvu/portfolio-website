// App.js - Imports various components that make up the different sections of the web app, such as
// a header, hero section, and content areas displaying information about experience, skills, projects, and contact details

// Main App component  

// Import React and useState hook  
import React, { useState } from "react"; 
// Import Header component  
import Header from "./components/Header"; 
// Import Hero component  
import Hero from "./components/Hero"; 
// Import About component  
import About from "./components/About"; 
// Import Experience component  
import Experience from "./components/Experience"; 
// Import Projects component  
import Projects from "./components/Projects"; 
// Import Skills component  
import Skills from "./components/Skills"; 
// Import Contact component  
import Contact from "./components/Contact"; 
// Import Footer component  
import Footer from "./components/Footer"; 
// Import global styles  
import './styles/App.css'; 

function App() {  
  // State hook to manage dark and light modes  
  const [darkMode, setDarkMode] = useState(false);  

  // Function to toggle between dark mode and light mode  
  const toggleDarkMode = () => setDarkMode(!darkMode);  

  return (  
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>  
      {/* Render Header with dark mode toggle and current mode */}  
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />  
      {/* Render main components of the application */}  
      <Hero />  
      <About />  
      <Experience />  
      <Projects />  
      <Skills />  
      <Contact />  
      <Footer />  
    </div>  
  );  
}  

// Export the App component
export default App; 