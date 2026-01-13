 import React from "react";
 import PropTypes from "prop-types";

const Alert = ({
  message = "Now a days there are copies of Vegamovies available on google, kindly avoid them and always use",
  linkUrl = "https://t.me/vegamoviesnl",
}) => {
  return (
    <div className="w-full bg-yellow-100 border-yellow-400 border-b-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 bg-yellow-400 rounded-lg">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </span>
            <p className="ml-3 font-medium text-gray-800 truncate text-center md:text-left">
              <span className="md:hidden">Alert ⚠️ {message}</span>
              <span className="hidden md:inline">
                <span className="font-bold">Alert ⚠️</span> {message}{" "}
                <span className="font-semibold text-yellow-700">
                  Vegamovies.lat
                </span>{" "}
                for secure and super fast download.
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-yellow-700 bg-yellow-300 hover:bg-yellow-400 transition-colors duration-200"
            >
              Follow Official Channel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
  linkUrl: PropTypes.string,
};

export default Alert;
