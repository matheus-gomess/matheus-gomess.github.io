import { Button, ListItem, useColorMode} from "@chakra-ui/react";

export default function ButtonLinks({ href, title }) {
  const { colorMode } = useColorMode();

  return (
    <ListItem marginLeft="5px">
      <a href={href} target="_blank" rel="noreferrer">
        <Button
          padding="0px"
          fontSize="17px"
          color={colorMode === "dark" ? "black" : "white"}
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
              backgroundColor: colorMode === "dark" ? "black" : "white",
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
