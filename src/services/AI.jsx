import { motion } from "framer-motion";
import ServiceSections from "../components/ServiceSections";

function AI() {
  const data = [
    {
      title: "AI/ML Solutions",
      description:
        "We develop intelligent AI and machine learning models that automate processes and generate actionable insights, helping businesses improve efficiency and decision-making."
    },
    {
      title: "IoT Integration",
      description:
        "We design and implement IoT solutions that connect devices and systems seamlessly, enabling real-time monitoring and improved operational efficiency."
    },
    {
      title: "Predictive Analytics",
      description:
        "We leverage advanced analytics to predict trends, identify opportunities, and mitigate risks, helping businesses stay ahead in a competitive environment."
    },
    {
      title: "Smart Automation",
      description:
        "We build automation systems that enhance productivity and reduce manual effort by integrating advanced technologies into intelligent workflows."
    }
  ];

  return (
    <section className="text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4"
      >
        IoT / AI Development
      </motion.h2>

      <p className="text-gray-300 max-w-2xl">
        We leverage advanced technologies like AI and IoT to build intelligent systems that drive automation and insights.
      </p>

      <ServiceSections data={data} />
    </section>
  );
}

export default AI;