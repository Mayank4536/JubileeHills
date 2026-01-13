import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import ProfileItem from "./ProfileItem";
import { motion } from "framer-motion";

const TopProfile = () => {
  const { profiles } = useContext(AppContext);
  console.log(profiles);
  const [latestProfiles, setLatestProfiles] = useState([]);

  useEffect(() => {
    setLatestProfiles(profiles.slice(0, 14));
  }, []);

  return (
    <motion.div
      className=" my-0 container mx-auto px-2 "
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/*<div className=" mx-auto mt-5 mb-5 pl-2 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-gray-300 mb-4 bg-gradient-to-r from-orange-600 to-white bg-clip-text text-transparent text-center">
          Hydrabad Top Escorts
        </h2>
        <p className="text-gray-300 leading-relaxed bg-gradient-to-r from-red-600 to-purple-500 bg-clip-text text-transparent">
          Leverage the power of React components combined with Tailwind's
          utility-first CSS framework to create beautiful, responsive user
          interfaces. This combination allows for rapid prototyping while
          maintaining code quality and scalability. Build modern web
          applications with clean, maintainable code and seamless styling
          integration.
        </p>
      </div> */}

      {/**  Rendering Products */}
      <div
        onClick={() => scrollTo(0, 0)}
        className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 "
      >
        {latestProfiles.map((item, index) => (
          <ProfileItem
            key={index}
            Id={item._Id}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TopProfile;
