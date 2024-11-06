import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import SliderExamples from "./SliderExamples";

export default function Examples() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box id="examples" minH="52px" />
      <Box
        minH="85vh"
        bgColor={colorMode === "dark" ? "#131313" : "#ececec"}
        paddingRight="300px"
        paddingLeft="300px"
        paddingTop="120px"
      >
        <Heading>Exemplos de layouts</Heading>
        <Box
          display="flex"
          alignItems="center"
          height="10vh"
          justifyContent="center"
        >
          <Text>
            Colocar aqui o carrousel mostrando tanto o modelo das páginas em
            1920x1080 quanto por smartphone
          </Text>
        </Box>
        <SliderExamples />
      </Box>
    </>
  );
}
