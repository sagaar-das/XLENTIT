import { motion } from "framer-motion";

const sentence = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedHeading({ text, className = "" }) {
  const chars = text.split("");

  return (
    <motion.h1
      variants={sentence}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap justify-center ${className}`}
    >
      {chars.map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default AnimatedHeading;