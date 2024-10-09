import { Button, Link } from "@chakra-ui/react";

export default function ButtonTopics({ title, href, key }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
        <Button
      bg="transparent"
      key={key}
      _hover={{}}
      _active={{ bg: "rgba(0, 0, 0, 0.2)" }}
      css={{
        color:"black",
        textTransform: "uppercase",
        padding: "0px",
        fontSize: "14pt",
        fontWeight: "700",
        "&:hover::after": {
          width: "110%",
        },
        "&::after": {
          content: '" "',
          width: "0%",
          height: "4px",
          backgroundColor: "black",
          position: "absolute",
          bottom: "4px",
          left: "0px",
          transition: "0.3s ease-in-out",
        },
      }}
    >
      {title}
    </Button>
    </Link>
  );
}
