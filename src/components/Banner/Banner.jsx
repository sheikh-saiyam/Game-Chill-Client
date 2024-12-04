import { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "https://img.opencritic.com/game/17118/3AydMhoj.jpg",
      alt: "Image 1",
    },
    {
      src: "https://img.opencritic.com/game/17289/5MsccLLT.jpg",
      alt: "Image 4",
    },
    {
      src: "https://i.ibb.co.com/bKjmp8c/Untitled-Project-5.jpg",
      alt: "Image 5",
    },
    {
      src: "https://i.ibb.co.com/9V0LH9M/Untitled-Project-2.jpg",
      alt: "Image 2",
    },
    {
      src: "https://i.ibb.co.com/4d5kMb0/Untitled-Project-3.jpg",
      alt: "Image 3",
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };
  return (
    <div className="carousel w-full relative rounded-2xl mb-12 lg:mb-24">
      {/* Carousel Items */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${
            index === currentSlide ? "block" : "hidden"
          }`}
        >
          <img
            src={image.src}
            className="w-full md:h-[550px] rounded-2xl border-2 border-[#cccccc] lg:px-5 "
            alt={image.alt}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5  text-white flex justify-center items-center"></div>
        </div>
      ))}

      {/* Carousel Controls */}
      <div className="absolute flex justify-between lg:justify-between bottom-0 lg:bottom-auto transform lg:-translate-y-1/2 left-0 right-0 lg:left-5 lg:right-5 lg:top-1/2 z-10">
        <button
          onClick={prevSlide}
          className="btn btn-active rounded-none lg:btn-circle"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-active rounded-none lg:btn-circle"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
