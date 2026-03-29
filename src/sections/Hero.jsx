import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";

import bg1 from "../assets/service1.webp";
import bg2 from "../assets/service2.webp";
import bg3 from "../assets/service3.webp";
import bg4 from "../assets/service4.webp";
import bg5 from "../assets/service5.webp";
import bg6 from "../assets/service6.webp";

function Hero() {

  const slides = [
    { image: bg1, title: "Software Development", desc: "Build scalable, high-performance software tailored to your business growth." },
    { image: bg2, title: "Application Development", desc: "Create seamless web & mobile apps with modern performance and UX." },
    { image: bg3, title: "Management Consulting", desc: "Optimize operations and accelerate growth with expert strategies." },
    { image: bg4, title: "IT Staffing", desc: "Hire skilled IT professionals to scale your projects faster." },
    { image: bg5, title: "BPO / KPO", desc: "Boost productivity with cost-effective outsourcing solutions." },
    { image: bg6, title: "IoT / AI Development", desc: "Leverage AI & IoT to automate, innovate, and scale faster." },
  ];

  const [index, setIndex] = useState(0);

  // 🔥 Scroll animation
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]); // parallax move
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

  // 🔥 Preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // 🔥 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[75vh] overflow-hidden">

      {/* 🔥 PARALLAX BACKGROUND */}
      <motion.div
        style={{
          y,
          opacity,
          backgroundImage: `url(${slides[index].image})`,
        }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
      />

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >

          {/* TITLE */}
          <AnimatedHeading
            text={slides[index].title}
            className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-5"
          />

          {/* DESC */}
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            {slides[index].desc}
          </p>

        </motion.div>

      </div>

      {/* 🔥 LEFT */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
      >
        ‹
      </button>

      {/* 🔥 RIGHT */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
      >
        ›
      </button>

    </section>
  );
}

export default Hero;