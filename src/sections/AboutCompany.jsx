import { motion } from "framer-motion";

function AboutCompany() {
  return (
    <section className="relative bg-[#0D0D0F] py-20 px-6 overflow-hidden">



      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🔹 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Tag */}
          <p className="text-[#d4af37] text-sm font-semibold tracking-widest mb-3">
            ABOUT US
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Your Career Success <br />
            <span className="text-[#d4af37]">is Our Mission</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            We're more than a career service—we're your dedicated partner in 
            building the future you deserve. Our approach combines industry 
            expertise, modern technology, and personalized guidance to help you 
            achieve your professional goals with confidence.
          </p>

          {/* Bullet Points */}
          <div className="mt-6 space-y-3">
            {[
              "Industry-focused training programs",
              "Real-world project experience",
              "Personalized career guidance",
              "Continuous skill development"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-8 bg-[#d4af37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#b8962e] transition">
            Learn More
          </button>
        </motion.div>

        {/* 🔹 RIGHT SIDE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >

          {/* Card */}
          <div className="bg-[#111111] rounded-2xl shadow-lg p-8 border border-[#333]">

            <h3 className="text-xl font-semibold text-white mb-4">
              Why Choose XLENT-IT?
            </h3>

            <p className="text-gray-400">
              We empower individuals with the right skills, guidance, and 
              opportunities to succeed in today’s competitive digital world.
            </p>

            {/* Highlight Box */}
            <div className="mt-6 bg-[#1f1f1f] p-4 rounded-lg border border-[#333]">
              <p className="text-[#d4af37] font-semibold">
                100+ Successful Career Transitions
              </p>
            </div>
          </div>

          {/* Glow */}
          <div className="absolute -z-10 w-40 h-40 bg-[#d4af37] opacity-10 blur-3xl top-0 right-0 rounded-full"></div>

        </motion.div>

      </div>

    </section>
  );
}

export default AboutCompany;