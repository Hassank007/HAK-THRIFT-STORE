"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../lib";
import Auth from "./Auth";
const NavBar = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full bg-black h-16   flex flex-row justify-between ">
      <div className="flex flex-row ">
        <div className="flex  py-4  sm:px-20  ">
          <a href="/">
            <img
              src="./logo-white.svg"
              className=" sm:w-[19rem] sm:ml-0 w-[12rem] ml-2"
            />
          </a>
        </div>
        {/* Desktop NAV */}
        <div className="hidden sm:flex flex-grow justify-start items-start w-[27rem] ">
          <ul className="flex flex-row gap-11 text-white mt-5">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-sans font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  handleToggle();
                }}
              >
                <Link href={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:block hidden max-w-md mx-auto bg-transparent rounded-lg  w-[30rem] h-[33px] flex-grow ml-20 mt-[18px] ">
          <div className="flex items-center  ">
            <input
              type="text"
              className="w-full py-0.5 px-4 placeholder-gray-500  rounded-xl"
              placeholder="Search..."
            />
            <button className="bg-black hover:bg-gray-400 text-white py-0 px-4 rounded-xl ml-1 font-sans outline  outline-white outline-1">
              Search
            </button>
          </div>
        </div>
        <Auth/>
      

        {/* Mobile NAV */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={isOpen ? "close.svg" : "menu.svg"}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer mx-4"
            onClick={handleToggle}
          />

          <div
            className={`${
              !isOpen ? "hidden" : "flex"
            } p-6 bg-gray-900 absolute top-20 right-30 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-sans font-medium cursor-pointer  text-white text-[16px]`}
                  onClick={() => {
                    handleToggle();
                  }}
                >
                  <Link href={`/${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
