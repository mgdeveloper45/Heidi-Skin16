import axios from "axios";
import React, { useEffect } from "react";
import LandingPage from "./Landing/LandingPage";
import Nav from "./Nav/Nav";

function App() {
  useEffect(() => {
    axios.get("/example")
    .then((res) => console.log(res))
    .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <Nav/>
      <LandingPage />
    </div>
    
  );
}

export default App;
