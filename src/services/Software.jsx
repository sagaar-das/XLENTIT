import { motion } from "framer-motion";
import ServiceSections from "../components/ServiceSections";

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
    <section className="text-white">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4"
      >
        Software Development
      </motion.h2>

      {/* Description */}
      <p className="text-gray-300 max-w-2xl">
        We deliver scalable, secure, and high-performance software solutions tailored to business needs.
      </p>

      {/* 🔥 Sections */}
      <ServiceSections data={data} />

    </section>
  );
}

export default Software;