import { motion } from "framer-motion";
import { BadgeCheck, Clock, GraduationCap, Handshake, ShieldCheck, User } from "lucide-react";

function ItWhyChooseUs() {
    const data = [
    {
      title: "100% Job Support Guarantee",
      desc: "We don't stop until you're placed. Our commitment extends beyond training to actual job placement.",
      highlight: true,
      ui: <ShieldCheck />,
    },
    {
      title: "Dedicated Career Manager",
      desc: "Get a personal career manager who guides you through every step of your job search journey.",
      ui: <User />,
    },
    {
      title: "Flexible & Personalized",
      desc: "Programs tailored to your schedule and goals, whether you're a student or working professional.",
      ui: <Clock />,
    },
    {
      title: "Industry Expert Mentors",
      desc: "Learn from professionals currently working at top tech companies who know what it takes.",
      ui: <GraduationCap />,
    },
    {
      title: "150+ Partner Companies",
      desc: "Direct access to our network of hiring partners actively looking for talent like you.",
      ui: <Handshake />,
    },
    {
      title: "Post-Placement Support",
      desc: "Our relationship doesn't end at placement. Get continued career growth guidance.",
      ui: <BadgeCheck />,
    },
  ];
  return (
    <section className="bg-primary py-24 px-4 sm:px-6 lg:px-10">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <div className="inline-block border border-yellow-400 text-white px-4 py-1 rounded-full text-xs mb-6">
          WHY XLENT IT
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">
          Why Students Choose Us
        </h2>

        <p className="mt-5 text-white/70 text-sm sm:text-base">
          We're not just another career service. We're your dedicated partner in achieving career success.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {data.map((item, i) => (
          <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.04 }}
              className="group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-yellow-400/30 via-transparent to-yellow-400/30"
            >

              {/* INNER CARD */}
              <div className="relative h-full flex flex-col justify-between bg-[#0d0d0f]/90 backdrop-blur-md rounded-2xl p-6 border border-gray-800 transition duration-300 group-hover:border-yellow-400">

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10">

                            {/* Icon */}
                            <div className="w-12 h-12 bg-[#1a1a1a] border border-gray-800 transition duration-300 group-hover:border-yellow-400 rounded-lg mb-6 flex items-center justify-center">
                                <div className="w-5 h-5 bg-[#1a1a1a] rounded-sm">{item.ui}</div>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3 transition duration-300 group-hover:text-yellow-400">
                                {item.title}
                            </h3>

                            <div className="w-12 h-0.5 bg-teal mb-4" ></div>

                            <p className="text-gray-400  group-hover:text-white transition text-sm ">
                                <span className="text-yellow-400">✔</span> {item.desc}
                            </p>

                        </div>
                

          

              </div>

            </motion.div>
        ))}

      </div>

    </section>
  )
}

export default ItWhyChooseUs