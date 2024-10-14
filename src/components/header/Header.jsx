import { Box, Image, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProximoWebBlackTransparent from "../../assets/proximowebblacktransparent.png";
import ButtonTopics from "./ButtonTopics";

const MotionBox = motion.create(Box);

export default function Header() {
  const routes = [
    {
      name: "Início",
      href: "#start",
    },
    {
      name: "Exemplos",
      href: "#examples",
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
        maxH="52px"
        borderBottom="1px"
        alignItems="center"
        w="100%"
        border="1px solid"
        borderColor="#d2d2d3"
        backdropFilter="saturate(1.8) blur(20px)"
        backgroundClip="border-box"
        bgColor="rgba(250, 250, 252, 0.8)"
        position="fixed"
        top="0px"
        boxShadow="0 10px 35px rgba(0, 0, 0, 0.1)"
        zIndex="1"
        initial={{ y: -100, opacity: 0 }} // Estado inicial
        animate={{ y: 0, opacity: 1 }} // Estado animado ao aparecer
        exit={{ y: -100, opacity: 0 }} // Estado animado ao desaparecer (agora desliza para baixo)
        transition={{ duration: 0.3 }} // Duração da animação
      >
        <Container padding="0px" margin="0px" maxH="65px" maxW="400px">
          <Image src={ProximoWebBlackTransparent} w="100%" h="100%" />
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
