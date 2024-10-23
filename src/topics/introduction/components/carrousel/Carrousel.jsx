import { Box, IconButton, Image, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import { useRef, useState, useEffect } from "react";
import codeImage from "../../../../assets/codeImage.png";
import code2 from "../../../../assets/code2.png";
import macbookImage from "../../../../assets/macbookCode.png";
import ButtonHREF from "./Button";

const images = [codeImage, code2, macbookImage];

export default function ImageCarousel() {
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(100);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const autoplaySpeed = 9000;

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    draggable: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          overflow: "hidden",
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
        setCurrentIndex(next);
        setOpacity(1);
      }, 700);
      setProgress(-2.5);
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0));
    }, autoplaySpeed / 100);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Função para retornar estilos personalizados com base no índice atual
  const getTextStyles = () => {
    switch (currentIndex) {
      case 0:
        return (
          <Box
            position="absolute"
            top="40%"
            left="15%"
            transform="translateY(-50%)"
            zIndex={2}
            fontWeight="400"
            color="white"
            textAlign="left"
            opacity={opacity}
            transition="opacity 0.7s ease-in-out"
            whiteSpace="pre-wrap"
          >
            <Text fontSize="25px">Transforme sua ideia em uma</Text>
            <Text fontSize="70px" fontWeight="bold">
              Presença digital única e cativante. <br />
              Crie o site dos seus sonhos{" "}
              <Box as="span" color="#005AF5">
                hoje
              </Box>
              !
            </Text>
            <ButtonHREF />
          </Box>
        );
      case 1:
        return (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={2}
            fontSize="40px"
            color="white"
            opacity={opacity}
            transition="opacity 0.7s ease-in-out"
            whiteSpace="pre-wrap"
          >
            <Text fontSize="70px" fontWeight="bold">
              A porta de entrada para o sucesso online começa com um{" "}
              <Box
                as="span"
                textDecoration="underline"
                textDecorationColor="#003ba1"
              >
                website
              </Box>
              .
            </Text>
            <Text textDecoration="underline" textDecorationColor="#003ba1">
              Vamos construir o seu juntos!
            </Text>
            <Box position="relative" bottom="120px" left="550px">
              <ButtonHREF scale={1.25} />
            </Box>
          </Box>
        );
      case 2:
        return (
          <Box
            position="absolute"
            bottom="20%"
            left="50%"
            transform="translateX(-50%)"
            zIndex={2}
            fontSize="40px"
            fontWeight="400"
            color="white"
            opacity={opacity}
            transition="opacity 0.7s ease-in-out"
            whiteSpace="pre-wrap"
          >
            <Text fontSize="70px" fontStyle="italic">
              "Seja{" "}
              <Box
                as="span"
                textDecoration="underline"
                textDecorationColor="#003ba1"
              >
                visto
              </Box>{" "}
              ,
              <br />
              seja{" "}
              <Box
                as="span"
                textDecoration="underline"
                textDecorationColor="#003ba1"
              >
                lembrado
              </Box>
              ."
            </Text>
            <Text fontWeight="bold" fontSize="40px">
              Construa uma vitrine virtual que{" "}
              <Box as="span" color="#005AF5">
                impressiona
              </Box>
              !
            </Text>
            <Box display="flex" alignItems="center" justifyContent="center">
              <ButtonHREF scale={1.15} />
            </Box>
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
        onClick={() => {
          sliderRef.current.slickPrev();
          setProgress(-2.5);
        }}
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
        onClick={() => {
          sliderRef.current.slickNext();
          setProgress(-2.5);
        }}
        zIndex={2}
        borderRadius="full"
      />

      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <Box key={index} height="95vh">
            <Image
              src={src}
              onClick={null}
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
          width={`${100 - progress}%`}
          borderRadius="20px"
          backgroundColor="#005AF5"
          transition="width 0.1s linear"
        />
      </Box>

      <style jsx="true">{`
        .slick-dots li button:before {
          color: white;
          opacity: 0.5;
        }

        .slick-dots li.slick-active button:before {
          color: #005af5;
          opacity: 1;
        }
      `}</style>
    </Box>
  );
}
