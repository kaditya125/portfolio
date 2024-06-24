import React, { useState, useEffect } from 'react';
import './Projects.css';
import ShopHub from '../../assets/firstPage.png';
import RandomJokes from '../../assets/randomJokes.png';
import WeatherApp from '../../assets/weather.png';

const projects = [
  {
    title: "Shop Hub e-commerce web app",
    description: "This project involved creating a full-featured e-commerce website using React.The site provides a dynamic and responsive shopping experience, with features such as product listings, renting clothes,shopping cart functionality,and use authentication.",
    imageUrl: ShopHub,
    link: "https://github.com/Navya-1212/Ecom-Project"
  },
  {
    title: "Random Joke Generator",
    description:"Employs the Fetch API in JavaScript to make asynchronous requests to a Jokes website API, retrieving and displaying jokes dynamically on the webpage.",

    imageUrl: RandomJokes,
    link: "https://randomjoke-29.netlify.app/"
  },
  {
    title: "Weather",
    description: "Built a user-friendly weather app with HTML, CSS, and JavaScript. It shows current weather from OpenWeatherMap and allows searches by city . The app is responsive and handles errors smoothly",
    imageUrl: WeatherApp,
    link: "https://github.com/Navya-1212/weatherApp"
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when the project section is mounted
    setIsVisible(true);
  }, []);

  return (
    <div className={`projects ${isVisible ? 'visible' : ''}`}>
      <h2>Projects</h2>
      <div className="carousel">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="view-button">View &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
