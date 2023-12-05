import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="bg-[#FFF7ED]">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </main>
  );
};

export default Layout;
