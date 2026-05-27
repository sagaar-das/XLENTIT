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
              "Software Development Engineer (SDE)",
              "Full Stack Developer",
              "Frontend Developer",
              "Backend Developer",
              "Python Developer",
              "Data Scientist",
              "Data Engineer",
              "Cloud Engineer",
              "Financial Analyst",
              "Data Analyst",
              "DevOps Engineer",
              "QA / Test Engineer",
              "AI/ML Lead",
              "Data Architect",
              "Product Manager",
              "Engineering Manager",
              "Technical Architect",
              "Cybersecurity Analyst",
              "UI/UX Designer",
              "Validation Engineer",
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
              Personally mentoring World's next Xlent engineers
            </h2>

            <p className="mt-2 text-gray-400">
              At Xlent Staffing, we don’t just help engineers find jobs — we help them become industry-ready professionals. Through hands-on mentorship, real-world projects, and practical learning, we guide aspiring developers from beginner to expert-level growth. Our mission is to transform talent into high-performing engineers by focusing on problem-solving, modern technologies, and real business challenges. Whether you're starting your journey or scaling your career, Xlent empowers you to grow from 1x to 100x with confidence, skills, and industry experience.
            </p>
          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default ItFeatures;