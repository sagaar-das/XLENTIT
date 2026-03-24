import { motion } from "framer-motion";
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

import bgImage from "../assets/env-bg.jpg"; //bg - image

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

      {/* 🔥 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* 🔥 LOW BRIGHTNESS OVERLAY */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">




        {/* 🔥 HEADER */}
        <p className="text-[#d4af37] text-sm tracking-widest mb-3">
          INDUSTRIES
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Industries We Serve
        </h2>

        {/* 🔥 GRID */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {industries.map((item, i) => {

            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-[#111] border border-[#2a2a2a] rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all hover:border-[#d4af37] hover:-translate-y-1"
              >

                {/* ICON */}
                <div className="w-14 h-14 rounded-lg bg-[#262626] flex items-center justify-center text-[#d4af37] mb-4 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* NAME */}
                <p className="text-sm text-white group-hover:text-[#d4af37] transition">
                  {item.name}
                </p>

              </motion.div>
            );
          })}

        </div>



      </div>
    </section>
  );
}

export default Industries;