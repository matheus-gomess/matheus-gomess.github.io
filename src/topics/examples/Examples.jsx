import { Box, Select, Text, useColorMode } from "@chakra-ui/react";
import SliderExamples from "./SliderExamples";
import { useState } from "react";

export default function Examples() {
  const { colorMode } = useColorMode();
  const [valueDesign, setValueDesign] = useState("Computador");

  const changingDesign = (event) => {
    const selectValue = event.target.value
    setValueDesign(selectValue);
  }

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
        <Box display="flex" alignItems="center">
          <Text fontSize="5xl" fontWeight="bold">
            Exemplos de layouts
          </Text>
          <Box marginLeft="20px" display="flex" minWidth="350px" alignItems="end">
            <Select maxWidth="200px" value={valueDesign} onChange={changingDesign}>
              <option>Computador</option>
              <option>Smartphone</option>
            </Select>
            <Text marginLeft="5px" fontSize="sm" color="#969696">Modo de design</Text>
          </Box>
        </Box>
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
        <SliderExamples valueDesign={valueDesign}/>
      </Box>
    </>
  );
}
