export const searchCountryName = (countries, countryName) => {
  return countries.filter((eachCountry) =>
    eachCountry.name.common.toLowerCase().includes(countryName)
  );
};

export const searchCountryByRegion = (countries, region) => {
  console.log(countries, region);
  return countries.filter((eachCountry) => eachCountry.region.includes(region));
};
