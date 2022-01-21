import axios from 'axios';
import Banner from './Banner/banner';
import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    axios
      .get('/example')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Banner />
      <h1>Party People</h1>
    </div>
  );
}

export default App;
