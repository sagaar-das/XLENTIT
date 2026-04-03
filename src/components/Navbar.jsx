import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {

  const [showDropdown, setShowDropdown] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  //close the option of service when scroll and click outside
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    const handleScroll = () => {
      setShowDropdown(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const serviceLinks = [
    { name: "IT Staffing", id: "it" },
    { name: "Software Development", id: "software" },
    { name: "Application Development", id: "app" },
    { name: "Management Consulting", id: "consulting" },
    { name: "BPO / KPO", id: "bpo" },
    { name: "IoT / AI Development", id: "ai" },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative group ${isActive ? "text-[#facc15]" : "text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-[#d4af37]/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* 🔹 Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            loading="lazy"
            alt="XLENT-IT Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
          <div className="leading-tight">
            <h1 className="text-yellow-200 text-lg md:text-2xl font-bold">
              XLENT
            </h1>
            <p className="text-[10px] md:text-sm text-yellow-200">
              IT Services
            </p>
          </div>
        </div>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium">

          {/* Home */}
          <NavLink to="/" className={navLinkClass}>
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4af37] transition-all group-hover:w-full"></span>
          </NavLink>

          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative text-white">

            {/* Toggle */}
            <div
              onClick={() => setShowDropdown(prev => !prev)}
              className="cursor-pointer flex items-center gap-2"
            >
              <span className="relative group">
                Services
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4af37] transition-all group-hover:w-full"></span>
              </span>

              <motion.span
                animate={{ rotate: showDropdown ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xs"
              >
                ↓
              </motion.span>
            </div>

            {/* Dropdown */}
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-8 left-0 bg-black border border-[#d4af37]/40 rounded-xl shadow-lg p-3 w-60 z-50"
                >
                  {serviceLinks.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        navigate(`/services/${item.id}`);
                        setShowDropdown(false);
                      }}
                      className="px-3 py-2 rounded-md hover:bg-[#1a1a1a] hover:text-[#d4af37] cursor-pointer transition flex justify-between items-center"
                    >
                      {item.name}
                      <span className="text-xs">↓</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* ✅ Careers */}
          <NavLink to="/careers" className={navLinkClass}>
            Careers <span className="text-xs">↓</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4af37] transition-all group-hover:w-full"></span>
          </NavLink>

          {/* Contact Us */}
          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4af37] transition-all group-hover:w-full"></span>
          </NavLink>


        </div>

        {/* 🔹 CTA */}
        <button className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#b8962e] transition">
          Book Free Session
        </button>

        {/* 🔹 Mobile Toggle */}
        <div className="md:hidden text-white">
          {menuOpen ? (
            <X onClick={() => setMenuOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu onClick={() => setMenuOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* 🔥 Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-t border-[#d4af37]/30 px-6 py-4 space-y-4 text-white"
        >
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="block">
            Home
          </NavLink>

          {/* Mobile Services */}
          <div className="space-y-2">

            {/* 🔥 Clickable Services Heading */}
            <div
              onClick={() => setOpenServices(prev => !prev)}
              className="text-[#d4af37] cursor-pointer flex justify-between items-center"
            >
              <p>Services</p>

              {/* Arrow */}
              <span
                className={`text-xs transition-transform duration-300 ${openServices ? "rotate-180" : ""
                  }`}
              >
                ↓
              </span>
            </div>

            {/* 🔥 Service List (Toggle) */}
            {openServices && (
              <div className="space-y-2">
                {serviceLinks.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      navigate(`/services/${item.id}`);
                      setMenuOpen(false);
                      setOpenServices(false);
                    }}
                    className="pl-3 text-gray-300 hover:text-[#d4af37] cursor-pointer transition"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* ✅ Careers Mobile */}
          <NavLink to="/careers" onClick={() => setMenuOpen(false)} className="block">
            Careers
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="block">
            Contact Us
          </NavLink>


        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;