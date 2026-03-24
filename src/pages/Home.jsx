import Hero from "../sections/Hero";
import AboutCompany from "../sections/AboutCompany";
import ServicesSection from "../sections/ServicesSection";
import Industries from "../sections/Industries";
import WhyChoose from "../sections/WhyChoose";
import Career from "../sections/Career";
import ContactCTA from "../sections/ContactCTA";

function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Industries />
      {/* <AboutCompany />
      <WhyChoose />
      <Career /> */}
      <ContactCTA />
    </>
  );
}

export default Home;