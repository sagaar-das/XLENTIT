import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

function Expertise() {
  const categories = [
    {
      title: "Software Development",
      skills: [
        "React",
        "Angular",
        "Vue",
        "Node.js",
        "Java",
        "Python",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
      ],
    },
    {
      title: "Data & AI",
      skills: [
        "Machine Learning",
        "Data Engineering",
        "Power BI",
        "Tableau",
        "SQL",
        "Gen AI",
      ],
    },
    {
      title: "Enterprise Technologies",
      skills: [
        "SAP",
        "Salesforce",
        "Oracle",
        "Dynamics 365",
        "ServiceNow",
        "Workday",
      ],
    },
  ];

  return (
    <section className="relative bg-primary py-20 px-6 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-400/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">

          <ScrollReveal>

            <div className="inline-flex px-5 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10">

              <span className="text-yellow-400 uppercase tracking-[0.2em] text-xs font-semibold">

                Areas Of Expertise

              </span>

            </div>

          </ScrollReveal>

          <ScrollReveal delay={0.1}>

            <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white">

              Talent Across Every
              <span className="text-yellow-400"> Technology</span>

            </h2>

          </ScrollReveal>

          <ScrollReveal delay={0.2}>

            <p className="mt-5 text-gray-400 text-base leading-7">

              We connect organizations with professionals across today's
              most in-demand technologies and business domains.

            </p>

          </ScrollReveal>

        </div>

        {/* Categories */}

        <div className="grid md:grid-cols-2 gap-6 mt-14">

          {categories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .45,
                delay: index * .08,
              }}
              whileHover={{
                y: -5,
              }}
              className="group rounded-2xl border border-gray-800 bg-[#111] p-5 transition-all duration-300 hover:border-yellow-400"
            >

              <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition">

                {category.title}

              </h3>

              <div className="mt-4 flex flex-wrap gap-3">

                {category.skills.map((skill, i) => (

                  <motion.span
                    key={i}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="px-4 py-2 rounded-full bg-[#1a1a1a] border border-gray-700 text-sm text-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 cursor-default"
                  >

                    {skill}

                  </motion.span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Expertise;