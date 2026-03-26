import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const serviceLinks = [
    { name: "Software Development", id: "software" },
    { name: "Application Development", id: "app" },
    { name: "Management Consulting", id: "consulting" },
    { name: "IT Staffing", id: "it" },
    { name: "BPO / KPO", id: "bpo" },
    { name: "IoT / AI Development", id: "ai" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-[#d4af37]/30">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* 🔹 Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img
            src={logo}
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
        <div className="hidden md:flex items-center gap-10 text-white font-medium">

          {/* Home */}
          <Link className="relative group" to="/">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4af37] transition-all group-hover:w-full"></span>
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="cursor-pointer">Services</span>

            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-8 left-0 bg-black border border-[#d4af37]/40 rounded-xl shadow-lg p-3 w-60"
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
                    <span className="text-xs">→</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* About */}
          <Link className="relative group" to="/about">
            About Us
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4af37] transition-all group-hover:w-full"></span>
          </Link>

        </div>

        {/* 🔹 CTA */}
        <button className="hidden md:block bg-[#d4af37] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#b8962e] transition">
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
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          {/* Mobile Services */}
          <div className="space-y-2">
            <p className="text-[#d4af37]">Services</p>
            {serviceLinks.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  navigate(`/services/${item.id}`);
                  setMenuOpen(false);
                }}
                className="pl-3 text-gray-300 hover:text-[#d4af37] cursor-pointer"
              >
                {item.name}
              </div>
            ))}
          </div>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;