import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="h-[10%] bg-black w-full flex items-center px-4 lg:px-8">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="p-2 w-12 lg:w-16 cursor-pointer"
        src="Spotify_icon.svg"
        alt="spotify-icon"
      />
      {/* Navigation and Search Bar */}
      <div className="hidden md:flex items-center gap-4 ml-auto lg:ml-[300px]">
        <i
          onClick={() => navigate("/")}
          className="ri-home-line text-2xl lg:text-4xl text-white bg-zinc-800 p-1 rounded-full cursor-pointer"
        ></i>
        <div className="relative flex items-center w-full">
          <input
            type="text"
            className="bg-zinc-800 w-[400px]
             h-[40px] lg:h-[65%] rounded-xl border-none outline-none px-8 py-4 text-white "
            placeholder="What do you want to play?"
          />
          <i className="ri-search-line text-gray-300 absolute left-2"></i>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="hidden md:flex text-white gap-6 lg:gap-12 ml-12 items-center">
        <button className="bg-white text-black font-bold px-4 py-1 lg:px-5 lg:py-1.5 rounded-3xl">
          Explore Premium
        </button>
        <div className="flex items-center">
          <i className="ri-arrow-down-circle-line text-lg lg:text-2xl mr-1 font-light"></i>
          <p className="font-light text-sm lg:text-base">Install App</p>
        </div>
        <div className="flex items-center gap-4 lg:gap-9">
          <i className="ri-notification-4-line text-xl lg:text-2xl font-light"></i>
          <i className="ri-user-fill bg-zinc-600 rounded-full h-9 w-9 flex justify-center items-center"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
