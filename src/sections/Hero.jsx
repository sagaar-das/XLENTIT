import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import bg1 from "../assets/service1.webp";
import bg2 from "../assets/service2.webp";
import bg3 from "../assets/service3.webp";
import bg4 from "../assets/service4.webp";
import bg5 from "../assets/service5.webp";
import bg6 from "../assets/service6.webp";

function Hero() {

  const navigate = useNavigate();

  const slides = [
    {
      image: bg1,
      service: "Software Development",
    },
    {
      image: bg2,
      service: "Application Development",
    },
    {
      image: bg3,
      service: "Management Consulting",
    },
    {
      image: bg4,
      service: "IT Staffing",
    },
    {
      image: bg5,
      service: "BPO / KPO",
    },
    {
      image: bg6,
      service: "IoT / AI Development",
    },
  ];

  const [index, setIndex] = useState(0);

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 600], [0, 80]);

  const opacity = useTransform(scrollY, [0, 400], [1, 0.75]);

  /* ---------------- PRELOAD ---------------- */

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  /* ---------------- AUTO SLIDER ---------------- */

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (

    <section className="relative min-h-[78vh] sm:min-h-[82vh] lg:min-h-[88vh]  overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <AnimatePresence mode="wait">

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          style={{
            y,
            opacity,
            backgroundImage: `url(${slides[index].image})`,
          }}
          className="absolute inset-0 bg-cover bg-center"
        />

      </AnimatePresence>

      {/* ================= OVERLAY ================= */}

      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

      

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg,#ffffff 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-20 min-h-[90vh] flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-4xl">

            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: .6,
              }}
              className="inline-flex px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10"
            >

              <span className="text-yellow-400 uppercase tracking-[0.18em] text-[10px] sm:text-xs font-semibold">

                XLENT IT SERVICES

              </span>

            </motion.div>

            {/* Main Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: .6,
                delay: .15,
              }}
              className="mt-2 sm:mt-6 text-white font-bold leading-tight text-[30px] sm:text-5xl lg:text-[58px]"
            >

              Transforming Businesses

              <br />

              Through

              <span className="text-yellow-400">

                {" "}Technology & Talent

              </span>

            </motion.h1>

            {/* Service Label */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: .3,
              }}
              className="mt-3 sm:mt-8 uppercase tracking-[0.25em] text-[10px] sm:text-xs text-gray-400"
            >

              WE SPECIALIZE IN

            </motion.p>

            {/* Animated Service */}

            <div className="h-10 sm:h-20 mt-2 sm:mt-4 overflow-hidden flex items-center">

              <AnimatePresence mode="wait">

                <motion.h2
                  key={slides[index].service}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -35,
                  }}
                  transition={{
                    duration: .45,
                  }}
                  className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-yellow-400"
                >

                  {slides[index].service}

                </motion.h2>

              </AnimatePresence>

            </div>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: .6,
                delay: .4,
              }}
              className="mt-2 sm:mt-6  text-gray-300 text-[13px] sm:text-sm md:text-base leading-6 sm:leading-7 max-w-xl "
            >

              Helping organizations hire exceptional talent,
              build scalable software, and accelerate digital
              transformation through innovative technology
              solutions tailored for modern businesses.

            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .55,
              }}
              className="mt-5 sm:mt-10 flex flex-col sm:flex-row gap-4"
            >

              {/* Explore */}

              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: .97,
                }}
                onClick={() => navigate("/services")}
                className="group inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-sm sm:text-base px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl transition duration-300 shadow-[0_0_35px_rgba(250,204,21,.18)]"
              >

                Explore Services

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />

              </motion.button>

              {/* Contact */}

              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: .97,
                }}
                onClick={() => navigate("/contact")}
                className="border border-gray-700 hover:border-yellow-400 bg-black/30 backdrop-blur-md text-white text-sm sm:text-base font-semibold px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl transition duration-300"
              >

                Contact Us

              </motion.button>

            </motion.div>



          </div>



        </div>

      </div>

      {/* ================= LEFT ARROW ================= */}

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30
        w-10 h-10 rounded-full
        border border-white/15
        bg-black/30 backdrop-blur-md
        hover:border-yellow-400
        hover:bg-black/50
        transition-all duration-300
        hidden md:flex items-center justify-center"
      >

        <ChevronLeft
          size={20}
          className="text-white"
        />

      </motion.button>

      {/* ================= RIGHT ARROW ================= */}

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30
        w-10 h-10 rounded-full
        border border-white/15
        bg-black/30 backdrop-blur-md
        hover:border-yellow-400
        hover:bg-black/50
        transition-all duration-300
        hidden md:flex items-center justify-center"
      >

        <ChevronRight
          size={20}
          className="text-white"
        />

      </motion.button>

      {/* ================= SLIDE INDICATORS ================= */}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">

        {slides.map((_, i) => (

          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-500 rounded-full

              ${index === i
                ? "w-8 h-[6px] bg-yellow-400"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white"
              }

            `}
          />

        ))}

      </div>

      

    </section>

  );

}

export default Hero;