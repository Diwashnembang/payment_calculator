import { Box, Input, VStack, Text, HStack, Button } from "@chakra-ui/react";
import { useRef } from "react";

const Calculator = ({ userPayInfo }) => {
  const payInputRef = useRef("");
  const handleClick = () => {
    userPayInfo.setPay(payInputRef.current.value);
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
        <Button>calculate</Button>
      </Box>
    </VStack>
  );
};

export default Calculator;
