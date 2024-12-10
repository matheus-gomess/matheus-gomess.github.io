import {
  Box,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import plusWeb from "../../../assets/examples/web/template plus.png";
import plusPhone from "../../../assets/examples/phone/template plus phone.png";
import ButtonWhatsapp from "./buttonWhatsapp";

export default function ModalPlus({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxWidth="65vw" maxHeight="90vh">
        <ModalHeader paddingBottom="0px">
          <Heading fontSize="3xl">Plano Plus</Heading>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody padding="16px">
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center" }}
            justifyContent="space-between"
            gap={6}
            height="100%"
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={4}
              flex="1"
              justifyContent="center"
            >
              <Box flex="1" maxWidth="550px">
                <Image
                  src={plusWeb}
                  alt="Template Plus Web"
                  borderRadius="md"
                  objectFit="cover"
                  width="100%"
                />
              </Box>
              <Box flex="1" maxWidth="150px">
                <Image
                  src={plusPhone}
                  alt="Template Plus Phone"
                  borderRadius="md"
                  objectFit="cover"
                  width="100%"
                />
              </Box>
            </Flex>

            {/* Informações do plano */}
            <Box flex="1" padding={4} maxWidth="400px">
              <Text fontSize="2xl" fontWeight="bold" mb={4}>
                R$339/mês <br></br>ou<br></br> R$2.847/ano (30% OFF)
              </Text>
              <Text
                as="ul"
                fontSize="22px"
                position="relative"
                listStyleType="disc"
                ml="5"
              >
                <Text as="li" mb={2}>
                  5 páginas
                </Text>
                <Text as="li" mb={2}>
                  4 horas de suporte por dia
                </Text>
              </Text>

              <Box mt="4" fontSize="xl">
                <Text>✔ Animações</Text>
                <Text>✔ Componentes personalizados</Text>
              </Box>
              <Box
                mt={10}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <ButtonWhatsapp link={"https://wa.link/ltrdmj"} />
              </Box>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
