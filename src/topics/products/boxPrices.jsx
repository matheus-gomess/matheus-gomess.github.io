import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaCrown } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

function BoxPrices({
  title,
  price,
  pages,
  hours,
  features,
  highlight,
  gradientBg,
  onSelectPlan,
}) {
  return (
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
      borderRadius="20px"
      boxShadow="0px 5px 13px 6px rgba(0, 0, 0, 0.35)"
      padding="24px"
      border={
        highlight
          ? "2px solid #00a2ff81"
          : gradientBg
          ? "2px solid #eba66e"
          : "none"
      }
      overflow="hidden"
    >
      {/* Camada diagonal */}
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
          zIndex="0"
        />
      )}
      <Box display="flex" alignItems="start" gap="7px">
        <Heading color="white" mb="4" position="relative" zIndex="1">
          {title}
        </Heading>
        <Box fontSize="32px">
          {highlight ? <GoPlus color="white" /> : gradientBg ? <FaCrown color="#eba66e" /> : null}
          
        </Box>
      </Box>
      <Text fontSize="22px" color="gray.200" position="relative" zIndex="1">
        {pages === 1
          ? "- Uma única página"
          : pages === 5
          ? "- 5 páginas"
          : "- 20 páginas"}
      </Text>
      <Text color="gray.200" fontSize="22px" position="relative" zIndex="1">
        - {hours} horas de suporte por dia 
      </Text>
      <Box mt="4" position="relative"  color="gray.200" zIndex="1">
        {features.map((feature, index) => (
          <Text key={index} color="gray.100" fontSize="16px">
            <Box as="span" color={gradientBg ? "#eba66e" : "green"}>✔</Box> {feature}
          </Text>
        ))}
      </Box>

      <Heading color="white" mb="4" position="relative" zIndex="1">
        {title}
      </Heading>
      <Text
        fontSize="3xl"
        mt="8"
        fontWeight="bold"
        color="white"
        position="relative"
        zIndex="1"
      >
        {price}
      </Text>
      <Button
        bgColor="orange.400"
        color="white"
        mt="2"
        width="full"
        _hover={{ bgColor: "#ac7950" }}
        position="relative"
        zIndex="1"
        onClick={() => onSelectPlan(title, price, pages, hours, features)}
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
  );
}

export default function AllPrices({type}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (title, price, pages, hours, features) => {
    setSelectedPlan({ title, price, pages, hours, features });
    onOpen();
  };

  return (
    <>
      <Stack direction="row" spacing="8" justify="center" mt="10" mb="250px">
        <BoxPrices
          title="Plano Basic"
          price={type === "Monthly" ? "R$189/mês" : "R$1.590/ano"}
          pages={1}
          hours="2"
          features={["Página estática", "Design Responsivo"]}
          onSelectPlan={handleSelectPlan}
        />
        <BoxPrices
          title="Plano Plus"
          price={type === "Monthly" ? "R$339/mês" : "R$2.847/ano"}
          pages={5}
          hours="4"
          features={[
            "Animações",
            "Componentes personalizados"
          ]}
          highlight
          onSelectPlan={handleSelectPlan}
        />
        <BoxPrices
          title="Plano Pro"
          price={type === "Monthly" ? "R$748/mês" : "R$6.283/ano"}
          hours="8"
          features={[
            "Animações",
            "Componentes personalizados",
            "Suporte priorizado",
            "Utilização de API",
            "Ajustes e assistência técnica 24/7"
          ]}
          gradientBg
          onSelectPlan={handleSelectPlan}
        />
      </Stack>

      {/* Modal para exibir os detalhes do plano */}
      {selectedPlan && (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedPlan.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>{`Preço: ${selectedPlan.price}`}</Text>
              <Text>{`Páginas: ${
                selectedPlan.pages === 1
                  ? "Uma única página"
                  : selectedPlan.pages === 5
                  ? "5 páginas"
                  : "20 páginas"
              }`}</Text>
              <Text>{`Horas por mês: ${selectedPlan.hours}`}</Text>
              <Box mt="4">
                {selectedPlan.features.map((feature, index) => (
                  <Text key={index}>{`✔ ${feature}`}</Text>
                ))}
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
