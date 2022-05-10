import {useState} from 'react'

const ProductDropDown = () => {
  const [value, setValue] = useState(false);

    <DropContainer>
      <MenuBtn onClick={() => setValue(!value)}>
        <FiMenu />
      </MenuBtn>
      {value === true ? (
        <MenuPosition>
          <Menu>
            <CategoryLinks>My</CategoryLinks>
            <CategoryLinks>Boys</CategoryLinks>
          </Menu>
        </MenuPosition>
      ) : null}
    </DropContainer>
  );
};

export default ProductDropDown