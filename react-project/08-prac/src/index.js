// ver1. props drilling 예시
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// ver2. redux 적용
// import React from "react";
// import ReactDOM from "react-dom/client";
// import AppRedux2 from "./AppRedux2";
// import "./index.css";

// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// const initialValue = { number: 100 };
// const reducer = (state = initialValue, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { number: state.number + 1 };
//     case "DECREMENT":
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// };
// ver3. redux 구조화
// import rootReducer from "./store";

// const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <AppRedux2 />
//   </Provider>
// );

// ver4. 리덕스 구조화 + container 폴더
// presentational 컴포넌트 폴더 분리
import React from "react";
import ReactDOM from "react-dom/client";
import AppRedux3 from "./AppRedux3";
import "./index.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./store";

const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppRedux3 />
  </Provider>
);
