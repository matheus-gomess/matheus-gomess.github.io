import { Box, Text, Stack, Image, Container } from "@chakra-ui/react";
import PhotoStart from "../../assets/photoStart.png";

export default function Outset() {
  return (
    <>
      <Box id="start" minH="52px"/>
      <Box
        minH="85vh"
        paddingRight="300px"
        paddingLeft="300px"
        paddingTop="120px"
        paddingBottom="80px"
      >
        <Box display="flex" gap="200px">
          <Stack spacing={4} maxW="1200px" mx="auto">
            <Text fontSize="sm" color="#969696" textTransform="uppercase">
              Nosso propósito
            </Text>
            <Text fontSize="5xl" fontWeight="bold">
              Fazer sua ideia estar onde todo mundo está, na internet
            </Text>
            <Text fontSize="xl" maxW="600px">
              Hoje, o mundo inteiro está conectado. Com milhões de pessoas
              acessando a internet diariamente, ter sua ideia ou negócio
              presente nesse espaço é essencial. Não importa qual seja o seu
              projeto, um blog, loja virtual, ou aplicativo.
            </Text>
            <Text fontSize="xl" maxW="600px">
              Estar online aumenta suas chances de alcançar seu público-alvo.
              Nós ajudamos você a transformar sua ideia em uma presença digital
              forte e eficaz, conectando seu projeto às pessoas certas.
            </Text>
          </Stack>
          <Container padding="0px" margin="0px" maxH="570px" maxW="380px">
            <Image src={PhotoStart} w="100%" h="100%" />
          </Container>
        </Box>
      </Box>
    </>
  );
}
