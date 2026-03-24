import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Briefcase,
  Users,
  Layers,
  Cpu
} from "lucide-react";

function ServicesSection() {

  const services = [
    {
      title: "Software Development",
      desc: "We deliver scalable, secure, and high-performance software solutions tailored to business needs.",
      icon: <Code size={28} />,
    },
    {
      title: "Application Development",
      desc: "We build user-friendly web and mobile applications designed for performance and seamless experience.",
      icon: <Smartphone size={28} />,
    },
    {
      title: "Management Consulting",
      desc: "We help businesses optimize operations and drive digital transformation through strategic consulting.",
      icon: <Briefcase size={28} />,
    },
    {
      title: "IT Staffing",
      desc: "We connect businesses with top-tier tech talent, ensuring faster hiring and long-term success.",
      icon: <Users size={28} />,
    },
    {
      title: "BPO / KPO",
      desc: "We provide cost-effective outsourcing solutions to streamline business processes.",
      icon: <Layers size={28} />,
    },
    {
      title: "IoT / AI Development",
      desc: "We leverage AI and IoT to build intelligent systems that drive automation and insights.",
      icon: <Cpu size={28} />,
    },
  ];

  return (
    <section className="relative bg-[#0D0D0F] py-20 px-6 overflow-hidden">

      {/* 🔥 GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(#ffffff10 1px, transparent 1px),
            linear-gradient(90deg, #ffffff10 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* HEADER */}
        <p className="text-[#d4af37] text-sm tracking-widest mb-3">
          OUR SERVICES
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Everything You Need to <br />
          <span className="text-[#d4af37]">Land Your Dream Job</span>
        </h2>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          Comprehensive career support designed to take you from where you are
          to where you want to be.
        </p>

        {/* 🔥 CARDS */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                rotateX: 5,
                rotateY: -5,
                scale: 1.03,
              }}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-left transition-all duration-300"
            >

              {/* 🔥 GLOW BORDER */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.2),transparent_60%)]"></div>

              {/* ICON */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="relative z-10 w-14 h-14 rounded-lg bg-[#0D0D0F] flex items-center justify-center text-[#d4af37] mb-5"
              >
                {service.icon}
              </motion.div>

              {/* TITLE */}
              <h3 className="relative z-10 text-lg font-semibold text-white group-hover:text-[#d4af37] transition">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="relative z-10 mt-3 text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* LINE */}
              <div className="relative z-10 mt-5 w-10 h-[2px] bg-[#d4af37] group-hover:w-20 transition-all"></div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;