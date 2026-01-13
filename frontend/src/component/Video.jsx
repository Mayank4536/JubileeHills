import React, { useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Toggle Mute/Unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex justify-center items-center bg-black py-10 px-4">
      <div className="w-full max-w-4xl relative">
        <h2 className="text-white text-center text-2xl font-bold mb-4">
          Watch Our Latest Collection
        </h2>

        {/* Video Container */}
        <div className="relative w-full pt-[56.25%] overflow-hidden rounded-lg shadow-lg">
          {/* <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full"
            src="https://youtu.be/5vsOv_bcnhs?si=z0ffXdmEPhZvYc2o" // Replace with your video URL
            autoPlay
            muted={isMuted}
            loop
            playsInline
          />*/}
          <iframe
           className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/gGnGSKKsATM?si=xf9kzH_3JoJ3x-j-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full text-sm opacity-75 hover:opacity-100 transition"
          >
            {isMuted ? "🔇 Unmute" : "🔊 Mute"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
