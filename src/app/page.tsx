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
  const [image, setImage] = React.useState("/may8_1.jpg");
  const [showLanding, setShowLanding] = React.useState(true);
  const [location, setLocation] = React.useState("1");

  const handleHintClick = (showHint: boolean) => {
    setImage(showHint ? "/may8_"+location+"_novice.jpg" : "/may8_"+location+".jpg");
  };

  const handleLocationChange = (newLocation: string, newImage: string) => {
    setLocation(newLocation);
    setImage(newImage);
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
          <WelcomeBox 
            location={location} 
            setLocation={setLocation} 
            onLocationChange={handleLocationChange}
          />
          <Hint onHintClick={handleHintClick} location={location} />
        </div>
        
        <div className={styles.map}>
          <MapProvider>
            <MapComponent onImageChange={setImage} location={location} />
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
