import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

import {
  Cpu,
  Activity,
  Brain,
  Building2,
  HeartPulse,
  Wheat,
  Pill,
  Film,
  Truck,
  Plane
} from "lucide-react";

import bgImage from "../assets/env-bg.webp";

function Industries() {

  const industries = [
    { name: "IT / ITES", icon: <Cpu size={26} /> },
    { name: "Semiconductor", icon: <Activity size={26} /> },
    { name: "Artificial Intelligence", icon: <Brain size={26} /> },
    { name: "Real Estate & Construction", icon: <Building2 size={26} /> },
    { name: "Healthcare", icon: <HeartPulse size={26} /> },
    { name: "Agriculture", icon: <Wheat size={26} /> },
    { name: "Pharmaceutical", icon: <Pill size={26} /> },
    { name: "Media & Entertainment", icon: <Film size={26} /> },
    { name: "Logistics & Supply Chain", icon: <Truck size={26} /> },
    { name: "Travel & Hospitality", icon: <Plane size={26} /> },
  ];

  return (
    <section
      className="relative py-20 px-6 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* 🔥 Header */}
        <ScrollReveal>
          <p className="text-yellow-400 text-sm tracking-widest mb-3">
            INDUSTRIES
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Industries We Serve
          </h2>
        </ScrollReveal>

        {/* 🔥 GRID */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {industries.map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ scale: 1.06 }}
              className="group bg-[#111]/90 border border-[#2a2a2a] rounded-xl p-6 flex flex-col items-center justify-center text-center"
            >

              {/* ICON */}
              <div className="w-12 h-12 rounded-lg bg-[#262626] flex items-center justify-center text-yellow-400 mb-3 transform transition duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* NAME */}
              <p className="text-sm text-white transition duration-300 group-hover:text-yellow-400">
                {item.name}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Industries;