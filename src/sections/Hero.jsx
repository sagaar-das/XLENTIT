import { motion } from "framer-motion";
import logo from "../assets/xlentLogo.png";

function Hero() {
  return (
    <section className="relative bg-[#1a1a1a] px-4 sm:px-6 lg:px-10 py-20 md:py-28 min-h-screen flex items-center overflow-hidden">

      {/* 🔥 BACKGROUND LOGO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <img
          src={logo}
          alt="bg-logo"
          className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] object-contain"
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block border border-yellow-500 text-gray-300 px-5 py-2 rounded-full text-xs sm:text-sm mb-6 bg-white/5 backdrop-blur"
        >
          Trusted by 1,500+ Students & Graduates
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          Your Career{" "}
          <span className="text-yellow-500">Success</span>
          <br />
          is Guaranteed
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
        >
          End-to-end career support with personal mentorship, real interview preparation, and dedicated job assistance until you land your dream role.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition shadow"
          >
            Book Free Session →
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-yellow-500 font-medium hover:underline"
          >
            See How It Works
          </motion.button>

        </motion.div>

        {/* Scroll Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-xs tracking-widest text-gray-500"
        >
          SCROLL TO EXPLORE
        </motion.p>

      </motion.div>

    </section>
  );
}

export default Hero;