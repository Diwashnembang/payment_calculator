import { useEffect, useState } from "react";

const GetUserLocation = (prop) => {
  const [userLocation, setUserLocation] = useState(prop);
  const sucess = (props) => {
    //  sucessfully  got user location
    setUserLocation(props);
  };
  const error = () => {
    console.log("error ");
  };
  useEffect(() => {
    const getLocation = async () => {
      await navigator.geolocation.watchPosition(sucess, error);
    };
    getLocation();
  }, [prop]);

  return [userLocation];
};

export default GetUserLocation;
