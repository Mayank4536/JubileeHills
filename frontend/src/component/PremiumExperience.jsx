import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaShieldAlt, FaHeart } from "react-icons/fa";

const PremiumExperience = () => {
  const features = [
    {
      icon: <FaStar className="w-8 h-8 mb-4 text-orange-500" />,
      title: "Premium Selection",
      description: "Curated collection of high-class companions",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 mb-4 text-blue-500" />,
      title: "Verified Profiles",
      description: "100% genuine & discreet service guaranteed",
    },
    {
      icon: <FaHeart className="w-8 h-8 mb-4 text-pink-500" />,
      title: "Luxurious Experience",
      description: "Unforgettable moments with elite companions",
    },
  ];

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center bg-gray-900"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Background Image with Overlay */}
      {/*<div className="absolute inset-0 bg-gradient-to-r from-black/80 to-purple-900/80">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>*/}

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
        <motion.h1
          className="text-3xl md:text-6xl font-bold mb-6 leading-tight text-white"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ENJOY THE FINEST ESCORTS EXPERIENCE WITH
          <span className="block text-xl mt-4 bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
            OUR HIGH PROFILE CALL GIRLS
          </span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Discover Jubilee Hills's most exclusive companionship service with
          sophisticated ladies offering premium entertainment and unforgettable
          moments.
        </motion.p>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0.2, y: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {feature.icon}
                <motion.h3
                  className="text-xl font-semibold text-white mb-2"
                  initial={{ opacity: 0.2, y: 100 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-gray-200"
                  initial={{ opacity: 0.2, y: 100 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/*<button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-12 rounded-full
          text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Book Now
        </button>*/}
      </div>
    </motion.section>
  );
};

export default PremiumExperience;
