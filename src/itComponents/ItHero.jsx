import { motion } from "framer-motion";
import env from '../assets/staffing.webp'
import AnimatedHeading from "../components/AnimatedHeading";

function ItHero() {
  return (
    <section className="bg-black px-4 sm:px-6 lg:px-10 py-16 md:py-20 min-h-screen flex items-center overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-yellow-400 px-4 py-2 rounded-full text-xs sm:text-sm text-white mb-6"
          >
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            Trusted by 1,500+ Students & Graduates
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 leading-tight "
          >
            <div className="w-full">
             
            IT Staffing Service
              
            </div>


          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-5 sm:mt-6 text-gray-400 text-sm sm:text-base max-w-lg mx-auto md:mx-0"
          >
            End-to-end career support with personal mentorship, real interview preparation, and dedicated job assistance until you land your dream role.
          </motion.p>

          {/* Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-5 flex flex-wrap justify-center sm:justify-start gap-3 text-sm"
          >
            <span className="border border-yellow-400 text-gray-400 px-3 py-1.5 rounded-full"><span className="text-tealDark">✓</span> 100% Job Placement Support</span>
            <span className="border border-yellow-400 text-gray-400 px-3 py-1.5 rounded-full"><span className="text-tealDark">✓</span> 1-on-1 Dedicated Mentorship</span>
            <span className="border border-yellow-400 text-gray-400 px-3 py-1.5 rounded-full"><span className="text-tealDark">✓</span> Real Interview Preparation</span>
            <span className="border border-yellow-400 text-gray-400 px-3 py-1.5 rounded-full"><span className="text-tealDark">✓</span> ATS-Optimized Resumes</span>
          </motion.div>




        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center mt-10 md:mt-0"
        >

          {/* Floating animation */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="bg-yellow-600 rounded-3xl p-3 sm:p-4 md:p-5 rotate-3"
          >
            <div className="bg-white rounded-3xl overflow-hidden transition-transform duration-500 hover:scale-105">
              <img
                src={env}
                alt=""
                className="w-[260px] sm:w-[320px] md:w-full h-[260px] sm:h-[300px] md:h-[350px] object-cover"
              />
            </div>
          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}

export default ItHero