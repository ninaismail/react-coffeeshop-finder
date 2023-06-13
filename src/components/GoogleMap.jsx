import {
  GoogleMap,
  Marker,
  StandaloneSearchBox,
  LoadScript,
  InfoWindow
} from "@react-google-maps/api";
import { useState } from "react";
import axios from 'axios'

function MyGoogleMap() {
  const [searchBox, setSearchBox] = useState();
  const [latitudeMap, setLatitudeMap] = useState("33.888630");
  const [longitudeMap, setLongitudeMap] = useState("35.495480");
  const [markerPosition, setMarkerPosition] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [placeName, setPlaceName] = useState(null);
  
  const lib = ["places"];

  const onPlacesChanged = () => {
  setLatitudeMap(
      searchBox.getPlaces()[0].geometry.location.lat(),
      setLongitudeMap(searchBox.getPlaces()[0].geometry.location.lng())
  );  
  }
  const onSBLoad = (ref) => {
  setSearchBox(ref);
  };
  const containerStyle = {
    width: '100%',
    height: '600px'
  };

  const center = {
    lat: Number(latitudeMap),
    lng: Number(longitudeMap),
  };

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerPosition({ lat, lng });
    fetchPlaceName(lat, lng)
  };
  const handleMarkerClick = () => {
    setSelectedPlace(markerPosition);
  };

  const handleInfoWindowClose = () => {
    setSelectedPlace(null);
  };

    const fetchPlaceName = async (lat, lng) => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDeaqShlQze6rtJmFQLuxytX6Fv1CvgLNU`
        );
        const result = response.data.results[0];
        const name = result?.formatted_address || "Unknown Place";
        setPlaceName(name);
      } catch (error) {
        console.error("Error fetching place name:", error);
      }
    };
  return (
<div className="md:w-1/2 w-full h-full">
    <LoadScript
    googleMapsApiKey="AIzaSyDeaqShlQze6rtJmFQLuxytX6Fv1CvgLNU"
    libraries={lib}
  >
    <StandaloneSearchBox
        onPlacesChanged={onPlacesChanged}
        onLoad={onSBLoad}
    >
          <GoogleMap
              mapContainerStyle={containerStyle}
              zoom={9}
              center={center}
              onClick={handleMapClick}
          >
        {markerPosition && (
              <Marker
              position={markerPosition}
              onClick={handleMarkerClick}
            />
            )}
            {selectedPlace && (
              <InfoWindow
              anchor={markerPosition}
              position={markerPosition}
              onCloseClick={handleInfoWindowClose}
              visible={true}
              zIndex={10}
              >
                <h3>{`Your in: ${placeName || "Loading..."}`}</h3>  
              </InfoWindow>
            )}      
          </GoogleMap>
      </StandaloneSearchBox>
  </LoadScript>
</div>    
)
}
export default MyGoogleMap;