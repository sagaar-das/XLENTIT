import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Building2,
    Users,
    LaptopMinimal,
    Target,
    CheckCircle,
    ArrowRight,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import useExploreServices from "../hooks/useExploreServices";

const careerServices = [
    "ATS-Optimized Resume Development",
    "LinkedIn Profile Optimization",
    "Profile Marketing & Strategic Job Submission",
    "Mock Interviews & Technical Interview Preparation",
    "Career Mentorship & Job Search Strategy",
    "Direct Client & Vendor Opportunities",
    "End-to-End Placement Support",
];

const technologySolutions = [
    "IT Consulting",
    "Software & Application Development",
    "AI & Automation Solutions",
    "Cloud Services",
    "Digital Transformation",
    "BPO & KPO Services",
];

const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function About() {

    const goToServices = useExploreServices();

    return (

        <>
            <Helmet>
                <title>About Us | XLent IT Services</title>

                <meta
                    name="description"
                    content="Learn about XLent IT Services, our mission, values, expertise, and commitment to delivering exceptional IT solutions, staffing, and career development services."
                />

                <link rel="canonical" href="https://www.xlent-itservice.com/about" />
            </Helmet>

            <section className="bg-primary text-white">
                <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
                    {/* Hero */}
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >


                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full  dark:bg-yellow-900/20 text-yellow-400 text-sm font-medium">
                                <Building2 size={18} />
                                About XLENT IT Service
                            </div>

                            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                                Talent.
                                <span className="text-yellow-400"> Technology.</span>
                                <br />
                                Transformation.
                            </h1>

                            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-7">
                                Helping businesses hire exceptional talent while empowering
                                professionals to build successful careers in the United States.
                            </p>
                        </div>
                    </motion.div>

                    {/* About */}

                    <motion.section
                        className="mt-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >


                        <section className="mt-16">
                            <div className="flex items-center gap-3 mb-6">
                                <Users className="text-yellow-400" />
                                <h2 className="text-2xl font-semibold">Who We Are</h2>
                            </div>

                            <div className="space-y-6 text-gray-400 leading-8">
                                <p>
                                    XLENT IT Service LLC is a leading USA-based IT Staffing, Career
                                    Consulting, and Technology Solutions company dedicated to helping
                                    businesses hire exceptional talent and empowering professionals
                                    to build successful careers in the United States.
                                </p>

                                <p>
                                    We specialize in connecting skilled IT professionals with
                                    opportunities across Data Analytics, Data Science, Artificial
                                    Intelligence (AI), Machine Learning (ML), Software Development,
                                    Full Stack Development, Cloud Computing, Cybersecurity, DevOps,
                                    Business Analysis, Quality Assurance (QA), Project Management,
                                    ERP, SAP, Salesforce, and other emerging technologies.
                                </p>

                                <p>
                                    Whether you're a Recent Graduate, F1 Student, OPT, STEM OPT, CPT,
                                    H1B, H4 EAD, L2 EAD, Green Card Holder, or U.S. Citizen, our
                                    experienced consultants provide personalized guidance to help you
                                    confidently navigate today's competitive job market.
                                </p>
                            </div>
                        </section>
                    </motion.section>

                    {/* Services */}
                    <section className="grid lg:grid-cols-2 gap-8 mt-20">
                        {/* Career */}

                        <div className="rounded-2xl border border-yellow-600 p-7">
                            <div className="flex items-center gap-3 mb-6">
                                <Users className="text-yellow-400" />
                                <h3 className="text-xl font-semibold">
                                    Career Consulting Services
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {careerServices.map((item) => (
                                    <div key={item} className="flex gap-3">
                                        <CheckCircle
                                            className="text-yellow-400 mt-1 flex-shrink-0"
                                            size={18}
                                        />
                                        <span className="text-gray-600 dark:text-gray-400">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* Technology */}

                        <div className="rounded-2xl border border-yellow-600 p-7">
                            <div className="flex items-center gap-3 mb-6">
                                <LaptopMinimal className="text-yellow-400" />
                                <h3 className="text-xl font-semibold">
                                    Technology Solutions
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {technologySolutions.map((item) => (
                                    <div key={item} className="flex gap-3">
                                        <CheckCircle
                                            className="text-yellow-400 mt-1 flex-shrink-0"
                                            size={18}
                                        />
                                        <span className="text-gray-600 dark:text-gray-400">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </section>

                    {/* Mission */}
                    <motion.section
                        className=""
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <section className="mt-20 rounded-2xl bg-neutral-900 border  border-yellow-800 p-8">
                            <div className="flex items-center gap-3 mb-5">
                                <Target className="text-yellow-400" />
                                <h2 className="text-2xl font-semibold">Our Mission</h2>
                            </div>

                            <blockquote className="border-l-4 border-yellow-600 pl-5 italic text-lg leading-8 text-gray-300">
                                To bridge the gap between exceptional talent and outstanding
                                opportunities while helping organizations build high-performing
                                teams.
                            </blockquote>

                            <p className="mt-8 text-gray-400 leading-8">
                                At XLENT IT Service, we don't just help candidates find jobs—we
                                help them build long-term careers. We don't just fill positions—we
                                create successful partnerships built on trust, quality, and
                                measurable results.
                            </p>
                        </section>
                    </motion.section>

                    {/* CTA */}

                    <motion.section
                        className="mt-20 text-center"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        <section className="mt-20 text-center">
                            <h2 className="text-3xl font-bold">
                                Ready to Build Your Future?
                            </h2>

                            <p className="mt-5 max-w-3xl mx-auto text-gray-400 leading-8">
                                Whether you're hiring exceptional talent or building your dream
                                career, XLENT IT Service is your trusted partner in{" "}
                                <span className="font-semibold text-white">
                                    Talent, Technology & Transformation.
                                </span>
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-lg transition duration-300"
                                >
                                    Contact Us
                                    <ArrowRight size={18} />
                                </Link>

                                <button
                                    onClick={goToServices}
                                    className="inline-flex items-center justify-center border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-lg transition duration-300"
                                >
                                    Explore Services
                                </button>
                            </div>
                        </section>
                    </motion.section>
                </div>
            </section>
        </>
    );
}