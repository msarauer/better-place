import React, { useEffect } from "react";

const GeoLocation = ({handleLocation, city, country}) => {
  // const [city, setCity] = useState("What is your Location?");
  // const [country, setCountry] = useState("");

  const getCoordinates = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = (pos) => {
      let crd = pos.coords;
      let lat = crd.latitude.toString();
      let lng = crd.longitude.toString();
      let coordinates = [lat, lng];
      // console.log(`Latitude: ${lat}, Longitude: ${lng}`);
      getCity(coordinates);
      return;
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  const getCity = (coordinates) => {
    let xhr = new XMLHttpRequest();
    let lat = coordinates[0];
    let lng = coordinates[1];

    // Paste your LocationIQ token below.
    xhr.open(
      "GET",
      "https://us1.locationiq.com/v1/reverse.php?key=pk.822a2a67b1272e4ebda36c8f695b09a0&lat=" +
        lat +
        "&lon=" +
        lng +
        "&format=json",
      true
    );
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener("readystatechange", processRequest, false);

    function processRequest(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        // console.log("WHAT WE GONNA GET------", response.address);
        let country = response.address.country;
        let city = response.address.city;
        // setCity(city);
        // setCountry(country);
        handleLocation(city, country);
        // console.log(city);
        return;
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        getCoordinates();
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{width: "300px"}}>
      <span>{city}{country && ", "}{country}</span>
    </div>
  );
};

export default GeoLocation;