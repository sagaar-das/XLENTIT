import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import Layout from "./components/Layout";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Careers from "./pages/Careers";
import ClientsPage from "./pages/ClientsPage";
import ContactUs from "./pages/ContactUs"


// 🔥 Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}


// 🔥 Animated Routes
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <AnimatePresence mode="wait">

        {/* 🔥 Black overlay (transition screen) */}
        <motion.div
          key={location.pathname + "-overlay"}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-black z-[9999] pointer-events-none"
        />

        {/* 🔥 Page Content */}
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
          transition={{ duration: 0.4 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Layout />}>

              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:serviceId" element={<Services />} />
              <Route path="careers" element={<Careers />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="/clients" element={<ClientsPage />} />

            </Route>
          </Routes>
        </motion.div>

      </AnimatePresence>
    </>
  );
}


// 🔥 Prefetch routes (instant feel)
function PrefetchLinks() {
  useEffect(() => {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        const href = link.getAttribute("href");

        if (href === "/") import("./pages/Home");
        if (href === "/services") import("./pages/Services");
        if (href === "/about") import("./pages/About");
        if (href === "/careers") import("./pages/Careers");
      });
    });
  }, []);

  return null;
}


function App() {
  return (
    <BrowserRouter>

      <PrefetchLinks />

      <AnimatedRoutes />

      <WhatsAppButton />

    </BrowserRouter>
  );
}

export default App;


