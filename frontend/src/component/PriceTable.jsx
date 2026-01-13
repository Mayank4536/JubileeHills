import React from "react";
import { motion } from "framer-motion";

const PriceTable = () => {
  const prices = [
    {
      item: "1Hours",
      price: "₹3500",
      features: "9155******",
    },
    {
      item: "2Hours",
      price: "₹4500",
      features: "9155******",
    },
    {
      item: "3Hours",
      price: "₹5500",
      features: "9155******",
    },
    {
      item: "Full Night",
      price: "₹7500",
      features: "9155******",
    },
    {
      item: "Full Day",
      price: "₹7500",
      features: "9155******",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <motion.h2
        className="text-3xl font-bold text-center mb-6 text-white"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Pricing Details
      </motion.h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gradient-to-r from-red-700 to-purple-500 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <motion.th
                className="py-3 px-6 text-left"
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Plan
              </motion.th>
              <motion.th
                className="py-3 px-6 text-left"
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Price
              </motion.th>
              <motion.th
                className="py-3 px-6 text-left"
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Mobile no:
              </motion.th>
            </tr>
          </thead>
          <motion.tbody
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {prices.map((plan, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-600 text-gray-200"
              >
                <td className="py-3 px-6">{plan.item}</td>
                <td className="py-3 px-6">{plan.price}</td>
                <td className="py-3 px-6">{plan.features}</td>
              </tr>
            ))}
          </motion.tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
