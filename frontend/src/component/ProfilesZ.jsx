import React from 'react';
import ProfileCard from './ProfileCard';
import { assets } from '../assets/assets';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';  
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';

const profilesData = [
  {
    image: image1,
    name: 'Priya Sharma',
    age: 22,
    rating: 4.5,
    whatsappLink: 'https://wa.me/919155740236',
    callLink: 'tel:+919155740236',
  },
  {
    image: image2,
    name: 'Anjali Reddy',
    age: 25,
    rating: 4.8,
    whatsappLink: 'https://wa.me/919155740236',
    callLink: 'tel:+919155740236',
  },
  {
    image: image3,
    name: 'Sneha Kapoor',
    age: 23,
    rating: 4.3,
    whatsappLink: 'https://wa.me/919155740236',
    callLink: 'tel:+919155740236',
  },
  {
    image: image4,
    name: 'Kavya Singh',
    age: 24,
    rating: 4.6,
    whatsappLink: 'https://wa.me/919155740236',
    callLink: 'tel:+919155740236',
  },
  {
    image: image5,
    name: 'Riya Patel',
    age: 21,
    rating: 4.4,
    whatsappLink: 'https://wa.me/919155740236',
    callLink: 'tel:+919155740236',
  },
  {
    image: image6,
    name: 'Neha Gupta',
    age: 26,
    rating: 4.7,
    whatsappLink: 'https://wa.me/919155740236',
    callLink: 'tel:+919155740236',
  },
  {
    image: image7,
    name: 'Aisha Khan',
    age: 23,
    rating: 4.2,
    whatsappLink: 'https://wa.me/919155740236',
    callLink: 'tel:+919155740236',
  },
 
];

const ProfileZ = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-10">
      <h1 className="text-3xl font-serif text-center text-white mb-10">
        💫Featured Profiles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {profilesData.map((profile, index) => (
          <ProfileCard
            key={index}
            image={profile.image}
            name={profile.name}
            age={profile.age}
            rating={profile.rating}
            whatsappLink={profile.whatsappLink}
            callLink={profile.callLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileZ;