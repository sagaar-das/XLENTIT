import { motion } from "framer-motion";

function TechTrendsSection() {
  const leftItems = [
    "Data Centers Becoming Strategic Infrastructure",
    "Robotic Shifts",
    "AI and Cybersecurity",
  ];

  const rightItems = [
    "Physical AI",
    "Agentic AI in the Workforce",
  ];

  return (
    <section className="relative bg-[#0d0d0f] py-16 px-6 overflow-hidden">

      {/* 🔥 SMALL BACKGROUND YEAR */}
      <div className="absolute right-6 bottom-0 text-[90px] md:text-[140px] font-bold text-white/5 select-none">
        2026
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* 🔥 HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-semibold text-white max-w-2xl"
        >
          What’s Shaping Technology This Year
        </motion.h2>

        {/* 🔥 DIVIDER */}
        <div className="mt-6 border-t border-gray-800"></div>

        {/* 🔥 GRID */}
        <div className="mt-6 grid md:grid-cols-2 gap-8">

          {/* LEFT */}
          <div className="space-y-4">
            {leftItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 border-b border-gray-800 pb-3 group"
              >
                <div className="w-[2px] h-5 bg-[#d4af37] group-hover:h-6 transition-all"></div>
                <p className="text-gray-400 text-sm group-hover:text-white transition">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            {rightItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 border-b border-gray-800 pb-3 group"
              >
                <div className="w-[2px] h-5 bg-[#d4af37] group-hover:h-6 transition-all"></div>
                <p className="text-gray-400 text-sm group-hover:text-white transition">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default TechTrendsSection;