import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Software from "../services/Software";
import Application from "../services/Application";
import Consulting from "../services/Consulting";
import IT from "../services/IT";
import BPO from "../services/BPO";
import AI from "../services/AI";

import bg1 from "../assets/service1.jpg";
import bg2 from "../assets/service2.jpg";
import bg3 from "../assets/service3.jpg";
import bg4 from "../assets/service4.jpg";
import bg5 from "../assets/service5.jpg";
import bg6 from "../assets/service6.jpg";

function Services() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const services = [
    { id: "software", title: "Software Development", image: bg1, component: <Software /> },
    { id: "app", title: "Application Development", image: bg2, component: <Application /> },
    { id: "consulting", title: "Management Consulting", image: bg3, component: <Consulting /> },
    { id: "it", title: "IT Staffing", image: bg4, component: <IT /> },
    { id: "bpo", title: "BPO / KPO", image: bg5, component: <BPO /> },
    { id: "ai", title: "IoT / AI Development", image: bg6, component: <AI /> },
  ];

  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!serviceId) return;
    const index = services.findIndex(s => s.id === serviceId);
    if (index !== -1) setActive(index);
  }, [serviceId]);

  const handleClick = (i) => {
    setLoading(true);

    setTimeout(() => {
      setActive(i);
      navigate(`/services/${services[i].id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setLoading(false);
    }, 300);
  };

  const currentService = services[active] || services[0];

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">

      {/* HERO */}
      <div className="relative h-[60vh] overflow-hidden">

        <motion.div
          key={currentService.id}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentService.image})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.h1
            key={currentService.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold text-[#d4af37]"
          >
            {currentService.title}
          </motion.h1>
        </div>

      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row py-16 px-4 sm:px-6 lg:px-8 gap-10">

        {/* LEFT SIDEBAR */}
        <div className="md:w-1/5">
          <h3 className="text-xl mb-6 text-[#d4af37] font-semibold">
            Our Services
          </h3>

          <div className="space-y-3">
            {services.map((s, i) => (
              <motion.button
                key={s.id}
                onClick={() => handleClick(i)}
                whileHover={{ scale: 1.03 }}
                className={`relative w-full text-left px-5 py-4 rounded-xl transition-all duration-300
                  ${active === i
                    ? "bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : "bg-[#111] text-gray-400 border border-[#2a2a2a] hover:border-[#d4af37]"
                  }`}
              >
                {s.title}

                
              </motion.button>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-2/3 relative">

          {/* Loader */}
          {loading && (
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20 backdrop-blur-sm">
              <div className="w-10 h-10 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-[#0b0b0b] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              {currentService.component}
            </motion.div>
          </AnimatePresence>

        </div>

      </div>

    </div>
  );
}

export default Services;