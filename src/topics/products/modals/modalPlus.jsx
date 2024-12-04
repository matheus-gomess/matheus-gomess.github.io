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
      <ModalContent minWidth="70vw" minH="80vh">
        <ModalHeader paddingBottom="0px">
          <Heading>Plano Plus</Heading>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody padding="0px">
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            minHeight="80vh"
            padding={6} // Ajuste opcional para espaçamento interno
          >
            {/* Imagens */}
            <Flex gap={4}>
              <Box height="280px">
                <Image
                  src={plusWeb}
                  alt="Template Pro Web"
                  borderRadius="md"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box height="280px">
                <Image
                  src={plusPhone}
                  alt="Template Pro Phone"
                  borderRadius="md"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Flex>
            <Box flex="2" maxWidth="250px">
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Preço: R$339/mês | R$2.847/ano
              </Text>
              <Text mb={2}>- 5 páginas</Text>
              <Text mb={2}>- 4 horas de suporte por dia</Text>
              <Box mt="4">
                <Text>✔ Animações</Text>
                <Text>✔ Componentes personalizados</Text>
              </Box>
              <ButtonWhatsapp link={"https://wa.link/ltrdmj"}/>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
