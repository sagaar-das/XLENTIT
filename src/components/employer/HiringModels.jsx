import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import {
  BriefcaseBusiness,
  Users,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function HiringModels() {
  const navigate = useNavigate();

  const models = [
    {
      icon: <Users className="w-7 h-7" />,
      title: "Contract Staffing",
      desc: "Quickly scale your workforce with highly skilled professionals for short or long-term projects.",
      points: [
        "Fast deployment",
        "Flexible contracts",
        "Lower hiring risk",
      ],
    },
    {
      icon: <UserCheck className="w-7 h-7" />,
      title: "Contract-to-Hire",
      desc: "Evaluate candidates on the job before making a permanent hiring decision.",
      points: [
        "Trial before hiring",
        "Reduced turnover",
        "Seamless transition",
      ],
      featured: true,
    },
    {
      icon: <BriefcaseBusiness className="w-7 h-7" />,
      title: "Direct Placement",
      desc: "Hire experienced professionals directly into your organization for long-term success.",
      points: [
        "Permanent employees",
        "Leadership hiring",
        "Executive search",
      ],
    },
  ];

  return (
    <section className="relative bg-[#181818] py-24 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-yellow-400/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <ScrollReveal>

            <div className="inline-flex px-5 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10">

              <span className="text-yellow-400 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">

                Hiring Models

              </span>

            </div>

          </ScrollReveal>

          <ScrollReveal delay={0.1}>

            <h2 className="mt-7 text-3xl md:text-5xl font-bold text-white">

              Flexible Hiring
              <span className="text-yellow-400"> Solutions</span>

            </h2>

          </ScrollReveal>

          <ScrollReveal delay={0.2}>

            <p className="mt-5 text-gray-400 text-base md:text-lg leading-7">

              Whether you're hiring one engineer or building an entire
              technology team, we offer recruitment models that fit
              your business needs.

            </p>

          </ScrollReveal>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {models.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              whileHover={{
                y: -8,
              }}
              className={`group relative rounded-3xl p-[1px]
              ${
                item.featured
                  ? "bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-400"
                  : "bg-gradient-to-br from-yellow-400/30 via-transparent to-yellow-400/30"
              }`}
            >

              <div
                className={`relative rounded-3xl h-full p-8 border transition duration-300
                ${
                  item.featured
                    ? "bg-[#111] border-yellow-400"
                    : "bg-[#111] border-gray-800 group-hover:border-yellow-400"
                }`}
              >

                {/* Glow */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                  <div className="absolute -top-12 -left-12 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full" />

                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full" />

                </div>

                <div className="relative z-10">

                  {/* Icon */}

                  <div className="w-14 h-14 rounded-xl bg-[#1b1b1b] border border-gray-800 flex items-center justify-center text-yellow-400">

                    {item.icon}

                  </div>

                  {/* Title */}

                  <h3 className="mt-6 text-2xl font-bold text-white group-hover:text-yellow-400 transition">

                    {item.title}

                  </h3>

                  {/* Divider */}

                  <div className="mt-4 w-12 h-[2px] bg-yellow-400 group-hover:w-20 transition-all duration-300"></div>

                  {/* Description */}

                  <p className="mt-5 text-gray-400 leading-7">

                    {item.desc}

                  </p>

                  {/* Bullet Points */}

                  <div className="mt-8 space-y-4">

                    {item.points.map((point, i) => (

                      <div
                        key={i}
                        className="flex items-center gap-3"
                      >

                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>

                        <span className="text-gray-300">

                          {point}

                        </span>

                      </div>

                    ))}

                  </div>

                  {/* Button */}

                  <motion.button
                    whileHover={{ x: 4 }}
                    onClick={() => navigate("/contact")}
                    className="mt-10 flex items-center gap-2 text-yellow-400 font-medium"
                  >

                    Get Started

                    <ArrowRight className="w-5 h-5" />

                  </motion.button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HiringModels;