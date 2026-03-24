import { motion } from "framer-motion";
import bgImage from "../assets/hero-bg.jpg";
import HeroParticles from "./HeroParticles";



function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔥 GOLD GRADIENT GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 via-transparent to-[#d4af37]/10"></div>

      {/* 🔥 PARTICLES */}
      <HeroParticles />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-3xl text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
        >
          Transforming Careers.{" "}
          <span className="text-[#d4af37]">Delivering Results.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-300 text-sm sm:text-base"
        >
          At XLENT IT Services, we don’t just train — we transform careers.
          Our mission is to help students and professionals land high-quality
          tech jobs through personalized mentorship and placement support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-[#d4af37] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#b8962e] transition">
            Book Free Session
          </button>

          <button className="border border-[#d4af37] text-[#d4af37] px-6 py-3 rounded-md hover:bg-[#d4af37]/10 transition">
            Learn More
          </button>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;