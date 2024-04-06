import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar py-5 px-0 flex justify-between items-center">
      <Link to='/'><img src={assets.logo} alt="" className="logo max-md:w-[120px] max-lg:w-[140px] w-36" /></Link>
      <ul className="nav-menu max-sm:hidden max-md:gap-[15px] max-md:text-[16px] max-lg:gap-[20px] max-lg:text-[17px] flex list-none gap-5 text-[#49557e] text-[18px] cursor-pointer">
        <Link
          to='/'
          onClick={() => setMenu("home")}
          className={
            menu === "home"
              ? "active pb-[2px] border-b-2 border-solid border-[#49557e] cursor-pointer"
              : ""
          }
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={
            menu === "menu"
              ? "active pb-[2px] border-b-2 border-solid border-[#49557e] cursor-pointer"
              : ""
          }
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app"
              ? "active pb-[2px] border-b-2 border-solid border-[#49557e] cursor-pointer"
              : ""
          }
        >
          mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={
            menu === "contact-us"
              ? "active pb-[2px] border-b-2 border-solid border-[#49557e] cursor-pointer"
              : ""
          }
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right max-md:gap-[20px] max-lg:gap-[30px] flex items-center gap-10 ">
        <img src={assets.search_icon} alt="" className="max-md:w-[20px] max-lg:w-[22px]" />
        <div className="navbar-search-icon relative">
          <Link to='/cart' ><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot absolute min-w-[10px] min-h-[10px] rounded-[5px] bg-red-600 top-[-8px] right-[-8px]"}></div>
        </div>
        <button onClick={() => setShowLogin(true)} className="max-md:px-[20px] max-md:py-[7px] max-md:text-[15px] max-lg:py-[8px] max-lg:px-[25px] bg-transparent text-base text-[#49557e] border border-solid border-rose-900 rounded-[50px] py-[10px] px-7 cursor-pointer duration-500 hover:bg-[#fff4f2]">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
