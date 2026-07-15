import { motion } from "framer-motion";
import { Award, BriefcaseBusiness, Handshake, Headset, Lightbulb, Users } from "lucide-react";



function WhyUs() {
  const data = [
    {
      title: "Excellence In Every Project",
      desc: "Delivering innovative technology solutions with quality, precision, and long-term business value and growth for every client with us.",
      highlight: true,
      ui: <Award />,
    },
    {
      title: "150+ Trusted Business Partners",
      desc: "Building strong partnerships through reliable services, transparent communication, and consistent project delivery excellence.",
      ui: <Handshake />,
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
      ui: <Headset />,
    },
  ];
  return (
    <section className="bg-primary py-20 px-5 sm:px-6 lg:px-8 border-t-2 border-gray-800">

      <div className="max-w-7xl mx-auto text-center">

      

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <div className="inline-block border border-yellow-400 text-white px-4 py-1 rounded-full text-[11px] mb-5">
          WHY XLENT IT
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-yellow-400 mb-4">
          Why Choose Us
        </h2>

        <p className="mt-4 text-white/70 text-[14px] md:text-[16px] leading-7">
          We combine innovation, industry expertise, and customer-focused strategies to deliver reliable, scalable, and result-driven technology solutions that help businesses grow faster, improve efficiency, and stay ahead in a competitive digital world.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="mt-10   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            className="group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-yellow-400/30 via-transparent to-yellow-400/30 w-full max-w-[400px] mx-auto"
          >

            {/* INNER CARD */}
            <div className="relative h-full min-h-[200px]  flex flex-col justify-between bg-[#0d0d0f]/90 backdrop-blur-md rounded-2xl p-5 border border-gray-800 transition duration-300 group-hover:border-yellow-400">

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col h-full">

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">

                  <div className="w-10 h-10 bg-[#1a1a1a] border border-gray-800 rounded-lg flex items-center justify-center text-yellow-400 transition duration-300 group-hover:border-yellow-400 group-hover:scale-110">

                    <div className="w-4 h-4 flex items-center justify-center">
                      {item.ui}
                    </div>

                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-white leading-6 transition duration-300 group-hover:text-yellow-400">
                    {item.title}
                  </h3>

                </div>

                {/* Divider */}
                <div className="w-10 h-0.5 bg-yellow-400 mb-3"></div>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-white transition text-[13px] md:text-sm leading-6">
                  <span className="text-yellow-400">✔</span> {item.desc}
                </p>

              </div>




            </div>

          </motion.div>
        ))}

      </div>

      </div>

    </section>
  )
}

export default WhyUs