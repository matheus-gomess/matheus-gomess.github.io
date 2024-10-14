import { Button, Link } from "@chakra-ui/react";

export default function ButtonTopics({ title, href, index }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Button
        bg="transparent"
        key={index}
        _hover={{}}
        _active={{ bg: "rgba(0, 0, 0, 0.125)" }}
        css={{
          letterSpacing:"-0.374px",
          color: "black",
          padding: "0px",
          fontSize: "14pt",
          fontWeight: "500",
          "&:hover":{
            color:"#0063D9"
          },
          "&:hover::after": {
            width: "110%",
          },
          "&::after": {
            content: '" "',
            width: "0%",
            height: "3px",
            backgroundColor: "#0063D9",
            position: "absolute",
            bottom: "-5px",
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
