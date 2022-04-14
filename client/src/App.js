import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import Foooter from "./Landing/Foooter";
import LandingPage from "./Landing/LandingPage";
import SalonServices from "./Pages/SalonServices";
import Nav from "./Nav/Nav";
import Policy from "./Pages/Policy/Policy";
import Covid from "./Pages/Covid/Covid";
import "./appstyles.css";

function App() {
  useEffect(() => {
    axios
      .get("/example")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  const [visible, setVisible] = useState(false);

  // animate open if closed, redirects if open
  const animateImg = () => {
    if (visible === true) {
      console.log("This is when I go to another page");
    } else {
      const animatedImg = document.querySelector(".rightImg");
      animatedImg.classList.add("rightBox");
      animatedImg.classList.remove("rightBoxes");
      animatedImg.style.marginRight = "50%";
      setVisible(true);
    }
  };

  const animateRevImg = () => {
    if (visible === true) {
      const animatedImg = document.querySelector(".rightImg");
      animatedImg.classList.remove("rightBox");
      animatedImg.classList.add("rightBoxes");
      animatedImg.style.marginRight = "0px";
      setTimeout(() => {
        setVisible(false);
      }, 1000);
    }
  };
  return (
    <>
      <Nav visible={visible} animateRevImg={animateRevImg} />
      <Routes>
        <Route
          path="/"
          element={<LandingPage animate={animateImg} visible={visible} />}
        />
        <Route path="/services" element={<SalonServices />} />
        <Route
          path="/products"
          element={<h1>Buy Products Page Coming Soon</h1>}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/covid" element={<Covid />} />
      </Routes>
      <Foooter />
    </>
  );
}

export default App;
