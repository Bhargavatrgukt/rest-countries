import React, { createContext,  useState, useEffect,useContext } from "react";


const DataContext = createContext();


// Provider component
export const DataProvider = ({ children }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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


  return (
    <DataContext.Provider value={{ countriesData, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};


export const useData = () => useContext(DataContext);