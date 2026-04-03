import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, lazy, Suspense } from "react";



import Layout from "./components/Layout";
import WhatsAppButton from "./components/WhatsAppButton";

// ✅ Lazy loaded pages (code splitting)
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Careers = lazy(() => import("./pages/Careers"));
const ClientsPage = lazy(() => import("./pages/ClientsPage"));
const ContactUs = lazy(() => import("./pages/ContactUs"));


const preloadRoutes = {
  "/": () => import("./pages/Home"),
  "/services": () => import("./pages/Services"),
  "/careers": () => import("./pages/Careers"),
  "/clients": () => import("./pages/ClientsPage"),
  "/contact": () => import("./pages/ContactUs"),
};

function PrefetchLinks() {
  useEffect(() => {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        const href = link.getAttribute("href");
        if (preloadRoutes[href]) {
          preloadRoutes[href]();
        }
      });
    });
  }, []);

  return null;
}

// 🔥 Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}


// 🔥 Loader (premium simple)
function PageLoader() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
    
    </div>
  );
}


// 🔥 Animated Routes
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <AnimatePresence mode="wait">

        {/* 🔥 Black overlay transition */}
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
          {/* ✅ Suspense handles lazy loading */}
          <Suspense fallback={<PageLoader />}>
            <Routes location={location}>
              <Route path="/" element={<Layout />}>

                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="services/:serviceId" element={<Services />} />
                <Route path="careers" element={<Careers />} />
                <Route path="contact" element={<ContactUs />} />
                <Route path="clients" element={<ClientsPage />} />

              </Route>
            </Routes>
          </Suspense>
        </motion.div>

      </AnimatePresence>
    </>
  );
}




function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>

        <PrefetchLinks />

        <AnimatedRoutes />

        <WhatsAppButton />

      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;