import { Box, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Status = ({ pay, totalPay, setTotalPay }) => {
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
    <HStack>
      <Box id="total-earned">Total pay 0</Box>
      <Box id="hours-worked">Hours worked0</Box>
      <Box>time {time} </Box>
    </HStack>
  );
};

export default Status;
