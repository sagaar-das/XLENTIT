import { useState } from "react";
import { motion } from "framer-motion";

import {
    Code,
    Database,
    Server,
    Layout,
    Cpu,
    BarChart3,
    Cloud,
    Settings,
    Brain,
    Briefcase,
    Shield,
    PenTool,
    Users,
    Network,
} from "lucide-react";

// 🔹 Letter animation for heading
const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const rolesData = [
    { title: "Software Development Engineer (SDE)", type: "IT", description: "Design, develop, test, and maintain scalable software solutions. Collaborate with cross-functional teams to build efficient systems, optimize performance, and ensure code quality while following best practices in software engineering and system design.", skills: ["Java", "Python", "DSA", "OOP", "Git"] },
    { title: "Full Stack Developer", type: "IT", description: "Develop and maintain both frontend and backend components of web applications. Ensure seamless integration between user interfaces and server-side logic while delivering responsive, high-performance, and scalable solutions across the full technology stack.", skills: ["React", "Node.js", "MongoDB", "REST APIs"] },
    { title: "Backend Developer", type: "IT", description: "Build and maintain server-side applications, APIs, and databases. Focus on scalability, performance, and security while ensuring smooth data flow between systems and efficient handling of business logic in distributed architectures.", skills: ["Java", "Python", "SQL", "Microservices"] },
    { title: "Frontend Developer", type: "IT", description: "Create engaging, responsive, and user-friendly web interfaces. Work closely with designers and backend developers to ensure seamless user experiences, optimize performance, and maintain consistency across different devices and browsers.", skills: ["HTML", "CSS", "JavaScript", "React", "Angular"] },
    { title: "Python Developer", type: "IT", description: "Develop robust applications and backend services using Python. Work with frameworks like Django or Flask to build APIs, automate processes, and integrate systems while ensuring code efficiency, scalability, and maintainability.", skills: ["Python", "Django", "Flask", "SQL"] },
    { title: "Data Scientist", type: "IT", description: "Analyze complex datasets to extract meaningful insights and build predictive models. Apply statistical techniques and machine learning algorithms to solve business problems, improve decision-making, and drive data-driven strategies.", skills: ["Python", "ML", "Statistics", "Pandas"] },
    { title: "Data Engineer", type: "IT", description: "Design, build, and maintain scalable data pipelines and architectures. Ensure efficient data collection, transformation, and storage while enabling reliable access for analytics and machine learning applications across the organization.", skills: ["SQL", "Spark", "ETL", "AWS"] },
    { title: "Data Analyst", type: "IT", description: "Collect, process, and analyze data to generate actionable insights. Create dashboards, reports, and visualizations that help stakeholders understand trends, measure performance, and make informed business decisions.", skills: ["Excel", "SQL", "Power BI", "Tableau"] },
    { title: "Financial Analyst", type: "IT", description: "Evaluate financial data, prepare reports, and develop forecasts to support strategic decision-making. Analyze trends, budgets, and investments to improve financial performance and guide business planning effectively.", skills: ["Excel", "Forecasting", "Financial Modeling"] },
    { title: "Cloud Engineer", type: "IT", description: "Design, deploy, and manage cloud-based infrastructure and services. Ensure scalability, reliability, and security of applications while optimizing cloud resources and supporting modern cloud-native development practices.", skills: ["AWS", "Azure", "Docker", "Kubernetes"] },
    { title: "DevOps Engineer", type: "IT", description: "Automate development, testing, and deployment processes to improve software delivery. Build CI/CD pipelines, manage infrastructure, and enhance collaboration between development and operations teams for faster and more reliable releases.", skills: ["Jenkins", "Docker", "Kubernetes", "Git"] },
    { title: "AI/ML Engineer", type: "IT", description: "Design, develop, and deploy machine learning models into production systems. Work with large datasets, optimize algorithms, and integrate AI solutions into applications to solve complex real-world problems.", skills: ["Python", "TensorFlow", "NLP", "Deep Learning"] },
    { title: "Business Analyst", type: "IT", description: "Analyze business requirements and translate them into technical solutions. Work closely with stakeholders to gather requirements, document processes, and ensure that delivered solutions align with business objectives and needs.", skills: ["SQL", "Documentation", "Requirement Gathering"] },
    { title: "QA / Test Engineer", type: "IT", description: "Ensure software quality through rigorous testing processes. Design and execute test cases, identify defects, and collaborate with development teams to deliver reliable, high-performance, and bug-free applications.", skills: ["Selenium", "Manual Testing", "Automation"] },
    { title: "UI/UX Designer", type: "IT", description: "Design intuitive and visually appealing user interfaces. Conduct user research, create wireframes and prototypes, and enhance user experiences by focusing on usability, accessibility, and design consistency.", skills: ["Figma", "Adobe XD", "Wireframing"] },
    { title: "Cybersecurity Analyst", type: "IT", description: "Protect systems, networks, and data from cyber threats. Monitor security events, identify vulnerabilities, and implement security measures to ensure compliance and safeguard organizational assets from potential attacks.", skills: ["Network Security", "SIEM", "Ethical Hacking"] },

    { title: "Technical Architect", type: "Leadership", description: "Design and define system architecture for complex applications. Make strategic technical decisions, ensure scalability and performance, and guide development teams in implementing robust, future-ready technology solutions.", skills: ["System Design", "Cloud Architecture", "Microservices"] },
    { title: "Engineering Manager", type: "Leadership", description: "Lead and mentor engineering teams to deliver high-quality software solutions. Oversee project execution, manage resources, and foster collaboration while ensuring alignment with business goals and technical excellence.", skills: ["Leadership", "Agile", "Team Management"] },
    { title: "Product Manager", type: "Leadership", description: "Define product vision, strategy, and roadmap based on market needs. Collaborate with cross-functional teams to deliver products that meet user expectations while driving business growth and competitive advantage.", skills: ["Product Strategy", "Market Research", "Agile"] },
    { title: "Project Manager", type: "Leadership", description: "Plan, execute, and monitor projects to ensure timely delivery within scope and budget. Manage risks, coordinate teams, and communicate effectively with stakeholders throughout the project lifecycle.", skills: ["PMP", "Agile", "Risk Management"] },
    { title: "Delivery Manager", type: "Leadership", description: "Oversee end-to-end project delivery, ensuring quality, timelines, and client satisfaction. Manage multiple teams, optimize processes, and maintain strong stakeholder relationships to achieve successful outcomes.", skills: ["Stakeholder Management", "Operations"] },
    { title: "IT Director / Head of Technology", type: "Leadership", description: "Lead the organization’s technology strategy and operations. Drive innovation, manage large teams, and ensure alignment between IT initiatives and business objectives while maintaining system reliability and scalability.", skills: ["Leadership", "Strategy", "Enterprise Systems"] },
    { title: "AI/ML Lead", type: "Leadership", description: "Lead AI and machine learning initiatives across the organization. Guide teams in developing advanced models, define AI strategies, and ensure successful implementation of intelligent solutions for business impact.", skills: ["Advanced ML", "Team Leadership", "AI Strategy"] },
    { title: "Data Architect", type: "Leadership", description: "Design and manage enterprise-level data architecture. Define data models, ensure data governance, and build scalable systems that support analytics, reporting, and data-driven decision-making across the organization.", skills: ["Data Modeling", "Big Data", "Cloud"] },
];

