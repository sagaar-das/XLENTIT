import { Box, FileUser, MessageSquareCode, MonitorCog, SearchCheck, UserStar } from "lucide-react";
import { motion } from "framer-motion";
function ItServices() {
    const services = [
        {
            title: "1-on-1 Career Mentorship",
            desc: "Get personalized guidance from industry experts who understand your goals and help you navigate your career path.",
            ui: <UserStar />,
        },
        {
            title: "Mock Interviews",
            desc: "Practice with real interview scenarios including technical and HR rounds with detailed feedback.",
            ui: <MessageSquareCode />,
        },
        {
            title: "Resume & LinkedIn Building",
            desc: "Create ATS-optimized resumes and recruiter-friendly LinkedIn profiles that get noticed.",
            ui: <FileUser />
        },
        {
            title: "Skill Assessment",
            desc: "Identify your strengths and gaps with our comprehensive technical and soft skill evaluation.",
            ui: <Box />
        },
        {
            title: "Job Search Support",
            desc: "Guided job applications with recruiter outreach strategy and application tracking.",
            ui: <SearchCheck />
        },
        {
            title: "IT Staffing Solutions",
            desc: "Connect with top companies through our extensive network of hiring partners.",
            ui: <MonitorCog />,
            highlight: true,
        },
    ];
    return (
        <section className="bg-[#1a1a1a]  py-24 px-6 ">

            {/* HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-16">

                

                <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 leading-tight">
                    OUR SERVICES
                </h2>

                <div className="inline-block border border-yellow-400 text-white px-4 py-1 rounded-full text-xs tracking-wide mt-6">
                    Everything You Need to Land Your Dream Job
                </div>

                <p className="mt-6 text-gray-400 text-lg">
                    Comprehensive career support designed to take you from where you are to where you want to be. Everything You Need to Land Your Dream Job
                </p>

            </div>

            {/* GRID */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

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

                            {/* Icon */}
                            <div className="w-12 h-12 bg-[#1a1a1a] border border-gray-800 transition duration-300 group-hover:border-yellow-400 rounded-lg mb-6 flex items-center justify-center">
                                <div className="w-5 h-5 bg-[#1a1a1a] rounded-sm">{item.ui}</div>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3 transition duration-300 group-hover:text-yellow-400">
                                {item.title}
                            </h3>

                            <div className="w-12 h-0.5 bg-teal mb-4" ></div>

                            <p className="text-gray-400  group-hover:text-white transition text-sm ">
                                <span className="text-yellow-400">✔</span> {item.desc}
                            </p>

                        </div>
                

          

              </div>

            </motion.div>
                ))}

            </div>

        </section>
    )
}

export default ItServices