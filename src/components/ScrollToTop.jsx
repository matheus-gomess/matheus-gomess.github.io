import { useState, useEffect } from "react";
import { IconButton, Link, Tooltip } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
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
        <Link href="#introduction" style={{ textDecoration: "none" }}>
          <Tooltip
            label="Voltar ao topo"
            aria-label="Rolar para o topo"
            placement="left"
          >
            <IconButton
              position="fixed"
              bottom="20px"
              right="20px"
              size="lg"
              icon={<ArrowUpIcon boxSize={6} color="white" />}
              aria-label="Scroll to top"
              bgColor="rgb(26, 31, 36)"
              _hover={{ bgColor: "rgb(0, 99, 217)" }}
              borderRadius="full"
            />
          </Tooltip>
        </Link>
      )}
    </>
  );
};

export default ScrollToTop;
