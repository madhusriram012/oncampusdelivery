import React from "react";
import Logo from "../img/logo.png";
import { MdShoppingBasket } from "react-icons/md";
import Avatar from "../img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config"
import { async } from "@firebase/util";

const Header = () => {
    const provider = new GoogleAuthProvider();
    const firebaseAuth = getAuth(app);

    const login = async ()=>{
        const response =await signInWithPopup(firebaseAuth,provider);
    }

  return (
    <div className="fixed z-50 w-screen p-6 px-16">
      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover"></img>
          <p className="text-headingColor text-xl font-bold">Delhivery</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-textColor text-base hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-textColor text-base hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-textColor text-base hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-textColor text-base hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center rounded-full drop-shadow-2xl">
            <MdShoppingBasket className="text text-textColor text-2xl cursor-pointer rounded-full" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold cursor-pointer">
                2
              </p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              alt="userprofile"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer"
              onClick={login}
            ></motion.img>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </div>
  );
};

export default Header;
