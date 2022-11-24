import React from "react";
// import { ColorContextProvider } from "../../context/ColorContext";
// import PricingSection from "../../sections/PricingSection";
import TagCloude from "../tagCloud/TagCloud";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__text">
        <div className="about__tittle">
          <Roll right>
            <div className="rubberFlex">
              <div className="rubberBand">A</div>
              <div className="rubberBand">b</div>
              <div className="rubberBand">o</div>
              <div className="rubberBand">u</div>
              <div className="rubberBand" style={{ marginRight: "1.2vw" }}>
                t
              </div>
              <div className="rubberBand">m</div>
              <div className="rubberBand">e</div>
            </div>
          </Roll>
        </div>
        <Slide left>
          <div className="about__desc">
            <p>
              {" "}
              Since Adobe Flash was a complete innovation, alongside with CSS
              1.0 and HTML 4.01 as standards of the current web I've been
              passionate about web.
            </p>
            <p>
              {" "}
              For over a decade I had many opportunities to work in a vast
              spectrum of what let me gather a significant amount of various
              experience. Working for companies and individuals around the globe
              I met and learnt from amazing and ambitious people.
            </p>
            <p>
              {" "}
              I currently work remotely with a selected freelance client base
              being open for new opportunities.
            </p>
          </div>
        </Slide>
      </div>
      <Roll left>
        <div className="about__img">
          {/* <ColorContextProvider>
            <PricingSection />
          </ColorContextProvider> */}
          <TagCloude />
        </div>
      </Roll>
    </div>
  );
};

export default About;
