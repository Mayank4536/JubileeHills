import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import ProfileItem from "./ProfileItem";
import { motion } from "framer-motion";

const BestProfile = () => {
  const { profiles } = useContext(AppContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProfile = profiles.filter((item) => item.bestseller);
    setBestSeller(bestProfile.slice(0, 8));
  }, []);

  return (
    <div className="my-0 container mx-auto px-2">
      <div className="mx-auto mt-5 mb-5 pl-2 shadow-sm hover:shadow-md transition-shadow duration-300">
        <motion.h2
          className="text-3xl font-bold text-white mb-4 "
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Hire the Best Jubilee Hills Escorts ❤️ Top Exclusive Call Girls Services!
        </motion.h2>
        <motion.p
          className="text-white mb-3 leading-relaxed "
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          If you are in search of a glamorous and a sensual service, then our
         <a href="https://jubilee.4uescort.in/" className=" text-yellow-400">Jubilee Hills Call Girls</a> are the way to go. Our unique call girls services
          are designed for people that want something beyond the usual. The list
          of beauties is chosen with great care as we only select charming and
          graceful ladies to ensure you get more than mere satisfaction.
        </motion.p>
        <motion.p
          className="text-white mb-3 leading-relaxed "
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href="https://jubilee.4uescort.in/" className=" text-yellow-400">Independent Call Girls</a> are not mere beautiful girls, who will
          accompany you; they are fascinating girls, who will fascinate you.
          Need lively conversation or hot passion? Our escorts are aware of all
          the”mysteries’ to induce you the experience you dream of. Every time
          you meet our call girls, you get into a world of sensual delight and
          luxury where dreams are realized and restraint is unknown.
        </motion.p>
        <motion.p
          className="text-white leading-relaxed"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Jubilee Hills escorts services offer you a chance to enjoy the beauty and
          elegance of a woman. Whether it is a candle light dinner date or a
          wild night out, our call girls understand all your necessities and are
          willing to fulfill all your fantasies accordingly. What we offer you
          is another chance for a man who appreciates professionalism and
          discretion of our ladies to spend time in a secure and luxurious
          environment accompanied by exquisite ladies.
        </motion.p>
      </div>

      {/** Rendering Products */}
      <motion.div
        onClick={() => scrollTo(0, 0)}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {bestSeller.map((item, index) => (
          <ProfileItem
            key={index}
            Id={item._Id}
            image={item.image}
            name={item.name}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BestProfile;
