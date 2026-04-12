import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaUserCheck, FaMap, FaTools, FaComments, FaBriefcase } from "react-icons/fa";

function ItHowItWorks() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = [
    {
      title: "Free Assessment",
      desc: "Start with a comprehensive evaluation of your skills, experience, and career goals.",
      icon: <FaUserCheck />,
      active: true,
    },
    {
      title: "Personalized Roadmap",
      desc: "Receive a customized career plan tailored to your unique strengths.",
      icon: <FaMap />,
      active: true,
    },
    {
      title: "Skill & Resume Optimization",
      desc: "Enhance your skills and build an ATS-optimized resume.",
      icon: <FaTools />,
      active: true,
    },
    {
      title: "Interview Preparation",
      desc: "Master interviews with mock sessions and feedback.",
      icon: <FaComments />,
      active: true,
    },
    {
      title: "Job Placement",
      desc: "Get support until you land your dream role.",
      icon: <FaBriefcase />,
      active: true,
    },
  ];

  return (
    <section ref={ref} className="relative bg-black py-24 px-4 sm:px-6 overflow-hidden">

      {/*  ULTRA PREMIUM ANIMATED GRADIENT */}
      

      {/* HEADER */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl font-bold text-yellow-400">
          Your Journey to Career Success
        </h2>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-6xl mx-auto z-10">

        {/* LINE */}
        <div className="
          absolute top-0 h-full w-[2px] bg-black
          left-5 md:left-1/2
          md:-translate-x-1/2
        "></div>

        {/* PROGRESS LINE */}
        <motion.div
          style={{ scaleY }}
          className="
            absolute top-0 w-[2px] h-full 
            bg-gradient-to-b from-yellow-400 to-yellow-300
            origin-top
            left-5 md:left-1/2
            md:-translate-x-1/2
          "
        />

        <div className="space-y-16">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`
                relative flex flex-col
                md:flex-row items-start md:items-center
                ${i % 2 === 0 ? "md:flex-row-reverse" : ""}
              `}
            >

              {/* CARD */}
              <div className="
                w-full md:w-1/2 
                pl-16 md:pl-6
              ">

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`p-5 rounded-xl border transition cursor-pointer
                  ${step.active
                    ? "bg-gradient-to-br from-yellow-400/10 to-[#1a1a1a] border-yellow-400 text-white shadow-[0_0_25px_rgba(255,215,0,0.25)] hover:shadow-[0_0_40px_rgba(255,215,0,0.45)]"
                    : "bg-[#1a1a1a] border-yellow-400 text-white hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                  }`}
                >
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className={`text-sm mt-1 ${step.active ? "text-gray-300" : "text-gray-400"}`}>
                    {step.desc}
                  </p>
                </motion.div>

              </div>

              {/* ICON */}
              <div className="
                absolute left-5
                md:relative md:left-auto
                md:w-[80px]
                flex justify-center
              ">

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg z-10
                  ${step.active
                    ? "bg-gradient-to-br from-yellow-400/10 to-[#1a1a1a] text-yellow-400 border border-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                    : "bg-[#1a1a1a] border border-yellow-400 text-yellow-400"
                  }`}
                >
                  {step.icon}
                </motion.div>

              </div>

              <div className="hidden md:block md:w-1/2"></div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ItHowItWorks;