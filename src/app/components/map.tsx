/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
'use client'

//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState } from "react";


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
  gestureHandling: 'auto',
//   mapTypeId: 'map',
};

function MapComponent() {
    const [markerLocation, setMarkerLocation] = useState({
        lat: 51.509865,
        lng: -0.118092,
      });

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
        const search = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyB3au_4wpisQhjFZH8SRn94TJnREbL9lDE";
          fetch(search)
              .then(response => response.json())
              .then(data => {
              if (data.results.length > 0) {
                  const address = data.results[0].formatted_address;
                  console.log("Address:", address);
              } else {
                  console.log("No results found");
              }
              })
              .catch(error => {
              console.error("Error fetching address:", error);
              });
    };

    return (
        <div className="w-full">
            <GoogleMap 
            mapContainerStyle={defaultMapContainerStyle}
            center={defaultMapCenter}
            zoom={defaultMapZoom}
            options={defaultMapOptions}
            onClick={(e) => handleMapClick(e)}>
                <Marker position={markerLocation} />
            </GoogleMap>
        </div>
    )
};

export { MapComponent };