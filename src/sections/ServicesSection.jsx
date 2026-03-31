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
    { id: "it", title: "IT Staffing", desc: "We connect businesses with top-tier tech talent, ensuring faster hiring and long-term success.", icon: <Users size={26} />, image: itImg },
    { id: "software", title: "Software Development", desc: "We deliver scalable, secure, and high-performance software solutions tailored to business needs.", icon: <Code size={26} />, image: softwareImg },
    { id: "app", title: "Application Development", desc: "We build user-friendly web and mobile applications designed for performance and seamless experience.", icon: <Smartphone size={26} />, image: appImg },
    { id: "consulting", title: "Management Consulting", desc: "We help businesses optimize operations and drive digital transformation through strategic consulting.", icon: <Briefcase size={26} />, image: consultingImg },
    { id: "bpo", title: "BPO / KPO", desc: "We provide cost-effective outsourcing solutions to streamline business processes.", icon: <Layers size={26} />, image: bpoImg },
    { id: "ai", title: "IoT / AI Development", desc: "We leverage AI and IoT to build intelligent systems that drive automation and insights.", icon: <Cpu size={26} />, image: aiImg },
  ];

  return (
    <section className="relative bg-[#1a1a1a] py-20 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto text-center">

        {/* 🔥 HEADER */}
        <ScrollReveal>
          <p className="text-yellow-400 text-sm tracking-widest mb-3">
            OUR SERVICES
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Turn Your <span className="text-yellow-400">Career Goals</span> into Reality
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Unlock your full potential with our comprehensive career services.
          </p>
        </ScrollReveal>

        {/* 🔥 GRID */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => navigate(`/services/${service.id}`)}
              whileTap={{ scale: 0.96 }}
              className="group relative overflow-hidden bg-[#111] border border-gray-800 rounded-2xl p-6 text-white cursor-pointer"
            >

              {/* 🔥 IMAGE (OPTIMIZED) */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* 🔥 OVERLAY */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition duration-300" />

              {/* 🔥 CONTENT */}
              <div className="relative z-10 flex flex-col justify-end h-full">

                {/* ICON */}
                <div className="w-12 h-12 rounded-lg bg-[#0D0D0F]/90 flex items-center justify-center text-yellow-400 mb-4 transform transition duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-white transition duration-300 group-hover:text-yellow-400">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-gray-300 text-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  {service.desc}
                </p>

                {/* CTA */}
                <p className="mt-2 text-yellow-400 text-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  Know more →
                </p>

                {/* LINE */}
                <div className="mt-4 w-10 h-[2px] bg-yellow-400 group-hover:w-20 transition duration-300"></div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;