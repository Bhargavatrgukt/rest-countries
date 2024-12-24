import React from 'react'

const DropDown = (props) => {
    const {name,options,defaultValue,onChange}=props
    // console.log(options)
  return (
    <select
        name={name}
        defaultValue={defaultValue}
        className="p-3 border rounded-md focus:outline-none bg-white shadow-md sm:pl-4 sm:pr-6 max-[425px]:w-[65%] max-[425px]:px-5  max-[425px]:mb-3 " onChange={onChange}
        >
         {name==="region" && <option value="">Filter By Region</option>}     
        {name==="criteria" && <option value="">Filter By Criteria</option>}    
        {name==="subRegion" && <option value="">Filter By subRegion</option>}  
        {options.map((eachOption)=><option value={eachOption} key={eachOption}>
           {eachOption}
        </option>)}
        </select>
  )
}

export default DropDown