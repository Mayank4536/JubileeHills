import { useState, useRef, useEffect } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaTimes,
  FaCommentDots,
  FaCircle,
} from "react-icons/fa";

export default function FloatingSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed left-4 top-40 z-40 pointer-events-none">
      {/* Toggle Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="pointer-events-auto bg-red-600 text-white p-4 rounded-full shadow-xl hover:bg-red-700 transition flex items-center justify-center"
      >
        {isOpen ? <FaTimes size={22} /> : <FaCommentDots size={22} />}
      </button>

      {/* Sidebar Panel */}
      <div
        ref={sidebarRef}
        onClick={(e) => e.stopPropagation()}
        className={`pointer-events-auto mt-3 w-64 rounded-xl shadow-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-black text-white transition-all duration-300 transform ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-700">
          <div className="flex items-center gap-2 text-sm">
            <FaCircle className="text-green-500 text-xs" />
            <span className="text-green-400 font-medium">Online Now</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Available 24/7 • Instant Response
          </p>
        </div>

        {/* Actions */}
        <div className="p-4 space-y-3">
          <a
            href="tel:+919155740236"
            className="flex items-center gap-3 p-3 rounded-lg bg-yellow-600 hover:bg-yellow-500 transition shadow"
          >
            <FaPhoneAlt size={18} />
            <div>
              <p className="font-semibold text-sm">Call Now</p>
              <p className="text-xs">Direct Support</p>
            </div>
          </a>

          <a
            href="https://wa.link/sdert2"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-green-600 hover:bg-green-500 transition shadow"
          >
            <FaWhatsapp size={18} />
            <div>
              <p className="font-semibold text-sm">WhatsApp Chat</p>
              <p className="text-xs">Fast Reply</p>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 text-center text-xs text-gray-400 border-t border-gray-700">
          🔒 Private & Confidential
        </div>
      </div>
    </div>
  );
}
