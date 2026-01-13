import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./component/Login";
import Nav from "./component/Nav";
import AgeVerification from "./component/AgeVerification";
import AllProfile from "./pages/AllProfile";
import Location from "./component/Location";
import About from "./pages/About";
import Button from "./component/Button";
import GoToTop from "./component/GoToTop/GoToTop";
import Alert from "./component/Alert";
import FAQ from "./component/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  
  return (
    <div className="bg-black">
      <AgeVerification />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:profileId" element={<Profile />} />
        <Route path="/all-profile" element={<AllProfile/>} />
        <Route path="/locations" element={<Location/>} />
        <Route path="about" element={<About/>} />
        <Route path="/faqs" element={<FAQ/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      </Routes>

      <Footer />
      <GoToTop />
      <Button />
    </div>
  );
};

export default App;
