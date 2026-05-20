
import Hero from "../sections/Hero";
import ServicesSection from "../sections/ServicesSection";
import Industries from "../sections/Industries";
import ContactCTA from "../sections/ContactCTA";
import ClientsPreview from "../sections/ClientsPreview";
import TechTrendsSection from "../sections/TechTrendsSection";
import { Helmet } from "react-helmet-async";
import WhyUs from "../sections/WhyUs";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Xlent IT Services | IT Staffing, Recruiting &
          Technology Solutions
        </title>

        <meta
          name="description"
          content="Xlent IT Services provides IT staffing, recruiting, workforce solutions, software hiring, and technology consulting for businesses across the United States."
        />

        <link
          rel="canonical"
          href="https://www.xlent-itservice.com/"
        />

        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"Organization",
            "name":"Xlent IT Services",
            "url":"https://www.xlent-itservice.com",
            "logo":"https://www.xlent-itservice.com/logo.png",
            "email":"info@xlent-itservice.com",
            "telephone":"+1-713-551-4969",
            "address":{
              "@type":"PostalAddress",
              "streetAddress":"823 Congress Ave STE 300",
              "addressLocality":"Austin",
              "addressRegion":"TX",
              "postalCode":"78701",
              "addressCountry":"US"
            }
          }
          `}
        </script>
      </Helmet>

      <Hero />
      <ServicesSection />
      <Industries />
      <WhyUs />
      <TechTrendsSection />
      <ClientsPreview />
      <ContactCTA />
    </>
  );
}

export default Home;
