import { motion } from "framer-motion";
import ServiceSections from "../components/ServiceSections";

function Consulting() {
  const data = [
    {
      title: "Business Optimization",
      description:
        "We analyze existing processes and identify opportunities for improvement to enhance efficiency and reduce costs. Our strategies are designed to streamline operations and improve overall performance across your organization."
    },
    {
      title: "Digital Transformation",
      description:
        "We guide businesses through digital transformation by adopting modern technologies and innovative strategies. Our approach helps organizations stay competitive and unlock new growth opportunities."
    },
    {
      title: "IT Strategy & Planning",
      description:
        "We help organizations align their technology roadmap with business objectives. Our consulting services focus on building scalable IT strategies and ensuring long-term growth."
    },
    {
      title: "Project Management",
      description:
        "We provide expert project management services to ensure successful execution of business initiatives with timely delivery and efficient resource utilization."
    }
  ];

  return (
    <section className="text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4"
      >
        Management Consulting
      </motion.h2>

      <p className="text-gray-300 max-w-2xl">
        We help businesses optimize operations, improve efficiency, and drive digital transformation through strategic consulting.
      </p>

      <ServiceSections data={data} />
    </section>
  );
}

export default Consulting;