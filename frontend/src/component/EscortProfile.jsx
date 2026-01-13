import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const EscortProfile = () => {
  return (
    <div className="max-w-6xl mx-auto px- py-">
      {/* Section Heading */}
      {/*<h2 className="text-3xl font-bold text-gray-600 mb-8 text-center">
        VIP Nagpur Escorts Call Girls
      </h2>*/}

      {/* Profile Card */}
      <div className=" rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Profile Image */}
          <div className="h-full w-full bg-cover bg-center border-4 border-pink-100">
            <img 
              src="https://images.pexels.com/photos/30582659/pexels-photo-30582659/free-photo-of-classic-vintage-car-at-dubai-park-during-sunset.jpeg" // Replace with actual image URL
              alt="Mansi Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Details */}
          <div className="text-center md:text-left">
            {/* Name and Rating */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Mansi</h3>
              <div className="flex items-center justify-center md:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                  />
                ))}
                <span className="ml-2 text-gray-600">(5.0)</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4 max-w-2xl">
              Premium incall/outcall services available 24/7. Sophisticated companion offering 
              unforgettable experiences with complete discretion. Serving all major locations 
              in Nagpur and nearby areas.
            </p>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm">
                24/7 Availability
              </span>
              <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm">
                Incall Service
              </span>
              <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm">
                Outcall Service
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-6 text-center">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full 
            transition-colors duration-200 font-semibold text-lg">
            View Full Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default EscortProfile;