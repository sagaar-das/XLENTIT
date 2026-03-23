import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 pt-20 pb-10 px-6 overflow-hidden">

      {/* BIG BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <h1 className="text-[80px] sm:text-[140px] md:text-[220px] font-bold text-white/5 select-none leading-none">
          XLENTIT
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">

          {/* LEFT - LOGO */}
          <div>
            <h1 className="text-white text-2xl font-bold mb-4">
              <span className="text-red-500">Xlent</span>IT
            </h1>

            <p className="max-w-sm text-sm leading-relaxed">
              Your trusted partner in career success. We provide end-to-end career support with personal mentorship and dedicated job assistance until placement.
            </p>
          </div>

          {/* CENTER LINKS */}
          <div className="flex flex-col sm:flex-row gap-10 text-sm">

            {/* Services */}
            <div>
              <h3 className="text-white mb-4 font-semibold">Services</h3>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">1-on-1 Mentorship</li>
                <li className="hover:text-white cursor-pointer">Mock Interviews</li>
                <li className="hover:text-white cursor-pointer">Resume Building</li>
                <li className="hover:text-white cursor-pointer">IT Staffing</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white mb-4 font-semibold">Company</h3>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">How It Works</li>
                <li className="hover:text-white cursor-pointer">Success Stories</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white mb-4 font-semibold">Contact</h3>
              <ul className="space-y-2">
                <li>✉ info@xlent-itservice.com</li>
                <li>+1 (424) 246-2343</li>
                <li>
                  823 Congress Ave. STE 300 <br /> Austin, TX 78701
                </li>
              </ul>
            </div>

          </div>

          {/* RIGHT - SOCIAL */}
          <div className="flex gap-4">

            <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
              in
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
              f
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
              ig
            </motion.div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-sm border-t border-white/10 pt-6">

          <p>© 2026 XlentIT. All rights reserved.</p>

          <p className="mt-4 md:mt-0 hover:text-white cursor-pointer">
            Privacy Policy
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;