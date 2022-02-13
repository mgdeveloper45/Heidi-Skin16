import React, { useState } from "react";
import { useEffect } from "react";
import AddOn from "../Components/AddOn/AddOn";
import Menu from "../Components/Menu/Menu";
import { allCategories } from "../utils/rawData";

const SalonServices = () => {
  const [categories, setCategories] = useState([]); 
  useEffect(() => {
    setCategories(allCategories);
  }, []);
  return (
    <div>
      {categories.map((category, idx) => ( 
        <div key={idx}>
          <Menu category={category}/>
        </div>
      ))}
      <AddOn/>
    </div>
  );
};

export default SalonServices;
