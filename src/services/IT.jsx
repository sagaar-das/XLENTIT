import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedText from "../components/AnimatedText";

function IT() {
  return (
    <section className="text-white px-6 py-16 max-w-7xl mx-auto">

      {/* 🔥 Heading (Left → Right Reveal) */}
      <AnimatedHeading
        text="IT Staffing"
        className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4"
      />

      {/* 🔥 Description (Scroll Reveal) */} 
      <AnimatedText className="text-center text-gray-400 mb-10" delay={0.5}>
         We connect businesses with top-tier IT professionals, ensuring faster hiring and long-term success.
      </AnimatedText>


      {/* 🔥 EMPTY STATE (Premium) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center py-16 text-center border border-gray-800 rounded-xl bg-[#111]/80"
      >

        {/* Accent Line */}
        <div className="w-12 h-[2px] bg-yellow-400 mb-5"></div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2">
          Content Coming Soon
        </h3>

        {/* Message */}
        <p className="text-gray-400 text-sm max-w-md">
          We are currently updating this section with detailed information about our IT staffing services.
        </p>

      </motion.div>

    </section>
  );
}

export default IT;