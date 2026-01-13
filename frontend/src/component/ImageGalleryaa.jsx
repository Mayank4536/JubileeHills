import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const ImageGalleryaa = () => {
  return (
    <div className="mx-auto mt-5 mb-5 pl-2 shadow-sm hover:shadow-md transition-shadow duration-300">
      <motion.h2
        className="text-3xl font-bold container mx-auto px-2 text-white mb-4 "
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Hire the Best Jubilee Hills Escorts 💞 Exclusive Call Girls Services!
      </motion.h2>
      <motion.p
        className="text-white mb-3 container mx-auto px-2 leading-relaxed "
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Hiring{" "}
        <a href="https://jubilee.4uescort.in/" className=" text-yellow-400">
          Jubilee Hills escorts
        </a>{" "}
        is the surest way to enjoy your stay in this terrific area. While
        Jubilee Hills has many things to see and do, your visit will only be
        complete when you have the companionship of our hotties. These models
        are eager to help you escape boredom and enjoy unmatched fun. They bring
        you endless happiness and sexual pleasure, making your experience in
        this area the most memorable.
      </motion.p>
      <motion.p
        className="text-white mb-4 container mx-auto px-2 leading-relaxed"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Once you hire our escorts in Jubilee Hills, they guarantee you a more
        exciting, energetic, and satisfying life. Our sexy ladies will make you
        feel rejuvenated, allowing you the freedom to explore your sexuality
        without limitations. You have no reason to spend time in this beautiful
        place bored when our babes are eager to go on an excellent romantic
        getaway with you.
      </motion.p>
      <motion.h2
        className="text-2xl font-bold container mx-auto px-2 text-white mb-4"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        DREAM YOUR GIRLS AT Jubilee Hills ESCORTS SERVICE
      </motion.h2>
      <motion.p
        className="text-white mb-4 container mx-auto px-2 leading-relaxed"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        These seductresses have the personalities, skills, and experience to
        help you forget your unpleasant life and frustrating routines. They can
        be your submissive listeners or loving conversationalists. Moreover,
        they can help you relax and boost your physical, sexual, and mental
        wellness. If you've been holding your sensual fantasies back, our female
        entertainers will let you get wild without fearing being judged.
      </motion.p>
      <motion.p
        className="text-white mb-4 container mx-auto px-2 leading-relaxed"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        We bring you the best independent escort girls with all the traits you
        needs from your dream woman. They know how to seduce, impress, please,
        and satisfy gentlemen. They are fun, romantic, and experienced in
        providing long-lasting romantic fun. Their sensual services will fulfill
        your desires and make you yearn for more. Please book our companions to
        enjoy sensual pleasure like never before.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 "
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img
          src={assets.image20}
          alt="Gallery 1"
          className="w-full h-auto rounded-lg shadow-lg bg-cover "
        />
        <img
          src={assets.image21}
          alt="Gallery 2"
          className="w-full h-auto rounded-lg shadow-lg bg-cover"
        />
        <img
          src={assets.image22}
          alt="Gallery 3"
          className="w-full h-auto rounded-lg shadow-lg bg-cover"
        />
      </motion.div>
    </div>
  );
};

export default ImageGalleryaa;
