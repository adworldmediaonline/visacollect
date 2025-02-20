'use client';
import { Country } from 'country-state-city';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const whereIAmGoingCountry = [
  {
    name: 'india',
    isoCode: 'in',
  },
  { name: 'australia', isoCode: 'au' },
  { name: 'srilanka', isoCode: 'lk' },
  { name: 'thailand', isoCode: 'th' },
  { name: 'turkey', isoCode: 'tr' },
  { name: 'malysia', isoCode: 'my' },
  { name: 'oman', isoCode: 'om' },
  { name: 'egypt', isoCode: 'eg' },
  { name: 'cambodia', isoCode: 'kh' },
  { name: 'morrocco', isoCode: 'ma' },
  { name: 'japan', isoCode: 'jp' },
  { name: 'singapore', isoCode: 'sg' },
  { name: 'indonesia', isoCode: 'id' },
];
export default function BannerInlineForm2() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    passportSelect: '',
    whereIAmGoing: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    if (formData.passportSelect && formData.whereIAmGoing) {
      router.push(`/${formData.whereIAmGoing.toLowerCase()}`);
    }
  }, [formData]);

  return (
    <section className="text-gray-600 ">
      <div>
        <form className="flex flex-col w-full px-8 lg:w-2/3 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0">
          <div className="relative flex-grow w-full">
            <label
              htmlFor="passportSelect"
              className="text-sm leading-7 text-white"
            >
              Passport Select
            </label>
            <select
              id="passportSelect"
              name="passportSelect"
              aria-label="Select your passport country"
              className="w-full px-3 py-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
              value={formData.passportSelect}
              onChange={handleChange}
            >
              <option value="">Select your passport country</option>
              {Country?.getAllCountries()?.map(country => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name} - {country.isoCode}
                </option>
              ))}
            </select>
          </div>
          <div className="relative flex-grow w-full">
            <label
              htmlFor="whereIAmGoing"
              className="text-sm leading-7 text-white"
            >
              Where am I Going?
            </label>
            <select
              id="whereIAmGoing"
              name="whereIAmGoing"
              aria-label="Select your destination country"
              className="w-full px-3 py-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
              value={formData.whereIAmGoing}
              onChange={handleChange}
            >
              <option value="">Select your destination</option>
              {whereIAmGoingCountry?.map(country => (
                <option
                  key={country.isoCode}
                  value={country.isoCode.toLowerCase()}
                >
                  {country.name} - {country.isoCode.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </section>
  );
}
