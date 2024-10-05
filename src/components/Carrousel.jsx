import { Box, IconButton } from "@chakra-ui/react";
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
  const duration = 10000;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
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
    beforeChange: () => {
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
          <Box key={index} height="90vh">
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Slider>
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
          backgroundColor="#2abadd"
          transition="width 0.1s linear"
        />
      </Box>

      <style jsx>{`
        .slick-dots li button:before {
          color: white;
          opacity: 0.5;
        }

        .slick-dots li.slick-active button:before {
          color: #2abadd;
          opacity: 1;
        }
      `}</style>
    </Box>
  );
};

export default ImageCarousel;
