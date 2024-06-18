// MainLayout.js
import React from 'react'; 
import { Banner } from "./Banner"; 
import { NavBar } from "./NavBar";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

const MainLayout = () => {
  return (
    <div> 
    <NavBar/>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainLayout;
