// index.js - Initializes a React application by importing necessary libraries and components, creating a rendering root, and rendering the main App component
// Entry point for the React application

// Import the React library for building user interfaces
import React from "react";

// Import the ReactDOM package for interacting with the DOM
import ReactDOM from "react-dom/client";

// Import the main App component that will be rendered
import App from "./App";

// Global styles - Import the CSS styles for the application
import './styles/App.css';

// Render the main App component 
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React's StrictMode for hightlighting potential problems
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


