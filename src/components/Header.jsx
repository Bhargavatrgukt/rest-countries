// import React from 'react'
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-7 bg-white shadow-md sm:py-8 w-full">
      <h1 className="sm:text-lg font-bold text-veryDarkBlue-text text-md sm:px-10 ">
        Where in the world?
      </h1>
      <button className="flex items-center space-x-2 text-sm font-medium text-black   sm:px-12 ">
        <IoMoonOutline className="text-lg" />
        <span>Dark Mode</span>
      </button>
    </header>
  );
};

export default Header;
