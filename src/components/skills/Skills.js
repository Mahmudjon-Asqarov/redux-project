import React from "react";
import LightSpeed from "react-reveal/LightSpeed";
import "./Skills.css";

const Skills = () => {

  const skillsData = [
    {
      id: 1,
      text: "Front-end",
    },
    {
      id: 2,
      text: "HTML",
    },
    {
      id: 3,
      text: "CSS",
    },
    {
      id: 4,
      text: "Bootstrap",
    },
    {
      id: 5,
      text: "JavaScript",
    },
    {
      id: 6,
      text: "React",
    },
    {
      id: 7,
      text: "API",
    },
    {
      id: 8,
      text: "Git",
    },
    {
      id: 9,
      text: "React-icons",
    },
    {
      id: 9,
      text: "Material UI",
    },
  ];

  return (
    <div className="skills" id="skills">
      <div className="skills__text">
        <div className="skills__tittle">
          <LightSpeed left>
            <div className="rubberFlex">
              <div className="rubberBand">S</div>
              <div className="rubberBand">k</div>
              <div className="rubberBand">i</div>
              <div className="rubberBand">l</div>
              <div className="rubberBand">l</div>
              <div className="rubberBand" style={{ marginRight: "1.2vw" }}>
                s
              </div>
              <div className="rubberBand" style={{ marginRight: "1.2vw" }}>
                &
              </div>
              <div className="rubberBand">E</div>
              <div className="rubberBand">x</div>
              <div className="rubberBand">p</div>
              <div className="rubberBand">e</div>
              <div className="rubberBand">r</div>
              <div className="rubberBand">i</div>
              <div className="rubberBand">e</div>
              <div className="rubberBand">n</div>
              <div className="rubberBand">c</div>
              <div className="rubberBand">e</div>
            </div>
          </LightSpeed>
        </div>
        <LightSpeed>
          <div className="skills__desc">
            <p>
              {" "}
              Since beginning my journey as a freelance developer nearly 10
              years ago, I’ve done remote work for agencies, consulted for
              startups, and collaborated with talented people to create web
              products for both business and consumer use
            </p>
            <p>
              I create successful responsive websites that are fast, easy to
              use, and built with best practices. The main area of my expertise
              is front-end development, HTML, CSS, JS, building small and medium
              web apps, custom plugins, features, animations, and coding
              interactive layouts
            </p>
            <p>
              {" "}
              I also have full-stack developer experience with popular
              open-source CMS like (WordPress, Drupal, Magento, Keystone.js and
              others) .
            </p>
            <p>
              Visit my LinkedIn profile for more details or just{" "}
              <a href="/#">contact </a>me.
            </p>
          </div>
        </LightSpeed>
      </div>
      <div className="skills__img">
        <ul>
          {skillsData?.map((item, index) => {
            return (
              <li key={index}>
                <p>{item?.text}</p>
                <div className="skill__hr">
                  <span className="skill__hr__overlay"></span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
