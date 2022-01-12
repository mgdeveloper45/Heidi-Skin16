import axios from "axios";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get("/example")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Party Peoplessssdsjkadsad</h1>
    </div>
  );
}

export default App;
