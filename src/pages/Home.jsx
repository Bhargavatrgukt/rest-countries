import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Home = () => {
  // const [countriesData, handleCountriesData] = useState([]); // Start with `null` instead of `{}`

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("https://restcountries.com/v3.1/all", { mode: "cors" }); //I got issue here then I add cors 
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     // console.log(data[1].flags.png);
  //     handleCountriesData(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // if (!countriesData) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="sm:p-20">
    <div className="flex sm:justify-between max-[425px]:flex-col p-4 pt-6">
      <div className="relative flex items-center max-[425px]:w-full max-[425px]:pb-5">
        <IoIosSearch className="text-xl absolute left-4 text-gray-500" />
        <input
          type="search"
          placeholder="Search for a country..."
          className="p-3 px-12 sm:px-14 sm:w-96 border rounded-md focus:outline-none shadow-md w-full"
        />
      </div>
  
      {/* Region Filter Dropdown */}
      <select
        name="Region"
        defaultValue=""
        className="p-3 border rounded-md focus:outline-none bg-white shadow-md sm:pl-4 sm:pr-6 max-[425px]:w-[65%] max-[425px]:px-5 "
      >
        <option value="" disabled hidden>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  </div>
  
  );
};

export default Home;
