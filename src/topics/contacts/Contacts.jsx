import {
  Box,
  Heading,
  Container,
  Image,
  Divider,
  Text,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import proximoWeb from "../../assets/proximowebwhitetransparent.png";
import ButtonLinks from "./components/ButtonLinks";

export default function Contacts() {

  const links = [
    { name: "Whatsapp", href: "https://wa.me/5551980363636?text=Quero um site para impulsionar o meu negócio!" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/matheus-gomes-4334122b3/" },
    { name: "Instagram", href: "https://www.instagram.com/matheusrgomes_/" },
  ];

  return (
    <Box
      bgColor="#0a0a0a"
      minH="372px"
      id="contacts"
      paddingRight="300px"
      paddingLeft="300px"
      paddingTop="120px"
    >
      <Box display="flex" justifyContent="space-between" height="fit-content">
        <Container padding="0px">
          <Box padding="0px" margin="0px" maxH="90px" maxW="553px">
            <Image src={proximoWeb} w="100%" h="100%" />
          </Box>
        </Container>
        <Container padding="0px">
          <Stack direction="row" minH="100px" p={4} paddingTop="0px" marginBottom="20px">
            <Divider orientation="vertical" minH="110px" borderColor="" />
            <Box marginLeft="5px">
              <Heading fontSize="50px" fontWeight="600">
                Contatos
              </Heading>
              <Text paddingLeft="3px">
                Esses são meus contatos para iniciarmos seu projeto e para nos
                conhecermos melhor
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
                    <ButtonLinks href={link.href} title={link.name}/>
                ))}
            </Stack>
          </UnorderedList>
        </Container>
      </Box>
      <Box>
        <Divider
          borderColor="#005AF5"
          marginBottom="30px"
          borderWidth="1.5px"
        />
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
