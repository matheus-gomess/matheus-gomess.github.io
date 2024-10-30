import { Button, Container, Heading } from "@chakra-ui/react";

export default function BoxPrices ({ title }) {
    return (
        <Container bgColor="white" minHeight="400px" maxWidth="300px" borderRadius="20px">
            <Heading color="black">
                {title}
            </Heading>
            <Button bgColor="black">Saiba Mais</Button>
        </Container>
    )
}