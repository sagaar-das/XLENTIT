import { motion } from "framer-motion";
import ServiceSections from "../components/ServiceSections";

function Application() {
  const data = [
    {
      title: "Web Applications",
      description:
        "We build modern, responsive web applications designed for performance and scalability. Our solutions ensure seamless user experiences across devices, leveraging the latest technologies to deliver fast, secure, and highly interactive platforms tailored to your business needs."
    },
    {
      title: "Mobile Applications",
      description:
        "Our team develops intuitive and high-performance mobile applications for both iOS and Android platforms. We focus on usability, speed, and reliability to ensure your users enjoy a smooth and engaging experience across all mobile devices."
    },
    {
      title: "UI/UX Design",
      description:
        "We craft visually appealing and user-centric designs that enhance engagement and usability. Our design process focuses on understanding user behavior and delivering seamless experiences that drive satisfaction."
    },
    {
      title: "Maintenance & Support",
      description:
        "We provide ongoing maintenance and support services to ensure your applications remain secure, updated, and high-performing. Our proactive approach minimizes downtime and keeps systems aligned with evolving needs."
    }
  ];

  return (
    <section className="text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4"
      >
        Application Development
      </motion.h2>

      <p className="text-gray-300 max-w-2xl">
        We build user-friendly web and mobile applications designed for performance and seamless user experience.
      </p>

      <ServiceSections data={data} />
    </section>
  );
}

export default Application;