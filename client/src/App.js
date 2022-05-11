import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import Footer from "./Landing/Footer/Footer";
import LandingPage from "./Landing/LandingPage/LandingPage";
import SalonServices from "./Pages/SalonServices";
import Nav from "./Nav/Nav";
import Policy from "./Pages/Policy/Policy";
import Covid from "./Pages/Covid/Covid";
import Booking from "./Pages/Booking/Booking";
import Cart from "./Pages/Cart/Cart";
import ProductsPage from "./Pages/Products/ProductsPage";
import Confirmation from "./Pages/Booking/Confirmation";
import "./appstyles.css";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./Redux/productSlice";

import Gallery from './Gallery/Gallery';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
    return new Promise((resolve, reject) => {
      if (visible === true) {
        const animatedImg = document.querySelector(".rightImg");
        animatedImg.classList.remove("rightBox");
        animatedImg.classList.add("rightBoxes");
        animatedImg.style.marginRight = "0px";
        setTimeout(() => {
          setVisible(false);
          resolve("finished");
        }, 1000);
      }
    });
  };
  return (
    <>
      <Nav visible={visible} animateImg={animateRevImg} />
      <Routes>
        <Route path="/" element={<LandingPage animate={animateImg} visible={visible} />}   />
        <Route path="/gallery" element={<Gallery visible={visible} />} />
        <Route path="/services" element={<SalonServices />} />
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
