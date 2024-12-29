import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartImg from "../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import profile from "../assets/image.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };
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
            <Link>Our Menu</Link>
          </li>
          <li className="text-white uppercase hover:text-[#EEFF25]">
            <Link>Our Shop</Link>
          </li>
          <li>
            <Link>
              <img className="w-12" src={cartImg} alt="" />
            </Link>
          </li>
          <li className="text-white uppercase">
            <Link>SIGN OUT </Link>
          </li>
          <li>
            <Link>
              <img className="w-11" src={profile} alt="" />
            </Link>
          </li>
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
            <Link>Our Menu</Link>
          </li>
          <li className="text-white uppercase hover:text-[#EEFF25]">
            <Link>Our Shop</Link>
          </li>
          <li>
            <Link>
              <img className="w-12" src={cartImg} alt="" />
            </Link>
          </li>
          <li className="text-white uppercase">
            <Link>SIGN OUT </Link>
          </li>
          <li>
            <Link>
              <img className="w-11" src={profile} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
