import { getDistance } from "geolib";
import Geocode from "react-geocode";

export const getDistances = (lat, lng, opps) => {
  const rows = [...opps];

  rows.forEach((opp) => {
    opp.distance = getDistance(
      { latitude: opp.lat, longitude: opp.lat },
      { latitude: lat, longitide: lng }
    );
  });
  return rows;
};

const getCoords = (address) => {
  Geocode.setApiKey("AIzaSyA2OIkjIhwRLZ5VZ6qYjFIjCMGcoLd0r_A");
  Geocode.setLanguage("en");

  Geocode.setLocationType("ROOFTOP");

  Geocode.enableDebug();

  Geocode.fromAddress(address).then(
    (reponse) => {
      const { lat, lng } = response.results.geometry.location;
      console.log("coordinatesFromGeoCode:", lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );
};

//AIzaSyA2OIkjIhwRLZ5VZ6qYjFIjCMGcoLd0r_A    <--- api key
