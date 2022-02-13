import React, { useState } from "react";
import SubMenu from "../SubMenu/SubMenu";
import {
  AddOnContainer,
  Categories,
  CategoryContainer,
  Description,
  DescriptionContainer,
  Image,
  Price,
  Title,
} from "./MenuStyles";

const Menu = ({ category }) => {
  const [service, setService] = useState()
  setService(category.services)
  return (
    <div>
      <CategoryContainer bgColor={category.color}>
        <Categories>
          {service.map((service, idx) => (
            <AddOnContainer key={idx}>
              <Title>
                {service.title}
                <Price>{service.price}</Price>
              </Title>
            </AddOnContainer>
          ))}
          
          <Title color={category.color}>{category.title}</Title>
          <Image src={category.image} />
        </Categories>
        <DescriptionContainer>
          <Description color={category.color}>
            {category.description}
          </Description>
        </DescriptionContainer>
      </CategoryContainer>
      {category.subcategories.map((item) => (
        <SubMenu item={item} />
      ))}
    </div>
  );
};

export default Menu;
