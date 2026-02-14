"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  {
    image: "/ecom/slider-women1.jpg",
    title: "Welcome To Our Store",
    subtitle: "Discover amazing products",
  },
  {
    image: "/ecom/slider-women2.jpg",
    title: "New Arrivals",
    subtitle: "Check out the latest trends",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const slideRef = useRef(null);

  // Clone first and last slide for infinite effect
  const totalSlides = [images[images.length - 1], ...images, images[0]];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Handle infinite jump
  useEffect(() => {
    const slider = slideRef.current;

    const handleTransitionEnd = () => {
      if (currentIndex === totalSlides.length - 1) {
        slider.style.transition = "none";
        setCurrentIndex(1);
      }

      if (currentIndex === 0) {
        slider.style.transition = "none";
        setCurrentIndex(images.length);
      }
    };

    slider.addEventListener("transitionend", handleTransitionEnd);

    return () =>
      slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, totalSlides.length]);

  // Re-enable transition after jump
  useEffect(() => {
    const slider = slideRef.current;

    if (slider.style.transition === "none") {
      requestAnimationFrame(() => {
        slider.style.transition = "transform 700ms ease-in-out";
      });
    }
  }, [currentIndex]);

  // Dot navigation
  const goToSlide = (index) => {
    setCurrentIndex(index + 1);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        ref={slideRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {totalSlides.map((slide, index) => (
          <div key={index} className="relative min-w-full h-[500px]">
            <Image
              src={slide.image}
              alt="hero image"
              width={2000}
              height={2000}
              priority
              className="object-cover w-full h-full"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index + 1 ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

{
  /*  <div className="w-full relative">
      <div className="absolute bottom-14 lg:bottom-22 px-6 lg:px-12">
        <p className="text-md font-semibold text-white">BIKINI & SWIMSUITS</p>
        <p className="text-3xl md:text-5xl lg:text-7xl  font-semibold text-white py-3">
          Flash Sales Madness
        </p>
        <button
          type="submit"
          className="text-black bg-white hover:bg-red-600 hover:text-white text-sm font-semibold py-3 px-4 rounded-full flex items-center justify-center gap-2"
        >
          Explore Collections{" "}
          <span>
            <ArrowUpRight className="size-4 " />
          </span>
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-2 absolute bottom-4">
        <span className="p-1 rounded-full border border-white flex items-center justify-center">
          <span className="rounded-full p-1 bg-white"></span>
        </span>
        <span className="rounded-full p-1 bg-white"></span>
      </div>
      <Image
        src="/ecom/slider-women1.jpg"
        alt="women image"
        width={2000}
        height={2000}
        className="w-full h-96 lg:h-screen object-cover"
      />
    </div> */
}
