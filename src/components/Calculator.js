import { Box, Input, VStack, Text, HStack, Button } from "@chakra-ui/react";

const Calculator = () => {
  return (
    <VStack>
      <HStack
        justify={"space-between"}
        // borderColor={"green"}
        borderWidth={"1px"}
        width={"600px"}
      >
        <Text fontSize={"ml"}>Your pay</Text>
        <Input placeholder="Enter your pay" size="xs" width={"200px"} />
        <Button>Confirm</Button>
      </HStack>
      <Box>
        <Button>calculate</Button>
      </Box>
    </VStack>
  );
};

export default Calculator;
