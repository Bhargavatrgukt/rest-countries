import React from 'react'

const Country = (props) => {
  const {country}=props;  
  return (
    <li className="shadow-md  sm:w-auto mb-3">
       <div className="w-full h-[200px] overflow-hidden">
            <img 
            src={country.flags.png} 
            alt="Country Flag" 
            className="w-full h-full object-fill"
            />
        </div>
        <div className='p-4'>
            <h1 className='font-bold text-xl p-2'>{country.name.common}</h1>
            <p className='text-sm font-medium p-2'>Population:<span className='text-gray-500'>{country.population}</span></p>
            <p className='text-sm font-medium p-2'>Region:<span className='text-gray-500'>{country.region}</span></p>
            <p className='text-sm font-medium p-2'>Capital:<span className='text-gray-500'>{country.capital}</span></p>
        </div>
   </li> 
  )
}

export default Country