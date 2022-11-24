import {React, useState} from "react";
import About from "../about/About";
import Banner from "../banner/Banner";
import Sidebar from "../sidebar/Sidebar";
import HeroSection from "../../sections/HeroSection";
import { GlobalStyle } from "../../styles/GlobalStyle";
import {GiHamburgerMenu} from 'react-icons/gi';
import Skills from "../skills/Skills";
import Work from "../work/Work";
import Contact from "../contact/Contact";
import "./Home.css";

const Home = () => {

  const [handleSideber, setHandleSidebar] = useState(false);

  const handleBar = () => {
    setHandleSidebar(!handleSideber);
  }
  

  return (
    <>
      <GlobalStyle />
      <Sidebar handleSideber={handleSideber} handleBar={handleBar} />
      <div className="home">
        <Banner />
        <About />
        <Skills />
        <Work />
        <Contact />
        <HeroSection />
        <div>
          <div className="music">
            <span>Sounds</span>
            <span className="off">Off</span>
          </div>
          <div className="hamburger" onClick={handleBar}>
            <GiHamburgerMenu className="hamburgerIcon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
