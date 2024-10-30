import { Box, Image, Container, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProximoWebBlackTransparent from "../../assets/proximowebblacktransparent.png";
import ProximoWebWhiteTransparent from "../../assets/proximowebwhitetransparent.png";
import ButtonTopics from "./ButtonTopics";
import ChoosingTheme from "../choosingTheme";

const MotionBox = motion.create(Box);

export default function Header() {
  const { colorMode } = useColorMode();
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
        borderColor={"transparent"}
        backdropFilter="saturate(1.8) blur(20px)"
        backgroundClip="border-box"
        bgColor={colorMode === "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(250, 250, 252, 0.8)"}
        position="fixed"
        top="0px"
        boxShadow={colorMode === "dark" ? "0 10px 35px rgba(255, 255, 255, 0.175)" : "0 10px 35px rgba(0, 0, 0, 0.175)"}
        zIndex="10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Container padding="0px" margin="0px" maxH="65px" maxW="400px">
          <Image src={colorMode === "dark" ? ProximoWebWhiteTransparent : ProximoWebBlackTransparent} w="100%" h="100%" />
        </Container>
        <Container margin="0px" minWidth="250px" display="flex" alignItems="center" justifyContent="space-between" paddingRight="0px">
          {routes.map((route, index) => (
            <ButtonTopics key={index} index={index} href={route.href} title={route.name} />
          ))}
          <ChoosingTheme color={colorMode === "dark" ? "white" : "black"}/>
        </Container>
      </MotionBox>
    </>
  );
}
