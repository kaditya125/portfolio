import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
import webDevelopmentIcon from '../../assets/programming.png';
import webDesignIcon from '../../assets/graphic-design.png';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = servicesRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={servicesRef} className={`services ${isVisible ? 'loaded' : ''}`}>
      <h1 className="services-title">
        <span className="highlight">Services</span>
      </h1>
      <div className="services-container">
        <div className="service-card">
          <div className="icon">
            <img src={webDevelopmentIcon} alt="Development" />
          </div>
          <h2 className="service-title">Web Development</h2>
          <p className="service-description">
            I specialize in developing high-quality websites that meet your unique needs. From creating responsive designs, I ensure your site performs seamlessly on all devices.
          </p>
        </div>
        <div className="service-card">
          <div className="icon">
            <img src={webDesignIcon} alt="Web Design" />
          </div>
          <h2 className="service-title">Web Design</h2>
          <p className="service-description">
            I provide professional web design services that combine aesthetics with functionality. My designs are not only visually appealing but also user-friendly, providing an engaging experience to help your online presence stand out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
