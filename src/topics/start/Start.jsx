import { Box, Text, Stack, Image, Container } from "@chakra-ui/react";
import PhotoStart from "../../assets/photoStart.png";

export default function Outset() {
  return (
    <Box minH="100vh" id="outset" paddingRight="300px" paddingLeft="300px" paddingTop="120px">
      <Box display="flex" gap="200px">
        <Stack spacing={4} maxW="1200px" mx="auto">
          <Text fontSize="sm" color="gray.500" textTransform="uppercase">
            Our Services
          </Text>
          <Text fontSize="5xl" fontWeight="bold" color="black">
            Your business goals are our priority
          </Text>
          <Text fontSize="lg" color="gray.600" maxW="600px">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation.
          </Text>
          <Text fontSize="lg" color="gray.600" maxW="600px">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam.
          </Text>
        </Stack>
        <Container padding="0px" margin="0px" maxH="570px" maxW="380px">
          <Image src={PhotoStart} w="100%" h="100%" />
        </Container>
      </Box>
    </Box>
  );
}
