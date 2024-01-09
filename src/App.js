import {
  Environment,
  Float,
  PositionalAudio,
  Scroll,
  ScrollControls,
  Sparkles,
  Html,
} from "@react-three/drei";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import sound_1 from "./sounds/ambient.mp3";
import sound_2 from "./sounds/ambient-rain.mp3";
import sound_3 from "./sounds/ambient-happy.mp3";
import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import { useEffect, useRef } from "react";

import Butterfly from "./models/Butterfly";
import Insect from "./models/Insect";
import "./App.css";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";

function App({ audioConsent }) {
  const audio1Ref = useRef();
  const audio2Ref = useRef();
  const audio3Ref = useRef();

  return (
    <>
      <color attach='background' args={["#000000"]} />

      <ambientLight intensity={2} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={0.5}
        shadow-bias={-0.001}
      />

      <Environment preset='sunset' />

      <EffectComposer>
        <Bloom
          intensity={2}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          height={1000}
        />
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={5}
          height={480}
        />
        <Vignette eskil={false} offset={0.1} darkness={1.5} />
      </EffectComposer>

      <ScrollControls pages={6} damping={0.25}>
        <Scroll>
          {/* top */}
          <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1, 1]}
          >
            <Insect
              rotation-x={Math.PI * 0.05}
              rotation-y={Math.PI}
              scale={1}
              position={[0, -2.5, 0]}
              renderOrder={1}
              key={1}
            />
            <Insect scale={1} rotation-y={Math.PI} position={[10, -3, -6]} />
            <Insect
              rotation-y={Math.PI}
              scale={1}
              position={[10, -4, -10]}
              // renderOrder={1}
              // key={1}
            />
          </Float>
          {/* mid */}
          {/* <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1, 1]}
          >
            <Insect
              scale={0.05}
              rotation-y={Math.PI}
              position={[-1, -12.5, 0]}
            />
            <Insect scale={0.05} position={[12, -14, -10]} />
          </Float> */}
          {/* middle */}
          {/* <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1, 1]}
          >
            <Insect scale={0.05} position={[-3, -19.5, 2]} />
            <Insect scale={0.05} position={[8, -23, -10]} />
            <Insect scale={0.05} position={[4, -24, 2]} />
          </Float> */}
          {/* middle */}
          {/* sparkles */}
          <Float speed={0.02}>
            <Sparkles
              noise={0}
              count={500}
              speed={0.01}
              size={0.6}
              color={"#FFD2BE"}
              opacity={10}
              scale={[20, 100, 20]}
            />
            <Sparkles
              noise={0}
              count={50}
              speed={0.01}
              size={10}
              color={"#FFF"}
              opacity={2}
              scale={[30, 100, 10]}
            />
          </Float>

          {/* sound */}
          <group position={[0, 0, 0]}>
            {audioConsent && (
              <PositionalAudio
                ref={audio1Ref}
                autoplay
                loop
                url={sound_1}
                distance={1.2}
              />
            )}
          </group>
          <group position={[0, -20, 0]}>
            {audioConsent && (
              <PositionalAudio
                ref={audio2Ref}
                autoplay
                loop
                url={sound_2}
                distance={3}
              />
            )}
          </group>
          <group position={[0, -40, 0]}>
            {audioConsent && (
              <PositionalAudio
                ref={audio3Ref}
                autoplay
                loop
                url={sound_3}
                distance={1.2}
              />
            )}
          </group>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          <Container style={{ position: "relative" }}>
            <Row
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    Life can be a struggle
                  </h1>
                </div>
              </Col>
            </Row>

            <Row
              className='text-center align-items-center justify-content-center'
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                top: "100vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    Sometimes you can feel
                  </h1>
                </div>
              </Col>
            </Row>

            <Row
              className='text-center align-items-center justify-content-center'
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                top: "200vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>Lost</h1>
                  <h1 style={{ marginBottom: "0px" }}>Overwhelmed</h1>
                  <h1 style={{ marginBottom: "0px" }}>Empty inside</h1>
                </div>
              </Col>
            </Row>

            <Row
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                top: "300vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    Drifting through life <br />
                    With no help or guidance
                  </h1>
                </div>
              </Col>
            </Row>

            <Row
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                top: "400vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    But there is hope...
                    <br /> and people who can help
                  </h1>
                </div>
              </Col>
            </Row>

            <Row
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                top: "500vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    It's time to get
                    <br /> the support you need
                  </h1>
                  <h3
                    style={{
                      marginBottom: "30px",
                      marginTop: "-20px",
                      fontSize: "28px",
                    }}
                  >
                    To get your life back
                  </h3>
                </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
