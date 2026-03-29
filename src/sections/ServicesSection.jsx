import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

import {
  Code,
  Smartphone,
  Briefcase,
  Users,
  Layers,
  Cpu
} from "lucide-react";

import softwareImg from "../assets/software.webp";
import appImg from "../assets/app.webp";
import consultingImg from "../assets/consulting.webp";
import itImg from "../assets/staffing.webp";
import bpoImg from "../assets/bpo.webp";
import aiImg from "../assets/ai.webp";

function ServicesSection() {

  const navigate = useNavigate();

  const services = [
    {
      id: "software",
      title: "Software Development",
      desc: "We deliver scalable, secure, and high-performance software solutions tailored to business needs.",
      icon: <Code size={28} />,
      image: softwareImg,
    },
    {
      id: "app",
      title: "Application Development",
      desc: "We build user-friendly web and mobile applications designed for performance and seamless experience.",
      icon: <Smartphone size={28} />,
      image: appImg,
    },
    {
      id: "consulting",
      title: "Management Consulting",
      desc: "We help businesses optimize operations and drive digital transformation through strategic consulting.",
      icon: <Briefcase size={28} />,
      image: consultingImg,
    },
    {
      id: "it",
      title: "IT Staffing",
      desc: "We connect businesses with top-tier tech talent, ensuring faster hiring and long-term success.",
      icon: <Users size={28} />,
      image: itImg,
    },
    {
      id: "bpo",
      title: "BPO / KPO",
      desc: "We provide cost-effective outsourcing solutions to streamline business processes.",
      icon: <Layers size={28} />,
      image: bpoImg,
    },
    {
      id: "ai",
      title: "IoT / AI Development",
      desc: "We leverage AI and IoT to build intelligent systems that drive automation and insights.",
      icon: <Cpu size={28} />,
      image: aiImg,
    },
  ];

  return (
    <section className="relative bg-[#1a1a1a] py-20 px-6 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* 🔥 HEADER WITH SCROLL ANIMATION */}
        <ScrollReveal direction="left">
          <p className="text-yellow-400 text-sm tracking-widest mb-3">
            OUR SERVICES
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Turn Your
            <span className="text-yellow-400"> Career Goals </span> into Reality
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Unlock your full potential with our comprehensive career services.
          </p>
        </ScrollReveal>

        {/* 🔥 STAGGER GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {services.map((service, i) => (

            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              onClick={() => navigate(`/services/${service.id}`)}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.04 }}
              className="group relative overflow-hidden bg-[#111] border border-gray-800 rounded-2xl p-6 text-white cursor-pointer transition-transform duration-300"
            >

              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-end">

                {/* ICON */}
                <div className="w-14 h-14 rounded-lg bg-[#0D0D0F]/90 flex items-center justify-center text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition duration-300">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-gray-300 text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                  {service.desc}
                </p>

                {/* CTA */}
                <p className="mt-2 text-yellow-400 text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                  Know more →
                </p>

                {/* LINE */}
                <div className="mt-4 w-10 h-[2px] bg-yellow-400 group-hover:w-20 transition-all duration-500"></div>

              </div>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_70%)]" />

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default ServicesSection;