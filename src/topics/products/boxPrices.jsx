import { Box, Heading, Text, Button, Container, Stack } from "@chakra-ui/react";

function BoxPrices({
  title,
  price,
  pages,
  hours,
  features,
  highlight,
  gradientBg,
}) {
  return (
    <Container
      _hover={{
        transform: "scale(1.05)",
        boxShadow: gradientBg
          ? "0px 0px 20px 10px #eba66e" : highlight ? "0px 0px 20px 1px #00a2ff81" :
          "0px 5px 13px 6px rgba(0, 0, 0, 0.35)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      transition="0.2s ease"
      position="relative"
      bgGradient={gradientBg ? "linear(to-r, #7141a7, #612579)" : "white"}
      minHeight="400px"
      maxWidth="300px"
      borderRadius="20px"
      boxShadow="0px 5px 13px 6px rgba(0, 0, 0, 0.35)"
      padding="24px"
      border={highlight ? "2px solid #00a2ff81" : gradientBg ? "2px solid #eba66e" : "none"}
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
          bgGradient="linear(to-b, #6a3492, #a74185)"
          transform="rotate(-25deg)"
          transformOrigin="bottom left"
          opacity="0.35"
          zIndex="0"
        />
      )}

      {/* Efeito de brilho animado para o plano "Pro" */}
      {gradientBg && (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          borderRadius="10px"
          bgGradient="radial(#ffffff58, transparent)"
          opacity="0.3"
          animation="pulse 2s infinite"
          zIndex="0"
          pointerEvents="none" // para garantir que o efeito de brilho não bloqueie o conteúdo
        />
      )}

      <Heading color="white" mb="4" position="relative" zIndex="1">
        {title}
      </Heading>
      <Text
        fontSize="3xl"
        fontWeight="bold"
        color="white"
        position="relative"
        zIndex="1"
      >
        {price}
      </Text>
      <Text color="gray.200" position="relative" zIndex="1">
        {pages === 1 ? "- Uma única página" : pages === 5 ? "- 5 páginas" : "- 20 páginas" }
        
      </Text>
      <Text color="gray.200" position="relative" zIndex="1">
        Hours per month: {hours}
      </Text>
      <Box mt="4" position="relative" zIndex="1">
        {features.map((feature, index) => (
          <Text key={index} color="gray.100" fontSize="sm">
            ✔ {feature}
          </Text>
        ))}
      </Box>
      <Button
        bgColor="orange.400"
        color="white"
        mt="10"
        width="full"
        _hover={{ bgColor:"#eba66e" }}
        position="relative"
        zIndex="1"
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

export default function AllPrices() {
  return (
    <Stack direction="row" spacing="8" justify="center" mt="10" mb="300px">
      <BoxPrices
        title="Plano Basic"
        price="R$189/mês"
        pages={1}
        hours="10"
        features={["Transaction fee: 5%", "2 hr sessions"]}
      />
      <BoxPrices
        title="Plano Plus"
        price="R$339/mês"
        pages={5}
        hours="20"
        features={[
          "Transaction fee: 3%",
          "4 hr sessions",
          "Multistream to 2 platforms",
        ]}
        highlight
      />
      <BoxPrices
        title="Plano Pro"
        price="R$748/mês"
        hours="40"
        features={["Transaction fee: 2%", "6 hr sessions", "Priority support"]}
        gradientBg
      />
    </Stack>
  );
}
