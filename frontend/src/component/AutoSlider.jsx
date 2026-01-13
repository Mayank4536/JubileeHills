import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: 'url("https://img.freepik.com/free-photo/female-beige-jacket-black-underwear-posing-studio_1328-4375.jpg")',
      heading: "Mahira Sharma",
      age: "22 Years",
    },
    {
      image: 'url("https://img.freepik.com/free-photo/woman-showcasing-jewelry-her-hands_1400-20.jpg")',
      heading: "Neha Agarwal",
      age: "21 Years",
    },
    {
      image: 'url("https://img.freepik.com/free-photo/studio-shot-brunette-girl-tunic-bed_627829-9595.jpg")',
      heading: "Apporva Dev",
      age: "20 Years",
    },
    {
      image: 'url("https://img.freepik.com/premium-photo/woman-corset-interior_427771-472.jpg")',
      heading: "Sakshi Rai",
      age: "23 Years",
    },
    {
      image: 'url("https://img.freepik.com/free-photo/elegance-lady-stands-near-window_8353-7936.jpg")',
      heading: "Zoya Khan",
      age: "22 Years",
    },
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <motion.div
      className="relative h-[600px] w-full overflow-hidden"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: slide.image }}
          >
            <div className="flex h-full items-center justify-start px-8 md:px-16">
              <div className="max-w-2xl space-y-6 text-white">
                <h1 className="text-4xl font-bold md:text-6xl">
                  {slide.heading}
                </h1>
                <p className="text-xl md:text-3xl">{slide.age}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Fixed Action Buttons */}
      <div className="absolute bottom-20 right-10 flex text-center  gap-4 z-50">
      <a href="https://wa.link/qxsvdn">
          <button className=" bg-green-500 text-white px-9 py-3 text-sm active:bg-gray-700">
            WhatsApp
          </button>
        </a>
        <a href="tel:+91 9155740236">
          <button className=" bg-yellow-700 text-white px-9 py-3 text-sm active:bg-gray-700">
            Contact Us
          </button>
        </a>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows (Optional) */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/30 p-2 text-white hover:bg-white/50"
        onClick={() =>
          setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
        }
      >
        {/* Left arrow icon */}
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/30 p-2 text-white hover:bg-white/50"
        onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
      >
        {/* Right arrow icon */}
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default AutoSlider;
