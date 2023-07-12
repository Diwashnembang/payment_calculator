import { Box, Input, VStack, Text, HStack, Button } from "@chakra-ui/react";
import { useRef } from "react";
import { getTime } from "../timeOperation";

const Calculator = ({ userPayInfo, timeInfo, isPayCalcualtingInfo }) => {
  const payInputRef = useRef("");
  const handleClick = () => {
    userPayInfo.setPay(payInputRef.current.value);
  };
  const nowCalculating = () => {
    const timeNow = getTime();
    timeInfo.setStartTime(timeNow);
    isPayCalcualtingInfo.setIsPayCalculating(true);
  };
  return (
    <VStack>
      <HStack
        justify={"space-between"}
        // borderColor={"green"}
        borderWidth={"1px"}
        width={"600px"}
      >
        <Text fontSize={"ml"}>Your pay</Text>
        <Text fontSize={"ml"}>{userPayInfo.pay}</Text>
        <Input
          placeholder="Enter your pay"
          size="xs"
          width={"200px"}
          ref={payInputRef}
        />
        <Button onClick={handleClick}>Confirm</Button>
      </HStack>
      <Box>
        <Button onClick={nowCalculating}>calculate</Button>
      </Box>
    </VStack>
  );
};

export default Calculator;
