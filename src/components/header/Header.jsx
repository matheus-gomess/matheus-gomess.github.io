import { Box, Image, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProximoWebBlack from "../../assets/proximowebblack.png";
import ButtonTopics from "./ButtonTopics";

const MotionBox = motion.create(Box);

export default function Header() {
  const routes = [
    {
      name: "Início",
      href: "#outset",
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
      <MotionBox
        as="header"
        padding="20px"
        display="flex"
        justifyContent="space-between"
        maxH="72px"
        borderBottom="1px"
        alignItems="center"
        w="100%"
        position="fixed"
        bg="white"
        top="0px"
        boxShadow="0 10px 35px rgba(0, 0, 0, 0.1)"
        zIndex="1"
        initial={{ y: -100, opacity: 0 }} // Estado inicial
        animate={{ y: 0, opacity: 1 }} // Estado animado ao aparecer
        exit={{ y: -100, opacity: 0 }} // Estado animado ao desaparecer (agora desliza para baixo)
        transition={{ duration: 0.3 }} // Duração da animação
      >
        <Container padding="0px" margin="0px" maxH="65px" maxW="400px">
          <Image src={ProximoWebBlack} w="100%" h="100%" />
        </Container>
        <Container margin="0px" minWidth="250px" display="flex" alignItems="center" justifyContent="space-between">
          {routes.map((route, index) => (
            <ButtonTopics key={index} index={index} href={route.href} title={route.name} />
          ))}
        </Container>
      </MotionBox>
    </>
  );
}
