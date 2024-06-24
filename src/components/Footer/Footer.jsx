import React, { useState, useEffect } from 'react';
import './Footer.css';
import scrollUpIcon from '../../assets/arrow.png';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) { // Adjust this value based on when you want the icon to appear
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <footer className="footer">
        <span>&#169; All Rights Reserved by Navya</span>
        {showScroll && (
          <div className="scroll-up-container" onClick={scrollToTop}>
            <img className="scroll-up" src={scrollUpIcon} alt="scroll_up" />
          </div>
        )}
      </footer>
    </div>
  );
};

export default Footer;
