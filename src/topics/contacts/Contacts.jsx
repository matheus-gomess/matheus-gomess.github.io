import {
  Box,
  Heading,
  Container,
  Image,
  Divider,
  Text,
  Stack,
  UnorderedList,
  useColorMode
} from "@chakra-ui/react";
import proximoWebWhite from "../../assets/proximowebwhite.png";
import proximoWebBlack from "../../assets/proximowebblack.png"
import ButtonLinks from "./components/ButtonLinks";

export default function Contacts() {
  const { colorMode } = useColorMode();
  const links = [
    {
      name: "Whatsapp",
      href: "https://wa.me/5551980363636?text=Quero um site para impulsionar o meu negócio!",
    },
    {
      name: "E-Mail",
      href: "mailto:matheusdrgomes@gmail.com",
    },
  ];

  return (
    <Box
      bgColor={colorMode === "dark" ? "#0a0a0a" : "#f5f5f5"}
      color={colorMode === "dark" ? "white" : "black"}
      minH="372px"
      id="contacts"
      paddingRight="300px"
      paddingLeft="300px"
      paddingTop="120px"
    >
      <Box display="flex" justifyContent="space-between" height="fit-content">
        <Container padding="0px">
          <Box padding="0px" margin="0px" maxH="90px" maxW="553px">
            <Image src={colorMode === "dark" ? proximoWebWhite : proximoWebBlack} w="100%" h="100%" />
          </Box>
        </Container>
        <Container padding="0px">
          <Stack
            direction="row"
            minH="100px"
            p={4}
            paddingTop="0px"
            marginBottom="20px"
          >
            <Divider orientation="vertical" minH="110px" borderColor="" />
            <Box marginLeft="5px">
              <Heading fontSize="50px" fontWeight="600">
                Vamos Conversar!
              </Heading>
              <Text paddingLeft="3px">
                Esses são meus contatos para iniciarmos seu projeto e para nos
                conhecermos melhor 🙂
              </Text>
            </Box>
          </Stack>
          <UnorderedList
            styleType="none"
            paddingLeft="10px"
            marginBottom="60px"
          >
            <Stack spacing={3} direction="column">
              {links.map((link) => (
                <ButtonLinks href={link.href} title={link.name} key={link.name} />
              ))}
            </Stack>
          </UnorderedList>
        </Container>
      </Box>
      <Box>
        <Divider
          position="absolute"
          left="0"
          right="0"
          background={colorMode === "dark" ? "radial-gradient(circle, rgb(255,255,255) 0%, rgb(0,0,0) 110%)" : "radial-gradient(circle, #000000 0%, rgb(255,255,255) 110%)"}
          height="1px"
          zIndex="0"
          width="100%"
        />
        <Box height="30px" />
        <Text fontSize="18px" paddingBottom="30px">
          Próximo Web{" "}
          <Box as="span" color="#7a7f91">
            © 2024. Todos os direitos reservados.
          </Box>
        </Text>
      </Box>
    </Box>
  );
}
