import SubMenu from "../SubMenu/SubMenu";
import {
  Categories,
  CategoryContainer,
  Description,
  DescriptionContainer,
  Image,
  Title,
  TitleContainer,
} from "./MenuStyles";

const Menu = ({ category }) => {
  return (
    <div>
      <CategoryContainer bgColor={category.color}>
        <Categories>
          <TitleContainer>
            <Title color={category.color}>{category.title}</Title>
          </TitleContainer>
          <TitleContainer>
            <Image src={category.image} />
          </TitleContainer>
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
