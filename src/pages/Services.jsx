import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Software from "../services/Software";
import Application from "../services/Application";
import Consulting from "../services/Consulting";
import IT from "../services/IT";
import BPO from "../services/BPO";
import AI from "../services/AI";

import bg1 from "../assets/service1.webp";
import bg2 from "../assets/service2.webp";
import bg3 from "../assets/service3.webp";
import bg4 from "../assets/service4.webp";
import bg5 from "../assets/service5.webp";
import bg6 from "../assets/service6.webp";
import { Helmet } from "react-helmet-async";

function Services() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const services = [
    { id: "software", title: "Software Development", image: bg1, component: <Software /> },
    { id: "it", title: "IT Staffing", image: bg4, component: <IT /> },
    { id: "app", title: "Application Development", image: bg2, component: <Application /> },
    { id: "consulting", title: "Management Consulting", image: bg3, component: <Consulting /> },
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


    <>
      <Helmet>
        <title>Services | Xlent IT Services</title>

        <meta name="description" content="Explore IT staffing, contract hiring, permanent placement, recruiting, and workforce solutions tailored for modern businesses." />

        <link rel="canonical" href="https://www.xlent-itservice.com/services" />
      </Helmet>

      <div className="bg-[#1a1a1a] text-white min-h-screen">

        {/* HERO */}
        <div className="relative h-[40vh] overflow-hidden">

          <motion.div
            key={currentService.id}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentService.image})` }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <motion.h1
              key={currentService.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-bold text-white"
            >
              {currentService.title} Service
            </motion.h1>
          </div>

        </div>

        {/* FULL WIDTH CONTENT (EDGE TO EDGE) */}
        <div className="w-full bg-black relative">

          {/* Loader */}
          {loading && (
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20 backdrop-blur-sm">
              <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Animated Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {currentService.component}
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </>


  );
}

export default Services;