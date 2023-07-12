import { Box, VStack } from "@chakra-ui/react";
import Location from "./Location";
import Calculator from "./Calculator";
import Status from "./Status";
import React, { useEffect, useState } from "react";

const App = () => {
  const [userWorkLocation, setUserWorkLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [pay, setPay] = useState(0);
  const [total, setTotal] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndtime] = useState(0);
  const [hoursWorked, setHoursWorked] = useState(0);
  const [isPayCalculating, setIsPayCalculating] = useState();

  return (
    <VStack bg="#F1E4F3" h="100vh" spacing={8} paddingTop={"3rem"}>
      <Location
        userWorkLocationInfo={{ userWorkLocation, setUserWorkLocation }}
        isPayCalcualtingInfo={{ isPayCalculating, setIsPayCalculating }}
        userLocationInfo={{userLocation,setUserLocation}}
      />

      <Calculator
        userPayInfo={{ pay, setPay }}
        timeInfo={{ setStartTime, startTime }}
        isPayCalcualtingInfo={{ isPayCalculating, setIsPayCalculating }}
        usrLocationInfo={{userWorkLocation, userLocation}}
      />

      <Status
        pay={pay}
        totalPay={total}
        setTotalPay={setTotal}
        timeInfo={{
          startTime,
          setStartTime,
          endTime,
          setEndtime,
          hoursWorked,
          setHoursWorked,
        }}
        isPayCalculatingInfo={{ isPayCalculating, setIsPayCalculating }}
      />
    </VStack>
  );
};
export default App;
