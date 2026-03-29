import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

import bg1 from "../assets/service1.webp";
import bg2 from "../assets/service2.webp";
import bg3 from "../assets/service3.webp";
import bg4 from "../assets/service4.webp";
import bg5 from "../assets/service5.webp";
import bg6 from "../assets/service6.webp";
import AnimatedHeading from "../components/AnimatedHeading";

function Hero() {

  const slides = [
    {
      image: bg1,
      title: "Software Development",
      desc: "Build scalable, high-performance software tailored to your business growth.",
    },
    {
      image: bg2,
      title: "Application Development",
      desc: "Create seamless web & mobile apps with modern performance and UX.",
    },
    {
      image: bg3,
      title: "Management Consulting",
      desc: "Optimize operations and accelerate growth with expert strategies.",
    },
    {
      image: bg4,
      title: "IT Staffing",
      desc: "Hire skilled IT professionals to scale your projects faster.",
    },
    {
      image: bg5,
      title: "BPO / KPO",
      desc: "Boost productivity with cost-effective outsourcing solutions.",
    },
    {
      image: bg6,
      title: "IoT / AI Development",
      desc: "Leverage AI & IoT to automate, innovate, and scale faster.",
    },
  ];

  const [index, setIndex] = useState(0);

  // 🔥 Auto slide (optimized)
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
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">

      {/* 🔥 Background Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index].image}
          alt=""
          loading="eager"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-3xl text-center px-6">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -80) nextSlide();
              if (info.offset.x > 80) prevSlide();
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >

            {/* 🔥 TITLE (Left → Right reveal) */}
            <AnimatedHeading
              text={slides[index].title}
              className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-5"
            />

            {/* 🔥 DESCRIPTION (ScrollReveal applied) */}
            <ScrollReveal delay={0.3} direction="up">
              <p className="mt-6 text-gray-300 text-sm sm:text-base">
                {slides[index].desc}
              </p>
            </ScrollReveal>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* 🔥 LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        ‹
      </button>

      {/* 🔥 RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        ›
      </button>

    </section>
  );
}

export default Hero;