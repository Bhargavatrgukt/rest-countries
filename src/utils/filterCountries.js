export const filterCountries = (
  countriesData,
  searchInputValue,
  selectedRegion,
  selectSubRegion,
  selectCriteria
) => {
  let updatedCountries = [...countriesData];
  // Filter by search input
  if (searchInputValue !== "") {
    const lowerCaseSearch = searchInputValue.toLowerCase();
    updatedCountries = updatedCountries.filter((element) =>
      element.name.common.toLowerCase().includes(lowerCaseSearch)
    );
  }

  // Filter by region
  if (selectedRegion !== "") {
    // console.log(selectedRegion);
    updatedCountries = updatedCountries.filter(
      (element) => element.region === selectedRegion
    );

    // console.log(selectSubRegion);
    if (selectSubRegion !== "") {
      updatedCountries = updatedCountries.filter(
        (element) => element.subregion === selectSubRegion
      );
    }
  }

  //Filter by criteria

  if (selectCriteria !== "") {
    updatedCountries = [...updatedCountries]; // issue here is whenever I sort it change the array in place , so copy the array
    switch (selectCriteria) {
      case "Population (low-high)":
        updatedCountries = updatedCountries.sort(
          (a, b) => a.population - b.population
        );
        break;
      case "Population (high-low)":
        updatedCountries = updatedCountries.sort(
          (a, b) => b.population - a.population
        );
        break;
      case "Area (low-high)":
        updatedCountries = updatedCountries.sort((a, b) => a.area - b.area);
        break;
      case "Area (high-low)":
        updatedCountries = updatedCountries.sort((a, b) => b.area - a.area);
        break;
    }
  }

  //   if (selectCriteria === "") {
  //     updatedCountries = updatedCountries;
  //   }

  //Filter by subregion

  return updatedCountries;
};
