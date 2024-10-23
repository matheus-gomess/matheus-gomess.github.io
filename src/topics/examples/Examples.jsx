import { Box, Heading, useColorMode } from "@chakra-ui/react";

export default function Examples () {
    const { colorMode } = useColorMode();

    return (
        <Box minH="85vh" bgColor={colorMode === "dark" ? "#080808" : "#f7f7f7"} id="examples" paddingRight="300px" paddingLeft="300px" paddingTop="120px">
            <Heading>Exemplos de layouts</Heading>
        </Box>
    )
}