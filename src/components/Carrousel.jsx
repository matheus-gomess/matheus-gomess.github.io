import { Box, Button, IconButton, Link, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import { useRef, useEffect, useState } from "react";
import codeImage from "../assets/codeImage.png";
import code2 from "../assets/code2.png";
import macbookImage from "../assets/macbookCode.png";

const images = [codeImage, code2, macbookImage];

const ImageCarousel = () => {
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(100);
  const [intervalId, setIntervalId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Para identificar o slide atual
  const [opacity, setOpacity] = useState(1);
  const duration = 15000;

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 7500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 2,
          color: "white",
        }}
      >
        <ul style={{ margin: 0 }}>{dots}</ul>
      </div>
    ),
    beforeChange: (current, next) => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex(next); // Atualiza o índice para personalizar a posição
        setOpacity(1);
      }, 1500);
      resetProgress();
    },
  };

  const resetProgress = () => {
    setProgress(100);
    clearInterval(intervalId);
    const id = setInterval(() => {
      setProgress((prev) => (prev > 0 ? prev - 100 / (duration / 100) : 0));
    }, 100);
    setIntervalId(id);
  };

  useEffect(() => {
    resetProgress();
    return () => clearInterval(intervalId);
  }, []);

  // Função para retornar estilos personalizados com base no índice atual
  const getTextStyles = () => {
    switch (currentIndex) {
      case 0: // Estilos para o primeiro slide (texto alinhado à esquerda e verticalmente)
        return (
          <Box
            position="absolute"
            top="40%" // Alinhado verticalmente ao centro
            left="15%" // Mais à esquerda
            transform="translateY(-50%)"
            zIndex={2}
            fontFamily="DM Sans, sans-serif"
            fontWeight="400"
            color="white"
            textAlign="left"
            opacity={opacity}
            transition="opacity 1.5s ease-in-out"
            whiteSpace="pre-wrap"
          >
            <Text fontSize="20px">Transforme sua ideia em uma</Text>
            <Text fontSize="70px" fontWeight="bold">
              Presença digital única e cativante. <br />
              Crie o site dos seus sonhos{" "}
              <Text as="span" color="#005AF5">
                hoje
              </Text>
              !
            </Text>
            <Link href="#products" style={{ textDecoration: "none" }}>
              <Button
                width="172px"
                height="60px"
                borderRadius="0px"
                bgColor="#005AF5"
                _hover={{ bgColor: "#003ba1" }}
              >
                Comece Agora!
              </Button>
            </Link>
          </Box>
        );
      case 1: // Estilos para o segundo slide (texto centralizado em duas linhas)
        return (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)" // Centraliza o texto
            zIndex={2}
            fontSize="40px"
            fontFamily="DM Sans, sans-serif"
            fontWeight="400"
            color="white"
            textAlign="center" // Alinha o texto no centro
            opacity={opacity}
            transition="opacity 1.5s ease-in-out"
            whiteSpace="pre-wrap"
          >
            A porta de entrada para o sucesso online começa com um site
            profissional. Vamos construir o seu juntos!
            <Link href="#products" style={{ textDecoration: "none" }}>
              <Button
                width="172px"
                height="60px"
                borderRadius="0px"
                bgColor="#005AF5"
                _hover={{ bgColor: "#003ba1" }}
              >
                Comece Agora!
              </Button>
            </Link>
          </Box>
        );
      case 2: // Estilos para o terceiro slide (mantém centralizado padrão)
        return (
          <Box
            position="absolute"
            bottom="20%" // Um pouco mais para cima da base
            left="50%"
            transform="translateX(-50%)"
            zIndex={2}
            fontSize="40px"
            fontFamily="DM Sans, sans-serif"
            fontWeight="400"
            color="white"
            textAlign="center"
            opacity={opacity}
            transition="opacity 1.5s ease-in-out"
            whiteSpace="pre-wrap"
          >
            Seja visto, seja lembrado. Construa uma vitrine virtual que impressiona!
            <Link href="#products" style={{ textDecoration: "none" }}>
              <Button
                width="172px"
                height="60px"
                borderRadius="0px"
                bgColor="#005AF5"
                _hover={{ bgColor: "#003ba1" }}
              >
                Comece Agora!
              </Button>
            </Link>
          </Box>
        );
      default:
        return {};
    }
  };

  return (
    <Box position="relative" width="full" overflow="hidden">
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Previous Slide"
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        onClick={() => sliderRef.current.slickPrev()}
        zIndex={2}
        borderRadius="full"
      />
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Next Slide"
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        onClick={() => sliderRef.current.slickNext()}
        zIndex={2}
        borderRadius="full"
      />

      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <Box key={index} height="95vh">
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Slider>

      {getTextStyles()}

      <Box
        position="absolute"
        bottom="30px"
        left="30px"
        borderRadius="20px"
        width="100px"
        height="5px"
        backgroundColor="gray.300"
      >
        <Box
          height="100%"
          width={`${progress}%`}
          borderRadius="20px"
          backgroundColor="#005AF5"
          transition="width 0.1s linear"
        />
      </Box>

      <style jsx>{`
        .slick-dots li button:before {
          color: white;
          opacity: 0.5;
        }

        .slick-dots li.slick-active button:before {
          color: #005AF5;
          opacity: 1;
        }
      `}</style>
    </Box>
  );
};

export default ImageCarousel;
