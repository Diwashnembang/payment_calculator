import { Box, HStack } from "@chakra-ui/react";

const Status = ({ pay, totalPay, setTotalPay }) => {
  return (
    <HStack>
      <Box id="total-earned">Total pay 0</Box>
      <Box id="hours-worked">Hours worked0</Box>
    </HStack>
  );
};

export default Status;
