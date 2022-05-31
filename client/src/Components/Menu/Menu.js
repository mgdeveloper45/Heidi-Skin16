import SubMenu from "../SubMenu/SubMenu";
import {
  Categories, CategoryContainer, Description,
  DescriptionContainer, Image, Title, TitleContainer,
} 
from "./MenuStyles";

const Menu = ({ category }) => {

  return (
    <div>
      <CategoryContainer backgroundColor={category.color}>
        <Categories>
          <TitleContainer>
            <Title title={category.secondaryColor}>{category.title}</Title>
          </TitleContainer>
          <TitleContainer>
            <Image border={category.color} image={category.image}/>
            {/* <Image src={category.backgroundImage} /> */}
          </TitleContainer>
        </Categories>
        <DescriptionContainer>
          <Description description={category.secondaryColor}>
            {category.description}
          </Description>
        </DescriptionContainer>
      </CategoryContainer>
      {category.subcategories.map((item, index) => (
        <SubMenu key={index} item={item} />
      ))}
    </div>
  );
};

export default Menu;
