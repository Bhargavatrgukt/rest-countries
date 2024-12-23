import React from 'react'
import { IoIosSearch } from "react-icons/io";

const InputContainer = (props) => {
    const {handleSearch,filterRegions}=props;
  return (
    <div className="flex sm:justify-between max-[425px]:flex-col p-4 pt-6">
        <div className="relative flex items-center max-[425px]:w-full max-[425px]:pb-5">
            <IoIosSearch className="text-xl absolute left-4 text-gray-500" />
            <input
                type="search"
                placeholder="Search for a country..."
                className="p-3 px-12 sm:px-14 sm:w-96 border rounded-md focus:outline-none shadow-md w-full"
                onChange={(event)=>handleSearch(event.target.value)}
            />
        </div>
        <select
        name="Region"
        defaultValue=""
        className="p-3 border rounded-md focus:outline-none bg-white shadow-md sm:pl-4 sm:pr-6 max-[425px]:w-[65%] max-[425px]:px-5 " onChange={(event)=>filterRegions(event.target.value)}
        >
            <option value="">
                Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
  </div>
  )
}

export default InputContainer