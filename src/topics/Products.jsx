import { Box, Text, Stack } from "@chakra-ui/react";

export default function Products() {
  return (
    <Box minH="100vh" id="products" p="8" paddingTop="120px">
      <Stack spacing={4} maxW="1200px" mx="auto">
        <Text fontSize="sm" color="gray.500" textTransform="uppercase">
          Our Services
        </Text>
        <Text fontSize="5xl" fontWeight="bold" color="black">
          Your business goals are our priority
        </Text>
        <Text fontSize="lg" color="gray.600" maxW="600px">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </Text>
        <Text fontSize="lg" color="gray.600" maxW="600px">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </Text>
      </Stack>
    </Box>
  );
}
