import { addOn } from "../../utils/rawData";
import {
  AddON,
  AddOnContainer,
  Image,
  Price,
  ServiceTitle,
  ServiceTitleWrap,
  Title,
} from "./AddOnStyles";

const AddOn = () => {
  let service = addOn[0].services;
  return (
    <AddOnContainer bgColor={addOn[0].color}>
      <AddON>
        <Title mb="200px" color={addOn[0].color}>
          {addOn[0].title}
        </Title>
        {service.map((service, idx) => (
          <ServiceTitleWrap key={idx}>
            <ServiceTitle>
              <Price>{service.title}</Price>
              <Price>{service.price}</Price>
            </ServiceTitle>
          </ServiceTitleWrap>
        ))}
      </AddON>
      <Image>{addOn[0].image}</Image>
    </AddOnContainer>
  );
};

export default AddOn;
