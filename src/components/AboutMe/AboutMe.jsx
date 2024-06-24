import React, { useEffect, useRef } from 'react';
import './AboutMe.css';
import image from '../../assets/photo (2).png';

const AboutMe = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.3 
      }
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/163WSXX1BUQyfi3HN-5voZQPM9x2q1pPl/view?usp=drive_link', '_blank');
  };

  return (
    <div className="about-me-container" ref={containerRef}>
      <div className="about-me-image">
        <img src={image} alt="Profile GIF" />
      </div>
      <div className="about-me-content">
        <h2>About Me</h2>
        <p>
        Hi! I am a creative and passionate web developer with a knack for crafting stunning, user-friendly websites. Expert in HTML, CSS, JavaScript, and modern frameworks like React, I bring digital visions to life. I thrive on transforming ideas into captivating online experiences. Let’s build something amazing together!


        </p>
        <p><strong>My Skills:</strong></p>
        <div className="skills">
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
          <span className="skill">Material UI</span>
          <span className="skill">Bootstrap</span>
          <span className="skill">Tailwind</span>
          <span className="skill">Git</span>
          <span className="skill">Github</span>
        </div>
        <div className="buttons">
          <button className="download-cv" onClick={handleDownloadCV}>Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
