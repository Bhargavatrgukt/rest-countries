import React, { Children, createContext, useContext, useState ,useEffect} from 'react'

const ThemeContext=createContext();

export const ThemeProvider=({children})=>{
    const [isDarkMode,setDarkMode]=useState(false);

    const toggleTheme=()=>{
        setDarkMode(prevMode=>!prevMode);
    }

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }, [isDarkMode]);

    return(
        <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme=()=>useContext(ThemeContext);
