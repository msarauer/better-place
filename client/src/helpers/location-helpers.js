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

export const getCoords = (address) => {
  console.log(process.env.REACT_APP_GOOGLE_API_KEY);
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
  Geocode.setLanguage("en");

  Geocode.setLocationType("ROOFTOP");

  Geocode.enableDebug();

  Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results.geometry.location;
      console.log("coordinatesFromGeoCode:", lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );
};
