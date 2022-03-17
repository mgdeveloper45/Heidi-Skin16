import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import Foooter from "./Landing/Foooter";
import LandingPage from "./Landing/LandingPage";
import SalonServices from "./Pages/SalonServices";
import Nav from "./Nav/Nav";
import { Covid, Policy } from "./Landing/LandingStyles";
import "./appstyles.css";

function App() {
  useEffect(() => {
    axios
      .get("/example")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<SalonServices />} />
        <Route path="/products" element={<h1>Buy Products Page</h1>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/covid" element={<Covid />} />
      </Routes>
      <Foooter />
    </>
  );
}

export default App;
