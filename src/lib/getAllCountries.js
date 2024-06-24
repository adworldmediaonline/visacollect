import { Country } from 'country-state-city';

export const getAllCountries = () =>
  Country?.getAllCountries()?.map((country, index) => (
    <option key={index} value={country?.name}>
      {country?.name}
    </option>
  ));
export const getAllCountriesForAustraliaVisa = ({ countryData }) =>
  countryData[0]?.data?.map((country, index) => (
    <option key={index} value={country.toLowerCase()}>
      {country}
    </option>
  ));
