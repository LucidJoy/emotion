import {
  Environment,
  Float,
  PositionalAudio,
  Scroll,
  ScrollControls,
  Sparkles,
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
import Button from "react-bootstrap/Button";

import Butterfly from "./models/Butterfly";
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
      <color attach="background" args={["#000000"]} />

      <ambientLight intensity={2} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={0.5}
        shadow-bias={-0.001}
      />

      <Environment preset="sunset" />

      <EffectComposer>
        <Bloom
          intensity={2}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          height={1000}
        />
        {/* <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={5}
          height={480}
        /> */}

        <DepthOfField
          focusDistance={0.02}
          focalLength={0.015}
          bokehScale={2}
          height={480}
        />
        <Vignette eskil={false} offset={0.1} darkness={1.5} />
      </EffectComposer>

      {/* range */}

      <ScrollControls pages={11} damping={0.25}>
        <Scroll>
          {/* top */}
          <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1, 1]}
          >
            <Butterfly
              rotation-x={Math.PI * 0.05}
              scale={0.05}
              position={[0, -2.5, -3]}
            />
            <Butterfly scale={0.05} position={[-10, -3, -8]} />
            <Butterfly scale={0.05} position={[10, -4, -12]} />
          </Float>

          {/* mid */}
          <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1, 1]}
          >
            <Butterfly scale={0.05} position={[-1, -12.5, 0]} />
            <Butterfly scale={0.05} position={[12, -14, -10]} />
          </Float>

          {/* middle */}
          <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1, 1]}
          >
            <Butterfly scale={0.05} position={[-3, -19.5, 2]} />
            <Butterfly scale={0.05} position={[8, -23, -10]} />
            <Butterfly scale={0.05} position={[4, -24, 2]} />
          </Float>
          {/* middle */}

          {/* deeper butterflies to cover later pages */}
          <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1, 1]}
          >
            <Butterfly scale={0.05} position={[-6, -32, 2]} />
            <Butterfly scale={0.05} position={[5, -44, -6]} />
            <Butterfly scale={0.05} position={[-2, -56, 3]} />
            <Butterfly scale={0.05} position={[9, -68, -8]} />
            <Butterfly scale={0.05} position={[-4, -80, 1]} />
            <Butterfly scale={0.05} position={[7, -92, -5]} />
          </Float>

          {/* sparkles spanning full scroll */}
          <Float speed={0.7} floatingRange={[10, 10]} position={[0, 0, -5]}>
            <Sparkles
              noise={0}
              count={1500}
              speed={0.01}
              size={4}
              color={"#FFD2BE"}
              opacity={2} // <= 1
              scale={[40, 1200, 6]} // tall Y, shallow Z
            />
            <Sparkles
              noise={0}
              count={150}
              speed={0.01}
              size={15}
              color={"#FFF"}
              opacity={1} // <= 1
              scale={[50, 1200, 6]} // shallow Z
            />
          </Float>
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
                  <h3
                    style={{
                      marginBottom: "0px",
                      paddingRight: "20vw",
                      paddingLeft: "20vw",
                      fontSize: "26px",
                    }}
                  >
                    I’m your Joy, who cares deeply about you. True friendship
                    means being there in your highest and lowest moments, and I
                    want to prove I can be that person for you again. Fights and
                    misunderstandings happen, but resolving them and moving
                    forward shows real friendship
                  </h3>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
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
                  <h3
                    style={{
                      marginBottom: "0px",
                      paddingRight: "20vw",
                      paddingLeft: "20vw",
                      fontSize: "26px",
                    }}
                  >
                    I will never hide conversations, feelings, or frustrations.
                    I will always be open with you so you can trust me again
                  </h3>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
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
                  <h3
                    style={{
                      marginBottom: "0px",
                      paddingRight: "20vw",
                      paddingLeft: "20vw",
                      fontSize: "26px",
                    }}
                  >
                    If I’m upset, I’ll tell you directly and respectfully. I
                    won't ever let anyone come between our friendship ever again
                  </h3>
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
                  <h3
                    style={{
                      marginBottom: "0px",
                      paddingRight: "20vw",
                      paddingLeft: "20vw",
                      fontSize: "26px",
                    }}
                  >
                    I will check on you regularly for the rest of my life and
                    pray to Allah for your safety, happiness, and the well-being
                    of your family
                  </h3>
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
                  <h3
                    style={{
                      marginBottom: "0px",
                      paddingRight: "20vw",
                      paddingLeft: "20vw",
                      fontSize: "26px",
                    }}
                  >
                    I will listen to you fully, without rushing to defend
                    myself, and always acknowledge your feelings because I love
                    you
                  </h3>
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
                  <h3
                    style={{
                      marginBottom: "0px",
                      paddingRight: "20vw",
                      paddingLeft: "20vw",
                      fontSize: "26px",
                    }}
                  >
                    I know trust won’t come back overnight and I don't expect
                    you to trust me right away because of the things I did,
                    knowingly or unknowingly. I’ll earn it through actions until
                    it returns naturally
                  </h3>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                top: "600vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h3
                    style={{
                      marginBottom: "0px",
                      paddingRight: "20vw",
                      paddingLeft: "20vw",
                      fontSize: "26px",
                    }}
                  >
                    If you need space, I will give it while reminding you that
                    I’m here for you anytime and I love you.
                  </h3>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                top: "700vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h3
                    style={{
                      marginBottom: "0px",
                      paddingRight: "20vw",
                      paddingLeft: "20vw",
                      fontSize: "26px",
                    }}
                  >
                    I will tell you about my day-to-day life, even the small
                    things, to keep our sweet friendship alive for generations
                  </h3>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                top: "800vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h3
                    style={{
                      marginBottom: "0px",
                      paddingRight: "20vw",
                      paddingLeft: "20vw",
                      fontSize: "26px",
                    }}
                  >
                    I want to be there with you when you are low. I can’t
                    promise to fix your feelings but I will sit with you for
                    hours, I will listen to everything and I just want you to
                    know that you are not alone
                  </h3>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                top: "900vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h3
                    style={{
                      marginBottom: "0px",
                      paddingRight: "20vw",
                      paddingLeft: "20vw",
                      fontSize: "26px",
                    }}
                  >
                    Since we are starting school together, I want to be there
                    with you to support you, to help you, to cheer you, to
                    motivate you, to see you shaping your future, to see you
                    succeed in life and be happy
                  </h3>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                top: "1000vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>Beana</h1>
                  <h3
                    style={{
                      marginBottom: "30px",
                      marginTop: "-20px",
                      paddingRight: "20vw",
                      paddingLeft: "20vw",
                      fontSize: "26px",
                    }}
                  >
                    You are one of the most important people I’ve ever met. I’m
                    sorry for hurting you, and I don’t want to lose you. These
                    aren’t just words, they’re promises I’m ready to prove, no
                    matter how long it takes
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
