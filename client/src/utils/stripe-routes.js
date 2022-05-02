import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get("/product-list");
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

const getPrices = async () => {
  try {
    const response = await axios.get("/price-id");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export { getProducts, getPrices };
