import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";

function EmployerHero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-primary pt-40 pb-32 px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-yellow-400/5 blur-[170px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-yellow-400/5 blur-[150px] rounded-full" />

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-400/5 blur-[140px] rounded-full" />

      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg,#ffffff 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Badge */}

        <ScrollReveal>

          <div className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-6 py-2">

            <span className="text-yellow-400 text-sm tracking-widest font-semibold uppercase">
              For Employers
            </span>

          </div>

        </ScrollReveal>

        {/* Heading */}

        <ScrollReveal delay={0.1}>

          <h1 className="mt-10 text-white font-bold leading-tight text-5xl md:text-7xl">

            Hire Top Tech Talent,
            <span className="text-yellow-400"> Fast</span>

          </h1>

        </ScrollReveal>

        {/* Description */}

        <ScrollReveal delay={0.2}>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-2xl text-gray-400 leading-relaxed">

            Access a pipeline of pre-vetted, interview-ready candidates.
            Our rigorous screening process ensures you only meet
            exceptional professionals who are ready to contribute
            from day one.

          </p>

        </ScrollReveal>

        {/* Buttons */}

        <ScrollReveal delay={0.3}>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            {/* Primary */}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate("/contact")}
              className="group bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-[0_0_35px_rgba(250,204,21,0.18)]"
            >
              <span className="flex items-center justify-center gap-3">

                Start Hiring

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </span>
            </motion.button>

            {/* Secondary */}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate("/contact")}
              className="border border-gray-700 hover:border-yellow-400 bg-[#111] hover:bg-[#171717] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300"
            >
              Schedule a Call
            </motion.button>

          </div>

        </ScrollReveal>


      </div>

    </section>
  );
}

export default EmployerHero;