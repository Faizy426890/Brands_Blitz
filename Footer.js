import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useState,useEffect } from "react";
export const Footer = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);


  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        {isMobile == false &&<MailchimpForm />}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            {isMobile==true && <br/>}
            <h1>brandsblitz</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* <a href="#"><img src={navIcon1} alt="Icon" /></a> */}
              {/* <a href="#"><img src={navIcon2} alt="Icon" /></a> */}
              <a href="https://www.instagram.com/brandblitz.marketing?igsh=YmViZ2pleGJ2NDdu"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
