import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import {
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Profiles", href: "/all-profile" },
    { name: "Locations", href: "/locations" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav
      className="bg-black shadow-lg"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpe")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "fit-content",
      }}
    >
      {/* Animated Shipping Banner */}
      <div className="bg-gray-900 text-white py-3 px-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-sm font-medium font-mono">
          ⚠️ We are not responsible for any fraud or scam. We are just a platform to connect you with the right person.  
        </div>
      </div>

      {/* Top Contact Bar */}
      {/*<div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="h-4 w-4" />
              <span>mayankkumar02049.com</span>
            </div>
          </div> 

          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-500">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-amber-500">
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-amber-500">
              <YoutubeIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-amber-500">
              <GlobeAltIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <div className=" aspect-square w-32">
            <a href="/">
              <img
                src={assets.logo}
                alt=""
                className=" w-full h-full object-contain"
              />
            </a>
          </div> */}
          <div className="flex-shrink-0">
            <a href="/">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                4uescort
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
          <NavLink to='/' className='text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to='/all-profile' className='text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors'>
            <p>PROFILES</p>
            <hr className=' w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>

          <NavLink to='/about' className='text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors'>
            <p>ABOUT</p>
            <hr className=' w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>

          <NavLink to='/locations' className='text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors'>
            <p>LOCATION</p>
            <hr className=' w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          </div>

          {/** Right Section (Login Button) */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="">
            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Join Telegram !!
            </button>
            </a>
            {/*<button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Sign Up
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Login
            </button>*/}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
                 <NavLink onClick={()=>setIsOpen(false)} className='text-red-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium font-mono' to='/'>HOME</NavLink>
                 <NavLink onClick={()=>setIsOpen(false)} className='text-red-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium font-mono' to='/all-profile'>ALL PROFILES</NavLink>
                 <NavLink onClick={()=>setIsOpen(false)} className='text-red-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium font-mono' to='/about'>ABOUT</NavLink>
                 <NavLink onClick={()=>setIsOpen(false)} className='text-red-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium font-mono' to='/locations'>LOCATION</NavLink>
                 <NavLink onClick={()=>setIsOpen(false)} className='text-red-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium font-mono' to='/faqs'>FAQs</NavLink>
                 <NavLink onClick={()=>setIsOpen(false)} className='text-red-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium font-mono' to='/privacy-policy'>PRIVACY POLICY</NavLink>
          <div className="border-t pt-4">
            <a href="/login">
              <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors font-mono">
                Join Our Telegram Channel !!
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
