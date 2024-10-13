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
        fontFamily: "DM Sans, sans-serif",
        padding: "0px",
        fontSize: "18px",
        fontWeight: "500",
        "&:hover::after": {
          width: "110%",
        },
        "&::after": {
          content: '" "',
          width: "0%",
          height: "4px",
          backgroundColor: "#0063D9",
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
