import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaUserCheck,
  FaClock,
  FaSmile,
  FaWhatsapp,
  FaLocationArrow,
} from "react-icons/fa";

const BookingSteps = () => {
  const steps = [
    {
      icon: <FaWhatsapp className="w-8 h-8 mb-4" />,
      title: "1. WHATSAPP US",
      description:
        "Firstly, you have to WhatsApp your requirements and we’ll personalized the offer for you in a quick turn-around time 24×7.",
    },
    {
      icon: <FaUserCheck className="w-8 h-8 mb-4" />,
      title: "2. BROWSE IMAGES",
      description:
        "Next, we will share you handful of Jubilee Hills Escorts girls images. Handpick your favorite call girl starting at INR 15K/Shot.",
    },
    {
      icon: <FaLocationArrow className="w-8 h-8 mb-4" />,
      title: "3. SHARE LOCATION",
      description:
        "Thirdly, you need to share your live location so that we can forward our call girl Jubilee Hills at your staycation in hotel or house.",
    },
    {
      icon: <FaSmile className="w-8 h-8 mb-4" />,
      title: "4. BOOM! ENJOY!",
      description:
        "You are all set! Now just wait for approx. 50 minutes and expect to see a gorgeous escort in Jubilee Hills at your place.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How To Book Our Escorts in Jubilee Hills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-700 to-purple-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                className="text-center text-black"
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {step.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-center mb-4 text-white"
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                className="text-gray-300 text-center"
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {step.description}
              </motion.p>
            </div>
          ))}
        </motion.div>

        {/*<div className="mt-12 text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full 
            transition-all duration-300 transform hover:scale-105">
            Book Now
          </button>*
        </div>*/}
      </div>
    </section>
  );
};

export default BookingSteps;
