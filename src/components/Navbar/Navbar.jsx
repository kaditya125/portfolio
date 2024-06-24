import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/N-icon.png";
import { Link } from "react-scroll";
import navMenu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <nav className="navbar">
    <div className="logoContainer">
        <img src={logo} alt="logo" className="logo" />
        <div className="name animate__animated animate__flipInX">Portfolio</div>
        </div>
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-400} duration={500}  className="desktopMenuListItem">About Me</Link>
        <Link  activeClass='active' to='services' spy={true} smooth={true} offset={-150} duration={500} className="desktopMenuListItem">Services</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Projects</Link>
      </div>
      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>Contact Me <span></span> </button>

       
        <img src={navMenu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
        
      <div className="navMenu" style={{display: showMenu?'flex':'none'}}  >
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-400} duration={500}  className="listItem" onClick={()=>setShowMenu(!showMenu)} >About Me</Link>
        <Link  activeClass='active' to='services' spy={true} smooth={true} offset={-150} duration={500} className="listItem" onClick={()=>setShowMenu(!showMenu)} >Services</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500}  className="listItem" onClick={()=>setShowMenu(!showMenu)} >Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}  className="listItem" onClick={()=>setShowMenu(!showMenu)} >Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;