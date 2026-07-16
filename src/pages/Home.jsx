
import Hero from "../sections/Hero";
import ServicesSection from "../sections/ServicesSection";
import Industries from "../sections/Industries";
import ContactCTA from "../sections/ContactCTA";
import ClientsPreview from "../sections/ClientsPreview";
import TechTrendsSection from "../sections/TechTrendsSection";
import { Helmet } from "react-helmet-async";
import WhyUs from "../sections/WhyUs";
import FAQs from "../sections/FAQs";
import Reviews from "../sections/Reviews";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {

  const location = useLocation();

  useEffect(() => {

    if (location.hash === "#services") {

      const section = document.getElementById("services");

      if (section) {

        setTimeout(() => {

          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }, 100);

      }

    }

  }, [location]);

  
  return (
    <>
      <Helmet>
        <title>
          Xlent IT Services | IT Solutions, Staffing & Career Services
        </title>

        <meta
          name="description"
          content="XLent IT Services provides innovative IT solutions, staffing, recruitment, career services, and technology consulting to help businesses and professionals succeed."
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
            "telephone":"+1-780-851-7844",
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

      <Reviews />

      <ClientsPreview />

      <FAQs />

      <ContactCTA />
    </>
  );
}

export default Home;
