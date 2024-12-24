const CountryFlag = ({ countryFlag }) => {
    return (
      <div className="w-fit max-h-42 lg:max-h-80">
        <img
          src={countryFlag.png}
          alt={`${countryFlag.alt} flag`}
          className="w-full h-full"
        />
      </div>
    );
  };
  

export default CountryFlag;
  