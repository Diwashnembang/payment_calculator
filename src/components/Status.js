import { Box, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Status = ({
  pay,
  totalPay,
  setTotalPay,
  timeInfo,
  isPayCalculatingInfo,
}) => {
  const [time, setTime] = useState("0:0");
  const date = new Date();

  useEffect(() => {
    setTimeout(() => {
      let hrs = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();
      console.log("running in status");
      setTime(`time : ${hrs} : ${min} : ${sec}`);
    }, 1000);
  }, [time]);

  return (
    <HStack justify={"space-between"} width={"50%"}>
      {console.log("this is pay status", isPayCalculatingInfo.isPayCalculating)}
      <Box id="total-earned">Total pay 0</Box>
      <Box id="hours-worked">Hours worked0</Box>
      <Box>
        Start Time {timeInfo.startTime.hrs} : {timeInfo.startTime.min}
      </Box>
      <Box>time {time} </Box>
      <Box>
        {isPayCalculatingInfo.isPayCalculating
          ? `Calculating status : 
      ${isPayCalculatingInfo.isPayCalculating}`
          : "no"}
      </Box>
    </HStack>
  );
};

export default Status;
