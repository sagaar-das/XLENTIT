import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import manoj from "../assets/testimonials/Biswaranjan.jpg";
import rahul from "../assets/testimonials/rahul.jpg";
import emily from "../assets/testimonials/emily.jpeg";

const reviews = [
  {
    review:
      "XlentIT completely transformed my job search. Within 3 months, I went from zero interviews to multiple offers from top tech companies. The mock interviews were game-changing!",
    name: "Biswaranjan kar",
    designation: "Software Engineer",
    company: "Oracle",
    image: manoj,
  },
  {
    review:
      "As an international student, I was struggling to understand the US job market. My career manager helped me navigate everything from resume formatting to interview prep. Landed my dream job!",
    name: "Rahul Sharma",
    designation: "Data Analyst",
    company: "Meta",
    image: rahul,
  },
  {
    review:
      "The personalized attention and 1-on-1 mentorship made all the difference. They don't just give you templates—they truly understand your unique situation and help accordingly.",
    name: "Emily Rodriguez",
    designation: "Product Manager",
    company: "Amazon",
    image: emily,
  },
];

function Reviews() {
  return (
    <section className="relative bg-primary py-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex px-5 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10">
            <span className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold">
              Success Stories
            </span>
          </div>

          <h2 className="mt-7 text-white text-3xl md:text-5xl font-bold">
            What Our <span className="text-yellow-400">Students </span>Say
          </h2>

          <p className="mt-5 text-gray-400 text-base md:text-lg leading-7">
            Hear from professionals who successfully transformed their careers
            with XLENT IT Service.
          </p>

        </div>

         {/* Reviews */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-yellow-400/30 via-transparent to-yellow-400/30"
            >
              <div className="relative h-full rounded-2xl bg-[#111]/95 border border-gray-800 p-6 overflow-hidden transition-all duration-300 group-hover:border-yellow-400">

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 flex flex-col h-full">

                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-yellow-400/20 mb-4" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-400 leading-7 text-sm flex-grow italic">
                    "{review.review}"
                  </p>

                  {/* Divider */}
                  <div className="mt-6 mb-5 h-px bg-gray-800 group-hover:bg-yellow-400/40 transition-all"></div>

                  {/* User */}
                  <div className="flex items-center gap-4">

                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
                    />

                    <div>
                      <h4 className="text-white font-semibold">
                        {review.name}
                      </h4>

                      <p className="text-sm text-gray-400">
                        {review.designation}
                      </p>

                      <p className="text-sm text-yellow-400 font-medium">
                        {review.company}
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;