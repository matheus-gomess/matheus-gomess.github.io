import { Button, ListItem } from "@chakra-ui/react";

export default function ButtonLinks({ href, title }) {
  return (
    <ListItem marginLeft="5px">
      <a href={href} target="_blank" rel="noreferrer">
        <Button
          padding="0px"
          fontSize="17px"
          bgColor="transparent"
          position="relative"
          _hover={{}}
          css={{
            "&:hover": {
              transform: "translateX(10px)",
              transition: "transform 0.3s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
            "&::after": {
              content: '""',
              width: "0%",
              height: "1px",
              backgroundColor: "white",
              position: "absolute",
              bottom: "3px",
              left: "0px",
              transition: "width 0.3s ease-in-out",
            },
          }}
        >
          {title}
        </Button>
      </a>
    </ListItem>
  );
}
