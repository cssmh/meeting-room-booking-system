import { Outlet } from "react-router-dom";
import Navbar from "./src/Component/Navbar";
import Footer from "./src/Component/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
