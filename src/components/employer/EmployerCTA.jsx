import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";

function EmployerCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-primary py-20 px-6 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-yellow-400/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-400/5 blur-[140px] rounded-full" />

      </div>

      {/* Grid Pattern */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg,#ffffff 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto"
      >

        <div className="rounded-3xl border border-gray-800 bg-[#111]/90 backdrop-blur-xl px-8 md:px-14 py-14 md:py-16 text-center overflow-hidden">

          {/* Small Glow */}

          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full"></div>

          <ScrollReveal>

            <div className="inline-flex items-center px-5 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10">

              <span className="text-yellow-400 uppercase tracking-[0.2em] text-xs font-semibold">

                Ready To Hire?

              </span>

            </div>

          </ScrollReveal>

          <ScrollReveal delay={0.1}>

            <h2 className="mt-8 text-3xl md:text-5xl font-bold text-white leading-tight">

              Build Your Dream Team
              <br />

              <span className="text-yellow-400">
                With XLENT IT
              </span>

            </h2>

          </ScrollReveal>

          <ScrollReveal delay={0.2}>

            <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-7 text-base md:text-lg">

              Whether you're hiring one developer or building an entire
              engineering team, our recruitment specialists will help you
              find exceptional professionals quickly and efficiently.

            </p>

          </ScrollReveal>

          {/* Buttons */}

          <ScrollReveal delay={0.3}>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              {/* Primary */}

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.18)]"
              >

                Start Hiring Today

                <ArrowRight
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                />

              </motion.button>

              {/* Secondary */}

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-3 border border-gray-700 hover:border-yellow-400 text-white px-8 py-4 rounded-xl bg-[#1a1a1a] hover:bg-[#202020] transition-all duration-300"
              >

                <PhoneCall className="w-5 h-5 text-yellow-400" />

                Schedule a Call

              </motion.button>

            </div>

          </ScrollReveal>


        </div>

      </motion.div>

    </section>
  );
}

export default EmployerCTA;