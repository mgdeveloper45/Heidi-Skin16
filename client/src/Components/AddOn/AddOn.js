import { addOn } from '../../utils/rawData';
import {
    AddON,
    AddOnContainer,
    Image,
    Price,
    ServiceTitle,
    Title,
} from "./AddOnStyles";

const AddOn = () => {
    let service = addOn[0].services;
  return (
    <AddOnContainer bgColor={addOn[0].color}>
        <AddON>
            <Title color={addOn[0].color}>
                {addOn[0].title}
            </Title>
            {service.map((service, idx) => (
            <ServiceTitle key={idx}>
                {service.title}
                <Price>{service.price}</Price>
            </ServiceTitle>
        ))}
        </AddON>
            <Image>
                {addOn[0].image}
            </Image>
    </AddOnContainer>  
  )
}

export default AddOn

