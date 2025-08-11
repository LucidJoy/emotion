import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import App from "./App";
import music from "./assets/music.png";
import logo from "./logo.png";

import "./index.css";

const root = createRoot(document.getElementById("root"));

function Main() {
  const [audioConsent, setAudioConsent] = useState(false);

  const handleConsentClick = () => {
    setAudioConsent(true);
  };

  return (
    <>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Canvas>
        <App audioConsent={audioConsent} />
      </Canvas>

      <div
        className="btn--sound"
        style={{
          position: "fixed",
          left: 10,
          bottom: 0,
          zIndex: 1,
        }}
      >
        {/* <img
          src={music}
          alt=""
          width={40}
          height={40}
          className="hoverable"
          onClick={handleConsentClick}
        /> */}
        Beana (edit this with a better font)
      </div>
    </>
  );
}

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
