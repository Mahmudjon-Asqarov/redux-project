import React from "react";
import { FaGithub } from "react-icons/fa";
import Diskont from "../../assets/diskont.jpg";
import MixInfo from "../../assets/mix-info.jpg";
import Moliya from "../../assets/moliya.jpg";
import Monand from "../../assets/monands.jpg";
import Toys from "../../assets/toys.jpg";
import Weather from "../../assets/weather.jpg";
import LightSpeed from "react-reveal/LightSpeed";
import Roll from 'react-reveal/Roll';
import "./Work.css";

const Work = () => {
  const project = [
    
    {
      id: 1,
      backImg: Diskont,
      href: "https://diskount.techdatasoft.uz/",
    },
    {
      id: 2,
      backImg: MixInfo,
      href: "https://mix-info.uz/",
    },
    {
      id: 3,
      backImg: Moliya,
      href: "https://moliyastudiyasi.uz/",
    },
    {
      id: 4,
      backImg: Monand,
      href: "https://instagram.techdatasoft.uz/",
    },
    {
      id: 5,
      backImg: Toys,
      href: "https://therepublic.vercel.app/",
    },
    {
      id: 6,
      backImg: Weather,
      href: "https://weathet-app.vercel.app/",
    },
  ];

  return (
    <div className="works" id="work">
      <LightSpeed left>
        <div className="rubberFlex">
          <div className="rubberBand">M</div>
          <div className="rubberBand" style={{ marginRight: "1.2vw" }}>
            y
          </div>
          <div className="rubberBand">P</div>
          <div className="rubberBand">o</div>
          <div className="rubberBand">r</div>
          <div className="rubberBand">t</div>
          <div className="rubberBand">f</div>
          <div className="rubberBand">o</div>
          <div className="rubberBand">l</div>
          <div className="rubberBand">i</div>
          <div className="rubberBand">o</div>
        </div>
      </LightSpeed>

      <div className="portfolio_box">
        {project?.map((item) => {
          return (
            <div className="card" key={item?.id}>
              {/* <img src="https://17.img.avito.st/avatar/social/1024x1024/4771942017.jpg" alt="image" /> */}
              <Roll top>
                <img src={item?.backImg} alt="Diskont" />
              </Roll>

              <div className="card_overlay">
                <h4>This project was built using React</h4>
                <a href={item?.href} target="_blank" rel="noreferrer">
                  <div className="button fire">Learn more</div>
                </a>
                <div className="card_overlay_item">
                  <a href="/#" target="_blank">
                    <span>Github code</span>
                    <FaGithub className="card_overlay_item__icon" /> {/* style={{ fontSize: "2vw" }}  */}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
