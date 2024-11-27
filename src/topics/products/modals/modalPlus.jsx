import { Box, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text } from "@chakra-ui/react";
import plusWeb from "../../../assets/examples/web/template plus.png";
import plusPhone from "../../../assets/examples/phone/template plus phone.png";

export default function ModalPlus ({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent minWidth="70vw" minH="80vh">
          <ModalCloseButton />
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
                  Preço: plus
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
    )
}