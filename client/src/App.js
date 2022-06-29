import React, { useEffect, useState, Fragment } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Contact from "./Contact/Contact";
import Footer from "./Landing/Footer/Footer";
import LandingPage from "./Landing/LandingPage/LandingPage";
import SalonServices from "./Pages/SalonServices/SalonServices";
import Nav from "./Nav/Nav";
import Policy from "./Pages/Policy/Policy";
import Covid from "./Pages/Covid/Covid";
import Booking from "./Pages/Booking/Bookings/Booking";
import Cart from "./Pages/Cart/Cart";
import ProductsPage from "./Pages/Products/ProductsPage";
import Confirmation from "./Pages/Booking/Confirmation/Confirmation";
import "./appstyles.css";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./Redux/productSlice";
import ScrollToTop from "./utils/ScrollToTop.js";
import { allCategories, addOn } from "./utils/rawData";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const animateImg = () => {
    if (visible === true) {
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
        }, 999);
      }
    });
  };

  const closeThenRedirect = (links) => {
    return visible
      ? animateRevImg().then(() => navigate(links))
      : navigate(links);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <ScrollToTop />
      <Nav
        visible={visible}
        animateImg={animateRevImg}
        close={closeThenRedirect}
        addOn={addOn}
        categories={allCategories}
      />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              animate={animateImg}
              visible={visible}
              setVisible={setVisible}
              close={closeThenRedirect}
            />
          }
        />
        <Route
          path="/services"
          element={<SalonServices addOn={addOn} categories={allCategories} />}
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/booking"
          element={<Booking addOn={addOn} categories={allCategories} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer close={closeThenRedirect} />
    </Fragment>
  );
}

export default App;
