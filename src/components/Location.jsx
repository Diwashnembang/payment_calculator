import { Box, HStack, Input, Text, VStack,Button } from "@chakra-ui/react";

const Location = () => {
  return (
    <VStack spacing={8}>
      <HStack
        className="user-location"
        justify={"flex-end"}
        // borderColor={"green"}
        borderWidth={"1px"}
        width={"600px"}
        m={"2rem"}
      >
        <Text fontSize={"ml"}>Your loation</Text>
        <Input placeholder="Enter Your Location" size="xs" width={"200px"} />
        <Button>send</Button>
      </HStack>

    </VStack>
  );
};

export default Location;
