import React, { useContext } from 'react'
import { useData } from '../context/DataProvider'
import { useParams } from 'react-router-dom'

import Button from '../components/Button';
import CountryFlag from '../components/countryFlag';
import PacmanLoader from "react-spinners/PacmanLoader";
import BorderCountries from '../components/BorderCountries';


const CountryDetailsPage = () => {
    const {countriesData,error,loading}=useData()
    const params=useParams()
    const countryName=params.countryName


    if (error) {
        return (
          <div className="text-center font-semibold text-red-500">
            {error}
          </div>
        );
      }

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

    const countryDetails=countriesData.find((country)=>country.name.common===countryName)
    
    const nativeNameKeys = Object.keys(countryDetails.name.nativeName);
    const detailsLeft = [
        ["Native Name", countryDetails.name.nativeName?.[nativeNameKeys[0]]?.common],
        ["Population", countryDetails.population?.toLocaleString()],
        ["Region", countryDetails.region],
        ["Sub Region", countryDetails.subregion || "N/A"],
        ["Capital", countryDetails.capital],
    ];

    const detailsRight = [
        ["Top Level Domain", countryDetails.tld],
        ["Currencies", Object.keys(countryDetails.currencies).join(", ")],
        ["Languages", Object.values(countryDetails.languages).join(", ")],
    ];

    const borderSet = new Set(countryDetails.borders);
    const borders = countriesData.filter((country) => borderSet.has(country.cca3));

    const getDetails = (details) =>
        details.map(([label, value]) => (
          <li key={label}>
            <strong>{label}: </strong>
            <span>{value}</span>
          </li>
    ));
    

  return (
    <div className='dark:bg-veryDarkBlue-bg  p-20 bg-veryLightGray h-screen'>
      <Button content={"Back"} />
      <div className="flex flex-col lg:flex-row items-center lg:gap-20 lg:items-start xl:justify-center">
        <CountryFlag
          countryFlag={countryDetails.flags}
        />
        <div className="lg:max-w-lg text-veryDarkBlue-text dark:text-white  leading-loose">
          <h1 className="text-2xl font-bold mb-4 mt-6 lg:mt-0  sm:text-center lg:text-start dark:">
            {countryDetails.name.common}
          </h1>
          <div className="flex flex-col sm:flex-row sm:justify-center md:flex-row gap-6 lg:text-start lg:justify-start md:justify-center lg:w-full">
            <ul className="list-none lg:w-1/2">{getDetails(detailsLeft)}</ul>
            <ul className="list-none ">{getDetails(detailsRight)}</ul>
          </div>
          <BorderCountries data={countriesData} borders={borders} />
        </div>
      </div>
    </div>

  )
}

export default CountryDetailsPage