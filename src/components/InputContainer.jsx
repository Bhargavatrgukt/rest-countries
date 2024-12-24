import React from 'react'
import DropDown from './DropDown';
import { IoIosSearch } from "react-icons/io";

const InputContainer = (props) => {
    const {handleSearch,filterRegions,subRegions,changeSubRegion,changeCriteria}=props;
    const regions=["Africa","Americas","Antarctic","Asia","Europe","Oceania"]
    const criteria=["Population (low-high)","Population (high-low)","Area (low-high)","Area (high-low)"]
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
          <DropDown 
              name="criteria"
              options={criteria}
              defaultValue=""
            onChange={changeCriteria}
          />  
        {
          subRegions.length !==0 &&
          <DropDown 
              name="subRegion"
              options={subRegions}
              defaultValue=""
            onChange={changeSubRegion}
          />  
        }
        <DropDown
        name="region"
        options={regions}
        defaultValue=""
        onChange={filterRegions}
       />
  </div>
  )
}

export default InputContainer