export const filterCountries = (
  countriesData,
  searchInputValue,
  selectedRegion
) => {
  let updatedCountries = countriesData;

  console.log(updatedCountries.length);

  // Filter by search input
  if (searchInputValue !== "") {
    console.log(searchInputValue);
    const lowerCaseSearch = searchInputValue.toLowerCase();
    updatedCountries = updatedCountries.filter((element) =>
      element.name.common.toLowerCase().includes(lowerCaseSearch)
    );
  }

  // Filter by region
  if (selectedRegion !== "") {
    console.log(selectedRegion);
    updatedCountries = updatedCountries.filter(
      (element) => element.region === selectedRegion
    );
  }

  console.log(updatedCountries.length);
  return updatedCountries;
};
