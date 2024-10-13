import { Link, Button } from "@chakra-ui/react";

export default function ButtonHREF() {
  return (
    <Link href="#products" style={{ textDecoration: "none" }}>
      <Button
        width="172px"
        height="60px"
        borderRadius="0px"
        color="white"
        bgColor="#005AF5"
        _hover={{ bgColor: "#003ba1" }}
      >
        Comece Agora!
      </Button>
    </Link>
  );
}
