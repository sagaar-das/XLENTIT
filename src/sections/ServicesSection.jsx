import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

import {
  Code,
  Smartphone,
  Briefcase,
  Users,
  Layers,
  Cpu,
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
      id: "it",
      title: "IT Staffing",
      shortDesc: "Hire top IT professionals for your growing business.",
      desc: "We connect businesses with top-tier tech talent, ensuring faster hiring and long-term success.",
      icon: <Users size={22} />,
      image: itImg,
    },
    {
      id: "software",
      title: "Software Development",
      shortDesc: "Scalable software built for modern businesses.",
      desc: "We deliver scalable, secure, and high-performance software solutions tailored to business needs.",
      icon: <Code size={22} />,
      image: softwareImg,
    },
    {
      id: "app",
      title: "Application Development",
      shortDesc: "Modern web & mobile applications with great UX.",
      desc: "We build user-friendly web and mobile applications designed for performance and seamless experience.",
      icon: <Smartphone size={22} />,
      image: appImg,
    },
    {
      id: "consulting",
      title: "Management Consulting",
      shortDesc: "Strategic consulting to accelerate business growth.",
      desc: "We help businesses optimize operations and drive digital transformation through strategic consulting.",
      icon: <Briefcase size={22} />,
      image: consultingImg,
    },
    {
      id: "bpo",
      title: "BPO / KPO",
      shortDesc: "Cost-effective outsourcing for business efficiency.",
      desc: "We provide cost-effective outsourcing solutions to streamline business processes.",
      icon: <Layers size={22} />,
      image: bpoImg,
    },
    {
      id: "ai",
      title: "IoT / AI Development",
      shortDesc: "AI-powered solutions for smarter businesses.",
      desc: "We leverage AI and IoT to build intelligent systems that drive automation and insights.",
      icon: <Cpu size={22} />,
      image: aiImg,
    },
  ];

  return (
    <section 
    id="services"
    className="relative bg-black-95  py-20 px-5 md:px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto text-center">

        {/* HEADER */}

        <ScrollReveal>
          <p className="text-yellow-400  text-xs md:text-sm tracking-[0.22em] mb-2">
            OUR SERVICES
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Turn Your{" "}
            <span className="text-yellow-400">
              Career Goals
            </span>{" "}
            into Reality
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-sm md:text-base text-gray-400 max-w-xl md:max-w-2xl mx-auto">
            Unlock your full potential with our comprehensive
            career services designed to help professionals
            achieve long-term success.
          </p>
        </ScrollReveal>

        {/* GRID */}

        <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {services.map((service, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: i * 0.05,
              }}
              whileHover={{
                y: -6,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => navigate(`/services/${service.id}`)}
              className="group relative w-full max-w-[400px] mx-auto overflow-hidden rounded-xl md:rounded-2xl p-4 min-h-[180px] lg:min-h-[200px]  bg-[#111] border border-gray-800 cursor-pointer"
            >

              {/* IMAGE */}

              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition duration-300" />

              {/* CONTENT */}

              <div className="relative z-10 flex flex-col h-full">

                <div className="flex items-center gap-3 mb-3">

                  <div className="w-9 h-9 rounded-lg bg-[#0D0D0F]/90 border border-gray-800 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition">

                    {service.icon}

                  </div>

                  <h3 className="text-[16px] md:text-lg font-semibold text-white group-hover:text-yellow-400 transition">

                    {service.title}

                  </h3>

                </div>

                {/* ALWAYS VISIBLE DESCRIPTION */}

                <p className="mt-1 text-[12px] md:text-[13px] text-gray-300 leading-5 line-clamp-2">

                  {service.shortDesc}

                </p>

                {/* EXPANDED DESCRIPTION */}

                <motion.div
                  initial={false}
                  className="overflow-hidden"
                >
                  <p
                    className="
                      mt-2
                      text-[13px] md:text-sm
                      text-gray-400
                      leading-6
                      max-h-0
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:max-h-16
                      group-hover:opacity-100
                    "
                  >
                    {service.desc}
                  </p>
                </motion.div>

                {/* Spacer */}

                <div className="flex-grow" />

                {/* CTA */}

                <div className="mt-2 flex items-center justify-between">

                  <p
                    className="
                      text-xs md:text-sm
                      font-medium
                      text-yellow-400
                      opacity-70
                      group-hover:opacity-100
                      transition-all
                      duration-300
                    "
                  >
                    Know More →
                  </p>

                  <div
                    className="
                      w-8
                      h-[2px]
                      bg-yellow-400
                      transition-all
                      duration-300
                      group-hover:w-16
                    "
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default ServicesSection;