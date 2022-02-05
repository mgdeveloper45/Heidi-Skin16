import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import Foooter from "./Landing/Foooter";
import LandingPage from "./Landing/LandingPage";
import Nav from "./Nav/Nav";

function App() {
  useEffect(() => {
    axios
      .get("/example")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Nav />
      <Routes >
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<h1>Salon Services Page</h1>} />
        <Route path="/products" element={<h1>Buy Products Page</h1>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Foooter />
    </div>
  );
}

export default App;
