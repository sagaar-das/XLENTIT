
import ServiceSections from "../components/ServiceSections";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedText from "../components/AnimatedText";

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
    <section className="text-white px-6 py-16 max-w-7xl mx-auto">

      {/* Heading (Left → Right Reveal) */}
      <AnimatedHeading
        text="IoT / AI Development"
        className="text-[26px] sm:text-5xl font-bold text-yellow-400 mb-4 whitespace-nowrap"
      />

      {/* Description (Scroll Reveal) */} 
      <AnimatedText className="text-center text-gray-400 mb-10" delay={0.5}>
       We leverage advanced technologies like AI and IoT to build intelligent systems that drive automation and insights.
      </AnimatedText>

      {/* Sections */}
      <div className="mt-12">
        <ServiceSections data={data} />
      </div>

    </section>
  );
}

export default AI;