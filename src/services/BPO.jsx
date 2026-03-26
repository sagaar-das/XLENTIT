import { motion } from "framer-motion";
import ServiceSections from "../components/ServiceSections";

function BPO() {
  const data = [
    {
      title: "Customer Support",
      description:
        "We provide reliable customer support services that enhance user satisfaction and brand loyalty. Our team ensures quick response times and effective issue resolution across multiple communication channels."
    },
    {
      title: "Data Management",
      description:
        "We offer efficient data processing and management services to help businesses handle large volumes of information accurately while ensuring security and accessibility."
    },
    {
      title: "Finance & Accounting",
      description:
        "Our finance and accounting outsourcing services help businesses streamline financial operations, including bookkeeping, reporting, and compliance management."
    },
    {
      title: "Research & Analytics",
      description:
        "We provide advanced research and analytics services to help organizations gain valuable insights and make informed strategic decisions."
    }
  ];

  return (
    <section className="text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4"
      >
        BPO / KPO
      </motion.h2>

      <p className="text-gray-300 max-w-2xl">
        We provide cost-effective outsourcing solutions to streamline business processes and enhance productivity.
      </p>

      <ServiceSections data={data} />
    </section>
  );
}

export default BPO;