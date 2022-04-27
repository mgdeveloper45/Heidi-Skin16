import { combineReducers } from "redux";
import dataReducer from "./dataReducer.js";

const allReducers = combineReducers({
  // Add your reducers here
  products: dataReducer,
});

export default allReducers;
