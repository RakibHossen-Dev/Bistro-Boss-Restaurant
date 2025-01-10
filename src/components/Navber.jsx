import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import cartImg from "../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import profile from "../assets/image.png";
import { RxButton, RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { AuthContext } from "../providers/AuthProvider";
import useCart from "../hooks/useCart";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };

  console.log(user?.photoURL);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  console.log("Hello User", user);
  return (
    <div className="fixed z-10 bg-opacity-30 bg-[#151515] w-full h-24 flex items-center justify-between px-5">
      <div className="font-cinzel">
        <h3 className="text-white text-3xl"> BISTRO BOSS</h3>
        <p className="text-white text-2xl">Restaurant </p>
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center gap-4 font-inter ">
          <li className="text-white uppercase hover:text-[#EEFF25]">
            <Link>Home </Link>
          </li>
          <li className="text-white uppercase hover:text-[#EEFF25]">
            <Link> CONTACT us</Link>
          </li>
          <li className="text-white uppercase hover:text-[#EEFF25]">
            <Link>DASHBOARD </Link>
          </li>
          <li className="text-white uppercase hover:text-[#EEFF25]">
            <Link to="/menu">Our Menu</Link>
          </li>
          <li className="text-white uppercase hover:text-[#EEFF25]">
            <Link to="/order/salad">Our Shop</Link>
          </li>
          <li className="relative">
            <Link to="/dashboard/cart">
              <img className="w-12 " src={cartImg} alt="" />
              <span className="bg-[#f02e2e] text-sm text-white rounded-full  px-2 absolute top-5 left-6">
                {cart.length}
              </span>
            </Link>
          </li>
          {user ? (
            <li className="text-white capitalize ">
              <button onClick={logOut}>LOGOUT </button>
            </li>
          ) : (
            <li className="text-white uppercase">
              <Link to="/login">Login </Link>
            </li>
          )}

          {user ? (
            <li>
              <Link>
                <img
                  className="w-12 h-12 rounded-full border-2 border-yellow-500"
                  src={user?.photoURL}
                  alt=""
                />
              </Link>
            </li>
          ) : (
            <li>
              <Link>
                <img className="w-11" src={profile} alt="" />
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div onClick={handleNav} className="lg:hidden cursor-pointer">
        <RxHamburgerMenu className="text-white text-3xl" />
      </div>
      <div
        className={` ${
          open
            ? "fixed left-0 top-0 ease-linear duration-500 bg-gray-900 w-[65%] lg:hidden h-screen"
            : "fixed right-[100%] top-0 ease-linear duration-500 p-8"
        }`}
      >
        <div
          onClick={handleNav}
          className="text-white flex items-center hover:text-yellow-500 mt-5 mr-4  justify-end text-2xl cursor-pointer "
        >
          <MdClose />
        </div>
        <ul className="mt-20 ml-5 flex flex-col gap-4 font-inter ">
          <li className="text-white uppercase hover:text-[#EEFF25]">
            <Link>Home </Link>
          </li>
          <li className="text-white uppercase hover:text-[#EEFF25]">
            <Link> CONTACT us</Link>
          </li>
          <li className="text-white uppercase hover:text-[#EEFF25]">
            <Link>DASHBOARD </Link>
          </li>
          <li className="text-white uppercase hover:text-[#EEFF25]">
            <Link to="/menu">Our Menu</Link>
          </li>
          <li className="text-white uppercase hover:text-[#EEFF25]">
            <Link to="/order/salad">Our Shop</Link>
          </li>
          <li>
            <Link className="relative">
              <img className="w-12" src={cartImg} alt="" />
              <span className="bg-[#f02e2e] text-white rounded-full px-2 absolute top-4 left-7">
                {cart.length}
              </span>
            </Link>
          </li>
          {user ? (
            <li className="text-white capitalize ">
              <button onClick={logOut}>LOGOUT </button>
            </li>
          ) : (
            <li className="text-white uppercase">
              <Link to="/login">Login </Link>
            </li>
          )}
          {user ? (
            <li>
              <Link>
                <img
                  className="w-12 rounded-full border-2 border-yellow-500"
                  src={user?.photoURL}
                  alt=""
                />
              </Link>
            </li>
          ) : (
            <li>
              <Link>
                <img className="w-11" src={profile} alt="" />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navber;
