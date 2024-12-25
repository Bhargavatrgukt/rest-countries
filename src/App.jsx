import { Routes,Route } from "react-router-dom"
import  Home  from "./pages/Home"
import  Header from "./components/Header"
import { DataProvider } from "./context/DataProvider"
import { ThemeProvider } from "./context/ThemeContext"
import CountryDetailsPage from "./pages/CountryDetailsPage"
import NotFound from "./components/NotFound"


function App() {

  return (
    <>
     <ThemeProvider>
        <Header />
        <DataProvider>
          <Routes>
              <Route path="/" element={ <Home />}/>
              <Route path="/country/:countryName" element={<CountryDetailsPage />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </DataProvider>
     </ThemeProvider>
    </>
  )
}

export default App
