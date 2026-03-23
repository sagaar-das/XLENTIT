import { motion } from "framer-motion";
import logo from "../assets/xlentLogo.png";



function ServicesSection() {
  const services = [
    {
      title: "1-on-1 Career Mentorship",
      desc: "Personalized guidance from industry experts to help you navigate your career path.",
    },
    {
      title: "Mock Interviews",
      desc: "Practice real interview scenarios including technical and HR rounds with feedback.",
    },
    {
      title: "Resume & LinkedIn Building",
      desc: "Create ATS-friendly resumes and profiles that attract recruiters.",
    },
    {
      title: "Skill Assessment",
      desc: "Evaluate your strengths and identify areas for improvement.",
    },
    {
      title: "Job Search Support",
      desc: "Guided job applications with strategy and tracking support.",
    },
    {
      title: "IT Staffing Solutions",
      desc: "Connect with top companies through our hiring network.",
    },
  ];

  return (
    <section className="relative bg-[#1a1a1a] py-20 px-4 sm:px-6 overflow-hidden">

      {/* BACKGROUND LOGO */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={logo}
          alt="bg-logo"
          className="w-[300px] sm:w-[500px] md:w-[700px] opacity-[0.03]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#d4af37] text-sm tracking-widest mb-3">
            OUR SERVICES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Everything You Need to <br />
            <span className="text-[#d4af37]">Land Your Dream Job</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Comprehensive career support designed to take you from where you are
            to where you want to be.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-[#111111] p-6 rounded-xl border border-[#2a2a2a] hover:border-[#d4af37] transition group"
            >

              {/* GOLD BAR */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#d4af37] opacity-100"></div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-white group-hover:text-[#d4af37] transition">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* 🔥 ALWAYS VISIBLE LINK */}
              <div className="mt-5 text-[#d4af37] text-sm font-medium">
                Learn More →
              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-14">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border border-[#d4af37] text-[#d4af37] px-6 py-3 rounded-md hover:bg-[#d4af37] hover:text-black transition"
          >
            View All Services →
          </motion.button>
        </div>

      </div>

    </section>
  );
}

export default ServicesSection;