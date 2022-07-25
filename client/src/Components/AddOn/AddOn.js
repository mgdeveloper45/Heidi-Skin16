import {
  AddON,
  AddOnContainer,
  Image,
  Price,
  ServiceTitle,
  ServiceTitleWrap,
  Title,
} from "./AddOnStyles";

const AddOn = ({ addOn }) => {
  let service = {
    title: addOn[0].title,
    service: addOn[0].services,
    color: addOn[0].color,
    image: addOn[0].image,
  };
  return (
    <AddOnContainer bgColor={service.color}>
      <AddON>
        <Title color={service.color}>{service.title}</Title>
        {service.service.map((service, idx) => (
          <ServiceTitleWrap key={idx}>
            <ServiceTitle>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "250px",
                }}
              >
                <Price>{service.title}</Price>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "125px",
                }}
              >
                <Price>{service.price}</Price>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "125px",
                }}
              >
                <Price>- {service.duration} mins</Price>
              </div>
              {service.br && (
                <>
                  <br />
                  <br />
                </>
              )}
            </ServiceTitle>
          </ServiceTitleWrap>
        ))}
      </AddON>
      <Image border={service.color} image={service.image} />
    </AddOnContainer>
  );
};

export default AddOn;
