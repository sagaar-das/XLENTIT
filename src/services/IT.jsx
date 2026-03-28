import { motion } from "framer-motion";

function IT() {
  return (
    <section className="text-white">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4"
      >
        IT Staffing
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-300 mb-10 max-w-2xl"
      >
        (No content as per your instruction — leave section placeholder or simple heading)
      </motion.p>

      {/* EMPTY STATE DESIGN */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        {/* Gold Line Accent */}
        <div className="w-12 h-[2px] bg-yellow-400 mb-4"></div>

        {/* Message */}
        <p className="text-gray-400">
          Content will be updated soon.
        </p>
      </motion.div>

    </section>
  );
}

export default IT;