import React from 'react'

const Country = (props) => {
  const {country}=props;  
  return (
    <li className="shadow-md  sm:w-auto mb-3 dark:bg-darkBlue">
       <div className="w-full h-[200px] overflow-hidden">
            <img 
            src={country.flags.png} 
            alt="Country Flag" 
            className="w-full h-full object-fill"
            />
        </div>
        <div className='p-4'>
            <h1 className='font-bold text-xl p-2 dark:text-white'>{country.name.common}</h1>
            <p className='text-sm font-medium p-2 dark:text-white'>Population:<span className='text-darkGray dark:text-veryLightGray dark:font-light'>{country.population}</span></p>
            <p className='text-sm font-medium p-2 dark:text-white'>Region:<span className='text-darkGray dark:text-veryLightGray  dark:font-light'>{country.region}</span></p>
            <p className='text-sm font-medium p-2 dark:text-white'>Capital:<span className='text-darkGray dark:text-veryLightGray  dark:font-light'>{country.capital}</span></p>
        </div>
   </li> 
  )
}

export default Country