const iconMap = {
    "Software Development Engineer (SDE)": Code,
    "Full Stack Developer": Code,
    "Backend Developer": Server,
    "Frontend Developer": Layout,
    "Python Developer": Cpu,
    "Data Scientist": Brain,
    "Data Engineer": Database,
    "Data Analyst": BarChart3,
    "Financial Analyst": BarChart3,
    "Cloud Engineer": Cloud,
    "DevOps Engineer": Settings,
    "AI/ML Engineer": Brain,
    "Business Analyst": Briefcase,
    "QA / Test Engineer": Settings,
    "UI/UX Designer": PenTool,
    "Cybersecurity Analyst": Shield,

    "Technical Architect": Network,
    "Engineering Manager": Users,
    "Product Manager": Briefcase,
    "Project Manager": Briefcase,
    "Delivery Manager": Users,
    "IT Director / Head of Technology": Users,
    "AI/ML Lead": Brain,
    "Data Architect": Database,
};

export default function Careers() {
    const [filter, setFilter] = useState("All");

    const filteredRoles = rolesData.filter((role) => {
        if (filter === "All") return true;
        if (filter === "IT") return role.type === "IT";
        if (filter === "Leadership") return role.type === "Leadership";
    });

    const headingText = "Careers at XLENT".split("");

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white px-6 py-16">

            {/* 🔥 Animated Heading */}
            <motion.h1
                variants={sentence}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-6xl font-bold text-center text-yellow-400 mb-6 flex justify-center flex-wrap"
            >
                {headingText.map((char, index) => (
                    <motion.span key={index} variants={letter}>
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h1>

            {/* Subheading fade */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center text-gray-400 mb-10"
            >
                Explore opportunities and grow your career with us.
            </motion.p>

            {/* 🔥 Filter Buttons with scale */}
            <div className="flex justify-center gap-4 mb-12">
                {["All", "IT", "Leadership"].map((item) => (
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        key={item}
                        onClick={() => setFilter(item)}
                        className={`px-5 py-2 rounded-full border transition-all duration-300 ${filter === item
                                ? "bg-yellow-400 text-black border-yellow-400"
                                : "border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
                            }`}
                    >
                        {item === "IT"
                            ? "IT Roles"
                            : item === "Leadership"
                                ? "Leadership Roles"
                                : "All"}
                    </motion.button>
                ))}
            </div>

            {/* 🔥 Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRoles.map((role, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.03 }}
                        whileHover={{ scale: 1.05, rotate: 0.5 }}
                        className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 text-white hover:text-yellow-400 hover:border-yellow-400  hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition-all duration-300"
                    >
                        <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
                            {(() => {
                                const Icon = iconMap[role.title];
                                return Icon ? <Icon size={18} /> : null;
                            })()}
                            {role.title}
                        </h2>

                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                            {role.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {role.skills.map((skill, i) => (
                                <motion.span
                                    whileHover={{ scale: 1.2 }}
                                    key={i}
                                    className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-300 hover:bg-yellow-400 hover:text-black transition"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}


