import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model3 from "../components/Scene3";
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useContext } from "react";
import { ColorContext } from "./../context/ColorContext";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  z-index: 1;
  background-color: var(--white);
  overflow: hidden;
`;
const Section = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: "#9BB5CE";
`;
const Phone = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: grab;
`;

const Colors = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 25%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 64em) {
    left: 10%;
  }
`;

const Color = styled.li`
  list-style: none;
  width: 1.80vw;
  height: 1.80vw;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: .6vw 0;

  border: 0.06vw solid #76323F;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5vw;
  color: #76323F;
`;


const PricingSection = () => {
  const sectionRef = useRef(null);

  const { currentColor, changeColorContext } = useContext(ColorContext);

  useEffect(() => {
    sectionRef.current.style.backgroundColor = `#FFF6E0`;
  }, [currentColor]);

  let updateColor = (color, text, rgbColor) => {
    const colorObj = {
      color,
      text,
      rgbColor,
    };
    changeColorContext(colorObj);
  };

  return (
    <Container>
      <Section ref={sectionRef}>
        <Phone>
          <Canvas camera={{ fov: 14 }}>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
              <Model3 />
            </Suspense>

            <Environment preset="night" />
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <OrbitControls enableZoom={false} />
          </Canvas>

          <Colors>
            <Color
              color="#9BB5CE"
              onClick={() =>
                updateColor("#9BB5CE", "Sierra Blue", "155, 181, 206")
              }
            />
            <Color
              color="#F9E5C9"
              onClick={() => updateColor("#F9E5C9", "Gold", "249, 229, 201")}
            />
            <Color
              color="#505F4E"
              onClick={() =>
                updateColor("#505F4E", "Alpine Green", "80, 95, 78")
              }
            />
            <Color
              color="#574f6f"
              onClick={() =>
                updateColor("#574f6f", "Deep Purple", "87, 79, 111")
              }
            />
            <Color
              color="#A50011"
              onClick={() => updateColor("#A50011", "Red", "165, 0, 17")}
            />
            <Color
              color="#215E7C"
              onClick={() => updateColor("#215E7C", "Blue", "33, 94, 124")}
            />
          </Colors>
        </Phone>

        <Details>
          <Title>14 Pro Max</Title>
        </Details>
      </Section>
    </Container>
  );
};

export default PricingSection;