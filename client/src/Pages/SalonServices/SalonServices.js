import React, { useState } from "react";
import { useEffect } from "react";
import AddOn from "../../Components/AddOn/AddOn";
import BackToTop from "../../Components/BackToTop/BackToTop";
import Menu from "../../Components/Menu/Menu";
import { Top, ToTopButton } from "../../Components/Menu/MenuStyles";

const SalonServices = ({ categories, addOn }) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory(categories);
  }, [categories]);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <ToTopButton onClick={scrollTop}>
        <Top>Back to Top</Top>
      </ToTopButton>
      {category.map((category, idx) => (
        <div key={idx} id={category.title}>
          <Menu category={category} />
        </div>
      ))}
      <AddOn addOn={addOn} />
      <BackToTop onClick={() => scrollTop()} />
    </div>
  );
};

export default SalonServices;
