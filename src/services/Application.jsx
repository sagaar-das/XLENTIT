import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import ServiceSections from "../components/ServiceSections";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedText from "../components/AnimatedText";

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
    <section className="text-white px-6 py-16 max-w-7xl mx-auto">

      {/* Heading (Left → Right Reveal) */}
      <AnimatedHeading
        text="Application Development"
        className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4"
      />

      {/* Description (Scroll Reveal) */} 
      <AnimatedText className="text-center text-gray-400 mb-10" delay={0.5}>
        We build user-friendly web and mobile applications designed for performance and seamless user experience.
      </AnimatedText>

      {/* Sections */}
      <div className="mt-12">
        <ServiceSections data={data} />
      </div>

    </section>
  );
}

export default Application;