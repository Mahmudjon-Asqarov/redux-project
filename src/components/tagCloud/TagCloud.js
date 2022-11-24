import { React, useEffect } from "react";
import TagCanvas from "tag-canvas";
import './TagCloud.css'

const TagCloude = () => {
  const renderTagCloud = () => {
    try {
      TagCanvas.Start("myCanvas", "tags", {
        textColour: "#682330",
        outlineColour: "#682330",
        reverse: false,
        wheelZoom: false,
        depth: 0.8,
        maxSpeed: 0.08,
      });
    } catch (e) {
      document.getElementById("myCanvasContainer").style.display = "none";
    }
  };

  useEffect(() => {
    renderTagCloud();
  }, []);

  const renderTagCloud2 = () => {
    try {
      TagCanvas.Start("myCanvas2", "tags", {
        textColour: "#682330",
        outlineColour: "#682330",
        reverse: false,
        wheelZoom: false,
        depth: 0.8,
        maxSpeed: 0.08,
      });
    } catch (e) {
      document.getElementById("myCanvasContainer").style.display = "none";
    }
  };

  useEffect(() => {
    renderTagCloud2();
  }, []);

  return (
    <div>
      <div id="myCanvasContainer">
        <canvas width="500" height="500" id="myCanvas" className="myCanvasDesktop"></canvas>
        <canvas width="300" height="300" id="myCanvas2" className="myCanvasMobile"></canvas>
      </div>
      <div id="tags">
        <ul>
          <li>
            <a href="/">Python</a>
          </li>
          <li>
            <a href="/">Javascript</a>
          </li>
          <li>
            <a href="/">Typescript</a>
          </li>
          <li>
            <a href="/">Angular</a>
          </li>
          <li>
            <a href="/">React</a>
          </li>
          <li>
            <a href="/">JQuery</a>
          </li>
          <li>
            <a href="/">CSS</a>
          </li>
          <li>
            <a href="/">HTML</a>
          </li>
          <li>
            <a href="/">GraphQL</a>
          </li>
          <li>
            <a href="/">REST</a>
          </li>
          <li>
            <a href="/">Firebase</a>
          </li>
          <li>
            <a href="/">RxJS</a>
          </li>
          <li>
            <a href="/">Material design</a>
          </li>
          <li>
            <a href="/">Devops</a>
          </li>
          <li>
            <a href="/">NodeJS</a>
          </li>
          <li>
            <a href="/">Mongo DB</a>
          </li>
          <li>
            <a href="/">Cloud services</a>
          </li>
          <li>
            <a href="/">Data Visualization</a>
          </li>
          <li>
            <a href="/">Progressive Web Apps</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TagCloude;
