import React from "react";
const bgImage = new URL("../assets/clients-bg.webp", import.meta.url).href;

function ClientsPage() {

  const logos = [
    "bain-company-logo.svg",
    "paypal-3.svg",
    "mckinsey-company.svg",
    "amazon-web-services-2.svg",
    "intel.svg",
    "startek.svg",
    "cgi-logo.svg",
    "teleperformance-group.svg",
    "genpact-logo.svg",
    "linkedin-icon-2.svg",
    "meta-3.svg",
    "ibm.svg",
    "globant-1.svg",
    "boston-consulting-group.svg",
    "oracle-6.svg",
    "hp-hewlett-packard.svg",
    "fujitsu-logo.svg",
    "tech-mahindra-new-logo.svg",
    "wipro-1.svg",
    "infosys-technologies-logo.svg",
    "tata-consultancy-services-1.svg",
    "deloitte-1.svg",
    "capgemini-201x-logo-1.svg",
    "cognizant-1.svg",
    "accenture-6.svg",
  ];

  return (
    <div className="bg-[#0d0d0f] text-white">

      {/* 🔥 HERO SECTION */}
      <div
        className="h-[300px] md:h-[300px] flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative z-10 text-4xl text-yellow-400 md:text-6xl font-bold">
          OUR CLIENTS
        </h1>
      </div>

      {/* 🔥 LOGOS GRID */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center">

        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center p-4 bg-white rounded-xl border border-yellow-400 "
          >
            <img
              src={`/clientLogo/${logo}`}
              alt="client logo"
              className="h-10 object-contain"
            />
          </div>
        ))}

      </div>

    </div>
  );
}

export default ClientsPage;