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
  import proWeb from "../../../assets/examples/web/templateproweb.png";
  import proPhone from "../../../assets/examples/phone/templateprophone.png";
import ButtonWhatsapp from "./buttonWhatsapp";
  
  export default function ModalPro({ isOpen, onClose }) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxWidth="70vw" maxH="80vh">
          <ModalHeader paddingBottom="0px">
            <Heading>Plano Pro</Heading>
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
                    src={proWeb}
                    alt="Template Pro Web"
                    borderRadius="md"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box height="280px">
                  <Image
                    src={proPhone}
                    alt="Template Pro Phone"
                    borderRadius="md"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Flex>
              <Box flex="2" maxWidth="250px">
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  Preço: R$748/mês | R$6.283/ano
                </Text>
                <Text mb={2}>- 20 páginas</Text>
                <Text mb={2}>- 8 horas de suporte por dia</Text>
                <Box mt="4">
                  <Text>✔ Animações</Text>
                  <Text>✔ Componentes personalizados</Text>
                  <Text>✔ Suporte priorizado</Text>
                  <Text>✔ Utilização de API</Text>
                  <Text>✔ Ajuste e assistência técnica 24/7</Text>
                </Box>
                <ButtonWhatsapp link={"https://wa.link/imukbs"}/>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
  