
import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  lazy,
  Suspense,
  useEffect,
} from "react";

import { AnimatePresence, motion } from "framer-motion";

import Layout from "./components/Layout";





// Lazy Loaded Main Pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Careers = lazy(() => import("./pages/Careers"));
const ClientsPage = lazy(() => import("./pages/ClientsPage"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const TechnologyTrends = lazy(() => import("./pages/TechnologyTrends"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton")
);


// Scroll to Top on Route Change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


// Minimal Fast Loader
function PageLoader() {
  return (
    <div className="h-screen bg-[#0d0d0f] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}


// Route Animations
function AnimatedRoutes() {
  return (
    <>
      <ScrollToTop />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:serviceId" element={<Services />} />
            <Route path="careers" element={<Careers />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-conditions" element={<TermsConditions />} />
            <Route path="technology-trends" element={<TechnologyTrends />} />

          </Route>
        </Routes>
      </Suspense>
    </>
  );
}



function App() {
  return (
    <HelmetProvider>

      <BrowserRouter>

        <AnimatedRoutes />

        <Suspense fallback={null}>
          <WhatsAppButton />
        </Suspense>

      </BrowserRouter>

    </HelmetProvider>
  );
}

export default App;
