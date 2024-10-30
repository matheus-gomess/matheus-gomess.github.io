import { Box, Heading, Text } from "@chakra-ui/react";
import BoxPrices from "./boxPrices";

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
        height="10vh"
        justifyContent="center"
      >
        <Text>
          Colocar aqui os modelos com o estilo SaaS mostrando planos, basic,
          plus & pro
        </Text>
        
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" gap="50px">
          <BoxPrices title={"Plano Basic"}/>
          <BoxPrices title={"Plano Plus"}/>
          <BoxPrices title={"Plano Pro"}/>
        </Box>
    </Box>
  );
}
