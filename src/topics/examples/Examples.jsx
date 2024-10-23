import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";

export default function Examples() {
  const { colorMode } = useColorMode();

  return (
    <Box
      minH="85vh"
      bgColor={colorMode === "dark" ? "#080808" : "#f7f7f7"}
      id="examples"
      paddingRight="300px"
      paddingLeft="300px"
      paddingTop="120px"
    >
      <Heading>Exemplos de layouts</Heading>
      <Box
        display="flex"
        alignItems="center"
        height="60vh"
        justifyContent="center"
      >
        <Text>
          Colocar aqui o carrousel mostrando tanto o modelo das páginas em
          1920x1080 quanto por smartphone
        </Text>
      </Box>
    </Box>
  );
}
