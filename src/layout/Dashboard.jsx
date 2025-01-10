import { FaBook, FaCartShopping, FaList, FaUtensils } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { MdEmail, MdReviews } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { NavLink, Outlet } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { IoMenu } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import useCart from "../hooks/useCart";
import { IoIosPeople } from "react-icons/io";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO :get isAdmin value from the database
  const [isAdmin] = useAdmin();
  return (
    <div className="flex ">
      <div className="w-64 min-h-screen bg-[#D1A054] font-cinzel ">
        <div className="font-cinzel ml-5  my-8">
          <h3 className=" text-3xl"> BISTRO BOSS</h3>
          <p className=" text-2xl">Restaurant </p>
        </div>
        <ul className="menu space-y-3 font-semibold">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <TiHome className="text-white text-2xl"></TiHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils className="text-white text-xl"></FaUtensils>
                  Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItem">
                  <FaList className="text-white text-xl"></FaList>
                  manage items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook className="text-white text-xl"></FaBook>
                  Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <IoIosPeople className="text-white text-xl"></IoIosPeople>
                  all users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <TiHome className="text-white text-2xl"></TiHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <SlCalender className="text-white text-xl"></SlCalender>
                  reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaCartShopping className="text-white text-xl"></FaCartShopping>
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdReviews className="text-white text-xl"></MdReviews>
                  add review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <GoChecklist className="text-white text-xl"></GoChecklist>
                  my booking
                </NavLink>
              </li>
            </>
          )}
          {/* Shared navlinks */}
          <div className="border border-b border-gray-200"></div>
          <li>
            <NavLink to="/">
              <TiHome className="text-white text-2xl"></TiHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <IoMenu className="text-white text-xl"></IoMenu>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaShoppingBag className="text-white text-xl"></FaShoppingBag>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <MdEmail className="text-white text-xl"></MdEmail>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
