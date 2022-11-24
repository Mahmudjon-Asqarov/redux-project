import { React, useState } from "react";
import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import "./Sidebar.css";

const Sidebar = ({handleSideber, handleBar}) => {
  const [active, setActive] = useState(null);

  const collection = [
    {
      id: 1,
      text: "About",
      href: "#about"
    },
    {
      id: 2,
      text: "My Skills",
      href: "#skills"
    },
    {
      id: 3,
      text: "Work",
      href: "#work"
    },
    {
      id: 4,
      text: "Contact",
      href: "#contact"
    }
  ];

  const handleHover = (data) => {
    setActive(data);
  };

  return (
    <div className={handleSideber ? "sidebar sidebarActive" : "sidebar"}>
      <div className="sidebar__wrapper">
        <div className="logo">
          <Fade left>
            <h1>O</h1>
            <h4>Oybek</h4>
            <p>Web Developer</p>
          </Fade>
        </div>
        <Fade left>
          <ul className="collection">
            {collection.map((item, index) => {
              return (
                <Fade left key={index}>
                  <li
                    onClick={() => handleHover(item?.id)}
                    className={active === item.id ? "collectionActive" : null}
                  >
                    <a onClick={handleBar} href={item?.href}>{item?.text}</a>
                  </li>
                </Fade>
              );
            })}
          </ul>
        </Fade>

        <div className="sidebar__icon">
          <span>
            <FaTelegram />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaFacebook />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
