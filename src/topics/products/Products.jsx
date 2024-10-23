import { Box, Heading, Text } from "@chakra-ui/react";

export default function () {
  return (
    <Box
      minH="90vh"
      id="products"
      paddingRight="300px"
      paddingLeft="300px"
      paddingTop="120px"
    >
      <Heading>Produtos e planos</Heading>
      <Box
        display="flex"
        alignItems="center"
        height="60vh"
        justifyContent="center"
      >
        <Text>
          Colocar aqui os modelos com o estilo SaaS mostrando planos, basic, plus & pro
        </Text>
      </Box>
    </Box>
  );
}
