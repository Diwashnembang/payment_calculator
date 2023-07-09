import { Box, VStack } from "@chakra-ui/react";
import Location from "./Location";
import Calculator from "./Calculator";
import React, { useEffect, useState } from "react";

const App = () => {
  const [userWorkLocation, setUserWorkLocation] = useState(null);
  const [pay, setPay] = useState(0);
  const [total, setTotal] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndtime] = useState(0);
  const [hoursWorked, setHoursWorked] = useState(0);

  return (
    <VStack bg="#F1E4F3" h="100vh" spacing={8} paddingTop={"3rem"}>
      <Location
        userWorkLocationInfo={{ userWorkLocation, setUserWorkLocation }}
      />
      <Calculator />
    </VStack>
  );
};
export default App;
