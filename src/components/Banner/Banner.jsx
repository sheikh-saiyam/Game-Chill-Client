import { useState, useEffect } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "https://cdn2.unrealengine.com/social-image-chapter4-s3-3840x2160-d35912cc25ad.jpg",
      alt: "Image 1",
    },
    {
      src: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_Minecraft.jpg",
      alt: "Image 2",
    },
    {
      src: "https://assets.newatlas.com/dims4/default/de91311/2147483647/strip/true/crop/2560x1344+0+48/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fgta-5-review.jpg&na.image_optimisation=0",
      alt: "Image 3",
    },
    {
      src: "https://blog.playstation.com/tachyon/2023/12/56935f822f365f2cae0282333bf9f2e60dcb4211.jpg",
      alt: "Image 4",
    },
    {
      src: "https://www.cyberpunk.net/build/images/pre-order/buy-b/keyart-ue-en@2x-cd66fd0d.jpg",
      alt: "Image 5",
    },
    {
      src: "https://www.fifaultimateteam.it/en/wp-content/uploads/2023/07/cover-ultimate-edition-easports-fc-24.jpg",
      alt: "Image 6",
    },
    {
      src: "https://cdn1.epicgames.com/6009be9994c2409099588cde6f3a5ed0/offer/EGS_CitiesSkylines_ColossalOrder_S3-2560x1440-14df106873c918591e49bd9604841e83.jpg",
      alt: "Image 7",
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

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full relative rounded-2xl mb-12 lg:mb-24 overflow-hidden">
      {/* Carousel Items */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image.src}
              className="w-full h-[350px] md:h-[500px] lg:h-[550px] rounded-2xl border-2 border-[#cccccc]"
              alt={image.alt}
            />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="absolute flex justify-between lg:justify-between bottom-0 lg:bottom-auto transform lg:-translate-y-1/2 left-0 right-0 lg:left-5 lg:right-5 lg:top-1/2 z-10">
        <button
          onClick={prevSlide}
          className="btn bg-transparent border-2 text-white font-semibold rounded-none lg:btn-circle"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn bg-transparent border-2 text-white font-semibold rounded-none lg:btn-circle"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
