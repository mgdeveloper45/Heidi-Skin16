import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import axios from "axios";
import LandingPage from "./Landing/LandingPage";
import SalonServicePage from "./pages/SalonServicePage";
import BuyProductsPage from "./pages/BuyProductsPage";
import ContactUsPage from "./pages/ContactUsPage";
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
      <Router>
      <Nav/>
        <Routes>
          <Route 
            path="/" 
            element={ <LandingPage /> } 
            />
          <Route 
            path="/salonservice" 
            element={ <SalonServicePage /> } 
            />
          <Route 
            path="/buyproducts" 
            element={ <BuyProductsPage /> } 
            />
          <Route 
            path="/contactus" 
            element={ <ContactUsPage /> } 
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
