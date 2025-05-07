'use client'

// import Image from 'next/image'
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import React from "react";
import { MapProvider } from "./providers/map-provider";
import { MapComponent } from "./components/map";
import styles from "./page.module.css";
import { CountdownTimer } from "./components/CountdownTimer";
import { WelcomeBox } from "./components/WelcomeBox";
import { Hint } from "./components/Hint";
import { LandingPage } from "./components/LandingPage";

function App() {
  const [image, setImage] = React.useState("/21_compass.jpg");
  const [showLanding, setShowLanding] = React.useState(true);

  const handleHintClick = (showHint: boolean) => {
    setImage(showHint ? "/21_compass_annotations_novice.jpg" : "/21_compass.jpg");
  };

  const handleStartGame = () => {
    setShowLanding(false);
  };

  if (showLanding) {
    return <LandingPage onStartGame={handleStartGame} />;
  }

  return (
    <div className="App">
      <CountdownTimer />
      <div className={styles.interaction}>
        <ReactPhotoSphereViewer
          src={image}
          height={"100vh"}
          width={"100vw"}
          padding-top={"20px"}
          hideNavbarButton={false}
        ></ReactPhotoSphereViewer>
        
        <div style={{ 
          position: 'absolute', 
          top: '20px', 
          left: '20px', 
          display: 'flex', 
          flexDirection: 'column',
          gap: '10px'
        }}>
          <WelcomeBox />
          <Hint onHintClick={handleHintClick} />
        </div>
        
        <div className={styles.map}>
          <MapProvider>
            <MapComponent onImageChange={setImage} />
          </MapProvider>
        </div>

        <div style={{ 
          position: 'absolute', 
          bottom: '20px', 
          right: '20px'
        }}>
        </div>
      </div>
    </div>
  );
}

export default App;
