import { IconButton, useColorMode } from "@chakra-ui/react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { motion } from "framer-motion";

export default function ChoosingTheme({ color }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <IconButton
        bgColor="transparent"
        _hover={{ cursor: "pointer" }}
        _active={{}}
        onClick={toggleColorMode}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {colorMode === "dark" ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IoMdMoon size={22} color={color} />
          </motion.div>
        ) : (
          <motion.div
            key="sunny"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IoMdSunny size={22} color={color} />
          </motion.div>
        )}
      </IconButton>
    </div>
  );
}
