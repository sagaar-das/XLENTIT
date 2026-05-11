import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import ServiceSections from "../components/ServiceSections";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedText from "../components/AnimatedText";

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
    <section className="text-white px-6 py-16 max-w-7xl mx-auto">


      {/* Heading (Left → Right Reveal) */}
      <AnimatedHeading
        text="Management Consulting"
        className="text-[26px] sm:text-5xl font-bold text-yellow-400 mb-4 whitespace-nowrap"
      />

      {/* Description (Scroll Reveal) */} 
      <AnimatedText className="text-center text-gray-400 mb-10" delay={0.5}>
          We help businesses optimize operations, improve efficiency, and drive digital transformation through strategic consulting.
      </AnimatedText>

      {/* Sections */}
      <div className="mt-12">
        <ServiceSections data={data} />
      </div>

    </section>
  );
}

export default Consulting;