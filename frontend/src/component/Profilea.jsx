import React, { useState } from 'react';
import {FaHome} from 'react-icons/fa';

const LocationSelector = () => {
  // List of cities with their corresponding URLs
  const cities = [
    { name: 'Bangalore', url:'https://bangalore.4uescort.in/' },
    { name: 'Chennai', url: 'https://chennai.4uescort.in/' },
    { name: 'Delhi', url: 'https://delhi.4uescort.in/' },
    { name: 'Bhubaneshwar', url: 'https://bhubaneshwar.4uescort.in/' },
    { name: 'Kolkata', url: 'https://kolkata.4uescort.in/' },
    { name: 'Gurgaon', url: 'https://gurgaon.4uescort.in/' },
    { name: 'Ranchi', url: 'https://ranchi.4uescort.in/' },
    { name: 'Bhopal', url: 'https://bhopal.4uescort.in/' },
    { name: 'Raipur', url: 'https://raipur.4uescort.in/' },
    { name: 'Noida', url: 'https://noida.4uescort.in/' },
    { name: 'Greater Noida', url: 'https://greater-noida.4uescort.in/' },
    { name: 'Lucknow', url: 'https://lucknow.4uescort.in/' },
    { name: 'patna', url: 'https://patna.4uescort.in/' },
    { name: 'Jaipur', url: 'https://jaipur.4uescort.in/' },
    { name: 'Chandigarh', url: 'https://chandigarh.4uescort.in/' },
    { name: 'Vapi', url: 'https://vapi.4uescort.in/' },
    { name: 'Vadodara', url: 'https://vadodara.4uescort.in/' },
    { name: 'Mumbai', url: 'https://mumbai.4uescort.in/' },
    { name: 'Andheri', url: 'https://andheri.4uescort.in/' },
    { name: 'Dadar', url: 'https://dadar.4uescort.in/' },
    { name: 'Dheradun', url: 'https://dheradun.4uescort.in/' },
    { name: 'Gandhinagar', url: 'https://gandhinagar.4uescort.in/' },
    { name: 'Surat', url: 'https://surat.4uescort.in/' },
    { name: 'Jaislamer', url: 'https://jaislamer.4uescort.in/' },
    { name: 'Rajkot', url: 'https://rajkot.4uescort.in/' },
    { name: 'Kota', url: 'https://kota.4uescort.in/' },
    { name: 'Mayasore', url: 'https://mayasore.4uescort.in/' },
    { name: 'Thiruvnathampuram', url: 'https://thiruvnathampuram.4uescort.in/' },
    { name: 'Sikkim', url: 'https://sikkim.4uescort.in/' },
    { name: 'Guwahati', url: 'https://guwahati.4uescort.in/' },
    { name: 'Shimla', url: 'https://shimla.4uescort.in/' },
    { name: 'Amravati', url: 'https://amravati.4uescort.in/' },
    { name: 'Assam', url: 'https://assam.4uescort.in/' },
    { name: 'Varanasi', url: 'https://varanasi.4uescort.in/' },
    // Add more cities as needed
  ];

  // State to manage the selected location name
  const [selectedLocation, setSelectedLocation] = useState('Jubilee Hills');

  // Function to handle location click
  const handleLocationClick = (url, locationName) => {
    setSelectedLocation(locationName); // Update the displayed location name
    window.location.href = url; // Redirect to the selected city's URL
  };

  return (
    <div className="bg-gray-900 p-4 border-t-0 border-b-0 border-l-0 border-r-0 border-solid border-gray-700 shadow-lg mb-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Home Logo */}
            <FaHome className=' h-8 w-8 mr-2 text-white' />
           
            <span className="text-white">Home / {selectedLocation}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => {
                  const selectedCity = cities.find(city => city.name === e.target.value);
                  if (selectedCity) {
                    handleLocationClick(selectedCity.url, selectedCity.name);
                  }
                }}
              >
                <option value="">Select Location</option>
                {cities.map((city, index) => (
                  <option key={index} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            {/*<button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                const selectedCity = document.querySelector('select').value;
                if (selectedCity) {
                  const city = cities.find(city => city.name === selectedCity);
                  handleLocationClick(city.url, city.name);
                } else {
                  alert('Please select a city');
                }
              }}
            >
              Select location
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;