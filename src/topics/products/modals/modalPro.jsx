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
                  Preço: Pro
                </Text>
                <Text mb={2}>Páginas: 5</Text>
                <Text mb={2}>Horas por mês: 10</Text>
                <Box mt="4">
                  <Text>✔ Acesso personalizado</Text>
                  <Text>✔ Suporte premium</Text>
                  <Text>✔ Atualizações mensais</Text>
                </Box>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
  