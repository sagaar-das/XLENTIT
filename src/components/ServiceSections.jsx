import { motion } from "framer-motion";

function ServiceSections({ data }) {
  return (
    <div className="mt-10 space-y-8">

      {data.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="group p-2 rounded-xl hover:bg-[#111] transition duration-300 cursor-pointer"
        >
          {/* Heading */}
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 flex items-center gap-3">
            
            {/* Gold dot */}
            <span className="w-2 h-2 bg-[#d4af37] rounded-full group-hover:scale-125 transition"></span>

            {item.title}
          </h3>

          {/* Content */}
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition">
            {item.description}
          </p>
        </motion.div>
      ))}

    </div>
  );
}

export default ServiceSections;