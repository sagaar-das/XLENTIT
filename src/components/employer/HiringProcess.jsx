import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import {
  ClipboardList,
  Search,
  Users,
  BadgeCheck,
} from "lucide-react";

function HiringProcess() {
  const steps = [
    {
      number: "01",
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Requirement Discussion",
      desc: "We understand your hiring goals, technical stack, company culture.",
    },
    {
      number: "02",
      icon: <Search className="w-5 h-5" />,
      title: "Talent Shortlisting",
      desc: "Our recruiters source and screen highly qualified candidates for your review.",
    },
    {
      number: "03",
      icon: <Users className="w-5 h-5" />,
      title: "Interview & Selection",
      desc: "Interview shortlisted candidates and choose the best fit for your organization.",
    },
    {
      number: "04",
      icon: <BadgeCheck className="w-5 h-5" />,
      title: "Successful Onboarding",
      desc: "We assist with onboarding and ensure a smooth transition after joining.",
    },
  ];

  return (
    <section className="relative bg-[#181818] py-20 px-6 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-yellow-400/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">

          <ScrollReveal>
            <div className="inline-flex px-5 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10">
              <span className="text-yellow-400 uppercase tracking-[0.2em] text-xs font-semibold">
                Our Hiring Process
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white">
              From Requirement
              <span className="text-yellow-400"> to Hiring</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-5 text-gray-400 leading-7">
              A simple four-step hiring process designed to help you
              recruit the right professionals faster.
            </p>
          </ScrollReveal>

        </div>

        {/* Timeline */}

        <div className="relative mt-16">

          {/* Desktop Connecting Line */}

          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-yellow-400/20 via-yellow-400 to-yellow-400/20"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {steps.map((step, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .45,
                  delay: index * .08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative"
              >

                {/* Number Circle */}

                <div className="relative z-20 w-20 h-20 mx-auto rounded-full border border-yellow-400 bg-[#111] flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]">

                  <div className="text-yellow-400">
                    {step.icon}
                  </div>

                  <span className="text-xs text-white mt-1 font-semibold">
                    {step.number}
                  </span>

                </div>

                {/* Card */}

                <div className="mt-6 rounded-2xl border border-gray-800 bg-[#111] p-5 text-center transition duration-300 group-hover:border-yellow-400">

                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition">

                    {step.title}

                  </h3>

                  <div className="w-10 h-[2px] bg-yellow-400 mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>

                  <p className="mt-4 text-sm leading-6 text-gray-400">

                    {step.desc}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HiringProcess;