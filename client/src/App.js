import axios from "axios";
import React, { useEffect } from "react";
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
<<<<<<< HEAD
      <h1>Party Peoplessssdsjkadsad</h1>
=======
      <Nav/>
      <LandingPage />
>>>>>>> 2b4a689130c4c512bafe45768a947a7157944313
    </div>
    
  );
}

export default App;
