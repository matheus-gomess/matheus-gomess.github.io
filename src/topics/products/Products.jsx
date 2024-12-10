import { Box, Heading, Button, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import AllPrices from "./boxPrices";

// Adicionamos Framer Motion para animação do fundo
const MotionBox = motion(Box);

function WaveDivider() {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="svg"
      viewBox="0 70 1440 220"
      width="100%"
      position="absolute"
      bottom="0"
    >
      <path
        fill={colorMode === "dark" ? "#0a0a0a" : "#f5f5f5"}
        d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,197.3C840,213,960,235,1080,218.7C1200,203,1320,149,1380,122.7L1440,96V420H0Z"
      />
    </Box>
  );
}

function WaveDividerTop() {
  const { colorMode } = useColorMode();
  return (
    <Box as="svg" viewBox="0 0 1440 100" width="100%">
      <path
        fill={colorMode === "dark" ? "#131313" : "#ececec"}
        d="M1440,0L1380,5C1320,10,1200,18,1080,20C960,22,840,18,720,12C600,6,480,2,360,4C240,6,120,16,60,20L0,24V0H1440Z"
      />
    </Box>
  );
}

export default function Products() {
  const [billingCycle, setBillingCycle] = useState("Monthly");
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        id="products"
        minH="54px"
        bgColor={colorMode === "dark" ? "#131313" : "#ececec"}
      />
      <Box
        minH="90vh"
        bgGradient="linear(to-r, #2E0F4A, #1B1B6A)"
        position="relative"
        overflow="hidden"
      >
        <WaveDividerTop />
        <Heading color="white" textAlign="center" mt="-59px">
          Qual melhor plano para você?
        </Heading>
        <Box display="flex" justifyContent="center" mt="6">
          <Box
            display="flex"
            justifyContent="center"
            bg="#1C1048"
            width="fit-content"
            borderRadius="8px"
            height="32px"
            position="relative"
            overflow="hidden"
          >
            <MotionBox
              position="absolute"
              top="0"
              left={billingCycle === "Monthly" ? 0 : "156px"}
              width="148px"
              height="100%"
              bg="white"
              borderRadius="8px"
              zIndex={0}
              initial={false}
              animate={{
                left: billingCycle === "Monthly" ? 0 : "156px",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 32,
              }}
            />
            <Button
              onClick={() => setBillingCycle("Monthly")}
              color={billingCycle === "Monthly" ? "black" : "white"}
              bg="transparent"
              _hover={{}}
              _active={{}}
              zIndex={1}
              borderRadius="8px"
              fontWeight="bold"
              height="32px"
              width="148px"
              px="6"
              mr="2"
            >
              Mensal
            </Button>
            <Button
              onClick={() => setBillingCycle("Annual")}
              color={billingCycle === "Annual" ? "black" : "white"}
              bg="transparent"
              _hover={{}}
              _active={{}}
              zIndex={1}
              borderRadius="8px"
              height="32px"
              width="148px"
              fontWeight="bold"
              px="6"
            >
              Anual (30% OFF)
            </Button>
          </Box>
        </Box>
        <AllPrices type={billingCycle} />
        <WaveDivider />
      </Box>
    </>
  );
}
