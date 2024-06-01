import React from "react";

export const Header = () => {
  return (
    <>
      <div className="flex w-full flex-wrap  bg-gray-100  border-0 justify-center items-center">
        <div className="flex justify-around m-3 w-full">
          <div className="text-black text-lg font-bold flex m-3 justify-start">
                <div className="px-4 hover:text-lime-600">Home</div>
                <div className="px-4 hover:text-lime-600">About Us</div>
                <div className="px-4 hover:text-lime-600">Card</div>
          </div>
          <div className="text-black  font-bold flex m-3 justify-end">
            <button className="border rounded-sm mx-2 border-black hover:bg-lime-100 p-1">Login</button>
            <button className="border rounded-sm mx-2 border-black hover:bg-lime-100 p-1">SignUp</button>
          </div>
        </div>
      </div>
    </>
  );
};
