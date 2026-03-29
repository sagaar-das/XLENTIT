import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./components/Layout";
import WhatsAppButton from "./components/WhatsAppButton";

// 🔥 Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));

function App() {
  return (
    <BrowserRouter>

      {/* 🔥 Suspense Wrapper */}
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center bg-black">
            <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>

            {/* Home */}
            <Route index element={<Home />} />

            {/* Services */}
            <Route path="services" element={<Services />} />
            <Route path="services/:serviceId" element={<Services />} />

            {/* Careers */}
            <Route path="careers" element={<Careers />} />

            {/* About */}
            <Route path="about" element={<About />} />

          </Route>
        </Routes>
      </Suspense>

      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;



