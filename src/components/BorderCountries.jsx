import { Link } from "react-router-dom";

const BorderCountries = ({ data, borders }) => {
    console.log(borders)
  return (
    <div className="mt-10">
      <h2 className="text-lg font-bold">Border Countries:</h2>
      {borders.length > 0 ? (
        borders.map((borderCountry) => (
            <Link key={borderCountry.name.common} to={`/country/${borderCountry.name.common}`}>
            <button className="bg-white  text-sm text-very-dark-blue  my-2 mr-2 py-2 px-6 shadow-lg rounded">
              {borderCountry.name.common}
            </button>
          </Link>
        ))
      ) : (
        <p>No border countries</p>
      )}
    </div>
  );
};


export default BorderCountries;
