import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import bg1 from "../assets/service1.jpg";
import bg2 from "../assets/service2.jpg";
import bg3 from "../assets/service3.jpg";
import bg4 from "../assets/service4.jpg";
import bg5 from "../assets/service5.jpg";
import bg6 from "../assets/service6.jpg";

function Hero() {

  const slides = [
    {
      image: bg1,
      title: "Software Development",
      desc: "Build Scalable, High-Performance Software Secure, custom solutions tailored to your business growth.",
    },
    {
      image: bg2,
      title: "Application Development",
      desc: "Create Seamless Web & Mobile Applications Modern, user-focused apps built for performance and experience",
    },
    {
      image: bg3,
      title: "Management Consulting",
      desc: "Drive Smarter Business Decisions Optimize operations and accelerate growth with expert strategies.",
    },
    {
      image: bg4,
      title: "IT Staffing",
      desc: "Hire the Right Talent, Faster Skilled IT professionals to support and scale your projects.",
    },
    {
      image: bg5,
      title: "BPO / KPO",
      desc: "Streamline Operations Efficiently Cost-effective outsourcing solutions to boost productivity.",
    },
    {
      image: bg6,
      title: "IoT / AI Development",
      desc: "Power Your Business with Intelligent Solutions Leverage AI and IoT to automate, innovate, and scale faster.",
    },
  ];

  const [index, setIndex] = useState(0);

  // 🔥 AUTO SLIDE (7 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] md:h-[75vh] flex items-center justify-center overflow-hidden">

      {/* 🔥 PROGRESS BAR
      <motion.div
        key={index}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 7, ease: "linear" }}
        className="absolute top-0 left-0 h-[3px] bg-[#d4af37] z-30"
      /> */}

      {/* 🔥 BACKGROUND IMAGE */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        />
      </AnimatePresence>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-3xl text-center px-6">

        <AnimatePresence mode="wait">
          {/* 🔥 SWIPE SUPPORT */}
          <motion.div
            key={index}

            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) nextSlide();
              if (info.offset.x > 100) prevSlide();
            }}

            
            initial={
              index === 0
                ? { opacity: 0, x: -80 }
                : index === 1
                ? { opacity: 0, y: 80 }
                : { opacity: 0, scale: 0.8 }
            }

            animate={
              index === 0
                ? { opacity: 1, x: 0 }
                : index === 1
                ? { opacity: 1, y: 0 }
                : { opacity: 1, scale: 1 }
            }

            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* 🔥 WORD-BY-WORD ANIMATION */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white flex flex-wrap justify-center">
              {slides[index].title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-300 text-sm sm:text-base">
              {slides[index].desc}
            </p>

            {/* BUTTONS */}
            {/* <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#d4af37] text-black px-6 py-3 rounded-md font-semibold">
                About us
              </button>

              <button className="border border-[#d4af37] text-[#d4af37] px-6 py-3 rounded-md">
                contact us
              </button>
            </div> */}

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