// Experience.js - Renders a section displaying user work experience with company logos and homepage links  

// Importing React library  
import React from "react"; 

// Experience component definition  
function Experience() {  
  // Experience data array containing details about each job  
  const experiences = [  
    {  
      // Job title  
      role: "Cybersecurity & AI Risk Analyst Extern", 
      // Company name  
      company: "National Research Group", 
      // Company logo  
      companyLogo: "https://cdn.prod.website-files.com/6573df751dbab4bb0aac132c/66047124f7d24213efddfec0_national_research_group_a_stagwell_company_logo.jpeg", // NRG logo URL  
      // NRG homepage URL 
      companyUrl: "https://www.nrgmr.com", 
      // Duration of employment   
      duration: "Jul – Aug 2024", 
      // List of responsibilities or achievements  
      description: [ 
        "Simulated adversarial attacks on AI systems using TensorFlow and OpenAI API, enhancing robustness by 20%.",  
        "Delivered actionable insights through Python-based visualizations.",  
      ],  
    },  
    {  
      // Job title  
      role: "AWS Cloud Intern", 
      // Company name  
      company: "OneData Software Solutions", 
      // Company logo  
      companyLogo: "https://www.onedatasoftware.com/wp-content/uploads/2023/08/MicrosoftTeams-image-12-200x36.png", // OneData logo URL  
      // OneData Software Solutions homepage URL  
      companyUrl: "https://www.onedatasoftware.com", 
      // Duration of employment  
      duration: "Jun – Aug 2024", 
      // List of responsibilities or achievements  
      description: [ 
        "Automated AWS SageMaker ML model deployment pipelines, reducing processing time by 25%.",  
        "Designed CI/CD pipelines with Jenkins and AWS Lambda, improving deployment efficiency by 35%.",  
      ],  
    },  
  ];  

  return (  
    // Section for experience
    <section id="experience"> 
      {/* Section title */}   
      <h2>Experience</h2> 
      {/* Map through the experiences array and render each experience */}  
      {experiences.map((experience, index) => (  
        // Unique key for each experience 
        <div key={index}> 
          {/* Job title */}  
          <h3>{experience.role}</h3> 
          {/* Display company logo and link to company website */}  
          <p>  
            <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">  
              <img  
                // Company logo  
                src={experience.companyLogo} 
                // Alt text for accessibility  
                alt={`${experience.company} logo`} 
                // CSS class for styling  
                className="company-logo" 
                // Inline styles for logo  
                style={{ width: "50px", height: "auto", marginRight: "10px" }} 
              />  
              {/* Company name in bold */} 
              <strong>{experience.company}</strong>  
            </a>  
            {" | "}  
            {/* Employment duration */}  
            {experience.duration} 
          </p>  
          <ul>  
            {/* Map through the description array and render each item */}  
            {experience.description.map((item, idx) => (  
              // Unique key for each list item  
              <li key={idx}>{item}</li> 
            ))}  
          </ul>  
        </div>  
      ))}  
    </section>  
  );  
}  

// Exporting the Experience component
export default Experience; 