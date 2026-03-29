import { motion } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedText from "../components/AnimatedText";

function Software() {

  const services = [
    {
      title: "Website Development",
      desc: "Professional websites that build credibility and attract customers.",
      best: "Startups, small businesses, personal brands",
      points: ["Fast loading", "SEO-ready", "Conversion-focused design"],
    },
    {
      title: "Web Application Development",
      desc: "Custom dashboards, admin panels, and business tools.",
      best: "SaaS products, internal teams, growing companies",
      points: ["Secure role-based access", "Scalable architecture", "Custom APIs"],
    },
    {
      title: "Mobile Application Development",
      desc: "Native and cross-platform mobile apps for iOS and Android.",
      best: "Startups, service platforms, consumer apps",
      points: ["Smooth performance", "Real-time features", "App store ready"],
    },
    {
      title: "Custom Software Solutions",
      desc: "Tailored systems designed around your business needs.",
      best: "Businesses with unique workflows",
      points: ["End-to-end ownership", "Clean, maintainable code", "Long-term scalability"],
    },
    {
      title: "Maintenance & Support",
      desc: "Ongoing updates, improvements, and technical support.",
      best: "Businesses that need reliability",
      points: ["Bug fixes", "Feature upgrades", "Priority support"],
    },
  ];

  return (
    <section className="text-white px-6 py-16 max-w-7xl mx-auto">

      {/* 🔥 Heading */}
      <AnimatedHeading
        text="Software Development"
        className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4"
      />

      {/* 🔥 Subheading */}
      <AnimatedText className="text-center text-gray-400 mb-10" delay={0.4}>
        We deliver scalable, secure, and high-performance software solutions tailored to business needs.
      </AnimatedText>

      {/* 🔥 CARDS SECTION */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((item, i) => (

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
            <div className="relative h-full bg-[#0d0d0f]/90 backdrop-blur-md rounded-2xl p-6 border border-gray-800 transition duration-300 group-hover:border-yellow-400">

              {/* 🔥 GLOW EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>
              </div>

              {/* 🔥 CONTENT */}
              <div className="relative z-10">

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-yellow-400 mb-2 group-hover:tracking-wide transition-all duration-300">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {item.desc}
                </p>

                {/* BEST FOR */}
                <p className="text-xs text-gray-500 mb-4">
                  <span className="text-gray-300 font-medium">Best for:</span> {item.best}
                </p>

                {/* POINTS */}
                <ul className="space-y-2 text-sm text-gray-300">
                  {item.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 transition duration-300 group-hover:text-yellow-400"
                    >
                      <span className="text-yellow-400">✔</span> {point}
                    </li>
                  ))}
                </ul>

                {/* 🔥 BOTTOM LINE */}
                <div className="mt-6 w-10 h-[2px] bg-yellow-400 group-hover:w-24 transition-all duration-300"></div>

              </div>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Software;