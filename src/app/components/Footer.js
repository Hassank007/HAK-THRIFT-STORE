import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black w-full  text-white">
      <div className="flex md:flex-row flex-col justify-evenly">
        <div className="logo px-6 pt-10">
          <img src="logo-white.svg" className="w-[20rem] " />
          <p className="pt-6  font-sans ">
            Explore our thrift store for unique finds and treasures waiting to
            be loved a new,
            <br />
            Where every item has a story to share.
          </p>
          <div className="flex flex-row text-3xl space-x-10 py-5">
            <FaFacebookF />
            <FaWhatsapp />
            <MdEmail />
          </div>
        </div>
        <div className="px-6 pt-10">
          <h2 className="text-3xl font-sans font-semibold">Company</h2>
          <ul className="text-xl font-sans space-y-3 pt-4 md:pb-10">
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="px-6 pt-10">
          <h2 className="text-3xl font-sans font-semibold">Support</h2>
          <ul className="text-xl font-sans space-y-3 pt-4">
            <li>24/7 Support</li>
            <li>Quick Chat</li>
            <li>Support Carrer</li>
          </ul>
        </div>
        <div className="px-6 pt-10 pb-10">
          <h2 className="text-3xl font-sans font-semibold">Contact Us</h2>
          <ul className="text-xl font-sans space-y-3 pt-4">
            <li>Whatsapp</li>
            <li>Email</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
