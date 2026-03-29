import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import ServiceSections from "../components/ServiceSections";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedText from "../components/AnimatedText";

function Software() {

  const data = [
    {
      title: "Custom Software Solutions",
      description:
        "We design and develop tailored software solutions that align with your business goals. Our approach focuses on scalability, performance, and security, ensuring your systems grow seamlessly while delivering reliable and efficient user experiences."
    },
    {
      title: "Enterprise Systems",
      description:
        "Our enterprise solutions help organizations streamline operations, improve productivity, and enhance decision-making. We build robust systems that integrate with workflows, ensuring smooth data flow and long-term sustainability."
    },
    {
      title: "SaaS Product Development",
      description:
        "We create scalable SaaS platforms that enable businesses to deliver services efficiently over the cloud. From architecture to deployment, we focus on performance and user experience."
    },
    {
      title: "API & Integration",
      description:
        "We develop secure APIs that connect systems seamlessly. Our integration solutions ensure smooth data exchange and improved automation across platforms."
    }
  ];

  return (
    <section className="text-white px-6 py-16 max-w-7xl mx-auto">

      {/* 🔥 Heading (Left → Right Reveal) */}
      <AnimatedHeading
        text="Software Development"
        className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4"
      />

      {/* 🔥 Description (Scroll Reveal) */} 
      <AnimatedText className="text-center text-gray-400 mb-10" delay={0.5}>
        We deliver scalable, secure, and high-performance software solutions tailored to business needs.
      </AnimatedText>

      {/* 🔥 Sections (pass animation-ready data) */}
      <div className="mt-12">
        <ServiceSections data={data} />
      </div>

    </section>
  );
}

export default Software;