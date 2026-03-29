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
    { name: "IT / ITES", icon: <Cpu size={28} /> },
    { name: "Semiconductor", icon: <Activity size={28} /> },
    { name: "Artificial Intelligence", icon: <Brain size={28} /> },
    { name: "Real Estate & Construction", icon: <Building2 size={28} /> },
    { name: "Healthcare", icon: <HeartPulse size={28} /> },
    { name: "Agriculture", icon: <Wheat size={28} /> },
    { name: "Pharmaceutical", icon: <Pill size={28} /> },
    { name: "Media & Entertainment", icon: <Film size={28} /> },
    { name: "Logistics & Supply Chain", icon: <Truck size={28} /> },
    { name: "Travel & Hospitality", icon: <Plane size={28} /> },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">

      {/* 🔥 Background Image (optimized) */}
      <img
        src={bgImage}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* 🔥 Header Animation */}
        <ScrollReveal direction="left">
          <p className="text-yellow-400 text-sm tracking-widest mb-3">
            INDUSTRIES
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Industries We Serve
          </h2>
        </ScrollReveal>

        {/* 🔥 Stagger Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >

          {industries.map((item, i) => (

            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="group bg-[#111]/90 border border-[#2a2a2a] rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-yellow-400 transition-all duration-300"
            >

              {/* ICON */}
              <div className="w-14 h-14 rounded-lg bg-[#262626] flex items-center justify-center text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* NAME */}
              <p className="text-sm text-white group-hover:text-yellow-400 transition-colors duration-300">
                {item.name}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Industries;