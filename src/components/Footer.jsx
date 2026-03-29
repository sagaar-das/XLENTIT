import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import FooterBrand from "./FooterBrand";



function Footer() {
  return (
    <footer className="bg-black border-t border-[#d4af37]/20 py-16 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* 🔥 LEFT SIDE */}
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
              <li className="hover:text-yellow-400 cursor-pointer">1-on-1 Mentorship</li>
              <li className="hover:text-yellow-400 cursor-pointer">Mock Interviews</li>
              <li className="hover:text-yellow-400 cursor-pointer">Resume Building</li>
              <li className="hover:text-yellow-400 cursor-pointer">IT Staffing</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white mb-2">Company</h3>
            <ul className="space-y-1">
              <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
              <li className="hover:text-yellow-400 cursor-pointer">How It Works</li>
              <li className="hover:text-yellow-400 cursor-pointer">Success Stories</li>
              <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
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
              <span>+1 (424) 246-2343</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-400" />
              <span>823 Congress Ave. STE 300, Austin, TX 78701</span>
            </div>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 pt-2">
            {["in", "f", "ig"].map((item, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-md text-gray-300 hover:text-yellow-400 hover:border-yellow-400 transition cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>

          {/* COPYRIGHT */}
          <div className="pt-6 border-t border-gray-800 text-xs flex flex-col sm:flex-row justify-between gap-2">
            <p>© 2026 XlentIT. All rights reserved.</p>
            <p className="hover:text-yellow-400 cursor-pointer">
              Privacy Policy
            </p>
          </div>

        </div>

        {/* 🔥 RIGHT SIDE (ANIMATED BRAND) */}
        <FooterBrand />

      </div>

    </footer>
  );
}

export default Footer;