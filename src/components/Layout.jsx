import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-[#0f0f0f] text-white">
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,215,0,0.05),transparent_70%)]"></div>
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;