import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Code,
  Smartphone,
  Briefcase,
  Users,
  Layers,
  Cpu
} from "lucide-react";

function ServicesSection() {

  const navigate = useNavigate();

  const services = [
    {
      id: "software",
      title: "Software Development",
      desc: "We deliver scalable, secure, and high-performance software solutions tailored to business needs.",
      icon: <Code size={28} />,
    },
    {
      id: "app",
      title: "Application Development",
      desc: "We build user-friendly web and mobile applications designed for performance and seamless experience.",
      icon: <Smartphone size={28} />,
    },
    {
      id: "consulting",
      title: "Management Consulting",
      desc: "We help businesses optimize operations and drive digital transformation through strategic consulting.",
      icon: <Briefcase size={28} />,
    },
    {
      id: "it",
      title: "IT Staffing",
      desc: "We connect businesses with top-tier tech talent, ensuring faster hiring and long-term success.",
      icon: <Users size={28} />,
    },
    {
      id: "bpo",
      title: "BPO / KPO",
      desc: "We provide cost-effective outsourcing solutions to streamline business processes.",
      icon: <Layers size={28} />,
    },
    {
      id: "ai",
      title: "IoT / AI Development",
      desc: "We leverage AI and IoT to build intelligent systems that drive automation and insights.",
      icon: <Cpu size={28} />,
    },
  ];


  return (
    <section className="relative bg-[#1a1a1a] py-20 px-6 overflow-hidden">

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
        <p className="text-yellow-400 text-sm tracking-widest mb-3">
          OUR SERVICES
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Turn Your
          <span className="text-yellow-400"> Career Goals </span> into Reality
        </h2>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          Unlock your full potential with our comprehensive career services. Whether you're starting out or leveling up, we equip you with the skills, confidence, and opportunities to secure your dream job.
        </p>

        {/* 🔥 CARDS */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <motion.div
              key={i}
              onClick={() => navigate(`/services/${service.id}`)}
              cursor-pointer
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                rotateX: 5,
                rotateY: -5,
                scale: 1.03,
              }}
              className="group relative backdrop-blur-xl bg-[#111] border border-gray-800 rounded-2xl p-6 text-left  text-white hover:text-yellow-400 hover:border-yellow-400  hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition-all duration-300"
            >

              

              {/* ICON */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="relative z-10 w-14 h-14 rounded-lg bg-[#0D0D0F] flex items-center justify-center text-yellow-400 mb-5"
              >
                {service.icon}
              </motion.div>

              {/* TITLE */}
              <h3 className="relative z-10 text-lg font-semibold text-white group-hover:text-yellow-400 transition">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="relative z-10 mt-3 text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* LINE */}
              <div className="relative z-10 mt-5 w-10 h-[2px] bg-yellow-400 group-hover:w-20 transition-all"></div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;