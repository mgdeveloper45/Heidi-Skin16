const initialState = {
  loading: false,
  productDataList: [],
  error: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        loading: false,
        productDataList: action.payload,
        error: "",
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        loading: false,
        productDataList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
