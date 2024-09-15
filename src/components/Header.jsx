import { Heading, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box
        as="header"
        padding="20px"
        display="flex"
        justifyContent="space-between"
        maxH="10vh"
        borderBottom="1px"
        alignItems="center"
        w="100%"
      >
        <Heading>{"<PróximoWeb! />"}</Heading>
      </Box>
    </>
  );
}
