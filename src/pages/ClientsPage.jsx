
import bgimg from "../assets/clients-bg.webp"

import bain from "../assets/clientLogo/bain-company-logo.svg";
import paypal from "../assets/clientLogo/paypal-3.svg";
import mckinsey from "../assets/clientLogo/mckinsey-company.svg";
import aws from "../assets/clientLogo/amazon-web-services-2.svg";
import intel from "../assets/clientLogo/intel.svg";
import startek from "../assets/clientLogo/startek.svg";
import cgi from "../assets/clientLogo/cgi-logo.svg";
import teleperformance from "../assets/clientLogo/teleperformance-group.svg";
import genpact from "../assets/clientLogo/genpact-logo.svg";
import linkedin from "../assets/clientLogo/linkedin-icon-2.svg";
import meta from "../assets/clientLogo/meta-3.svg";
import ibm from "../assets/clientLogo/ibm.svg";
import globant from "../assets/clientLogo/globant-1.svg";
import bcg from "../assets/clientLogo/boston-consulting-group.svg";
import oracle from "../assets/clientLogo/oracle-6.svg";
import hp from "../assets/clientLogo/hp-hewlett-packard.svg";
import fujitsu from "../assets/clientLogo/fujitsu-logo.svg";
import techm from "../assets/clientLogo/tech-mahindra-new-logo.svg";
import wipro from "../assets/clientLogo/wipro-1.svg";
import infosys from "../assets/clientLogo/infosys-technologies-logo.svg";
import tcs from "../assets/clientLogo/tata-consultancy-services-1.svg";
import deloitte from "../assets/clientLogo/deloitte-1.svg";
import capgemini from "../assets/clientLogo/capgemini-201x-logo-1.svg";
import cognizant from "../assets/clientLogo/cognizant-1.svg";
import accenture from "../assets/clientLogo/accenture-6.svg";

function ClientsPage() {

  const logos = [
  bain, paypal, mckinsey, aws, intel, startek, cgi,
  teleperformance, genpact, linkedin, meta, ibm, globant,
  bcg, oracle, hp, fujitsu, techm, wipro, infosys,
  tcs, deloitte, capgemini, cognizant, accenture
];

  return (
    <div className="bg-[#0d0d0f] text-white">

      {/* 🔥 HERO SECTION */}
      <div
        className="h-[300px] md:h-[300px] flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${bgimg})`,
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
              src={logo}
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