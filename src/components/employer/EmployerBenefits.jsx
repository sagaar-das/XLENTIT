import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import {
  Users,
  Clock3,
  ShieldCheck,
  Zap,
} from "lucide-react";

function EmployerBenefits() {
  const benefits = [
    {
      icon: <Users className="w-5 h-5 md:w-[22px] md:h-[22px]" />,
      title: "Pre-Vetted Talent",
      desc: "Every candidate goes through our rigorous assessment process before reaching your interview pipeline.",
    },
    {
      icon: <Clock3 className="w-5 h-5 md:w-[22px] md:h-[22px]" />,
      title: "Faster Hiring",
      desc: "Reduce hiring time with our ready-to-deploy talent pool and efficient recruitment process.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 md:w-[22px] md:h-[22px]" />,
      title: "Quality Guarantee",
      desc: "We focus on delivering professionals who match your technical and business requirements.",
    },
    {
      icon: <Zap className="w-5 h-5 md:w-[22px] md:h-[22px]" />,
      title: "Flexible Models",
      desc: "Choose contract, permanent or contract-to-hire solutions based on your hiring goals.",
    },
  ];

  return (
    <section className="relative bg-primary py-20 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          <ScrollReveal>
            <div className="inline-flex px-5 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10">
              <span className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold">
                Why Partner With Us
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="mt-7 text-white text-3xl md:text-5xl font-bold">
              Hiring Made <span className="text-yellow-400">Simple</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-5 text-gray-400 text-base md:text-lg leading-7">
              We simplify recruitment with pre-screened professionals,
              faster hiring cycles, and flexible engagement models.
            </p>
          </ScrollReveal>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

          {benefits.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-yellow-400/30 via-transparent to-yellow-400/30"
            >

              <div className="relative h-full min-h-[220px] md:min-h-[260px] rounded-2xl bg-[#111]/95 border border-gray-800 p-4 md:p-6 overflow-hidden transition-all duration-300 group-hover:border-yellow-400">

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>

                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>

                </div>

                <div className="relative z-10 flex flex-col h-full">

                  {/* Icon */}
                  <div className="w-5 h-5 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#1a1a1a] border border-gray-800 flex items-center justify-center text-yellow-400 group-hover:border-yellow-400 transition">

                    {item.icon}

                    

                  </div>

                  {/* Title */}
                  <h3 className="mt-3 md:mt-5 text-[15px] md:text-xl font-semibold leading-5 md:leading-normal">

                    {item.title}

                  </h3>

                  {/* Divider */}
                  <div className="mt-2 md:mt-4 w-10 h-[2px] bg-yellow-400 group-hover:w-16 transition-all duration-300"></div>

                  {/* Description */}
                  <p className="mt-3 md:mt-5 text-[12px] md:text-sm leading-5 md:leading-6 text-gray-400 group-hover:text-gray-300 transition flex-grow">

                    {item.desc}

                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default EmployerBenefits;