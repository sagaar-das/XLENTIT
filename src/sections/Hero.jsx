// import { useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ChevronLeft, ChevronRight, ArrowRight, Mouse } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import AnimatedHeading from "../components/AnimatedHeading";

// import bg1 from "../assets/service1.webp";
// import bg2 from "../assets/service2.webp";
// import bg3 from "../assets/service3.webp";
// import bg4 from "../assets/service4.webp";
// import bg5 from "../assets/service5.webp";
// import bg6 from "../assets/service6.webp";

// function Hero() {

//   const navigate = useNavigate();

//   const slides = [
//     { image: bg1, title: "Software Development", desc: "Build scalable, high-performance software tailored to your business growth." },
//     { image: bg2, title: "Application Development", desc: "Create seamless web & mobile apps with modern performance and UX." },
//     { image: bg3, title: "Management Consulting", desc: "Optimize operations and accelerate growth with expert strategies." },
//     { image: bg4, title: "IT Staffing", desc: "Hire skilled IT professionals to scale your projects faster." },
//     { image: bg5, title: "BPO / KPO", desc: "Boost productivity with cost-effective outsourcing solutions." },
//     { image: bg6, title: "IoT / AI Development", desc: "Leverage AI & IoT to automate, innovate, and scale faster." },
//   ];

//   const [index, setIndex] = useState(0);

//   // Scroll animation
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 500], [0, 80]); // parallax move
//   const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

//   // Preload images
//   useEffect(() => {
//     slides.forEach((slide) => {
//       const img = new Image();
//       img.src = slide.image;
//     });
//   }, []);

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <section className="relative  h-[90vh] overflow-hidden">

//       {/* PARALLAX BACKGROUND */}
//       <motion.div
//         style={{
//           y,
//           opacity,
//           backgroundImage: `url(${slides[index].image})`,
//         }}
//         className="absolute inset-0 bg-cover bg-center will-change-transform transition-all duration-700"
//       />

//       {/* OVERLAY */}
//       <>
//         <div className="absolute inset-0 bg-black/65" />

//         <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08),transparent_65%)]" />
//       </>

//       {/* CONTENT */}
//       <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">

//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         >

//           {/* TITLE */}
//           <AnimatedHeading
//             text={slides[index].title}
//             className="text-[20px] sm:text-5xl font-bold text-yellow-400 mb-5 whitespace-nowrap"
//           />

//           {/* DESC */}
//           <p className="text-gray-300 text-[13px] sm:text-base max-w-xl mx-auto">
//             {slides[index].desc}
//           </p>

//           <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.96 }}
//               onClick={() => navigate("/services")}
//               className="group bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-7 py-3 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(250,204,21,0.18)]"
//             >
//               <span className="flex items-center gap-2">
//                 Explore Services
//                 <ArrowRight
//                   size={18}
//                   className="group-hover:translate-x-1 transition-transform"
//                 />
//               </span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.96 }}
//               onClick={() => navigate("/contact")}
//               className="border border-gray-600 hover:border-yellow-400 bg-black/30 backdrop-blur-md text-white px-7 py-3 rounded-xl transition duration-300"
//             >
//               Contact Us
//             </motion.button>

//           </div>

//         </motion.div>

//       </div>

//       {/* LEFT */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-black/30 backdrop-blur-md hover:border-yellow-400 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300"
//       >
//         <ChevronLeft size={22} />
//       </button>

//       {/* RIGHT */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-black/30 backdrop-blur-md hover:border-yellow-400 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300"
//       >
//         <ChevronRight size={22} />
//       </button>

//       {/* DOTS */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">

//         {slides.map((_, i) => (

//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`transition-all duration-300 rounded-full ${index === i
//               ? "w-8 h-2 bg-yellow-400"
//               : "w-2 h-2 bg-white/40 hover:bg-white"
//               }`}
//           />

//         ))}

//       </div>

//       {/* SCROLL INDICATOR */}
//       <motion.div
//         animate={{
//           y: [0, 8, 0],
//         }}
//         transition={{
//           duration: 1.8,
//           repeat: Infinity,
//         }}
//         className="absolute bottom-6 left-6 hidden lg:flex flex-col items-center text-white/70 z-20"
//       >

//         <Mouse
//           size={22}
//           className="text-yellow-400"
//         />

//         <span className="text-xs tracking-widest mt-2 rotate-90 origin-center">
//           SCROLL
//         </span>

//       </motion.div>

//     </section>
//   );
// }

// export default Hero;






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

    <section className="relative min-h-[82vh] lg:min-h-[88vh]  overflow-hidden">

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

      {/* Yellow Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-400/10 blur-[160px] rounded-full" />

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
              className="inline-flex px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10"
            >

              <span className="text-yellow-400 uppercase tracking-[0.18em] text-xs font-semibold">

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
              className="mt-6 text-white font-bold leading-tight text-4xl sm:text-5xl lg:text-[58px]"
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
              className="mt-8 uppercase tracking-[0.25em] text-sm text-gray-400"
            >

              WE SPECIALIZE IN

            </motion.p>

            {/* Animated Service */}

            <div className="h-20 mt-4 overflow-hidden flex items-center">

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
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400"
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
              className="mt-6  text-gray-300 text-sm md:text-base leading-7 max-w-xl "
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
              className="mt-10 flex flex-col sm:flex-row gap-4"
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
                className="group inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-7 py-3.5 rounded-xl transition duration-300 shadow-[0_0_35px_rgba(250,204,21,.18)]"
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
                className="border border-gray-700 hover:border-yellow-400 bg-black/30 backdrop-blur-md text-white font-semibold px-7 py-3.5 rounded-xl transition duration-300"
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">

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