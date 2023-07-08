import { Box, HStack, Input, Text, VStack, Button } from "@chakra-ui/react";
import { useRef } from "react";

const Location = ({ userWorkLocationInfo }) => {
  const ref = useRef("null");
  const addUserLocation = (e) => {
    userWorkLocationInfo.setUserWorkLocation(ref.current.value);
  };
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
        </Text>
        <Text fontSize={"ml"}>Your loation</Text>
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
