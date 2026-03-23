import { motion } from "framer-motion";

function ContactCTA() {
  return (
    <section className="bg-[#0D0D0F] py-20 px-4 sm:px-6">

      <div className="max-w-5xl mx-auto">

        {/* 🔥 CENTER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
        >

          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-[#d4af37]/5 blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
              Ready to Transform Your Career?
            </h2>

            {/* Description */}
            <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
              Take the first step towards your dream job. Book a free consultation with our career experts and discover how we can help you succeed.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#d4af37] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#c39b2f] transition"
              >
                Book Free Session
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-[#d4af37] text-[#d4af37] px-6 py-3 rounded-md hover:bg-[#d4af37] hover:text-black transition"
              >
                Learn More
              </motion.button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default ContactCTA;