import { Box, HStack, Input, Text, VStack, Button } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { getWorkCordinattes } from "../getWorkCordinates";
import GetUserLocation from "../GetUserLocation";
const Location = ({ userWorkLocationInfo }) => {
  const ref = useRef("null");
  const [workCordinates, setWorkCordiantes] = useState(
    userWorkLocationInfo.userWorkLocation
  );
  const [userLocation] = GetUserLocation("null");
  const addUserLocation = (e) => {
    userWorkLocationInfo.setUserWorkLocation(ref.current.value);
  };

  useEffect(() => {
    (async function runner() {
      setWorkCordiantes(
        await getWorkCordinattes(userWorkLocationInfo.userWorkLocation)
      );
    })();
  }, [userWorkLocationInfo.userWorkLocation]);
  return (
    <VStack spacing={8}>
      <HStack
        className="user-location"
        justify={"space-between"}
        // borderColor={"green"}
        borderWidth={"1px"}
        width={"600px"}
      >
        <Text fontSize={"ml"}>
          your work location is {userWorkLocationInfo.userWorkLocation}
          {/* {console.log("this is workcordinates", workCordinates)} */}
          {workCordinates !== null
            ? `your work coordinates are ${workCordinates.results[0].city}`
            : "no"}
        </Text>
        <Text fontSize={"ml"}>Your loation</Text>
        {console.log(userLocation)}

        <Input
          placeholder="Enter Your Location"
          size="xs"
          width={"200px"}
          ref={ref}
        />
        <Button onClick={addUserLocation}>conform</Button>
      </HStack>
    </VStack>
  );
};

export default Location;
