import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Hydrabad call girl service is Available at any Time?",
      answer: "4uescort call girls service in Hydrabad provides 24/7 service online with an esy booking process.",
    },
    {
      question: "How to find cheap call girls in Hydrabad?",
      answer: "At the 4uescort website, you will find multiple ads with verified badges. you choose them because they are cheap and experienced call girls.",
    },
    {
      question: "How do you get the Hydrabad call girl's contact number?",
      answer: "Click on your choosen profile: a post opens with a genuine contact number and photos.",
    },
    {
      question: "What types of Hydrabad call girls do you have?",
      answer: "At 4uescort website you have multiple call girls options like:- Russian call girls, bhabhi call girls, independent call girls, Virgin call girls, Married women,divorced ladies, web series actresses, Local girls and many more gorgeous girls available any time.",
    },
    {
      question: "What is the charge of advertisment on 4uescort classification platform?",
      answer: "4uescort is a free adult ad post platform where you can easily post your ad without any charges.",
    },
    {
      question: "Is the photos of the Hydrabad call girls are genuine?",
      answer: "Reputable call girls agencies and independent call girls ensure that the photographs displayed on profiles on the 4uescort website are genuine and accurately represent the call girls.",
    },
    {
      question: "What is the cost of a call girl in Hydrabad?",
      answer: "The cost of booking a Bangalore call girl varies based on terms of service. Low to high-priced sex worker call girls in Hydrabad charge anywhere from 7,000 (7k) to 25,000(25k) rupees for an hour, but some charge many times more.",
    },
    {
      question: "What benefits of choosing Hydrabad Call girls at 4uescort?",
      answer: "Whether you're a local resident or visiting the city for business or leisure, the company of Hydrabad call girl provide you with a range of benefits that can enhance your experience.",
    },
    {
      question: "Are your women in good health?",
      answer: "Every one of our escorts in Hydrabad is properly screened by doctors and verified to be free of any health issues.",
    },
    {
      question: "Is it possible to find women to date casually?",
      answer: "Indeed, there are girls in Hydrabad who are prepared and availablefor that.",
    },
    {
      question: "Is it possible to have a girl all night?",
      answer: "Very definitely. We offer our escorts for daytime meeting as well as full nights.",
    },
    {
      question: "How should I prepare for a meeting with a girl?",
      answer: "We ask that you be at ease, be in good health, and prepare your condoms for sex.",
    },
    {
      question: "Do the model images in the gallery feature real models, or do they use stock photos?",
      answer: "Every images in the gallery featuring our ,odels is real and authentic. We never give anyone access to any phony photos.",
    },
    {
      question: "Which payment method is used? Do you let customers pay with credit cards?",
      answer: "Payment in cash or by bank transfer is also accepted. We also accepted Credits cards payments all the the time.",
    },
    {
      question: "Do you accepts any others currencies besides Indian rupees?",
      answer: "You are welcomes to pay us in any currency.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-10 bg-black">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b">
            <button
              className="w-full flex justify-between text-white items-center py-3 text-left text-lg font-medium focus:outline-none "
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-gray-300">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="text-red-600 pb-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
