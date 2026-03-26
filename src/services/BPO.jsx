import { motion } from "framer-motion";

function BPO() {
  const services = [
    "Customer Support Services",
    "Data Processing & Management",
    "Finance & Accounting Outsourcing",
    "Research & Analytics (KPO)",
  ];

  return (
    <section className="text-white">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4"
      >
        BPO / KPO
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-300 mb-10 max-w-2xl"
      >
        We provide cost-effective outsourcing solutions to streamline business processes and
        enhance productivity.
      </motion.p>

      {/* SERVICES LIST */}
      <div className="space-y-4">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 8 }}
            className="group flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer
                       hover:bg-[#111] transition duration-300"
          >
            {/* GOLD LINE */}
            <div className="w-1 h-6 bg-[#d4af37] rounded-full group-hover:h-8 transition-all duration-300"></div>

            {/* TEXT */}
            <p className="text-gray-300 group-hover:text-white transition">
              {item}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default BPO;