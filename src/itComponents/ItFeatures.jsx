import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function ItFeatures() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  //  SAFE animations
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // LIGHT parallax
  const yLeft = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const yRight = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <section ref={ref} className="bg-black px-6 py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

        {/* LEFT */}
        <motion.div
          style={{ scale, opacity, y: yLeft }}
          className="bg-[#111] border border-gray-800 rounded-[30px] p-6 hover:border-yellow-400 transition"
        >
          <h2 className="text-3xl font-bold text-yellow-400">
            Industries We Serve
          </h2>

          <p className="mt-2 text-gray-400">
            Master development through real-world applications.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "Full Stack Development",
              "Real-World Projects",
              "Open Source Contributions",
              "Production Ready",
              "DevOps & Deployment",
              "Job Ready Portfolio",
            ].map((tag, i) => (
              <span
                key={i}
                className="bg-[#1a1a1a] border border-gray-700 text-gray-300 px-3 py-1.5 rounded-full text-sm hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          style={{ scale, opacity, y: yRight }}
          className="bg-[#111] border border-gray-800 rounded-[30px] p-6 hover:border-yellow-400 transition flex items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">
              Personally mentoring India's next Xlent engineers
            </h2>

            <p className="mt-2 text-gray-400">
              Taking you from 1x to 100x through real-world projects.
            </p>
          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default ItFeatures;