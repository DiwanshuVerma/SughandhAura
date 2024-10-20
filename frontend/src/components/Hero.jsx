import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "THE FRAGRANCE OF LIFE",
            description: "Gucci Flora: A vibrant bouquet of floral notes, fruits, and a hint of green, radiating femininity.",
            imgSrc: "/assets/perfume.png",
        },
        {
            title: "THE FRAGRANCE OF LIFE",
            description: "POSSESS: An enchanting blend of exotic spices and rich florals, exuding confidence and irresistible allure.",
            imgSrc: "/assets/perfume1.png",
        },
        {
            title: "THE FRAGRANCE OF LIFE",
            description: "Acqua di Gioia: A refreshing breeze of citrus, floral notes, and aquatic essence, embodying tranquility.",
            imgSrc: "/assets/perfume2.png",
        },
        {
            title: "THE FRAGRANCE OF LIFE",
            description: "A captivating essence of delicate florals and warm spices, evoking mystery and timeless elegance.",
            imgSrc: "/assets/perfume3.png",
        },
        {
            title: "THE FRAGRANCE OF LIFE",
            description: "Poison Dior: An intoxicating blend of spicy notes, dark florals, and warm amber, captivating allure.",
            imgSrc: "/assets/perfume4.png",
        },
        {
            title: "THE FRAGRANCE OF LIFE",
            description: "Givenchy Gentlemen Paris: A sophisticated fusion of bold spices, woody undertones, and refined elegance.",
            imgSrc: "/assets/perfume6.png",
        },
    ];

    const handlePrev = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    };

    return (
        <div className="w-full max-w-[1300px] m-auto h-screen sm:px-6 px-0 lg:pt-16 pt-24">
            <div className="relative flex overflow-hidden lg:h-[calc(100vh-14vh)] h-[calc(100vh-24vh)] isolate items-center">
                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`sm-screen  flex absolute w-full transition-transform duration-700 ${index === currentSlide
                                ? "translate-x-0"
                                : index < currentSlide
                                    ? "-translate-x-full"
                                    : "translate-x-full"
                            }`}
                    >
                        {/* Title and Description Section */}
                        <div className="flex-1 self-center">
                            <h1 className="text-[2.5rem] md:text-[4.1rem] px-2 text-white font-medium ">{slide.title}</h1>
                        </div>

                        {/* Image Section */}
                        <div className="flex-[1.2] relative flex justify-center items-center">
                            <img src={slide.imgSrc} alt="perfume" className="img-width h-[80%] md:h-full object-contain" />
                            <div className="w-28 h-36 md:w-52 md:h-56 lg:w-72 lg:h-80 m-auto bg-white absolute rounded-[50%] -z-20 blur-3xl"></div>
                        </div>

                        {/* Description Section */}
                        <div className="hidden sm:block flex-1 self-end mb-12 md:mb-28 border-r-[4px] md:border-r-[6px] border-[#e2f280] text-end mr-2">
                            <p className="text-white text-[1rem] md:text-[1.3rem] pr-4 md:pr-6">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className=" top-2/3 absolute sm:top-1/2  left-4 md:left-6 transform -translate-y-1/2 bg-[rgba(82,82,82,0.5)] text-white p-2 md:p-1 md:px-6 rounded-md backdrop-blur-md"
            >
                <FontAwesomeIcon icon={faChevronLeft} size="2x" />
            </button>
            <button
                onClick={handleNext}
                className="top-2/3 absolute sm:top-1/2  right-4 md:right-6 transform -translate-y-1/2 bg-[rgba(80,80,80,0.5)] text-white p-2 md:p-1 md:px-6 rounded-md backdrop-blur-md"
            >
                <FontAwesomeIcon icon={faChevronRight} size="2x" />
            </button>
        </div>
    );
};
