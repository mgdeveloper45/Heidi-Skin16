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
  let service = {
    title: addOn[0].title,
    service: addOn[0].services,
    color: addOn[0].color,
    image: addOn[0].image
  }
  return (
    <AddOnContainer bgColor={service.color}>
      <AddON>
        <Title mb="200px" color={service.color}>
          {service.title}
        </Title>
        {service.service.map((service, idx) => (
          <ServiceTitleWrap key={idx}>
            <ServiceTitle>
              <Price>{service.title}</Price>
              <Price>{service.price}</Price>
            </ServiceTitle>
          </ServiceTitleWrap>
        ))}
      </AddON>
      <Image>{service.image}</Image>
    </AddOnContainer>
  );
};

export default AddOn;
