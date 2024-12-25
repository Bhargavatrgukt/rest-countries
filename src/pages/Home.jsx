import React, {  useState } from "react";
import { Link } from "react-router-dom";

import InputContainer from "../components/InputContainer";
import Country from "../components/Country";
import PacmanLoader from "react-spinners/PacmanLoader";
import {filterCountries} from "../utils/filterCountries";
import { useData } from "../context/DataProvider";


const Home = () => {
    // const [countriesData, setCountriesData] = useState([]); 
    const [searchInput, setSearchInput] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectSubRegion,setSubRegion]=useState("");
    const [selectCriteria,setCriteria]=useState("");
    // const [error, setError] = useState(null);
    // const [loading,setLoading]=useState(true)

    const {countriesData,error,loading}=useData()
  


    let subRegions = Array.from(
      new Set(
        countriesData
          .filter((country) => country.region === selectedRegion)
          .map((country) => country.subregion)
          .filter(Boolean)
      )
    );
    

    // console.log(subRegions)
  
  
  

    const filterRegions=(event)=>{
      setSelectedRegion(event.target.value);
      setSubRegion("")
    }
    
    const changeSubRegion=(event)=>{
      setSubRegion(event.target.value)
    }

    const changeCriteria=(event)=>{
      setCriteria(event.target.value)
    }


    if (error) {
      return (
        <div className="text-center font-semibold text-red-500">
          {error}
        </div>
      );
    }

   
    const updatedCountriesData = filterCountries(countriesData,searchInput, selectedRegion,selectSubRegion,selectCriteria);

    // console.log(updatedCountriesData)

    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <PacmanLoader
            loading={loading}
            color="#080808"
            size={25} 
          />
        </div>
      );
    }
  
  return (
    <div className="lg:p-20 dark:bg-veryDarkBlue-bg min-h-screen bg-veryLightGray">
      <InputContainer handleSearch={setSearchInput} filterRegions={filterRegions} subRegions={subRegions} changeSubRegion={changeSubRegion} changeCriteria={changeCriteria}/>
      {updatedCountriesData.length===0 && <h1 className="text-center text-black">Country Not Found</h1>}
      <ul className="list-none grid grid-cols-1 sm:grid-cols-4 lg:gap-16 md:gap-3 p-4" >
         {updatedCountriesData.map((country,index)=>(
          <Link key={country.name.common} to={`/country/${country.name.common}`}>
             <Country  country={country}/>
          </Link>
         ))}
      </ul>
  </div>
  
  );
};

export default Home;
