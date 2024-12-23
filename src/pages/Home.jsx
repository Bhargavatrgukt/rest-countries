import React, { useEffect, useState } from "react";
import InputContainer from "../components/InputContainer";
import Country from "../components/Country";
import PacmanLoader from "react-spinners/PacmanLoader";
import { searchCountryByRegion, searchCountryName } from "../utils/filterCountries";

const Home = () => {
    const [countriesData, setCountriesData] = useState([]); 
    const [originalCountriesData, setOriginalCountriesData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [error, setError] = useState(null);
    const [loading,setLoading]=useState(true)
  
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setLoading(false)
        setCountriesData(data);
        setOriginalCountriesData(data);
        setError(null);
      } catch (error) {
        setLoading(false)
        setError("Error in fetching data , check api");
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
    

    
    
    // const updateFilteredData = () => {
    //   let filteredData = originalCountriesData;
    
    //   if (searchInput) {
    //     filteredData = searchCountryName(filteredData, searchInput.toLowerCase());
    //   }
    
    //   if (selectedRegion) {
    //     filteredData = searchCountryByRegion(filteredData, selectedRegion);
    //   }
    
    //   setCountriesData(filteredData);
    // };
    
    // const searchCountries = (event) => {
    //   setSearchInput(event.target.value);
    //   updateFilteredData();
    // };
    
    // const filterRegions= (event) => {
    //   console.log(event.target.value)
    //   setSelectedRegion(event.target.value);
    //   updateFilteredData();
    // };
    

    useEffect(() => {
      let filteredData = originalCountriesData;
  
      if (searchInput) {
        filteredData = searchCountryName(filteredData, searchInput.toLowerCase());
      }
  
      if (selectedRegion) {
        filteredData = searchCountryByRegion(filteredData, selectedRegion);
        // Extract unique subregions for the selected region (if needed)
        // const uniqueSubregions = [
        //   ...new Set(
        //     filteredData.map((country) => country.subregion).filter(Boolean)
        //   ),
        // ];
        // setSubregions(uniqueSubregions); // Uncomment if subregions are implemented
      }
  
      // Additional filters (like subregion) can be added here
      // if (selectedSubregion) {
      //   filteredData = filterBySubregion(filteredData, selectedSubregion);
      // }
  
      setCountriesData(filteredData);
    }, [searchInput, selectedRegion]);
  
    const searchCountries = (event) => {
      setSearchInput(event.target.value);
    };
  
    const filterRegions = (event) => {
      setSelectedRegion(event.target.value);
    };
  


    if (error) {
      return (
        <div className="text-center font-semibold text-red-500">
          {error}
        </div>
      );
    }


    // console.log(countriesData.length) 
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
      <InputContainer handleSearch={searchCountries} filterRegions={filterRegions}/>
      {countriesData.length===0 && <h1 className="text-center text-black">Country Not Found</h1>}
      <ul className="list-none grid grid-cols-1 sm:grid-cols-4 lg:gap-16 md:gap-3 p-4 ">
         {countriesData.map((country,index)=>(
           <Country key={index} country={country}/>
         ))}
      </ul>
  </div>
  
  );
};

export default Home;
