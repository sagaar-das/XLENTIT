import { motion } from "framer-motion";

function WhyChoose() {
  const data = [
    {
      title: "100% Job Support Guarantee",
      desc: "We don't stop until you're placed. Our commitment extends beyond training to actual job placement.",
    },
    {
      title: "Dedicated Career Manager",
      desc: "Get a personal career manager who guides you through every step of your job search journey.",
    },
    {
      title: "Flexible & Personalized",
      desc: "Programs tailored to your schedule and goals, whether you're a student or working professional.",
    },
    {
      title: "Industry Expert Mentors",
      desc: "Learn directly from industry professionals currently working at top tech companies who know exactly what it takes to succeed today.",
    },
    {
      title: "150+ Partner Companies",
      desc: "Gain direct, access to our extensive network of hiring partners who are actively searching for top-tier talent like you.",
    },
    {
      title: "Post-Placement Support",
      desc: "Our relationship doesn't end at placement. Get continued career growth guidance.",
    },
  ];

  const leftData = data.slice(0, 3);
  const rightData = data.slice(3, 6);

  return (
    <section className="bg-[#0D0D0F] py-20 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        {/* 🔥 TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-[#d4af37] text-sm tracking-widest mb-3">
              WHY XLENTIT
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Why Students <br /> <span className="text-[#d4af37]">Choose Us</span>
            </h2>

            <p className="mt-5 text-gray-400 max-w-md">
              We're not just another career service. We're your dedicated partner in achieving career success.
            </p>
          </motion.div>

          {/* RIGHT (HIGHLIGHT BOX) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-6"
          >
            <h3 className="text-[#d4af37] font-semibold mb-3">
              Career-Focused Approach
            </h3>

            <p className="text-gray-400 text-sm">
              We focus on real outcomes — not just training. From mentorship to placement, every step is designed to get you hired faster.
            </p>

            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <div>✓ Structured learning path</div>
              <div>✓ Real interview preparation</div>
              <div>✓ Dedicated support</div>
            </div>
          </motion.div>

        </div>

        {/* 🔥 BOTTOM SECTION (LEFT-RIGHT DATA) */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">

          {/* LEFT DATA */}
          <div className="space-y-5">
            {leftData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-[#2a2a2a] p-5 rounded-lg hover:border-[#d4af37] transition"
              >
                <h3 className="text-white font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT DATA */}
          <div className="space-y-5">
            {rightData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-[#2a2a2a] p-5 rounded-lg hover:border-[#d4af37]  transition"
              >
                <h3 className="text-white font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;