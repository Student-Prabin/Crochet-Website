import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="px-3 mx-auto flex flex-col gap-[9vh]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;