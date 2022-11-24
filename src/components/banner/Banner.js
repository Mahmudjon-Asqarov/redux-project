import { useEffect, useRef } from "react";
import homeImage from "../../assets/banner.jpg";
import ReactTypingEffect from "react-typing-effect";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import "./Banner.css";

const Banner = () => {
  const scrollBox = useRef();

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 50) {
        scrollBox.current.classList.add("active");
      } else {
        scrollBox.current.classList.remove("active");
      }
    });
  }, [scrollBox]);

  // backgroundga rasm qoyib uni harakatlantirish 👇
  // const ele = useRef(null);
  // let pos = { top: 0, left: 0, x: 0, y: 0 };
  // const mouseDownHandler = function (e) {
  //   ele.current.style.cursor = "grabbing";
  //   ele.current.style.userSelect = "none";
  //   pos = {
  //     left: ele.current.scrollLeft,
  //     top: ele.current.scrollTop,
  //     x: e.clientX,
  //     y: e.clientY,
  //   };
  //   document.addEventListener("mousemove", mouseMoveHandler);
  //   document.addEventListener("mouseup", mouseUpHandler);
  // };

  // const mouseMoveHandler = function (e) {
  //   const dx = e.clientX - pos.x;
  //   const dy = e.clientY - pos.y;
  //   ele.current.scrollTop = pos.top - dy;
  //   ele.current.scrollLeft = pos.left - dx;
  // };
  // const mouseUpHandler = function () {
  //   ele.current.style.cursor = "grab";
  //   ele.current.style.removeProperty("user-select");
  //   document.removeEventListener("mousemove", mouseMoveHandler);
  //   document.removeEventListener("mouseup", mouseUpHandler);
  // };

  // const onMouseDownA = { mouseDownHandler }
  // const onMouseUpA = { mouseUpHandler }
  // backgroundga rasm qoyib uni harakatlantirish 👆

  return (
    <div className="banner">
      <div className="banner__text">
        <div className="rubberFlex">
          <Flip top>
            <div className="rubberBand">H</div>
            <div className="rubberBand">i</div>
            <div className="rubberBand">,</div>
          </Flip>
        </div>

        <Zoom top>
          <div className="rubberFlex">
            <div className="rubberFlex leftRubber">
              <div className="rubberBand">I</div>
              <div className="rubberBand">'</div>
              <div className="rubberBand">m</div>
            </div>
            <div className="rubberFlex">
              <div className="rubberBand">O</div>
              <div className="rubberBand">y</div>
              <div className="rubberBand">b</div>
              <div className="rubberBand">e</div>
              <div className="rubberBand">k</div>
            </div>
          </div>
        </Zoom>
        <Slide top>
          <h1>
            <ReactTypingEffect text={["Web Developer"]} />
          </h1>
        </Slide>
        <Rotate bottom left>
          <p>Front End Developver</p>
        </Rotate>

        <Fade top>
          <div className="button2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contact me!
          </div>
        </Fade>
      </div>
      <div className="banner__img">
        {/* <div className="globus" onClick={{onMouseDownA, onMouseUpA}}></div> */}
        <div className="home_body_image">
          <Zoom>
            <div className="item_image">
              <img src={homeImage} alt="homeImage" />
            </div>
          </Zoom>
        </div>
      </div>

      <a href="#about" ref={scrollBox} className="scrollBox">
        <div className="round">
          <Bounce right>
            <div id="cta">
              <span className="arrow primera next"></span>
              <span className="arrow segunda next"></span>
            </div>
          </Bounce>
        </div>
      </a>
    </div>
  );
};

export default Banner;
