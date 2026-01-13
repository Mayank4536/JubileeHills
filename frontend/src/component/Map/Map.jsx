import React from "react";
import "./Map.css";
import Title from "../Title";
import { motion } from "framer-motion";

const Map = () => {
  return (
    <div className=" my- bg-gradient-to-b from-black to-black">
      <motion.div
        className="text-center text-3xl"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-center py-8 text-3xl border-t-2 border-red-700 mt-5">
          <Title text1={"Jubilee Hills"} text2={"Call Girls"} />
        </div>

        <motion.div
          className="responsive-map"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486025.5074344694!2d78.40804554999998!3d17.412348700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sJubilee Hills%2C%20Telangana!5e1!3m2!1sen!2sin!4v1740295509311!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Map;
