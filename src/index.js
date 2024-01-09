import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import App from "./App";
import music from "./assets/music.png";
import logo from "./logo.png";

const root = createRoot(document.getElementById("root"));

function Main() {
  const [audioConsent, setAudioConsent] = useState(false);

  const handleConsentClick = () => {
    setAudioConsent(true);
  };
  return (
    <>
      <header>
        <img src={logo} className='App-logo' alt='logo' />
      </header>

      <Canvas>
        <App audioConsent={audioConsent} />
      </Canvas>

      <div
        className='btn--sound'
        style={{
          position: "fixed",
          left: 5,
          bottom: 10,
          zIndex: 1,
        }}
      >
        <img
          src={music}
          alt=''
          width={50}
          height={50}
          style={{ cursor: "pointer" }}
          onClick={handleConsentClick}
        />
      </div>
    </>
  );
}

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
