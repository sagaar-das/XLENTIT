import { motion } from "framer-motion";

function PrimaryButton({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="relative px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium overflow-hidden"
    >
      <span className="relative z-10">{children}</span>

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-yellow-300 blur-xl"></div>
    </motion.button>
  );
}

export default PrimaryButton;