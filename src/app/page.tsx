'use client'

// import Image from 'next/image'
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import React from "react";
import { MapProvider } from "./providers/map-provider";
import { MapComponent } from "./components/map";
import styles from "./page.module.css";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBcxnBgug79rLVuDg34H4klGC2QkyPIPEA",
    authDomain: "location-seeker-adb42.firebaseapp.com",
    projectId: "location-seeker-adb42",
    storageBucket: "location-seeker-adb42.firebasestorage.app",
    messagingSenderId: "705719582349",
    appId: "1:705719582349:web:092e9bb4b7fc214a91ecc4",
    measurementId: "G-M7QRQHR7E5"
  };

  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app); 

  const [image, setImage] = React.useState("/cambo_full.jpg")
   // from https://dev.to/aneeqakhan/how-to-add-markers-to-google-maps-in-reactjs-1jnk
   // from https://medium.com/@saraanofficial/google-maps-integration-in-next-14-13-and-react-load-display-step-by-step-guide-ab2f6ed7b3c0

  return (
    <div className="App">


      <div className={styles.interaction}>
        <ReactPhotoSphereViewer
          src = {image}
          height={"100vh"}
          width={"100vw"}
          padding-top={"20px"}
        ></ReactPhotoSphereViewer>
        
        <div className = {styles.text}>
        <h1 className={styles.h1}> Welcome to LocationSeeker!</h1>
        
        <div>
          <p className={styles.h2}> Inspect the Google Street Image below. On the map, select a location closest to the location shown in the image. </p>
              <div style={{display: "flex"}}>
                <h4 className={styles.h4}> Get hint? </h4>
                <button className={styles.hint} onClick = {() => setImage("/cambo_full_anno.jpg")}>Yes</button>
                <button className={styles.hint} onClick = {() => setImage("/cambo_full.jpg")}>No</button> 
              </div>
        </div>
      </div>

        <div className={styles.map}>
        <MapProvider>
          <MapComponent />
        </MapProvider>
        </div>
     </div>
     </div>
  );
}

export default App;
