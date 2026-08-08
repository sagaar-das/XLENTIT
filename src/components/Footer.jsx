import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import FooterBrand from "./FooterBrand";
import ev from "../assets/E-Verify_logo.webp";
import { useNavigate } from "react-router-dom";



function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="relative bg-black border-t border-[#d4af37]/20 py-16 px-6 overflow-hidden">


      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* BACKGROUND LOGO
      <div
        className="absolute inset-0 flex items-center justify-left pointer-events-none opacity-25"
      >
        <img
          src={logo}
          alt="logo"
          className="w-[250px] sm:w-[400px] md:w-[500px] object-contain"
        />
      </div> */}


        {/*  LEFT SIDE */}
        <div className="text-gray-400 text-sm space-y-6">

          {/* LOGO TEXT */}
          <h2 className="text-white text-2xl font-bold">
            XlentIT
          </h2>

          <p>
            Your trusted partner in career success. We provide end-to-end career support with personal mentorship and dedicated job assistance until placement.
          </p>

          {/* SERVICES */}
          <div>
            <h3 className="text-white mb-2">Services</h3>
            <ul className="space-y-1">
              <li onClick={() => navigate("/services/software")} className="hover:text-yellow-400 cursor-pointer">Software Development</li>
              <li onClick={() => navigate("/services/app")} className="hover:text-yellow-400 cursor-pointer">Application Development</li>
              <li onClick={() => navigate("/services/consulting")} className="hover:text-yellow-400 cursor-pointer">Management Consulting</li>
              <li onClick={() => navigate("/services/it")} className="hover:text-yellow-400 cursor-pointer">IT Staffing</li>
              <li onClick={() => navigate("/services/bpo")} className="hover:text-yellow-400 cursor-pointer">BPO / KPO</li>
              <li onClick={() => navigate("/services/ai")} className="hover:text-yellow-400 cursor-pointer">IoT / AI Developmen</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white mb-2">Company</h3>
            <ul className="space-y-1">
              <li onClick={() => navigate("/for-employers")} className="hover:text-yellow-400 cursor-pointer">For Employers</li>
              <li onClick={() => navigate("/careers")} className="hover:text-yellow-400 cursor-pointer">Careers</li>
              <li onClick={() => navigate("/about")} className="hover:text-yellow-400 cursor-pointer">About Us</li>
              <li onClick={() => navigate("/technology-trends")} className="hover:text-yellow-400 cursor-pointer">Trends</li>
              <li onClick={() => navigate("/clients")} className="hover:text-yellow-400 cursor-pointer">Clients</li>
              <li onClick={() => navigate("/contact")} className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-2">

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" />
              <span>info@xlent-itservice.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" />
              <span>+1 (484) 304-0329</span>
            </div>

          

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-400" />
              <span>823 Congress Ave, Austin, Texas 78701, US</span>
            </div>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.linkedin.com/company/xlent-itservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-md text-gray-300 hover:text-yellow-400 hover:border-yellow-400 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              // href="https://facebook.com/yourprofile"
              // target="_blank"
              // rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-md text-gray-300 hover:text-yellow-400 hover:border-yellow-400 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              // href="https://instagram.com/yourprofile"
              // target="_blank"
              // rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-md text-gray-300 hover:text-yellow-400 hover:border-yellow-400 transition"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="pt-6 border-t border-gray-800 text-xs flex flex-col sm:flex-row justify-between gap-2">
            <p>© 2026 XlentIT. All rights reserved.</p>
            <p onClick={() => navigate("/privacy-policy")} className="hover:text-yellow-400 cursor-pointer">
              Privacy Policy
            </p>
          </div>

          <div>
             <img src={ev} 
             alt="XLENT-IT Logo"
            className="h-8 md:h-12 w-auto object-contain" />
          </div>

        </div>


        <FooterBrand />

      </div>

    </footer>
  );
}

export default Footer;