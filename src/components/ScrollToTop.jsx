import { useState, useEffect } from "react";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

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
    if (window.pageYOffset > 300) {
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
            icon={<ChevronUpIcon boxSize={6} color="black"/>}
            aria-label="Scroll to top"
            bgColor="#ffffff78"
            _hover={{}}
            borderRadius="full"
          />
        </Tooltip>
      )}
    </>
  );
};

export default ScrollToTop;
