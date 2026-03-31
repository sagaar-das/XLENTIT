import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ClientsPreview() {
    const navigate = useNavigate();

    return (
        <section className="relative py-24 px-6 overflow-hidden bg-[#0d0d0f] text-center">

            {/* 🔥 Animated Gradient BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0f] via-[#111111] to-black opacity-90" />

            {/* 🔥 Glow Orbs */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#d4af37]/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full animate-pulse" />

            <div className="relative z-10 max-w-5xl mx-auto">

                {/* 🔥 Small Heading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm tracking-[0.3em] text-[#d4af37] mb-4"
                >
                    OUR CLIENTS
                </motion.p>

                {/* 🔥 Heading Animation */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-bold text-white leading-tight"
                >
                    Trusted by{" "}
                    <span className="text-[#d4af37] relative">
                        Industry Leaders
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#d4af37] opacity-50"></span>
                    </span>
                </motion.h2>

                {/* 🔥 Description Animation */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
                >
                    Our clients trust us to transform complex challenges into actionable insights, delivering reliable analytics, modern solutions, and consistent value that drives business success and long-term partnerships.
                </motion.p>

                {/* 🔥 Premium Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-10"
                >
                    <button
                        onClick={() => navigate("/clients")}
                        className="group relative px-8 py-3 rounded-full bg-[#111] border border-[#d4af37]/40 text-[#d4af37] font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
                    >
                        {/* Glow Hover */}
                        <span className="absolute inset-0 bg-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition duration-300" />

                        {/* Content */}
                        <span className="relative flex items-center gap-2 justify-center">
                            View More
                            <span className="group-hover:translate-x-1 transition">→</span>
                        </span>
                    </button>
                </motion.div>

            </div>

        </section>
    );
}

export default ClientsPreview;