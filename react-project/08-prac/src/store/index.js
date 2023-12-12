import { combineReducers } from "redux";
// import counterReducer from "./counterReducer";
// import isDataReducer from "./isDataReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  money: counterReducer,
  // isData: isDataReducer,
});

export default rootReducer;
