import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import ProfileItem from "../component/ProfileItem";
import { motion } from "framer-motion";

const AllProfile = () => {
  const { profiles } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProfiles, setFilterProfiles] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevent");

  //Here we create a function for category
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let profilesCopy = profiles.slice();

    if (category.length > 0) {
      profilesCopy = profilesCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    setFilterProfiles(profilesCopy);
  };

  //Here we create a function for Sort profile
  const sortProfile = () => {
    let fpCopy = filterProfiles.slice();

    switch (sortType) {
      case "low-high":
        setFilterProfiles(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProfiles(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category]);

  useEffect(() => {
    sortProfile();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-">
      {/** Filter Options */}
      <motion.div
        className=" min-w-60"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p
          onClick={() => setShowFilter(!showFilter)}
          className=" my-2 text-white text-xl flex items-center cursor-pointer gap-2 bg-gradient-to-r from-red-600 to-red-600"
        >
          FILTERS
          <img
            className={` h-4 ' sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/** Category Filter */}
        <motion.div
          className={` border border-gray-500 pl-5 py-3 mt-6 mx-6 bg-gradient-to-r from-gray-800 to-gray-900 ${
            showFilter ? "" : "hidden"
          } sm:block`}
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-medium text-white">CATEGORIES</p>

          <div className="flex flex-col gap-2 text-sm font-light bg-gradient-to-r from-red-600 to-purple-500 bg-clip-text text-transparent">
            <p className=" flex gap-2">
              <input
                className=" w-3"
                type="checkbox"
                value={"TopProfile"}
                onChange={toggleCategory}
              />
              TOP PROFILES
            </p>
            <p className=" flex gap-2">
              <input
                className=" w-3"
                type="checkbox"
                value={"BestProfile"}
                onChange={toggleCategory}
              />
              BEST PROFILES
            </p>
            <p className=" flex gap-2">
              <input
                className=" w-3"
                type="checkbox"
                value={"IndependentProfile"}
                onChange={toggleCategory}
              />
              INDEPENDENT PROFILES
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/** Right Side */}
      <motion.div
        className=" flex-1"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-between text-base sm:text-2xl mb-4 mx-5">
          <h2 className="bg-gradient-to-r from-orange-600 to-white bg-clip-text text-transparent font-semibold text-xl">
            ALL PROFILES
          </h2>

          {/** Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className=" border-2 border-red-600 text-sm px-2 bg-red-600 text-white"
          >
            <option value="relevent">Sort by: Relevent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/** Map Products */}
        <div
          onClick={() => scrollTo(0, 0)}
          className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6"
        >
          {filterProfiles.map((item, index) => (
            <ProfileItem
              key={index}
              Id={item._Id}
              image={item.image}
              name={item.name}
            />
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default AllProfile;
