import { Box, Image, Container } from "@chakra-ui/react";
import ProximoWebBlack from "../assets/proximowebblack.png";
import ButtonTopics from "./ButtonTopics";
export default function Header() {
  const routes = [
    {
      name: "Início",
      href: "#home",
    },
    {
      name: "Produtos",
      href: "#products",
    },
    {
      name: "Contatos",
      href: "#contacts",
    },
  ];
  return (
    <>
      <Box
        as="header"
        padding="20px"
        display="flex"
        justifyContent="space-between"
        maxH="10vh"
        borderBottom="1px"
        alignItems="center"
        w="100%"
        position="fixed"
        bg="rgb(28, 34, 43)"
        top="0px"
      >
        <Container padding="0px" margin="0px" maxH="65px" maxW="400px">
          <Image src={ProximoWebBlack} w="100%" h="100%" />
        </Container>
        <Container margin="0px" minWidth="250px" display="flex" alignItems="center" justifyContent="space-between">
          {routes.map((route, index) => (
            <ButtonTopics key={index} href={route.href} title={route.name} />
          ))}
        </Container>
      </Box>
    </>
  );
}
