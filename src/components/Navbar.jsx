import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/xlentlogo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-[#d4af37]/30">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* 🔹 Logo */}
        <img
          src={logo}
          alt="XLENT-IT Logo"
          className="h-10 md:h-12 w-auto object-contain"
        />

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium">

          {/* Home */}
          <Link className="relative group" to="/">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4af37] transition-all group-hover:w-full"></span>
          </Link>

          {/* Services */}
          <div
            className="relative group"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link to="/services">Services</Link>

            {/* Dropdown */}
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-8 left-0 bg-black border border-[#d4af37]/40 rounded-xl shadow-lg p-4 w-56"
              >
                {[
                  "Web Development",
                  "App Development",
                  "UI/UX Design",
                  "SEO Services",
                  "Cloud Solutions",
                  "AI Solutions",
                ].map((item, i) => (
                  <p
                    key={i}
                    className="px-3 py-2 rounded-md hover:bg-[#1a1a1a] hover:text-[#d4af37] cursor-pointer transition"
                  >
                    {item}
                  </p>
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

        {/* 🔹 CTA Button (Desktop Only) */}
        <button className="hidden md:block bg-[#d4af37] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#b8962e] transition">
          Book Free Session
        </button>

        {/* 🔹 Mobile Menu Icon */}
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
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;