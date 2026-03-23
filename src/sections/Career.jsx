import { motion } from "framer-motion";

function Career() {
  const testimonials = [
    {
      text: "XlentIT completely transformed my job search. Within 3 months, I went from zero interviews to multiple offers from top tech companies. The mock interviews were game-changing!",
      name: "Manoj Kumar Dutta",
      role: "Software Engineer",
    },
    {
      text: "As an international student, I was struggling to understand the US job market. My career manager helped me navigate everything from resume formatting to interview prep. Landed my dream job!",
      name: "Rahul Sharma",
      role: "Data Analyst",
    },
    {
      text: "The personalized attention and 1-on-1 mentorship made all the difference. They don't just give you templates - they truly understand your unique situation and help accordingly.",
      name: "Emily Rodriguez",
      role: "Product Manager",
    },
  ];

  return (
    <section className="bg-[#1a1a1a] py-20 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto text-center">

        {/* 🔹 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-[#d4af37] text-sm tracking-widest mb-3">
            SUCCESS STORIES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Our Students Say
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Real stories from real students who transformed their careers with our help.
          </p>
        </motion.div>

        {/* 🔥 CARDS */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111111] border border-[#2a2a2a] p-6 rounded-xl text-left hover:border-[#d4af37] transition"
            >

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed">
                “{item.text}”
              </p>

              {/* Divider */}
              <div className="mt-6 h-[1px] bg-[#2a2a2a]"></div>

              {/* User */}
              <div className="mt-4">
                <h4 className="text-white font-semibold text-sm">
                  {item.name}
                </h4>
                <p className="text-[#d4af37] text-xs">
                  {item.role}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Career;