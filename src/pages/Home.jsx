import Hero from "../sections/Hero";
import ServicesSection from "../sections/ServicesSection";
import Industries from "../sections/Industries";
import ContactCTA from "../sections/ContactCTA";
import ClientsPreview from "../sections/ClientsPreview";
import TechTrendsSection from "../sections/TechTrendsSection";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Xlent IT Solutions | Home</title>
        <meta name="description" content="We provide IT solutions, AI, and analytics services." />
        <meta name="keywords" content="IT services, AI, IT Staffing, web development" />
      </Helmet>

      <Hero />
      <ServicesSection />
      <Industries />
      <TechTrendsSection />
      <ClientsPreview />
      {/* <AboutCompany />
      <WhyChoose />
      <Career /> */}
      <ContactCTA />
    </>
  );
}

export default Home;