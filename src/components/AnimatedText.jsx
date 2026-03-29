import { motion } from "framer-motion";

function AnimatedText({ children, delay = 0, className = "" }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.p>
  );
}

export default AnimatedText;