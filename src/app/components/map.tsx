/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
'use client'

//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { Box, Typography, Button } from '@mui/material';

//Map's styling
export const defaultMapContainerStyle = {
    width: '100%',
    height: '80vh',
    borderRadius: '15px 0px 0px 15px',
};
  
const defaultMapCenter = {
    lat: 33.10486679113052, 
    lng: -74.92784003177476
}
const defaultMapZoom = 2
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
//   gestureHandling: 'auto',
//   mapTypeId: 'map',
};

interface LocationSubmitProps {
  onSubmit: () => void;
  hasLocation: boolean;
  address: string;
}

const LocationSubmit: React.FC<LocationSubmitProps> = ({ onSubmit, address }) => {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: '0 0 10px 10px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '-7px'
      }}
    >
        <Box sx={{width: '75%'}}>
            <Typography variant="body2">{address}</Typography>
        </Box>
      <Button 
        variant="contained" 
        color="primary"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

interface MapComponentProps {
  onImageChange: (image: string) => void;
  location: string;
}

function MapComponent({ onImageChange, location }: MapComponentProps) {
    const [markerLocation, setMarkerLocation] = useState({
        lat: 300,
        lng: 300,
      });
    const [hasLocation, setHasLocation] = useState(false);
    const [address, setAddress] = useState("Please select a location.");

    const handleMapClick = (e: google.maps.MapMouseEvent) => {
        console.log("click");
        console.log(e);

        let lat = 0;
        let lng = 0;
        if(e.latLng !== null) {
            const coord = e.latLng.toJSON()
            lat = coord.lat;
            lng = coord.lng;
        }
        setMarkerLocation({ lat, lng });
        setHasLocation(true);
        const search = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyB3au_4wpisQhjFZH8SRn94TJnREbL9lDE";
          fetch(search)
              .then(response => response.json())
              .then(data => {
              if (data.results.length > 0) {
                  const address = data.results[0].formatted_address;
                  console.log("Address:", address);
                  setAddress("You selected: " + address);
              } else {
                  console.log("No results found");
                  setAddress("No address found");
              }
              })
              .catch(error => {
              console.error("Error fetching address:", error);
              setAddress("Error fetching address");
              });
    };

    const handleLocationSubmit = () => {
        // TODO: Handle location submission
        console.log("Location submitted");
        setHasLocation(false);
        setAddress("");
        onImageChange("/may8_" + location + "_expert.jpg");
        setAddress("Check again! A hint is shown.")
    };

    return (
        <div className="w-full">
            <GoogleMap 
            mapContainerStyle={{width: "30vw", height: "30vh", borderRadius: '10px 10px 0px 0px'}}
            center={defaultMapCenter}
            zoom={defaultMapZoom}
            options={defaultMapOptions}
            onClick={(e) => handleMapClick(e)}>
                <Marker position={markerLocation} />
            </GoogleMap>
            <LocationSubmit onSubmit={handleLocationSubmit} hasLocation={hasLocation} address={address} />
        </div>
    )
};

export { MapComponent };