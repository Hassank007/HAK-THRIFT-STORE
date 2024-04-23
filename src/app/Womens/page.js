

import React from "react";

const Womens = () => {
  return (
    <>
      
      <div className="flex items-center justify-center w-full h-full pt-16 md:pt-28 pb-9">
        <div className="grid grid-rows-none md:grid-cols-4 gap-10">
          {/* <!-- Row 1 --> */}
          <div className="bg-gray-200 p-4 ">
            <img src="promotion1.jpg" />
            <div className=" flex flex-col items-start justify-center">
            <h1 className="font-mono font-bold text-xl">Mens Tshirt</h1>
            <h2 className="font-mono font-bold text-xl">Price : 900 rs</h2>
            </div>
          </div>
          <div className="bg-gray-200 p-4  ">
            <img src="menitem1.png" className="max-w-60" />
            <div className=" flex flex-col items-start justify-center">
            <h1 className="font-mono font-bold text-xl">Mens Tshirt</h1>
            <h2 className="font-mono font-bold text-xl">Price : 900 rs</h2>
            </div>
          </div>
          <div className="bg-gray-200 p-4 ">
            <img src="menitem2.png" className="max-w-60" />
            <div className=" flex flex-col items-start justify-center">
            <h1 className="font-mono font-bold text-xl">Mens Tshirt</h1>
            <h2 className="font-mono font-bold text-xl">Price : 900 rs</h2>
            </div>
          </div>
          <div className="bg-gray-200 p-4 ">
            <img src="menitem4.png" className="max-w-60" />
            <div className=" flex flex-col items-start justify-center">
            <h1 className="font-mono font-bold text-xl">Mens Tshirt</h1>
            <h2 className="font-mono font-bold text-xl">Price : 900 rs</h2>
            </div>
          </div>

          {/* <!-- Row 2 --> */}
          <div className="bg-gray-200 p-4">5</div>
          <div className="bg-gray-200 p-4">6</div>
          <div className="bg-gray-200 p-4">7</div>
          <div className="bg-gray-200 p-4">8</div>

          {/* <!-- Row 3 --> */}
          <div className="bg-gray-200 p-4">9</div>
          <div className="bg-gray-200 p-4">10</div>
          <div className="bg-gray-200 p-4">11</div>
          <div className="bg-gray-200 p-4">12</div>

          {/* <!-- Row 4 --> */}
          <div className="bg-gray-200 p-4">13</div>
          <div className="bg-gray-200 p-4">14</div>
          <div className="bg-gray-200 p-4">15</div>
          <div className="bg-gray-200 p-4">16</div>
        </div>
      </div>

      
    </>
  );
};



export default Womens;