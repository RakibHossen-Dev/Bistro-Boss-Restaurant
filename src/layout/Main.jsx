import { Outlet, useLocation } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className="max-w-screen-2xl mx-auto">
      {noHeaderFooter || <Navber></Navber>}
      <div className="min-h-[600px] ">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
