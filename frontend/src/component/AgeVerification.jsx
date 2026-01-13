import { useEffect, useState } from "react";

const AgeVerification = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("age_verified");

    if (!verified) {
      setShowPopup(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleYes = () => {
    localStorage.setItem("age_verified", "true");
    setShowPopup(false);
    document.body.style.overflow = "auto";
  };

  const handleExit = () => {
    window.location.href = "https://google.com";
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-gradient-to-r from-black to-gray-950 p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
        <h2 className="text-sm font-bold text-gray-300 mb-4">
          WARNING: This Website Contains Explicit Adult Content.
        </h2>
        <p className="text-gray-400 mb-6">
          Are you above 18 years old to enter this website?
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleYes}
            className="flex-1 bg-gray-700 hover:bg-gray-500 text-white py-2 rounded-lg"
          >
            Yes, I'm above 18
          </button>
          <button
            onClick={handleExit}
            className="flex-1 bg-red-700 hover:bg-red-500 text-white py-2 rounded-lg"
          >
            No, Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
