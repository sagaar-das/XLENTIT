import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaUserCheck,
  FaMap,
  FaTools,
  FaComments,
  FaBriefcase,
} from "react-icons/fa";

function ItHowItWorks() {
  const containerRef = useRef(null);

  // SCROLL TRACKING
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // MAIN CARD MOVEMENT
  const cardsY = useTransform(
    scrollYProgress,
    [0, 1],
    ["10%", "-55%"]
  );

  const steps = [
    {
      title: "Free Assessment",
      desc: "Start with a comprehensive evaluation of your skills, experience, and career goals.",
      icon: <FaUserCheck />,
      color: "bg-blue-600",
    },
    {
      title: "Personalized Roadmap",
      desc: "Receive a customized career plan tailored to your unique strengths.",
      icon: <FaMap />,
      color: "bg-red-500",
    },
    {
      title: "Skill & Resume Optimization",
      desc: "Enhance your skills and build an ATS-optimized resume.",
      icon: <FaTools />,
      color: "bg-blue-600",
    },
    {
      title: "Interview Preparation",
      desc: "Master interviews with mock sessions and feedback.",
      icon: <FaComments />,
      color: "bg-red-500",
    },
    {
      title: "Job Placement",
      desc: "Get support until you land your dream role.",
      icon: <FaBriefcase />,
      color: "bg-blue-600",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-black h-[500vh]"
    >
      {/* STICKY SCREEN */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* CENTER HEADING */}
        <div
          className="
            absolute inset-0
            flex items-center justify-center
            z-0 pointer-events-none
            px-4
          "
        >
          <h1
            className="
              text-center
              text-white
              font-black
              leading-[0.9]
              tracking-[-4px]
              text-[38px]
              sm:text-[55px]
              md:text-[85px]
              lg:text-[120px]
              xl:text-[150px]
            "
          >
            Your Journey
            <br />
            to Success
          </h1>
        </div>

        {/* FLOATING CARDS */}
        <motion.div
          style={{ y: cardsY }}
          className="
            relative
            z-10
            flex
            flex-col
            gap-40
            pt-[70vh]
            pb-[180vh]
            max-w-7xl
            mx-auto
            px-6
          "
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className={`
                flex
                ${i % 2 === 0 ? "justify-start" : "justify-end"}
              `}
            >
              {/* CARD */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                whileHover={{
                  scale: 1.03,
                  rotate: i % 2 === 0 ? -1 : 1,
                }}
                className="
                  relative
                  w-full
                  md:w-[520px]
                  min-h-[260px]
                  bg-[#111]
                  border border-white/10
                  overflow-hidden
                  p-8 md:p-10
                  shadow-[0_0_50px_rgba(0,0,0,0.5)]
                "
              >
                {/* TOP BAR */}
                <div
                  className={`absolute top-0 left-0 h-2 w-full ${step.color}`}
                />

                {/* ABSTRACT DESIGN */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-1/3 w-[1px] h-full bg-white/30" />
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20" />
                  <div className="absolute -right-16 -top-10 w-[300px] h-[300px] rounded-full border border-white/20" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className={`
                      w-16 h-16
                      rounded-full
                      flex items-center justify-center
                      text-2xl text-white
                      mb-8
                      ${step.color}
                    `}
                  >
                    {step.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-3xl font-bold text-white mb-5">
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step.desc}
                  </p>

                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ItHowItWorks;