import { Box, Heading, Text, Button, Container, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { FaCrown } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import ModalBasic from "./modals/modalBasic";
import ModalPlus from "./modals/modalPlus";
import ModalPro from "./modals/modalPro";

function BoxPrices({
  title,
  price,
  pages,
  hours,
  features,
  highlight,
  gradientBg,
  type,
  installment,
}) {
  const [openModalBasic, setOpenModalBasic] = useState(false);
  const [openModalPlus, setOpenModalPlus] = useState(false);
  const [openModalPro, setOpenModalPro] = useState(false);

  const handleCloseBasic = () => {
    setOpenModalBasic(false);
  };

  const handleClosePlus = () => {
    setOpenModalPlus(false);
  };

  const handleClosePro = () => {
    setOpenModalPro(false);
  };

  return (
    <>
      <Container
        _hover={{
          transform: "scale(1.05)",
          boxShadow: gradientBg
            ? "0px 0px 20px 10px #eba66e"
            : highlight
            ? "0px 0px 20px 1px #00a2ff81"
            : "0px 5px 13px 6px rgba(0, 0, 0, 0.35)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        transition="0.2s ease"
        position="relative"
        bgGradient={gradientBg ? "linear(to-r, #4e2d75, #3d1f5a)" : "white"}
        minHeight="400px"
        maxWidth="300px"
        borderRadius="12px"
        zIndex="1"
        boxShadow="0px 5px 13px 6px rgba(0, 0, 0, 0.35)"
        padding="16px"
        border={
          highlight
            ? "2px solid #00a2ff81"
            : gradientBg
            ? "2px solid #eba66e"
            : "none"
        }
        overflow="hidden"
      >
        {gradientBg && (
          <Box
            position="absolute"
            right="0"
            width="200px"
            height="400px"
            bottom="40px"
            left="300px"
            bgGradient="linear(to-b, #4a276a, #6e327d)"
            transform="rotate(-25deg)"
            transformOrigin="bottom left"
            opacity="0.35"
          />
        )}
        <Box display="flex" alignItems="start" gap="7px" zIndex="1">
          <Heading color="white" mb="4" position="relative">
            {title}
          </Heading>
          <Box fontSize="32px" zIndex="1">
            {highlight ? (
              <GoPlus color="white" />
            ) : gradientBg ? (
              <FaCrown color="#eba66e" />
            ) : null}
          </Box>
        </Box>
        <Text
          as="ul"
          fontSize="22px"
          color="gray.200"
          position="relative"
          zIndex="1"
          listStyleType="disc"
          ml="5"
        >
          <Box as="li">
            {pages === 1
              ? "Uma única página"
              : pages === 5
              ? "5 páginas"
              : "20 páginas"}
          </Box>
        </Text>
        <Text
          as="ul"
          color="gray.200"
          fontSize="22px"
          position="relative"
          zIndex="1"
          listStyleType="disc"
          ml="5"
        >
          <Box as="li">{hours} horas de suporte por dia</Box>
        </Text>

        <Box mt="4" position="relative" color="gray.200" zIndex="1">
          <Container
            className="scrollbar"
            padding="0px"
            maxW="100%"
            maxH="72px"
            overflow="hidden"
            overflowY="auto"
          >
            {features.map((feature, index) => (
              <Text key={index} color="gray.100" fontSize="16px">
                <Box as="span" color={gradientBg ? "#eba66e" : "green"}>
                  ✔
                </Box>{" "}
                {feature}
              </Text>
            ))}
          </Container>
          <style>{`
    .scrollbar::-webkit-scrollbar {
      width: 6px;
    }

    .scrollbar::-webkit-scrollbar-thumb {
      background: white;
      border-radius: 8px;
    }
    .scrollbar::-webkit-scrollbar-track {
      background: #381e50; /* Fundo da barra */
    }
  `}</style>
        </Box>
        <Box mt={gradientBg ? "20px" : "8"}>
          <Text fontSize="18px" fontWeight="bold" mb={gradientBg ? "20px" : "8"} color="white">
            {type === "Monthly" ? "Pacote Mensal" : "Pacote Anual (30% OFF)"}
          </Text>
          {type === "Annual" && (
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color="white"
              display="flex"
              alignItems="baseline"
            >
              <Text fontSize="md" color="gray.300" fontWeight="400">
                12x
              </Text>
              <Text>{installment}</Text>
            </Text>
          )}
          {type === "Monthly" ? (
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color="white"
              display="flex"
              alignItems="baseline"
              marginBottom="24px"
            >
              <Text>{price.split("/")[0]}</Text>
              <Text fontSize="md" color="gray.300" fontWeight="400">
                /{price.split("/")[1]}
              </Text>
            </Text>
          ) : (
            <Text fontSize="md" color="white">Total de {price.split("/")[0]}</Text>
          )}
        </Box>

        <Button
          bgColor="orange.400"
          color="white"
          mt="4"
          width="full"
          _hover={{ bgColor: "#ac7950" }}
          position="relative"
          height="32px"
          zIndex="1"
          onClick={() => {
            gradientBg
              ? setOpenModalPro(true)
              : highlight
              ? setOpenModalPlus(true)
              : setOpenModalBasic(true);
          }}
        >
          Selecionar Plano
        </Button>

        <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }
      `}</style>
      </Container>
      <ModalBasic isOpen={openModalBasic} onClose={handleCloseBasic} />
      <ModalPlus isOpen={openModalPlus} onClose={handleClosePlus} />
      <ModalPro isOpen={openModalPro} onClose={handleClosePro} />
    </>
  );
}

export default function AllPrices({ type }) {
  return (
    <Stack direction="row" spacing="8" justify="center" mt="10" mb="250px">
      <BoxPrices
        title="Plano Basic"
        price={type === "Monthly" ? "R$ 189/mês" : "R$ 1.590/ano"}
        installment={type === "Annual" && "R$ 132,50"}
        pages={1}
        hours="2"
        features={["Página estática", "Design Responsivo"]}
        type={type}
      />
      <BoxPrices
        title="Plano Plus"
        price={type === "Monthly" ? "R$ 339/mês" : "R$ 2.847/ano"}
        installment={type === "Annual" && "R$ 237,25"}
        pages={5}
        hours="4"
        features={["Animações", "Componentes personalizados"]}
        highlight
        type={type}
      />
      <BoxPrices
        title="Plano Pro"
        price={type === "Monthly" ? "R$ 748/mês" : "R$ 6.283/ano"}
        installment={type === "Annual" && "R$ 523,58"}
        hours="8"
        features={[
          "Animações",
          "Componentes personalizados",
          "Suporte priorizado",
          "Utilização de API",
          "Ajustes e assistência técnica 24/7",
        ]}
        gradientBg
        type={type}
      />
    </Stack>
  );
}
