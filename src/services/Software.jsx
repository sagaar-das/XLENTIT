import { motion } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedText from "../components/AnimatedText";
import { useNavigate } from "react-router-dom";

function Software() {
  const navigate = useNavigate();

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
    <div className="w-full bg-black text-white py-20">

      {/* CENTERED CONTENT WRAPPER */}
      <div className="w-full px-4 sm:px-6 lg:px-12">

        {/* HEADING SECTION */}
        <div className="max-w-4xl mx-auto text-center">

          <AnimatedHeading
            text="Software Development"
            className="text-[26px] sm:text-5xl font-bold text-yellow-400 mb-4 whitespace-nowrap"
          />

          <AnimatedText
            className="text-gray-400 mb-12 text-sm sm:text-base"
            delay={0.4}
          >
            We deliver scalable, secure, and high-performance software solutions tailored to business needs.
          </AnimatedText>

        </div>

        {/* CARDS GRID  */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item, i) => (

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

                  <h3 className="text-lg font-semibold text-white mb-2 transition duration-300 group-hover:text-yellow-400">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {item.desc}
                  </p>

                  <p className="text-xs text-gray-500 mb-3">
                    <span className="text-gray-300 font-medium">Best for:</span> {item.best}
                  </p>

                  <ul className="space-y-1 text-sm text-gray-300 mb-6">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 group-hover:text-yellow-400 transition"
                      >
                        <span className="text-yellow-400">✔</span> {point}
                      </li>
                    ))}
                  </ul>

                </div>

          

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Software;