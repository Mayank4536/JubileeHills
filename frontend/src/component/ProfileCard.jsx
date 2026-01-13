import React from "react";

const ProfileCard = ({ image, name, age, rating, whatsappLink, callLink }) => {
  // Rating ko stars mein convert karna (1 se 5 stars)
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          ★
        </span>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">
          ☆
        </span>
      );
    }
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-400">
          ☆
        </span>
      );
    }
    return stars;
  };

  return (
    <div className=" bg-blue-950 px-1 py-5">
      <div className="bg-orange-950 rounded-lg shadow-lg overflow-hidden text-white m-4">
        {/* Image */}
        <img
          className="w-full h-96 object-fill object-center"
          src={image}
          alt={`${name} - Call girl in Jubilee Hills`}
        />

        {/* Profile Details */}
        <div className="p-4">
          {/* Name and Age */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-400">Age: {age}</p>
          </div>

          {/* Rating (Sirf Stars) */}
          <div className="flex items-center mb-2">{renderStars(rating)}</div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center"
            >
              WhatsApp
            </a>
            <a
              href={callLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
