import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import basicWeb from "../../assets/examples/web/template basic blog - Copia.png";
import plusWeb from "../../assets/examples/web/template plus.png";
import proWeb from "../../assets/examples/web/templateproweb.png";
import basicPhone from "../../assets/examples/phone/template basic blog phone - Copia.png";
import plusPhone from "../../assets/examples/phone/template plus phone.png";
import proPhone from "../../assets/examples/phone/templateprophone.png";
import "./SliderCss.css";

export default function SliderExamples({ valueDesign }) {
  const [selectedPlan, setSelectedPlan] = useState("Basic");
  const { colorMode } = useColorMode();
  const arrowColor = colorMode === "light" ? "#000" : "#fff";

  useEffect(() => {
    const galleryContainer = document.querySelector(".gallery-container");
    const galleryControlsContainer =
      document.querySelector(".gallery-controls");
    const galleryItems = document.querySelectorAll(".gallery-item");

    if (galleryContainer) {
      galleryContainer.style.setProperty("--arrow-color", arrowColor);
    }

    class Carousel {
      constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
      }

      updateGallery() {
        this.carouselArray.forEach((el) => {
          el.classList.remove("gallery-item-1");
          el.classList.remove("gallery-item-2");
          el.classList.remove("gallery-item-3");
        });

        this.carouselArray.slice(0, 3).forEach((el, i) => {
          el.classList.add(`gallery-item-${i + 1}`);
        });
      }

      setCurrentState(direction) {
        if (direction.className === "gallery-controls-Anterior") {
          this.carouselArray.unshift(this.carouselArray.pop());
        } else {
          this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
        this.updateSelectedPlan();
      }

      setControls() {
        galleryControlsContainer.innerHTML = "";
        this.carouselControls.forEach((control) => {
          const button = document.createElement("button");
          button.className = `gallery-controls-${control}`;
          button.innerHTML = control;
          galleryControlsContainer.appendChild(button);
        });
      }

      useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach((control) => {
          control.addEventListener("click", (e) => {
            e.preventDefault();
            this.setCurrentState(control);
          });
        });
      }

      updateSelectedPlan() {
        const currentItem = this.carouselArray[0];
        if (currentItem.src.includes("basic")) {
          setSelectedPlan("Plus");
        } else if (currentItem.src.includes("plus")) {
          setSelectedPlan("Pro");
        } else {
          setSelectedPlan("Basic");
        }
      }
    }

    if (
      galleryContainer &&
      galleryControlsContainer &&
      galleryItems.length > 0
    ) {
      const exampleCarousel = new Carousel(galleryContainer, galleryItems, [
        "Anterior",
        "Próximo",
      ]);
      exampleCarousel.setControls();
      exampleCarousel.useControls();
    }
  }, [arrowColor]);

  const isPhoneDesign = valueDesign !== "Computador";

  return (
    <Container className={`gallery ${isPhoneDesign ? "phone-design" : ""}`}>
      <Link href="#products">
        <Box className="gallery-container">
          <Image
            className="gallery-item gallery-item-1"
            src={valueDesign === "Computador" ? proWeb : proPhone}
          />
          <Image
            className="gallery-item gallery-item-2"
            src={valueDesign === "Computador" ? basicWeb : basicPhone}
          />
          <Image
            className="gallery-item gallery-item-3"
            src={valueDesign === "Computador" ? plusWeb : plusPhone}
          />
        </Box>
      </Link>

      <Box className="gallery-plan-name" textAlign="center" mb="5vh">
        <Heading>
          Plano{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={selectedPlan}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: "inline-block" }}
            >
              {selectedPlan}
              {selectedPlan === "Pro" ? null : selectedPlan === "Plus" ? null : null }
            </motion.span>
          </AnimatePresence>
        </Heading>
      </Box>
      <Box className="gallery-controls"></Box>
    </Container>
  );
}
