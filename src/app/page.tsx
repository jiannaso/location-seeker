'use client'

// import Image from 'next/image'
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import React from "react";
import { MapProvider } from "./providers/map-provider";
import { MapComponent } from "./components/map";
import styles from "./page.module.css";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function App() {

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
        
        <Box component="section" sx={{ p: 2 }} className={styles.text}>
          <Box component="section" sx={{ pb: 1 }}>
            <Typography variant="overline">WELCOME TO</Typography>
            <Typography variant="h6">LocationSeeker</Typography>
          </Box>
        {/* <div> */}
          <Typography variant="body2"> Inspect the Google Street Image below. On the map, select a location closest to the location shown in the image. </Typography>
              <Box component="section" sx={{ mt: 1 }}>
                <Typography variant="button" > Need a hint? </Typography>
                <ButtonGroup variant="text" aria-label="Basic button group">
                <Button variant="outlined" id={styles.hint} onClick = {() => setImage("/cambo_full_anno.jpg")}>Yes</Button>
                <Button variant="outlined" id={styles.hint} onClick = {() => setImage("/cambo_full.jpg")}>No</Button> 
                </ButtonGroup>
              </Box>
        {/* </div> */}
      </Box>

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
