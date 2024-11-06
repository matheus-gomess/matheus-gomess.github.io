import { useEffect } from "react";
import { Box, Container, Image, useColorMode } from "@chakra-ui/react";
import codeImage from "../../assets/codeImage.png";
import code2 from "../../assets/code2.png";
import macbookImage from "../../assets/macbookCode.png";
import "./SliderCss.css";

export default function SliderExamples({ valueDesign }) {
    console.log(valueDesign);
    const { colorMode } = useColorMode();
    const arrowColor = colorMode === "light" ? "#000" : "#fff";
    useEffect(() => {
        const galleryContainer = document.querySelector(".gallery-container");
        const galleryControlsContainer = document.querySelector(".gallery-controls");
        const galleryControls = ["Anterior", "Próximo"];
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
                this.carouselArray.forEach(el => {
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
            }

            setControls() {
                // Limpa os controles antes de adicionar novos botões
                galleryControlsContainer.innerHTML = "";
                this.carouselControls.forEach(control => {
                    const button = document.createElement("button");
                    button.className = `gallery-controls-${control}`;
                    button.innerHTML = control;
                    galleryControlsContainer.appendChild(button);
                });
            }

            useControls() {
                const triggers = [...galleryControlsContainer.childNodes];
                triggers.forEach(control => {
                    control.addEventListener("click", e => {
                        e.preventDefault();
                        this.setCurrentState(control);
                    });
                });
            }
        }

        if (galleryContainer && galleryControlsContainer && galleryItems.length > 0) {
            const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
            exampleCarousel.setControls();
            exampleCarousel.useControls();
        }
    }, [arrowColor]); // Array vazio para rodar o efeito apenas após a montagem inicial

    return (
        <Container className="gallery">
            <Box className="gallery-container">
                <Image className="gallery-item gallery-item-1" src={codeImage} />
                <Image className="gallery-item gallery-item-2" src={code2} />
                <Image className="gallery-item gallery-item-3" src={macbookImage} />
            </Box>
            <Box className="gallery-controls"></Box>
        </Container>
    );
}
