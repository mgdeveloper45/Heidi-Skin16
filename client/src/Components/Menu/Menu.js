import SubMenu from "../SubMenu/SubMenu";
import {
  Categories,
  CategoryContainer,
  Description,
  DescriptionContainer,
  Image,
  Title,
} from "./MenuStyles";

const Menu = ({ category }) => {
  return (
    <div>
        <CategoryContainer bgColor={category.color}>
          <Categories>
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
