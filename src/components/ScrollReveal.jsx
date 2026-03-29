import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up", // up | left | right
}) {
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -60 };
      case "right":
        return { opacity: 0, x: 60 };
      default:
        return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}