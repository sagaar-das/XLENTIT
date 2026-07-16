// import { Box, FileUser, MessageSquareCode, MonitorCog, SearchCheck, UserStar } from "lucide-react";
// import { motion } from "framer-motion";
// function ItServices() {
//     const services = [
//         {
//             title: "1-on-1 Career Mentorship",
//             desc: "Get personalized guidance from industry experts who understand your goals and help you navigate your career path.",
//             ui: <UserStar />,
//         },
//         {
//             title: "Skill Assessment",
//             desc: "Identify your strengths and gaps with our comprehensive technical and soft skill evaluation.",
//             ui: <Box />
//         },
//         {
//             title: "Resume & LinkedIn Building",
//             desc: "Create ATS-optimized resumes and recruiter-friendly LinkedIn profiles that get noticed.",
//             ui: <FileUser />
//         },
//         {
//             title: "Job Search Support",
//             desc: "Guided job applications with recruiter outreach strategy and application tracking.",
//             ui: <SearchCheck />
//         },
//         {
//             title: "Mock Interviews",
//             desc: "Practice with real interview scenarios including technical and HR rounds with detailed feedback.",
//             ui: <MessageSquareCode />,
//         },        
//         {
//             title: "IT Staffing Solutions",
//             desc: "Connect with top companies through our extensive network of hiring partners.",
//             ui: <MonitorCog />,
//             highlight: true,
//         },
//     ];


//     return (
//         <section className="bg-[#1a1a1a]  py-24 px-6 ">

//             {/* HEADER */}
//             <div className="max-w-4xl mx-auto text-center mb-16">



//                 <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 leading-tight">
//                     OUR SERVICES
//                 </h2>

//                 <div className="inline-block border border-yellow-400 text-white px-4 py-1 rounded-full text-xs tracking-wide mt-6">
//                     Everything You Need to Land Your Dream Job
//                 </div>

//                 <p className="mt-6 text-gray-400 text-lg">
//                     Comprehensive career support designed to take you from where you are to where you want to be. Everything You Need to Land Your Dream Job
//                 </p>

//             </div>

//             {/* GRID */}
//             <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

//                 {services.map((item, i) => (

//                     <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.08 }}
//               whileHover={{ scale: 1.04 }}
//               className="group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-yellow-400/30 via-transparent to-yellow-400/30"
//             >

//               {/* INNER CARD */}
//               <div className="relative h-full flex flex-col justify-between bg-[#0d0d0f]/90 backdrop-blur-md rounded-2xl p-6 border border-gray-800 transition duration-300 group-hover:border-yellow-400">

//                 {/* GLOW */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
//                   <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>
//                   <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="relative z-10">

//                             {/* Icon */}
//                             <div className="w-12 h-12 bg-[#1a1a1a] border border-gray-800 transition duration-300 group-hover:border-yellow-400 rounded-lg mb-6 flex items-center justify-center">
//                                 <div className="w-5 h-5 bg-[#1a1a1a] rounded-sm">{item.ui}</div>
//                             </div>

//                             <h3 className="text-xl font-semibold text-white mb-3 transition duration-300 group-hover:text-yellow-400">
//                                 {item.title}
//                             </h3>

//                             <div className="w-12 h-0.5 bg-teal mb-4" ></div>

//                             <p className="text-gray-400  group-hover:text-white transition text-sm ">
//                                 <span className="text-yellow-400">✔</span> {item.desc}
//                             </p>

//                         </div>




//               </div>

//             </motion.div>
//                 ))}

//             </div>


//         </section>
//     )
// }

// export default ItServices


















import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Box,
    FileUser,
    MessageSquareCode,
    MonitorCog,
    SearchCheck,
    UserStar,
    ArrowRight,
    TriangleAlert,
    Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";

import bgImage from "../assets/service2.webp";

