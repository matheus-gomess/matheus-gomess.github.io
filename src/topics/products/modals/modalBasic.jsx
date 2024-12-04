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
      <ModalContent minWidth="70vw" minH="80vh">
        <ModalHeader paddingBottom="0px">
          <Heading>Plano Basic</Heading>
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
                  src={basicWeb}
                  alt="Template Pro Web"
                  borderRadius="md"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box height="280px">
                <Image
                  src={basicPhone}
                  alt="Template Pro Phone"
                  borderRadius="md"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Flex>
            <Box flex="2" maxWidth="250px">
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Preço: R$189/mês | R$1.590/ano
              </Text>
              <Text mb={2}>- Uma única página</Text>
              <Text mb={2}>- 2 horas de suporte por dia</Text>
              <Box mt="4">
                <Text>✔ Página estática</Text>
                <Text>✔ Design Responsivo</Text>
              </Box>
              <ButtonWhatsapp link={"https://wa.link/qspodw"}/>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
