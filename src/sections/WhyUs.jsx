import { motion } from "framer-motion";
import { Award, BriefcaseBusiness, Handshake, Headset, Lightbulb, Users } from "lucide-react";



function WhyUs() {
    const data = [
    {
      title: "Excellence In Every Project",
      desc: "Delivering innovative technology solutions with quality, precision, and long-term business value for every client.",
      highlight: true,
      ui:  <Award />,
    },
    {
      title: "150+ Trusted Business Partners",
      desc: "Building strong partnerships through reliable services, transparent communication, and consistent project delivery excellence.",
      ui:  <Handshake />,
    },
    {
      title: "Proven Success Across Industries",
      desc: "Empowering businesses with scalable, innovative, and future-ready technology solutions for sustainable digital transformation.",
      ui: <BriefcaseBusiness />,
    },
    {
      title: "Industry Experts & Skilled Professionals",
      desc: "Our experienced team combines technical expertise, creativity, and strategic thinking to drive measurable business success.",
      ui: <Users />,
    },
    {
      title: "Smart Solutions For Modern Businesses",
      desc: "Providing advanced IT, AI, and consulting services designed to accelerate growth and operational efficiency.",
      ui: <Lightbulb />,
    },
    {
      title: "Client-Centric Approach & Support",
      desc: "Ensuring dedicated support, personalized strategies, and seamless collaboration throughout every stage of project execution.",
      ui:<Headset />,
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

        <h2 className="text-[20px] sm:text-5xl font-bold text-yellow-400 mb-5 whitespace-nowrap">
          Why Choose Us
        </h2>

        <p className="mt-5 text-white/70 text-sm sm:text-base">
          We combine innovation, industry expertise, and customer-focused strategies to deliver reliable, scalable, and result-driven technology solutions that help businesses grow faster, improve efficiency, and stay ahead in a competitive digital world.
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

export default WhyUs