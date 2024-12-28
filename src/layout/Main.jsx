import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navber></Navber>
      <div className="min-h-[600px] ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
