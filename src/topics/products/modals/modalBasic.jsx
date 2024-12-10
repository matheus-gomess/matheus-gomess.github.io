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
import basicWeb from "../../../assets/examples/web/template basic blog - Copia.png";
import basicPhone from "../../../assets/examples/phone/template basic blog phone - Copia.png";
import ButtonWhatsapp from "./buttonWhatsapp";

export default function ModalBasic({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxWidth="65vw" maxHeight="90vh">
        <ModalHeader paddingBottom="0px">
          <Heading fontSize="3xl">Plano Basic</Heading>
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
                  src={basicWeb}
                  alt="Template Basic Web"
                  borderRadius="md"
                  objectFit="cover"
                  width="100%"
                />
              </Box>
              <Box flex="1" maxWidth="150px">
                <Image
                  src={basicPhone}
                  alt="Template Basic Phone"
                  borderRadius="md"
                  objectFit="cover"
                  width="100%"
                />
              </Box>
            </Flex>

            {/* Informações do plano */}
            <Box flex="1" padding={4} maxWidth="400px">
              <Text fontSize="2xl" fontWeight="bold" mb={4}>
                R$189/mês <br></br>ou<br></br> R$1.590/ano (30% OFF)
              </Text>
              <Text
                as="ul"
                fontSize="22px"
                position="relative"
                listStyleType="disc"
                ml="5"
              >
                <Text as="li" mb={2}>
                  Uma única página
                </Text>
                <Text as="li" mb={2}>
                  2 horas de suporte por dia
                </Text>
              </Text>

              <Box mt="4" fontSize="xl">
                <Text>✔ Página estática</Text>
                <Text>✔ Design Responsivo</Text>
              </Box>
              <Box
                mt={10}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <ButtonWhatsapp link={"https://wa.link/qspodw"} />
              </Box>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
