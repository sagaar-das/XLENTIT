import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-[#0f0f0f] text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;