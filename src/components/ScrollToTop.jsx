import { useState, useEffect } from "react";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para rolar a página para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Função para verificar a posição do scroll
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Tooltip label="Voltar ao topo" aria-label="Rolar para o topo" placement="left">
          <IconButton
            position="fixed"
            bottom="20px"
            right="20px"
            size="lg"
            onClick={scrollToTop}
            icon={<ArrowUpIcon boxSize={6} color="white" />}
            aria-label="Scroll to top"
            bgColor="rgb(26, 31, 36)"
            _hover={{bgColor:"rgb(0, 99, 217)"}}
            borderRadius="full"
          />
        </Tooltip>
      )}
    </>
  );
};

export default ScrollToTop;
