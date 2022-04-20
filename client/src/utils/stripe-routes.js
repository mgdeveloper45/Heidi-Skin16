import { axios } from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get("/product");
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

const getPrices = async () => {
  try {
    const response = await axios.get("/prices");
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};
export { getProducts, getPrices };
