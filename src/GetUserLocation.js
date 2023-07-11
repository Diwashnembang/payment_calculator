import { useEffect, useState } from "react";

const GetUserLocation = (prop) => {
  const [userLocation, setUserLocation] = useState(prop);
  const sucess = (position) => {
    //  sucessfully  got user location
    setUserLocation(position);
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
