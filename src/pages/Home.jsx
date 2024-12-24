import React, { useEffect, useState } from "react";
import InputContainer from "../components/InputContainer";
import Country from "../components/Country";
import PacmanLoader from "react-spinners/PacmanLoader";
import {filterCountries} from "../utils/filterCountries";

const Home = () => {
    const [countriesData, setCountriesData] = useState([]); 
    const [searchInput, setSearchInput] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectSubRegion,setSubRegion]=useState("");
    const [selectCriteria,setCriteria]=useState("");
    const [error, setError] = useState(null);
    const [loading,setLoading]=useState(true)

    let subRegions = Array.from(
      new Set(
        countriesData
          .filter((country) => country.region === selectedRegion)
          .map((country) => country.subregion)
          .filter(Boolean)
      )
    );
    

    // console.log(subRegions)
  
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://restcountries.com/v3.1/all");
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setLoading(false)
          setCountriesData(data);
          setError(null);
        } catch (error) {
          setLoading(false)
          setError("Error in fetching data , check api");
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);

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
            color="#36d7b7" 
            size={25} 
          />
        </div>
      );
    }
  
  return (
    <div className="lg:p-20">
      <InputContainer handleSearch={setSearchInput} filterRegions={filterRegions} subRegions={subRegions} changeSubRegion={changeSubRegion} changeCriteria={changeCriteria}/>
      {updatedCountriesData.length===0 && <h1 className="text-center text-black">Country Not Found</h1>}
      <ul className="list-none grid grid-cols-1 sm:grid-cols-4 lg:gap-16 md:gap-3 p-4 ">
         {updatedCountriesData.map((country,index)=>(
           <Country key={index} country={country}/>
         ))}
      </ul>
  </div>
  
  );
};

export default Home;
