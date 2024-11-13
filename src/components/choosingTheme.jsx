import { IconButton, useColorMode } from "@chakra-ui/react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

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
        transition={{ duration: 0.25 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {colorMode === "dark" ? (
            <motion.div
              key="moon"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <IoMdMoon size={25} color={color} />
            </motion.div>
          ) : (
            <motion.div
              key="sunny"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <IoMdSunny size={25} color={color} />
            </motion.div>
          )}
        </AnimatePresence>
      </IconButton>
    </div>
  );
}
