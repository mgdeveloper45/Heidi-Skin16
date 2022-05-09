import React, { useState } from "react";
import { useEffect } from "react";
import AddOn from "../Components/AddOn/AddOn";
import BackToTop from "../Components/BackToTop/BackToTop";
import Menu from "../Components/Menu/Menu";
import { Top, ToTopButton } from "../Components/Menu/MenuStyles";
import { allCategories } from "../utils/rawData";

const SalonServices = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(allCategories);
  }, []);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <ToTopButton onClick={scrollTop}>
        <Top>Back to Top</Top>
      </ToTopButton>
      {categories.map((category, idx) => (
        <div key={idx}>
          <Menu category={category} />
        </div>
      ))}
      <AddOn />
      <BackToTop onClick={() => scrollTop()} />
    </div>
  );
};

export default SalonServices;
