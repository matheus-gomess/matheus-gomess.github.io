import { Link, Button } from "@chakra-ui/react";

export default function ButtonHREF({ scale = 1 }) {
  return (
    <Link href="#start" style={{ textDecoration: "none" }}>
      <Button
        width={`${172 * scale}px`}
        height={`${60 * scale}px`}
        borderRadius="0px"
        color="white"
        bgColor="#005AF5"
        _hover={{ bgColor: "#003ba1" }}
        fontSize={`${16 * scale}px`}
      >
        Comece Agora!
      </Button>
    </Link>
  );
}
