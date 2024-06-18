// NavBar.js
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.svg'; 
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'; 

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
 


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []); 
  const navigate = useNavigate();

  // Example function to navigate to a different route
  const moveServices = () => {
    navigate('/Services'); // Replace '/path' with the path you want to navigate to
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <h1 className="nav-logo-heading">brandsblitz</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Your Nav.Links here */}
          </Nav>
          <span className="navbar-text">
            <p onClick={moveServices} id="butn" className={`vvd navbar-btn ${scrolled ? "scrolled" : ""}`}>
              Services
              </p> 
          </span>
          <div className="social-icon">
            <a href="#"><img src={navIcon1} alt="" /></a>
            <a href="#"><img src={navIcon2} alt="" /></a>
            <a href="https://www.instagram.com/brandblitz.marketing?igsh=YmViZ2pleGJ2NDdu"><img src={navIcon3} alt="" /></a>
          </div>
          <button className={`vvd navbar-btn ${scrolled ? "scrolled" : ""}`}>
            <span>Let’s Connect</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