function ItServices() {

    const services = [
        {
            icon: <UserStar size={28} />,
            title: "1-on-1 Career Mentorship",
            short:
                "Personalized career guidance from experienced industry professionals.",
            problem:
                "Navigating your career path alone can be overwhelming. Without expert guidance, it's easy to make costly decisions or miss valuable opportunities.",
            solution:
                "Work one-on-one with an experienced mentor who understands your background and creates a personalized roadmap tailored to your career goals.",
            
        },

        {
            icon: <Box size={28} />,
            title: "Skill Assessment",
            short:
                "Evaluate your technical and professional strengths with expert feedback.",
            problem:
                "Many candidates apply for jobs without knowing which skills employers actually expect.",
            solution:
                "Our comprehensive assessments identify your strengths, weaknesses, and the exact areas you should improve before applying.",
            
        },

        {
            icon: <FileUser size={28} />,
            title: "Resume & LinkedIn Building",
            short:
                "Build ATS-friendly resumes and recruiter-ready LinkedIn profiles.",
            problem:
                "Even highly qualified candidates often receive no interview calls because their resumes fail ATS screening.",
            solution:
                "We optimize your resume and LinkedIn profile using industry best practices to maximize recruiter visibility.",
            
        },

        {
            icon: <SearchCheck size={28} />,
            title: "Job Search Support",
            short:
                "Smart job application strategy with continuous application tracking.",
            problem:
                "Applying randomly wastes time and significantly reduces interview opportunities.",
            solution:
                "We develop a targeted application strategy based on your skills, experience, and career objectives.",
            
        },

        {
            icon: <MessageSquareCode size={28} />,
            title: "Mock Interviews",
            short:
                "Practice real interview scenarios with detailed expert feedback.",
            problem:
                "Most candidates lose confidence during interviews because they lack practical interview experience.",
            solution:
                "Practice technical and HR interviews with experts who provide personalized feedback and improvement strategies.",
            
        },

        {
            icon: <MonitorCog size={28} />,
            title: "IT Staffing Solutions",
            short:
                "Connect with top employers through our trusted hiring network.",
            problem:
                "Finding reliable employers and genuine job opportunities can be difficult in today's competitive market.",
            solution:
                "Our staffing team connects you with verified hiring partners, direct clients, and exciting technology opportunities.",
            
        },
    ];

    const [selected, setSelected] = useState(null);

    return (
        <section className="relative py-24 px-6 overflow-hidden">

            {/* Fixed Background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                      backgroundImage: `url(${bgImage})`,
                    }}
                  />
            
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />

            <div className="relative max-w-7xl mx-auto">

                {/* Header */}

                <div className="text-center max-w-4xl mx-auto mb-20">

                    <div className="inline-flex px-5 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10">

                        <span className="text-yellow-400 text-xs uppercase tracking-[0.22em] font-semibold">

                            OUR SERVICES

                        </span>

                    </div>

                    <h2 className="mt-7 text-4xl md:text-5xl font-bold text-white">

                        Everything You Need To Build A
                        <span className="text-yellow-400"> Successful Career</span>

                    </h2>

                    <p className="mt-6 text-gray-400 text-lg leading-8">

                        Explore our complete career consulting services designed to
                        help you grow faster, prepare smarter, and secure the right
                        opportunities.

                    </p>

                </div>

                {/* Timeline Layout */}

                <div className="space-y-12">

                    {services.map((service, index) => {

                        const isLeft = index % 2 === 0;
                        const active = selected === index;

                        return (

                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row gap-10 items-center ${!isLeft ? "lg:flex-row-reverse" : ""
                                    }`}
                            >

                                {/* Card */}

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    onClick={() =>
                                        setSelected(selected === index ? null : index)
                                    }
                                    className={`w-full lg:w-[60%] cursor-pointer group rounded-2xl p-[1px]
                  transition-all duration-300
                  ${active
                                            ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"
                                            : "bg-gradient-to-r from-gray-700 via-transparent to-gray-700"
                                        }`}
                                >

                                    <div
                                        className={`rounded-2xl bg-[#111]/95 p-7 border transition-all duration-300
                    ${active
                                                ? "border-yellow-400"
                                                : "border-gray-800 group-hover:border-yellow-400"
                                            }`}
                                    >

                                        <div className="flex items-start gap-5">

                                            <div
                                                className={`w-14 h-14 rounded-xl flex items-center justify-center border transition
                        ${active
                                                        ? "bg-yellow-400 text-black border-yellow-400"
                                                        : "bg-[#1a1a1a] border-gray-800 text-yellow-400"
                                                    }`}
                                            >

                                                {service.icon}

                                            </div>

                                            <div className="flex-1">

                                                <h3
                                                    className={`text-xl font-semibold transition
                          ${active
                                                            ? "text-yellow-400"
                                                            : "text-white group-hover:text-yellow-400"
                                                        }`}
                                                >

                                                    {service.title}

                                                </h3>

                                                <p className="mt-3 text-gray-400 leading-7">

                                                    {service.short}

                                                </p>

                                                <div className="flex items-center gap-2 mt-5 text-yellow-400 text-sm font-medium">

                                                    View Details

                                                    <ArrowRight
                                                        className={`transition ${active ? "translate-x-2" : ""
                                                            }`}
                                                        size={18}
                                                    />

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </motion.div>

                                {/* Detail Panel */}

                                <AnimatePresence>

                                    {active && (

                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: isLeft ? 40 : -40,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                x: isLeft ? 40 : -40,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                            }}
                                            className=" w-full lg:w-[60%] relative rounded-2xl p-[1px] bg-gradient-to-br from-yellow-400/40 via-transparent to-yellow-400/40"
                                        >

                                            <div className="relative h-full rounded-2xl bg-[#111]/95 border border-yellow-400 p-8 overflow-hidden">

                                                {/* Glow */}

                                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>

                                                <div className="relative z-10">

                                                    

                                                    {/* Problem */}

                                                    <div className="border-l-4 border-red-500 pl-5 mb-8">

                                                        <div className="flex items-center gap-2 mb-3">

                                                            <TriangleAlert
                                                                className="text-red-500"
                                                                size={20}
                                                            />

                                                            <h4 className="text-lg font-semibold text-white">

                                                                The Problem

                                                            </h4>

                                                        </div>

                                                        <p className="text-gray-400 leading-7">

                                                            {service.problem}

                                                        </p>

                                                    </div>

                                                    {/* Solution */}

                                                    <div className="border-l-4 border-yellow-400 pl-5 mb-8">

                                                        <div className="flex items-center gap-2 mb-3">

                                                            <Lightbulb
                                                                className="text-yellow-400"
                                                                size={20}
                                                            />

                                                            <h4 className="text-lg font-semibold text-white">

                                                                Our Solution

                                                            </h4>

                                                        </div>

                                                        <p className="text-gray-400 leading-7">

                                                            {service.solution}

                                                        </p>

                                                    </div>

                                                    

                                                    {/* Button */}

                                                    <Link
                                                        to="/contact"
                                                        className="inline-flex items-center gap-2  bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-3 py-1 rounded-lg transition"
                                                    >

                                                        Get Started

                                                        <ArrowRight size={12} />

                                                    </Link>

                                                </div>

                                            </div>

                                        </motion.div>

                                    )}

                                </AnimatePresence>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}

export default ItServices;



