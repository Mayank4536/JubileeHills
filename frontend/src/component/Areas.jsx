import React from "react";

const Areas = () => {
  // List of Nagpur local areas
  const areas = [
    { name: "Jubilee Hills", href: "https://jubilee.4uescort.in/" },
    { name: "Amberpet", href: "https://amberpet.4uescort.in/" },
    { name: "Hitech City", href: "https://hitechcity.4uescort.in/" },
    { name: "Begumpet", href: "https://begumpet.4uescort.in/" },
    { name: "Hussain Sagar", href: "https://hussainsagar.4uescort.in/" },
    { name: "Kondapur", href: "https://kondapur.4uescort.in/" },
    { name: "Manikonda", href: "https://manikonda.4uescort.in/" },
    { name: "Gachibowli", href: "https://gachibowli.4uescort.in/" },
    { name: "Charminar", href: "https://charminar.4uescort.in/" },
    { name: "Musheerabad", href: "https://musheerabad.4uescort.in/" },
    { name: "Miyapur", href: "https://miyapur.4uescort.in/" },
    { name: "Himayantnagar", href: "https://himayantnagar.4uescort.in/" },
    { name: "Kukatpally", href: "https://kukatpally.4uescort.in/" },
    { name: "LB Nagar", href: "https://lbnagar.4uescort.in/" },
    { name: "Mallampet", href: "https://mallampet.4uescort.in/" },
    { name: "Warangal highway", href: "https://warangal.4uescort.in/" },
    { name: "Bowrampet", href: "https://bowrampet.4uescort.in/" },
    { name: "Shaikpet", href: "https://shaikpet.4uescort.in/" },
    { name: "Secunderabad", href: "https://secunderabad.4uescort.in/" },
    { name: "Kollur", href: "https://kollur.4uescort.in/" },
    { name: "Narsapur", href: "https://narsapur.4uescort.in/" },
    { name: "	Shahbaad", href: "https://shahbaad.4uescort.in/" },
    { name: "Dhoolpet", href: "https://dhoolpet.4uescort.in/" },
    { name: "Jam Bagh", href: "https://raipur.4uescort.in/" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-300 mb-6 text-center ">
        Popular Service Areas in Jubilee Hills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {areas.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="px-4 py-2  text-white shadow-sm 
                       hover:bg-gray-100 hover:text-black hover:shadow-md
                       transition-all duration-200 ease-in-out
                       border border-gray-100 font-mono
                       text- md:text-base
                       focus:outline-none focus:ring-2 focus:ring-blue-100"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Areas;
