import { motion } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedText from "../components/AnimatedText";
import { useNavigate } from "react-router-dom";

function IT() {

  const navigate = useNavigate();

  const benefits = [
    "Direct introductions to hiring managers",
    "Contract, contract-to-hire, and full-time opportunities",
    "Pre-interview company preparation",
    "Salary benchmarking and negotiation support",
    "Ongoing relationship management",
  ];

  return (
    <section className="text-white px-6 py-16 max-w-7xl mx-auto">

      {/* 🔥 Heading */}
      <AnimatedHeading
        text="IT Staffing"
        className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4"
      />

      {/* 🔥 Subheading */}
      <AnimatedText className="text-center text-gray-400 mb-4" delay={0.4}>
        We connect businesses with top-tier IT professionals, ensuring faster hiring and long-term success.
      </AnimatedText>

      {/* 🔥 HIGHLIGHT LINE */}
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="text-center text-yellow-400 font-medium mb-12"
      >
        ✔ Direct Access to Hiring Partners
      </motion.p>

      {/* 🔥 PROBLEM + SOLUTION (GLASS CARDS) */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* PROBLEM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          className="relative p-[1px] rounded-2xl bg-gradient-to-br from-red-500/30 to-transparent"
        >
          <div className="bg-[#0d0d0f]/90 backdrop-blur-md rounded-2xl p-6 border border-gray-800">

            <h3 className="text-red-400 font-semibold mb-3">
              The Problem
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Great talent often goes unnoticed because they don't have direct access to decision-makers.
            </p>

          </div>
        </motion.div>

        {/* SOLUTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          className="relative p-[1px] rounded-2xl bg-gradient-to-br from-green-400/30 to-transparent"
        >
          <div className="bg-[#0d0d0f]/90 backdrop-blur-md rounded-2xl p-6 border border-gray-800">

            <h3 className="text-green-400 font-semibold mb-3">
              Our Solution
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Leverage our network of 150+ partner companies actively seeking qualified candidates like you.
            </p>

          </div>
        </motion.div>

      </div>


      {/* 🔥 WHAT YOU GET (CARDS LIKE SOFTWARE) */}
      <div className="mt-16">

        <h3 className="text-center text-yellow-400 font-semibold mb-8 text-lg">
          What You Get
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            "Direct introductions to hiring managers",
            "Contract, contract-to-hire, and full-time opportunities",
            "Pre-interview company preparation",
            "Salary benchmarking and negotiation support",
            "Ongoing relationship management",
          ].map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-yellow-400/30 via-transparent to-yellow-400/30"
            >

              {/* 🔥 INNER CARD */}
              <div className="relative h-full bg-[#0d0d0f]/90 backdrop-blur-md rounded-2xl p-5 border border-gray-800 group-hover:border-yellow-400 transition duration-300">

                {/* 🔥 GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 flex items-start gap-3">

                  <span className="text-yellow-400 text-lg">✔</span>

                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-yellow-400 transition">
                    {item}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>
      </div>



      {/* 🔥 OUTCOME (FOCUS SECTION) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 text-center"
      >

        <div className="w-16 h-[2px] bg-yellow-400 mx-auto mb-5"></div>

        <h3 className="text-lg font-semibold text-white mb-2">
          Outcome
        </h3>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Skip the crowded job boards and get fast-tracked to interviews at top companies.
        </p>

      </motion.div>

      <div className="mt-10 flex justify-center">

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/contact")}
          className="group relative px-8 py-3 bg-white text-black rounded-lg font-medium text-sm overflow-hidden transition duration-300 hover:bg-yellow-400"
        >
          Get Hired Faster

      
        </motion.button>

      </div>

    </section>
  );
}

export default IT;