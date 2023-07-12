import { useEffect, useState } from "react";

const GetUserLocation = (prop) => {
  const [userLocation, setUserLocation] = useState(prop);
  const sucess = (position) => {
    //  sucessfully  got user location
    setUserLocation({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  };
  const error = () => {
    console.log("error ");
  };
  useEffect(() => {
    navigator.geolocation.watchPosition(sucess, error);
  }, [prop]);

  return [userLocation];
};

export default GetUserLocation;
