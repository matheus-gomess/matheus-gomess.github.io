import { Box } from "@chakra-ui/react";
import ImageCarousel from "./components/carrousel/Carrousel";
import InfoHeader from "./components/InfoHeader";

export default function Introduction() {
  return (
    <Box>
      <InfoHeader />
      <ImageCarousel />
    </Box>
  );
}
