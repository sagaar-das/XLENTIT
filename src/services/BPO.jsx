import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import ServiceSections from "../components/ServiceSections";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedText from "../components/AnimatedText";

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
    <section className="text-white px-6 py-16 max-w-7xl mx-auto">

      {/* 🔥 Heading (Left → Right Reveal) */}
      <AnimatedHeading
        text="BPO / KPO"
        className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4"
      />

      {/* 🔥 Description (Scroll Reveal) */} 
      <AnimatedText className="text-center text-gray-400 mb-10" delay={0.5}>
        We provide cost-effective outsourcing solutions to streamline business processes and enhance productivity.
      </AnimatedText>

      {/* 🔥 Sections */}
      <div className="mt-12">
        <ServiceSections data={data} />
      </div>

    </section>
  );
}

export default BPO;