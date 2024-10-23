const { extendTheme } = require("@chakra-ui/react");

const theme = extendTheme({
    config: {
        initialColorMode: "white",
        useSystemColorMode: false,
    },

    styles: {
        global: (props) => ({
          body: {
            bg: props.colorMode === "dark" ? "#000000" : "#ffffff",
            color: props.colorMode === "dark" ? "#ffffff" : "#000000",
          },
        }),
      },

})

export default theme;