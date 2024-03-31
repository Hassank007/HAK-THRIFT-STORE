import React from "react";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <>
      {/* <NavBar /> */}
{/* //Hero  */}
      <div className="flex justify-between w-full sm:h-full h-fit bg-[#ffffff]">
        <div className="flex flex-col sm:py-[8rem] py-[5rem] sm:px-[5rem] px-[2rem]">
          <div className="">
            <button className="px-6 py-2 bg-black font-sans font-semibold text-white rounded ">
              Sale 70%
            </button>
          </div>
          <h1 className="font-sans font-bold sm:text-8xl text-7xl ">
            Fashion finds at <br />
            thrifty prices.
          </h1>
          <p className="pt-8 font-sans font-semibold">
            Explore our thrift store for unique finds and treasures waiting to
            be loved a new,<br/> where every item has a story to share.
          </p>
          <img src="brands.png" className="mr-10" />
        </div>
        <div className=" sm:block hidden  items-center justify-center mr-28">
          <img src="man-model.png" className="w-[30rem]" />
        </div>
      </div>
      {/* Promotions */}
      <div className="Promotions w-full pb-20">
  <div className="flex flex-col items-center justify-center pt-20 w-full sm:w-full sm:h-full h-full">
            <h2 className="text-xl text-blue-500 font-sans font-extrabold ">PROMOTIONS</h2>
            <h1 className="text-3xl text-black font-sans font-bold">Our Promotions Events</h1>
            <img src="promotions.jpg" className="pt-10 sm:block hidden"/>
            <div className="flex flex-col space-y-8 pt-5">
<img src="promotion1.jpg " className="sm:hidden"/>
<img src="promotions2.jpg " className="sm:hidden"/>
            </div>
        </div>

      </div>
    </>
  );
};

export default HomePage;
